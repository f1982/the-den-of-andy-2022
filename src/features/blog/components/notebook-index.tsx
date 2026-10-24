'use client'

import React, { useId, useState } from 'react'

import { fillTemplate } from '@/utils/fill-template'

import { cn } from '@/components/ui/utils'

export type NotebookFilter = { key: string; label: string; count: number }

export type NotebookIndexItem = {
  slug: string
  categories: string[]
  /** Lower-cased searchable text. */
  searchText: string
  /** The server-rendered row. */
  node: React.ReactNode
}

const ALL = 'all'

function pad(n: number) {
  return String(n).padStart(2, '0')
}

/**
 * Filter chips + search over the already-rendered notebook. Every entry stays
 * in the prerendered HTML; filtering only toggles `hidden`.
 */
export function NotebookIndex({
  labels,
  filters,
  featured,
  groups,
}: {
  labels: {
    groupLabel: string
    all: string
    searchLabel: string
    searchPlaceholder: string
    noResults: string
    /** "{count} entries shown" */
    results: string
  }
  filters: NotebookFilter[]
  featured?: NotebookIndexItem
  groups: { year: number; items: NotebookIndexItem[] }[]
}) {
  const [category, setCategory] = useState(ALL)
  const [query, setQuery] = useState('')
  const searchId = useId()

  const tokens = query
    .toLowerCase()
    .split(/[\s,，、]+/)
    .filter(Boolean)
  const isFiltering = category !== ALL || tokens.length > 0

  const matches = (item: NotebookIndexItem) =>
    (category === ALL || item.categories.includes(category)) &&
    tokens.every((token) => item.searchText.includes(token))

  const total = groups.reduce((sum, group) => sum + group.items.length, 0)
  const visibleCount = groups.reduce(
    (sum, group) => sum + group.items.filter(matches).length,
    0,
  )

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-5 border-y border-ink/90 py-[22px]">
        <div
          role="group"
          aria-label={labels.groupLabel}
          className="flex flex-wrap gap-2">
          {[{ key: ALL, label: labels.all, count: total }, ...filters].map(
            (filter) => {
              const on = filter.key === category
              return (
                <button
                  key={filter.key}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setCategory(filter.key)}
                  className={cn(
                    'inline-flex h-10 cursor-pointer items-center gap-2 rounded-full px-4 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pen',
                    on
                      ? 'bg-ink text-paper'
                      : 'text-ink shadow-[inset_0_0_0_1px_rgba(28,27,25,0.25)] hover:shadow-[inset_0_0_0_1px_var(--color-ink)]',
                  )}>
                  {filter.label}
                  <span
                    className={cn(
                      'font-mono text-[11px]',
                      on ? 'text-highlighter' : 'text-graphite',
                    )}>
                    {pad(filter.count)}
                  </span>
                </button>
              )
            },
          )}
        </div>

        <div className="flex h-11 w-full items-center gap-2.5 rounded-full bg-card px-4 shadow-[inset_0_0_0_1px_rgba(28,27,25,0.18)] focus-within:shadow-[inset_0_0_0_1.5px_var(--color-pen)] desk:w-auto desk:min-w-[280px]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="flex-none">
            <circle
              cx="7"
              cy="7"
              r="5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path d="M11 11 L15 15" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          <label
            htmlFor={searchId}
            className="font-mono text-[11px] tracking-[0.06em] text-graphite uppercase">
            {labels.searchLabel}
          </label>
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={labels.searchPlaceholder}
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-graphite"
          />
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {isFiltering
          ? fillTemplate(labels.results, { count: visibleCount })
          : ''}
      </p>

      {featured && (
        <div hidden={isFiltering && !matches(featured)}>{featured.node}</div>
      )}

      {groups.map((group) => {
        const visible = group.items.filter(matches)
        const yearText = String(group.year)
        return (
          <section
            key={group.year}
            hidden={visible.length === 0}
            aria-label={yearText}
            className="grid grid-cols-1 gap-5 pt-[70px] min-[1200px]:grid-cols-[240px_minmax(0,1fr)] min-[1200px]:gap-10 desk:pt-[110px]">
            <h2 className="animate-reveal font-serif text-[88px] leading-[0.8] font-normal tracking-[-0.03em] desk:text-[132px]">
              {yearText.slice(0, 2)}
              <em>{yearText.slice(2)}</em>
            </h2>
            <ol className="border-t border-ink/90">
              {group.items.map((item) => (
                <li key={item.slug} hidden={!matches(item)}>
                  {item.node}
                </li>
              ))}
            </ol>
          </section>
        )
      })}

      {visibleCount === 0 && (
        <p className="pt-[70px] text-center font-hand text-[26px] text-pen desk:pt-[110px]">
          {labels.noResults}
        </p>
      )}
    </>
  )
}
