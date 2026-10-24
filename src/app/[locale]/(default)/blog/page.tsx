import { Metadata } from 'next'

import { PageLocaleProp } from '@/types/page'

import { getDictionary } from '@/utils/dictionaries'
import { fillTemplate } from '@/utils/fill-template'
import {
  getPageMetadata,
  truncateMetaDescription,
} from '@/utils/metadata-utils'

import { getPosts } from '@/features/blog/blog-data'
import { NotebookFeatured } from '@/features/blog/components/notebook-featured'
import { NotebookHero } from '@/features/blog/components/notebook-hero'
import {
  NotebookFilter,
  NotebookIndex,
} from '@/features/blog/components/notebook-index'
import { NotebookRow } from '@/features/blog/components/notebook-row'
import { NotebookTicket } from '@/features/blog/components/notebook-ticket'
import {
  NotebookPostCopy,
  groupByYear,
  toNotebookEntry,
} from '@/features/blog/notebook-data'

import { siteSettings } from '@/config/site-config'

// Category chips, in the order they appear (other categories still show as
// tags on the rows).
const FILTER_CATEGORIES = ['making', 'desk', 'life', 'gear']

export async function generateMetadata(
  props: PageLocaleProp,
): Promise<Metadata> {
  const { locale } = await props.params

  const dict = await getDictionary(locale)
  return getPageMetadata({
    locale,
    path: '/blog',
    title: `${dict.den.blog.meta.title} | ${siteSettings.name}`,
    description: truncateMetaDescription(dict.den.blog.meta.description),
    keywords: siteSettings.keywords,
  })
}

export default async function Page(props: PageLocaleProp) {
  const { locale } = await props.params

  const dict = await getDictionary(locale)
  const t = dict.den.blog
  const categoryLabels: Record<string, string> = t.categories
  const postCopy = t.posts as Record<string, NotebookPostCopy>

  const entries = getPosts(-1, locale).map((post) =>
    toNotebookEntry(post, locale, postCopy[post.slug] ?? {}, categoryLabels),
  )
  const labelsFor = (categories: string[]) =>
    categories.map((key) => categoryLabels[key] ?? key)

  const years = entries.map((entry) => entry.year)
  const from = years.length ? Math.min(...years) : new Date().getFullYear()
  const to = years.length ? Math.max(...years) : from

  const filters: NotebookFilter[] = FILTER_CATEGORIES.map((key) => ({
    key,
    label: categoryLabels[key] ?? key,
    count: entries.filter((entry) => entry.categories.includes(key)).length,
  })).filter((filter) => filter.count > 0)

  const latest = entries[0]

  return (
    <>
      <NotebookHero
        kicker={fillTemplate(t.hero.kicker, {
          count: entries.length,
          from,
          to,
        })}
        title={t.hero.title}
        lede={t.hero.lede}
        note={t.hero.note}
        sketchbookAlt={t.hero.sketchbookAlt}
        labelSmall={t.hero.labelSmall}
        labelBig={fillTemplate(t.hero.labelBig, {
          from,
          to: String(to).slice(-2),
        })}
        fuel={t.hero.fuel}
      />

      <div className="page-wrap pb-[120px]">
        <NotebookIndex
          labels={t.filters}
          filters={filters}
          featured={
            latest && {
              slug: latest.slug,
              categories: latest.categories,
              searchText: latest.searchText,
              node: (
                <NotebookFeatured
                  entry={latest}
                  labels={{
                    ...t.featured,
                    categories: labelsFor(latest.categories),
                    readTime: fillTemplate(dict.den.common.minutesRead, {
                      n: latest.readMinutes,
                    }),
                    opensInNewTab: dict.den.common.opensInNewTab,
                  }}
                />
              ),
            }
          }
          groups={groupByYear(entries).map((group) => ({
            year: group.year,
            items: group.entries.map((entry) => ({
              slug: entry.slug,
              categories: entry.categories,
              searchText: entry.searchText,
              node: (
                <NotebookRow
                  entry={entry}
                  tags={labelsFor(entry.categories)}
                  readTime={fillTemplate(dict.den.common.minutes, {
                    n: entry.readMinutes,
                  })}
                  readAriaLabel={fillTemplate(t.row.readAriaLabel, {
                    title: entry.title,
                  })}
                />
              ),
            })),
          }))}
        />

        <NotebookTicket
          labels={{
            ...t.ticket,
            opensInNewTab: dict.den.common.opensInNewTab,
          }}
        />
      </div>
    </>
  )
}
