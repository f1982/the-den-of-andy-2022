import React from 'react'

import Link from 'next/link'

import { fillTemplate } from '@/utils/fill-template'
import { localizedPath } from '@/utils/locale-path'

import {
  CircledNumber,
  CutoutImage,
  HandNote,
  Kicker,
  RichText,
  denCutouts,
} from '@/components/den'

import {
  ProjectsCopy,
  formatProjectYears,
  projectNumber,
  splitTech,
} from '../project-format'
import { ProjectItemData } from '../project-types'

function ProjectsHero({
  copy,
  projects,
}: {
  copy: ProjectsCopy
  projects: ProjectItemData[]
}) {
  const years = projects.flatMap((p) => [p.start, p.end || p.start])
  const sorted = years.map((d) => d.slice(0, 4)).sort()
  const kicker = fillTemplate(copy.hero.kicker, {
    count: projects.length,
    from: sorted[0] ?? '',
    to: sorted[sorted.length - 1] ?? '',
  })

  return (
    <header className="overflow-x-clip border-b border-ink/15 bg-grid-paper">
      <div className="page-wrap grid items-center gap-10 pt-14 pb-16 desk:grid-cols-[minmax(0,1fr)_minmax(0,400px)] desk:pt-20 desk:pb-24">
        <div className="flex flex-col gap-7">
          <Kicker className="animate-rise">{kicker}</Kicker>
          <h1 className="animate-rise font-serif text-[64px] leading-[0.88] font-normal tracking-[-0.03em] text-balance [--stagger:1] desk:text-[132px]">
            <RichText text={copy.hero.title} />
          </h1>
          <p className="max-w-[46ch] animate-rise text-[17px] leading-[1.6] text-pretty text-ink-soft [--stagger:2]">
            {copy.hero.lede}
          </p>
          <HandNote
            size={26}
            rotate={-2}
            className="animate-rise [--stagger:5]">
            {copy.hero.note}
          </HandNote>
        </div>
        <div
          aria-hidden="true"
          className="relative mx-auto w-full max-w-[300px] desk:max-w-none">
          <CutoutImage
            src={denCutouts.laptop}
            rotate={-5}
            preload
            sizes="(max-width: 960px) 300px, 400px"
            className="animate-place [--stagger:2]"
          />
          <CutoutImage
            src={denCutouts.keyboard}
            rotate={12}
            small
            sizes="140px"
            className="absolute -right-2 -bottom-6 w-[34%] animate-place [--stagger:5] [--tilt:-6deg]"
          />
        </div>
      </div>
    </header>
  )
}

function ProjectRow({
  project,
  index,
  locale,
  typeLabel,
}: {
  project: ProjectItemData
  index: number
  locale: string
  typeLabel: string
}) {
  const years = formatProjectYears(project.start, project.end)
  const tech = splitTech(project.tech).slice(0, 3).join(' · ')
  const meta = [project.platform, typeLabel].filter(Boolean).join(' · ')

  return (
    <li
      className={[
        'group relative isolate grid animate-reveal grid-cols-[40px_minmax(0,1fr)_16px] items-baseline gap-x-3 gap-y-2 border-b border-dashed border-ink/30 py-6',
        'desk:grid-cols-[56px_minmax(0,1fr)_170px_96px_28px] desk:items-center desk:gap-x-5 desk:py-[26px]',
        'xl:grid-cols-[56px_minmax(0,1fr)_170px_250px_96px_28px]',
        // The highlighter is drawn left to right behind a hovered row.
        'before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-[linear-gradient(90deg,transparent,var(--color-highlighter)_6%,var(--color-highlighter)_94%,transparent)] before:transition-transform before:duration-600 before:ease-out-soft hover:before:scale-x-100 has-[a:focus-visible]:before:scale-x-100',
        'has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-pen',
      ].join(' ')}>
      <span className="font-mono text-[13px] text-graphite transition-colors duration-300 group-hover:text-ink">
        {projectNumber(index)}
      </span>
      <div className="flex min-w-0 flex-col gap-2">
        <Link
          href={localizedPath(locale, `/project/${project.id}`)}
          className="font-serif text-[30px] leading-[1.02] tracking-[-0.01em] text-balance outline-none after:absolute after:inset-0 desk:text-[42px]">
          {project.title}
        </Link>
        {/* Meta under the title on narrow screens (columns from 960px). */}
        <p className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-graphite desk:hidden">
          <span className="text-ink">{years}</span>
          <span>{meta}</span>
        </p>
        <p className="font-mono text-[11px] text-graphite xl:hidden">{tech}</p>
      </div>
      <span className="hidden text-sm text-ink-soft desk:block">{meta}</span>
      <span className="hidden font-mono text-xs text-graphite xl:block">
        {tech}
      </span>
      <span className="hidden text-right font-mono text-[13px] desk:block">
        {years}
      </span>
      <span
        aria-hidden="true"
        className="self-center text-right transition-transform duration-500 ease-spring group-hover:translate-x-1.5">
        →
      </span>
    </li>
  )
}

/** /project: grid-paper hero + numbered list of everything shipped. */
export default function ProjectIndex({
  projects,
  locale,
  copy,
}: {
  projects: ProjectItemData[]
  locale: string
  copy: ProjectsCopy
}) {
  const types = copy.types as Record<string, string>

  return (
    <>
      <ProjectsHero copy={copy} projects={projects} />
      <section
        aria-label={copy.list.ariaLabel}
        className="page-wrap pt-16 pb-24 desk:pt-24 desk:pb-32">
        {projects.length === 0 ? (
          <p className="text-center text-ink-soft">{copy.list.empty}</p>
        ) : (
          <ol className="border-t border-ink/90">
            {projects.map((project, index) => (
              <ProjectRow
                key={project.id}
                project={project}
                index={index}
                locale={locale}
                typeLabel={types[project.type] ?? ''}
              />
            ))}
          </ol>
        )}
        <p className="mt-10 flex items-center gap-3">
          <CircledNumber n="…" className="text-graphite" />
          <HandNote size={26} rotate={-1.5}>
            {copy.outro}
          </HandNote>
        </p>
      </section>
    </>
  )
}
