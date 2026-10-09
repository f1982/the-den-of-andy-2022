import React from 'react'

import Link from 'next/link'

import { Kicker, Polaroid } from '@/components/den'

import { BlogPostData } from '@/features/blog/blog-types'

/**
 * A notebook entry: grid-paper header (kicker, serif title), the cover as a
 * taped print, then the article in a ~680px prose column.
 */
export default function BlogPost({
  post,
  kicker,
  caption,
  backHref,
  backLabel,
}: {
  post: BlogPostData
  /** "Making · 14 Jun 2024 · 4 min read" */
  kicker: React.ReactNode
  /** Handwritten caption on the cover print. */
  caption?: string
  backHref: string
  backLabel: string
}) {
  return (
    <article>
      <header className="bg-grid-paper">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-6 px-4 pt-10 pb-[140px] desk:px-16 desk:pt-16 desk:pb-[200px]">
          <BackLink href={backHref} label={backLabel} />
          <Kicker className="mt-4 animate-rise desk:mt-8">{kicker}</Kicker>
          <h1 className="max-w-[18ch] animate-rise font-serif text-[46px] leading-[0.98] font-normal tracking-[-0.02em] text-balance [--stagger:1] desk:text-[84px] desk:leading-[0.95]">
            {post.title}
          </h1>
        </div>
      </header>

      <div className="mx-auto -mt-[100px] max-w-[920px] animate-place px-4 [--stagger:2] [--tilt:-2deg] desk:-mt-[150px] desk:px-8">
        <Polaroid
          src={post.coverImage}
          alt={post.title}
          caption={caption}
          tape={{ width: 130, rotate: -3 }}
          rotate={-1.2}
          preload
          sizes="(max-width: 960px) 100vw, 860px"
          photoClassName="h-auto aspect-[3/2]"
          captionClassName="bottom-3.5 left-[22px]"
          className="p-3! pb-14! desk:p-4! desk:pb-16!"
        />
      </div>

      <div className="mx-auto max-w-[712px] px-4 pt-16 desk:pt-24">
        <div
          className="prose max-w-none desk:prose-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-16 border-t border-ink/90 pt-6">
          <BackLink href={backHref} label={backLabel} />
        </div>
      </div>
    </article>
  )
}

function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center self-start font-mono text-xs tracking-[0.06em] uppercase transition-colors duration-300 hover:text-pen focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pen">
      {label}
    </Link>
  )
}
