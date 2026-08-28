# SEO / GEO 审查报告

审查日期：2026-07-31  
审查规范：`/Users/andycao/Project/Apps/ship-fleet-ac/packages-shared/agents/skills/seo-aeo-audit/SKILL.md`  
审查对象：`the-den-of-andy-2022`，线上 `https://andycao.me` 与本地生产构建  
目标：改善搜索引擎抓取、页面理解、AI 搜索引用（GEO/AEO）和截图中提到的 Cloudflare 安全基线

## 结论

站点原本已经具备 HTTPS、语言前缀、sitemap、canonical/hreflang 和基础安全响应头，但页面级 SEO 信号不够准确：多个页面共用 `Home/Blog/Projects` 等泛化标题，Open Graph URL 固定指向站点根地址，文章没有 Article JSON-LD，Markdown 图片存在空 alt，草稿内容会被当成正式页面生成。

截图中的 Cloudflare 项目不能全部通过 Next.js 代码修改。`Bot Fight Mode`、`AI Labyrinth`、DNS DMARC 和 Cloudflare 托管规则属于域名/账户层配置；本次在代码侧完成了可交付的对应项，并把需在 Cloudflare 控制台或 DNS 完成的动作单独列出。

## 基线发现

| 项目 | 基线结果 | 影响 | 优先级 |
| --- | --- | --- | --- |
| 页面标题/描述 | 首页、博客列表、项目列表等使用通用或重复文本 | 搜索摘要和 AI 主题识别弱 | P1 |
| Open Graph / Twitter | `og:url` 在多个线上页面固定为 `https://andycao.me`，未随页面路径变化 | 分享预览与 canonical 语义不一致 | P1 |
| Canonical / hreflang | 主要页面已有语言 canonical 与 alternate，属于可复用基础 | 需要保证所有子路由都使用同一规则 | P1 |
| 结构化数据 | 首页有基础 WebSite JSON-LD；文章页没有 Article/Breadcrumb JSON-LD | 搜索引擎和回答引擎难以识别作者、日期、正文实体 | P1 |
| 图片 alt | Markdown 中有多处 `![](...)` | 图片搜索和无障碍信息缺失 | P1 |
| 草稿内容 | `status: draft` 的文章会进入 manifest、页面和 sitemap | 未完成内容可能被索引 | P1 |
| robots.txt | 线上由 Cloudflare 追加了内容信号并阻挡若干 AI bot；仓库生成文件只有通用 `Allow: /` | 没有表达“允许 AI 搜索引用、拒绝训练抓取”的明确站点策略 | P1 |
| `security.txt` | 线上 `/.well-known/security.txt` 返回 404 | 安全研究员缺少标准联系入口；对应截图中的安全建议未闭环 | P1 |
| 安全响应头 | 线上已有 HSTS、No-Sniff、Referrer-Policy、Permissions-Policy；代码缺少 X-Frame-Options，HSTS 未声明子域 | 安全信号不完整 | P1 |
| sitemap | 生成正常，原基线包含草稿路径；生成时间会随构建刷新 | 草稿污染索引，lastmod 不能代表单篇内容更新时间 | P2 |
| GEO/AEO 内容 | 有个人介绍和博客，但缺少稳定的站点摘要、作者实体和引用说明 | AI 摘要的来源归属与主题边界不够清楚 | P1 |

线上基线使用 `curl` 检查了 `/`、`/en`、`/en/home`、`/zh-CN/home`、`/en/blog`、一篇文章、`/robots.txt`、`/sitemap.xml` 和 `/.well-known/security.txt`。本地基线还运行了 `npm test -- --run`、`npm run lint` 和 `npm run build`。

## 已实施的修改

### 页面 SEO 与国际化

- 新增 `src/utils/metadata-utils.ts` 的统一 route-aware metadata builder。
- 主要页面生成真实的 localized title、description、canonical、hreflang、Open Graph URL、Twitter URL 和图片信息。
- 将标题从泛化的 `Home`、`Blog`、`Projects`、`Hobbies`、`About` 改为包含主题和品牌的描述性标题。
- 文章页将发布时间、作者、文章图片和 `og:type=article` 写入 metadata；草稿页面返回 404/noindex，不再进入 sitemap。
- 首页的姓名使用一个明确的 `h1`，职位在首页不再错误地跳到 `h3`，避免标题层级断档。

### Structured data / GEO

- 首页加入 `WebSite` 和 `Person` JSON-LD，包含作者职业、所在地和社交资料。
- 文章页加入带固定 `datePublished` / `dateModified` 的 `Article` JSON-LD，以及 `BreadcrumbList`。
- 项目详情页加入 `BreadcrumbList`。
- 新增 `public/llms.txt`，提供站点摘要、主要入口、语言和引用归属规则；它不会替代 robots.txt 或 sitemap。
- Markdown 渲染时为空 alt 的图片根据文件名生成可读 alt，避免旧文章继续输出空替代文本。

