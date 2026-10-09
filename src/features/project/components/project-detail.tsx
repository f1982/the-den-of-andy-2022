import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { fillTemplate } from '@/utils/fill-template'
import { localizedPath } from '@/utils/locale-path'

import { HandNote, Kicker, PillLink, Tape } from '@/components/den'

import {
  ProjectsCopy,
  formatProjectSpan,
  formatProjectYears,
  projectNumber,
  splitTech,
} from '../project-format'
import { ProjectItemData } from '../project-types'

/** A screenshot as a taped print; keeps the image's own aspect ratio. */
function TapedPrint({
  src,
  alt,
  rotate,
  tapeRotate,
  caption,
  sizes,
  preload,
}: {
  src: string
  alt: string
  rotate?: number
  tapeRotate?: number
  caption?: string
  sizes: string
  preload?: boolean
}) {
  return (
    <figure
      className="polaroid"
      style={{ rotate: rotate ? `${rotate}deg` : undefined }}>
      <Tape rotate={tapeRotate} />
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        sizes={sizes}
        preload={preload}
        className="block h-auto w-full bg-sand"
      />
      {caption && (
        <figcaption>
          <HandNote ink size={22} className="absolute bottom-[10px] left-4">
            {caption}
          </HandNote>
        </figcaption>
      )}
    </figure>
  )
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <dt className="font-mono text-[11px] tracking-[0.08em] text-graphite uppercase">
        {label}
      </dt>
      <dd className="text-[15px] text-ink">{value}</dd>
    </div>
  )
}

const GALLERY_TILT = [-1.6, 1.2, -0.8, 1.8]

/** /project/[slug]: serif title, meta row, taped prints, brief + role. */
export default function ProjectDetail({
  project,
  index,
  prev,
  next,
  locale,
  copy,
}: {
  project: ProjectItemData
  /** Position in the project list (for the No. label). */
  index: number
  prev?: ProjectItemData
  next?: ProjectItemData
  locale: string
  copy: ProjectsCopy
}) {
  const t = copy.detail
  const types = copy.types as Record<string, string>
  const tech = splitTech(project.tech)
  const gallery = project.images.filter((src) => src !== project.cover)
  const links = [
    project.link && { href: project.link, label: t.visit },
    project.github && { href: project.github, label: t.github },
    project.video && { href: project.video, label: t.video },
  ].filter(Boolean) as { href: string; label: string }[]

  return (
    <article>
      <header className="overflow-x-clip border-b border-ink/15 bg-grid-paper">
        <div className="page-wrap pt-8 pb-16 desk:pt-10 desk:pb-24">
          <Link
            href={localizedPath(locale, '/project')}
            className="inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-[0.08em] text-graphite uppercase hover:text-pen">
            <span aria-hidden="true">←</span> {t.back}
          </Link>

          <div className="mt-8 grid items-center gap-14 desk:grid-cols-[minmax(0,1fr)_minmax(0,480px)] desk:gap-16">
            <div className="flex min-w-0 flex-col gap-7">
              <Kicker>
                {fillTemplate(t.kicker, { n: projectNumber(index) })}
              </Kicker>
              <h1 className="font-serif text-[52px] leading-[0.92] font-normal tracking-[-0.02em] text-balance [overflow-wrap:anywhere] desk:text-[96px]">
                {project.title}
              </h1>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-dashed border-ink/30 pt-6 sm:grid-cols-3">
                <MetaItem label={t.platform} value={project.platform} />
                <MetaItem
                  label={t.years}
                  value={formatProjectSpan(project.start, project.end, locale)}
                />
                {types[project.type] && (
                  <MetaItem label={t.type} value={types[project.type]} />
                )}
              </dl>

              <div className="flex flex-col gap-3">
                <p className="font-mono text-[11px] tracking-[0.08em] text-graphite uppercase">
                  {t.stack}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {tech.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-card px-3 py-1.5 font-mono text-[11px] shadow-[inset_0_0_0_1px_rgb(28_27_25/0.2)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {links.map((link, i) => (
                    <PillLink
                      key={link.href + link.label}
                      href={link.href}
                      external
                      arrow
                      variant={i === 0 ? 'ink' : 'line'}>
                      {link.label}
                    </PillLink>
                  ))}
                </div>
              )}
            </div>

            <div className="mx-auto w-full max-w-[480px] pt-4">
              <TapedPrint
                src={project.cover}
                alt={project.title}
                rotate={2}
                tapeRotate={-3}
                caption={`${project.platform} · ${formatProjectYears(project.start, project.end)}`}
                sizes="(max-width: 960px) 100vw, 480px"
                preload
              />
            </div>
          </div>
        </div>
      </header>

      <div className="page-wrap overflow-x-clip pt-16 pb-24 desk:pt-24 desk:pb-32">
        <div className="grid gap-12 desk:grid-cols-2 desk:gap-20">
          <section className="flex flex-col gap-5">
            <Kicker as="h2">{t.brief}</Kicker>
            <p className="text-[17px] leading-[1.7] text-pretty desk:text-[19px]">
              {project.description}
            </p>
          </section>
          {project.responsibility && (
            <section className="flex flex-col gap-5">
              <Kicker as="h2">{t.role}</Kicker>
              <p className="text-[17px] leading-[1.7] text-pretty text-ink-soft desk:text-[19px]">
                {project.responsibility}
              </p>
            </section>
          )}
        </div>

        {gallery.length > 0 && (
          <section className="mt-20 desk:mt-28">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4 border-t border-ink/90 pt-4">
              <Kicker as="h2" tone="ink">
                {t.gallery}
              </Kicker>
              <HandNote size={24} rotate={-2}>
                {t.galleryNote}
              </HandNote>
            </div>
            <ul className="grid items-start gap-x-12 gap-y-16 sm:grid-cols-2">
              {gallery.map((src, i) => (
                <li key={src}>
                  <TapedPrint
                    src={src}
                    alt={`${project.title} — ${i + 1}`}
                    rotate={GALLERY_TILT[i % GALLERY_TILT.length]}
                    tapeRotate={i % 2 ? 4 : -4}
                    sizes="(max-width: 640px) 100vw, 600px"
                  />
                </li>
              ))}
            </ul>
          </section>
        )}

        {(prev || next) && (
          <nav
            aria-label={t.pager}
            className="mt-24 grid gap-6 border-t border-ink/90 pt-6 sm:grid-cols-2">
            {prev && (
              <Link
                href={localizedPath(locale, `/project/${prev.id}`)}
                className="group flex min-h-11 flex-col gap-2 py-2">
                <span className="font-mono text-xs tracking-[0.08em] text-graphite uppercase">
                  ← {t.prev}
                </span>
                <span className="font-serif text-[28px] leading-[1.02] group-hover:text-pen desk:text-[36px]">
                  {prev.title}
                </span>
              </Link>
            )}
            {next && (
              <Link
                href={localizedPath(locale, `/project/${next.id}`)}
                className="group flex min-h-11 flex-col gap-2 py-2 sm:col-start-2 sm:items-end sm:text-right">
                <span className="font-mono text-xs tracking-[0.08em] text-graphite uppercase">
                  {t.next} →
                </span>
                <span className="font-serif text-[28px] leading-[1.02] group-hover:text-pen desk:text-[36px]">
                  {next.title}
                </span>
              </Link>
            )}
          </nav>
        )}
      </div>
    </article>
  )
}
