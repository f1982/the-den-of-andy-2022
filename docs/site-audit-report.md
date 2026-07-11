# 网站全面审查与改进报告

审查日期：2026-07-11  
审查分支：`codex/comprehensive-site-audit`  
审查对象：`the-den-of-andy-2022` 本地构建版本  
审查范围：技术实现、安全基线、页面布局、可访问性、用户体验、国际化与 SEO

## 结论摘要

当前项目在锁定依赖后可以完成生产构建，现有页面和主要路由能够渲染；但仍有几个应优先处理的问题：

1. 首页首屏的个人介绍文字首次加载时保持不可见，滚动后才出现，影响核心内容的可发现性。
2. 站内链接没有保留当前语言前缀；从中文页面点击导航后会回到浏览器首选语言，造成语言上下文丢失，并且每次导航都会产生一次 307 跳转。
3. 元数据引用了仓库中不存在的图标和 Open Graph 图片路径；这些请求会被动态路由返回 HTML，可能导致 favicon、社交分享图和爬虫抓取异常。
4. 移动菜单、图标链接、标题层级和图片替代文本存在可访问性缺陷。Lighthouse 实测移动端可访问性为 83，桌面端为 94。
5. `npm audit --omit=dev` 报告 11 个生产依赖漏洞，其中 5 个高危、5 个中危、1 个低危；需要先确认哪些来自构建/预览工具，再升级运行时和部署链路。
6. 中文字典中存在明显乱码、英文未翻译和字段缺失，当前中文页面不适合直接对外发布。

建议优先级：先修复路由/语言、首页内容可见性、缺失资源和无障碍问题，再处理依赖升级、响应式图片和安全响应头，最后进行内容与视觉细化。

## 审查方法与验证结果

- 阅读 Next.js App Router、middleware、组件、内容数据、部署配置和依赖配置。
- 使用干净的锁文件安装：`npm ci`。
- 运行 `npm test -- --run`、`npm run build`、`npm run lint`。
- 使用本地生产服务器 `npm run start -- -p 3001` 验证页面、路由、响应头、网络请求和控制台。
- 使用 Chrome DevTools 进行桌面 1440px 和移动 390px 视口检查，并运行 Lighthouse。
- 使用 Chrome 性能追踪检查首页 LCP/CLS。

| 验证项 | 结果 | 备注 |
| --- | --- | --- |
| 单元测试 | 通过 | 1 个测试文件、1 个测试用例；覆盖率很低 |
| 生产构建（`npm ci` 后） | 通过 | 构建期间会大量打印项目数据，见 T-04 |
| 生产构建（原工作区 node_modules） | 失败 | 依赖漂移导致 `lucide-react` 的 `Facebook` 导入类型错误，见 T-01 |
| ESLint | 通过但有弃用提示 | `next lint` 已被 Next.js 15 标记为 deprecated，见 T-02 |
| Lighthouse Accessibility | 移动 83 / 桌面 94 | 主要问题是无名按钮/链接、标题顺序、对话框命名和对比度 |
| Lighthouse SEO | 100 | 分数不代表资源路径、语言 canonical 和内容质量完全正确 |
| 性能追踪 | LCP 171ms、CLS 0.00 | 本地无网络/CPU 限制；不能替代真实用户数据 |
| 控制台错误 | 未发现 | 本地首页导航和资源请求仍存在结构性问题 |

## 改进清单

优先级说明：P0 = 发布阻断；P1 = 应尽快修复；P2 = 计划内改进；P3 = 优化项。

### 一、技术与工程质量

#### T-01 / P1：依赖安装结果不可复现，容易出现“本地能跑、CI 不能跑”

现象：原工作区的 `node_modules` 与 `package.json`/`package-lock.json` 不一致，`npm run build` 在 `src/config/links.tsx` 报 `lucide-react` 没有导出 `Facebook`。删除不一致的依赖缓存并执行 `npm ci` 后，构建恢复通过。