### 爬虫与安全基线

- `next-sitemap.config.js` 明确允许 `OAI-SearchBot`、`ChatGPT-User` 和 `Google-Extended` 访问公开内容，以保留 AI 搜索引用能力。
- 明确拒绝 `GPTBot`、`ClaudeBot`、`CCBot`、`Bytespider` 等训练/批量抓取 bot；普通搜索仍允许抓取。
- 新增 `public/.well-known/security.txt`，包含安全联系邮箱、过期时间、语言和 canonical。
- 增强 HSTS 为 `max-age=31536000; includeSubDomains`，新增 `X-Frame-Options: DENY`。
- 保留 CSP Report-Only，避免在确认 Google Analytics、Utterances 和图片 CDN 依赖前直接阻断生产资源。

## 截图对应项与边界

| 截图中的 insight | 本次处理 | 仍需外部操作 |
| --- | --- | --- |
| Bot Fight Mode not enabled | 代码中无法开启 Cloudflare zone 功能 | 在 Cloudflare Security/WAF 中开启 Bot Fight Mode，先观察误拦截和 SEO bot 状态 |
| Security.txt not configured | 已新增 `/.well-known/security.txt` | 部署后重新扫描，确认 Cloudflare 不将其改写为 HTML |
| DMARC Record Error | 不在仓库内伪造 DNS 记录 | 检查 SPF/DKIM 后，在 DNS 增加 `_dmarc.andycao.me`，先用 `p=none` 观察报告，再决定是否升级策略 |
| Review and block AI bots | 已在 robots.txt 区分 AI 搜索与训练 bot；新增 llms.txt | 根据内容授权决定 Cloudflare AI crawler policy；不要误拦截希望获得引用的搜索 bot |
| AI Labyrinth not enabled | 这是 Cloudflare 边缘诱导/防护能力，代码无法配置 | 若确实需要，先在 staging/低风险域名评估，再在 Cloudflare 控制台启用 |
| Domains without HSTS | 应用层已加入 HSTS，线上已有边缘 HSTS | 部署后在 Cloudflare/外部扫描器确认所有入口和子域均返回 HSTS；确认后再考虑 preload |

## 复验结果

修改后本地生产构建输出 75 个静态页面（草稿排除前为 79 个），并通过：

- `npm test -- --run`：4 个测试通过。
- `npm run lint`：通过。
- `npm run build`：通过，`next-sitemap` 生成 sitemap 和 robots.txt。
- `/en`：200，标题、canonical、hreflang 和 WebSite/Person JSON-LD 正常。
- `/en/home`、`/en/blog`、`/en/project`：200，标题、描述和 `og:url` 使用对应语言路径。
- `/en/blog/one-key-keyboard-diy`：200，`og:type=article`、Article/Breadcrumb JSON-LD 正常。
- `/en/blog/chattts-on-macos`：404，因 frontmatter 标记为 `draft`，并输出 noindex，不进入 sitemap。
- `/zh-CN/blog/one-key-keyboard-diy`：200，canonical、alternate 和 `inLanguage=zh-CN` 正常。
- `/robots.txt`：200，包含公开搜索/AI 引用与训练 bot 拒绝策略。
- `/.well-known/security.txt`：200，`Content-Type: text/plain`。
- 页面响应头包含 CSP Report-Only、HSTS、`X-Content-Type-Options: nosniff`、`X-Frame-Options: DENY`、Referrer-Policy 和 Permissions-Policy。
- 已发布文章 HTML 未发现空 `alt` 图片属性。

## 后续建议

1. 部署本次修改后重新扫描线上 `robots.txt`、`security.txt`、sitemap、关键页面 metadata，并在 Google Search Console 重新提交 sitemap。
2. 在 Cloudflare 控制台完成 Bot Fight Mode、AI crawler policy、HSTS zone 设置；对 AI 访问策略保留“搜索引用允许、训练抓取拒绝”的产品选择。
3. 在 DNS 修复 DMARC，并通过邮件安全扫描确认 SPF/DKIM/DMARC 对齐。
4. 把 Markdown frontmatter 的 `status`、日期、作者和图片 alt 作为发布前校验，避免未来草稿或错误日期重新进入索引。
5. 在真实部署环境运行 Lighthouse mobile/desktop、Rich Results Test 和 Schema Markup Validator；本地构建验证不能替代真实 Cloudflare 缓存、WAF 和第三方脚本验证。