证据：`package.json` 仍使用大量 `^` 范围版本（见 [package.json](../package.json#L16-L66)），而项目依赖锁文件和实际安装结果曾经发生漂移。

建议：

- CI、部署和本地文档统一使用 `npm ci`，禁止在构建环境使用裸 `npm install`。
- 增加 Node/npm 版本约束（`engines` 或 Volta 检查），并在 CI 中校验 `npm ci` 后的 `npm ls`。
- 将依赖升级作为单独变更，升级后同时运行 build、lint、测试和浏览器冒烟测试。

#### T-02 / P2：Lint 脚本依赖已弃用的 Next.js 命令

`npm run lint` 当前可以通过，但 `next lint` 已被 Next.js 15 标记为 deprecated，将在 Next.js 16 移除。脚本位于 [package.json](../package.json#L7-L15)。

建议迁移到 ESLint CLI，补充明确的 `eslint.config.*` 或现有配置的 CLI 入口，并在 CI 中执行。

#### T-03 / P1：图片优化被整体关闭，资源体积偏大

`next.config.mjs` 设置了 `images: { unoptimized: true }`（见 [next.config.mjs](../next.config.mjs#L5-L8)）。仓库中首页主图约 2.0MB、3D 打印图片约 1.4MB，部分图片在移动端显示尺寸远小于原图。Lighthouse 也报告了图片响应式尺寸问题。

建议：

- 恢复 Next/Image 优化，或在 Cloudflare/构建流程中明确提供 AVIF/WebP 和响应式尺寸。
- 为首屏 LCP 图片设置合适的 `priority`/`sizes`，非首屏图片使用懒加载。
- 统一处理内容 Markdown 图片，避免文章正文直接加载原始大图。
- 用 Lighthouse 移动端和真实低速网络重新验证，而不是只看本地 LCP。

#### T-04 / P1：构建期间存在不必要的生产日志

`getProjects()` 每次被调用都会打印完整项目数据（见 [project-data.ts](../src/features/project/project-data.ts#L9-L27)）。生产构建输出重复打印大量项目内容，增加 CI 噪声，也可能在未来数据扩大后泄露不应进入日志的字段。

建议移除 `console.log`，保留带上下文的错误日志；如确实需要诊断，使用受控的 debug logger。

#### T-05 / P2：TypeScript 约束过松，测试与生产保护不足

`tsconfig.json` 开启了 `allowJs: true` 和 `strict: false`（见 [tsconfig.json](../tsconfig.json#L2-L16)），同时多个页面和 middleware 参数没有明确类型。当前 `strictNullChecks` 单独开启，形成了不完整的类型保护。

建议分阶段开启 `strict: true`，先补齐页面 props、middleware request、内容 frontmatter 和外部链接数据的类型；禁止把 `any` 作为长期接口。

#### T-06 / P2：自动化测试覆盖极低，缺少页面级回归保护

当前只有 [date.utils.test.ts](../src/features/about/utils/date.utils.test.ts) 一个单元测试。没有路由冒烟测试、移动菜单键盘测试、语言切换测试、元数据/资源存在性测试或构建产物检查。

建议至少增加：

- 主要路由返回 200/404 的测试。
- 英文和中文导航保持语言前缀的测试。
- 移动菜单可打开、可关闭、焦点可回收、对话框有名称的测试。
- 首页核心文字在不滚动时可见的测试。
- `npm ci && npm run build && npm test && npm run lint` 的 CI gate。

#### T-07 / P2：部署配置与项目文档不一致

README 仍描述 Netlify，而实际脚本和 [wrangler.jsonc](../wrangler.jsonc) 指向 OpenNext/Cloudflare；同时 [vercel.json](../vercel.json) 禁用了部署。建议明确唯一生产平台，更新 README、环境变量、预览命令、回滚流程和健康检查说明，减少运维误用。

### 二、安全与隐私

#### S-01 / P1：生产依赖存在 11 个漏洞

命令：`npm audit --omit=dev`。结果为 5 个 high、5 个 moderate、1 个 low，没有 critical。主要链路包括 `@opennextjs/cloudflare`/`@opennextjs/aws`、`wrangler`、`miniflare`、`undici`、`ws`、`form-data`、`js-yaml` 和 `postcss`。

风险需要按运行方式拆分：Wrangler/Miniflare 多数是构建或预览链路，但 `next`、OpenNext 和相关传递依赖仍应在发布前修复；不能仅用 `npm audit fix --force`，因为它可能选择破坏性升级。

建议：

- 先升级 OpenNext/Next/Wrangler 到兼容且已修复的版本，分别验证 `build`、`preview` 和部署产物。
- 对 `undici`、`ws` 等运行时依赖做锁文件级追踪，确认是否进入生产 worker。
- 在 CI 设定漏洞门槛，至少阻断新增 high/critical，并记录暂时接受的风险及到期日。

#### S-02 / P1：应用仓库没有定义安全响应头

本地生产响应只看到 `X-Powered-By: Next.js`、缓存和内容类型，没有看到 CSP、HSTS、`X-Content-Type-Options`、`Referrer-Policy` 或 `Permissions-Policy`。仓库中 [next.config.mjs](../next.config.mjs#L4-L17) 也没有 `headers()` 配置。若这些由 Cloudflare 另行注入，需要在部署配置中补充可验证的证据；否则建议在应用或边缘层统一设置。

建议从报告-only 的安全基线开始：

- `Content-Security-Policy`：只允许当前使用的站点、Google Analytics、Utterances/GitHub 和图片 CDN，先以 Report-Only 观察。
- `Strict-Transport-Security`：确认全站 HTTPS 和子域策略后再启用。
- `X-Content-Type-Options: nosniff`、合理的 `Referrer-Policy`、`Permissions-Policy`。
- 移除生产 `X-Powered-By`，减少技术栈暴露。

#### S-03 / P1：第三方分析和评论脚本无同意/退出机制

`AnalyticSettings` 在生产环境挂载后会加载 Google Tag Manager/gtag（见 [analytics-settings.tsx](../src/lib/analytics-settings.tsx#L10-L26) 和 [google-analytics.tsx](../src/utils/google-analytics.tsx#L5-L25)）；博客页面还会动态加载 Utterances（见 [utteranc-comments.tsx](../src/lib/comment/utteranc-comments.tsx#L7-L19)）。目前没有 cookie 同意、拒绝、撤回或“仅必要脚本”路径。

建议明确隐私策略和适用地区：默认不加载非必要分析脚本，提供可撤回的 consent 状态；评论区按用户主动展开后再加载，并说明数据会发送到 Google/GitHub/Utterances。

#### S-04 / P2：多个 HTML 注入点需要长期保持可信输入边界

代码中存在博客正文、Markdown 条款和字典内容的 `dangerouslySetInnerHTML`（例如 [blog-post.tsx](../src/features/blog/components/blog-post.tsx#L38-L42)、[support/page.tsx](<../src/app/[locale]/(default)/app/support/page.tsx#L24-L31>)）。Markdown 转换当前设置了 `sanitize: true`，这是正向控制；但 [contact.tsx](../src/features/about/components/contact.tsx#L55-L59) 和 [schema-jsonld.tsx](../src/utils/schema-jsonld.tsx#L1-L9) 仍建议建立统一的可信输入约束。

建议只渲染构建时受控内容，使用结构化 React 组件替代可避免的 HTML 注入；如必须渲染 HTML，增加 sanitizer 测试用例，覆盖 `<script>`、事件属性、危险 URL 和 `</script>` 注入。

#### S-05 / P2：新窗口外链的安全属性不一致

Hobbies 页面部分 `target="_blank"` 的 Next Link 没有显式 `rel="noopener noreferrer"`（见 [hobbies/page.tsx](<../src/app/[locale]/(default)/hobbies/page.tsx#L68-L80>)），而同文件其他 `<a>` 已添加该属性。建议统一封装 ExternalLink，并对所有外部 URL 做 HTTPS、可用性和所有权复核。

### 三、布局、可访问性与用户体验

#### U-01 / P1：首页核心介绍首次加载不可见

`SandwichHero` 使用 `initial="hidden"` 和 `whileInView="show"`（见 [hero-sandwich.tsx](../src/components/sections/hero-sandwich.tsx#L48-L60)）。在 1440px 首页首次加载时，`Andy Cao`、职位和介绍的计算样式为 `opacity: 0`；滚动约 900px 后才变为 `opacity: 1`。这会让用户看到主图和大面积空白，却看不到首页最重要的身份信息。

建议：

- 首屏内容不要依赖滚动观察触发，或设置更宽松的 `viewport.amount`。
- 对 `prefers-reduced-motion` 关闭移动/淡入动画。
- 以服务端首屏可读、动画只做增强为原则，确保脚本失败时内容仍显示。

#### U-02 / P1：移动菜单和对话框缺少完整的可访问名称

移动端菜单触发按钮在 [mobile-menu-sheet.tsx](../src/components/layout/header/mobile-menu-sheet.tsx#L20-L24) 没有 `aria-label`；`SheetContent` 没有使用 `SheetTitle`/`SheetDescription`（见 [sheet.tsx](../src/components/ui/sheet.tsx#L57-L75)）。Chrome a11y snapshot 显示触发器没有名称，打开后的 dialog 也没有明确名称；Lighthouse 移动端因此报告 `button-name`、`aria-dialog-name` 等问题。

建议：

- 为菜单按钮添加本地化的“打开菜单”名称，并在图标上使用 `aria-hidden`。
- 在 Sheet 中加入视觉隐藏但可读的标题/描述。
- 使用语义化 `<nav>`、`<ul>`、`<li>`，避免用 `<menu>` 承担普通导航列表。
- 确认 Escape、点击遮罩、Tab 循环和关闭后的焦点回收。

#### U-03 / P1：标题层级和图片替代文本不符合语义

首页使用 `h2` 后直接使用 `h4`（见 [hero-sandwich.tsx](../src/components/sections/hero-sandwich.tsx#L66-L75)），Lighthouse 桌面审查明确报告 heading order。多个通用组件把图片 alt 写成 `hero` 或空字符串（见 [hero-sandwich.tsx](../src/components/sections/hero-sandwich.tsx#L61-L65)、[hero-image.tsx](../src/components/sections/hero-image.tsx#L22-L31)）；文章 Markdown 中也有大量 `![](...)` 空 alt。

建议：

- 每页以一个清晰的 `h1` 开始，再按 `h2`/`h3` 顺序组织。
- 业务图片写具体内容描述；纯装饰图片才使用空 alt。
- 为文章 frontmatter 增加封面和正文图片 alt 的校验，阻止空 alt 进入发布流程。

#### U-04 / P1：站内导航不保留 locale，中文体验会退回其他语言

`routeLinks` 使用 `/home`、`/blog` 等无语言前缀路径（见 [menu-data.tsx](../src/config/menu-data.tsx#L12-L47)），`SiteHeader`/`SiteFooter` 直接把它们交给 `Link`（见 [site-header.tsx](../src/lib/site-header.tsx#L17-L35) 和 [site-footer.tsx](../src/lib/site-footer.tsx#L11-L24)）。本地验证：打开 `/zh-CN/home` 后点击“了解更多”会跳转到 `/en/about`；网络面板还显示无前缀链接先返回 307，再请求带 locale 的路径。

建议：

- 统一提供 `localizedPath(locale, path)`，所有 header、footer、CTA、文章和项目链接都使用它。
- middleware 只负责根路径/无 locale 入口的重定向，不依赖浏览器首选语言覆盖用户当前 locale。
- 为每种语言生成正确的 canonical、alternate/hreflang 和 sitemap URL。

#### U-05 / P1：中文内容当前存在明显乱码和翻译缺失

例如 [cn.json](../src/dictionaries/cn.json#L22-L40) 中的首页介绍包含“我叫安迪d我是一名前端开发人员er”等混杂字符；中文页的 footer 导航仍显示英文。建议重新翻译并由中文母语者校对，增加 CI 中的占位符/异常字符检查，并在页面级测试中确认所有可见导航来自当前语言字典。

#### U-06 / P2：欢迎页 CTA、Logo 和社交图标链接不够明确

欢迎页的 Power 图标按钮没有可见文字或 `aria-label`（见 [welcome.tsx](../src/features/welcome/welcome.tsx#L21-L32)）；Logo 链接和 footer 社交链接主要依赖图标，部分链接在无障碍树中没有可读名称。应添加本地化的按钮文本或 aria-label，并给 Logo 使用明确的“返回首页/Andy Cao 首页”名称。

#### U-07 / P2：页面留白和动效需要以内容优先为准

`PageRows` 在较大屏幕使用 `sm:gap-48`（见 [page-rows.tsx](../src/components/shared/page-rows.tsx#L5-L15)），配合首页首屏动画未触发，会造成内容间的空白感过强。建议先修复 U-01，再以真实移动设备重新评估间距；不要只用桌面截图判断布局。

### 四、SEO、元数据与内容质量

#### M-01 / P1：元数据引用了仓库中不存在的资源

[site-config.ts](../src/config/site-config.ts#L21-L79) 指向 `/icon.png`、`/apple-icon.png`、`/og-image.png`，但 `public/` 中实际存在的是 `favicon.ico`、`apple-touch-icon.png` 和 `og-image-1200x627.png`。本地请求缺失的 `icon.png` 返回的是 HTML 页面而不是图片，状态码仍可能是 200，属于比普通 404 更难发现的错误。

建议直接引用现有文件或补齐统一命名的资源，并添加构建测试：所有 metadata 图标、OG/Twitter 图片 URL 必须返回正确 MIME 类型和 200。

#### M-02 / P1：语言 canonical 不完整

`src/app/[locale]/page.tsx` 把英文 `/en` 和中文 `/zh-CN` 的 canonical 都设置为 `/`（见 [page.tsx](../src/app/[locale]/page.tsx#L9-L14)），会把两个语言入口合并到同一个 canonical。其他页面虽有语言路径，但没有完整的 alternates/hreflang 定义。

建议为每个 locale 生成自洽的 canonical 和 `alternates.languages`，并让首页入口、导航、sitemap 使用相同的 URL 规则。

#### M-03 / P2：结构化数据工具已存在但没有接入页面

仓库有 [schema-json-utils.ts](../src/utils/schema-json-utils.ts) 和 [schema-jsonld.tsx](../src/utils/schema-jsonld.tsx)，但没有发现页面实际渲染 `WebSite`、`Article` 或 `BreadcrumbList` JSON-LD。建议接入真实的文章日期、作者、封面图和页面 URL，并在发布前验证 JSON-LD；不要使用当前 `getJsonLdArticle()` 每次构建时的当前时间作为文章发布时间。

#### M-04 / P2：内容与状态数据需要清理

博客数据中存在日期与标题语义不一致的内容，例如“Annual Summary of 2022”使用 2020 日期；部分项目描述很旧，中文/英文可用性不一致。建议建立内容清单，补齐更新时间、语言、图片 alt、作者、标签和发布状态，避免自动 sitemap 将不完整页面当作正式内容收录。

## 建议实施顺序

### 第一阶段：发布阻断与用户可感知问题

1. 修复 locale-aware 链接与 middleware 行为，保证中文页面不会跳回英文。
2. 修复首页首屏动画，让核心介绍在无滚动、无 JavaScript 增强时也可见。
3. 补齐并校验 favicon、Apple Touch Icon、OG/Twitter 图片资源。
4. 为移动菜单、欢迎按钮、Logo、社交图标和对话框补充可访问名称与焦点行为。
5. 重写中文字典，并修正标题层级与图片 alt。

### 第二阶段：安全与工程基线

1. 升级并验证高危依赖，确认 Wrangler/Miniflare/Undici/WS 是否进入生产运行时。
2. 在边缘层或 Next.js 统一加入安全响应头，先以 CSP Report-Only 观察外部脚本依赖。
3. 增加分析/评论的 consent 和 opt-out，更新隐私政策。
4. 迁移 `next lint`，提高 TypeScript strictness，补充 CI 和页面级回归测试。

### 第三阶段：性能、SEO 与维护性

1. 恢复图片优化、响应式尺寸、WebP/AVIF 和内容图片的尺寸/alt 校验。
2. 统一 canonical、hreflang、sitemap、OG 图和结构化数据。
3. 清理构建日志、旧内容、隐藏/HTTP 外链和部署文档。
4. 在真实移动设备和受限网络下建立 Lighthouse/性能基线。

## 复验标准

- `npm ci` 后 `npm run build`、`npm test -- --run`、ESLint CLI 全部通过。
- `/en/*` 与 `/zh-CN/*` 的 header、footer、CTA、文章/项目链接都不产生语言丢失或不必要的 307。
- 首页首次加载即显示姓名、职位和介绍；启用减少动效时内容仍正常显示。
- 移动 Lighthouse Accessibility 至少达到 95，且不再出现 button-name、aria-dialog-name、link-name、heading-order 失败项。
- 所有 metadata 资源返回图片 MIME 类型；canonical/hreflang/sitemap 与实际路由一致。
- `npm audit --omit=dev` 不再有未评估的 high/critical；暂时接受的 moderate 风险有明确记录。
- 生产响应头包含已批准的 CSP/HSTS/No-Sniff/Referrer-Policy/Permissions-Policy，并在真实部署环境验证。
