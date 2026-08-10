import type { Breakpoints } from './useContainerWidth'

/**
 * Layout values per breakpoint. Every field returns a `var(--…)` reference
 * into `styles/tokens.css` rather than a literal, so components carry no
 * hard-coded sizes.
 */
export type Layout = ReturnType<typeof layout>

export function layout({ mob, tab }: Breakpoints) {
  return {
    // section padding
    padHdr: mob ? 'var(--pad-hdr-mob)' : 'var(--pad-hdr)',
    padHero: mob
      ? 'var(--pad-hero-mob)'
      : tab
        ? 'var(--pad-hero-tab)'
        : 'var(--pad-hero)',
    padStrip: mob ? 'var(--pad-strip-mob)' : 'var(--pad-strip)',
    padStrip2: mob ? 'var(--pad-strip2-mob)' : 'var(--pad-strip2)',
    padSec: mob
      ? 'var(--pad-sec-mob)'
      : tab
        ? 'var(--pad-sec-tab)'
        : 'var(--pad-sec)',

    // grids
    c3: mob ? 'var(--grid-3-mob)' : tab ? 'var(--grid-3-tab)' : 'var(--grid-3)',
    c3f: mob ? 'var(--grid-3f-mob)' : 'var(--grid-3f)',
    c2: mob ? 'var(--grid-2-mob)' : 'var(--grid-2)',
    c2e: mob ? 'var(--grid-2e-mob)' : 'var(--grid-2e)',
    gap2: mob ? 'var(--gap-2-mob)' : 'var(--gap-2)',
    heroCols: mob || tab ? 'var(--grid-hero-narrow)' : 'var(--grid-hero)',
    catsCols: mob
      ? 'var(--grid-cats-mob)'
      : tab
        ? 'var(--grid-cats-tab)'
        : 'var(--grid-cats)',

    // hero and buttons
    heroFont: mob
      ? 'var(--text-hero-mob)'
      : tab
        ? 'var(--text-hero-tab)'
        : 'var(--text-display-l)',
    ctaW: mob ? '100%' : 'auto',
    colDir: (mob ? 'column' : 'row') as 'column' | 'row',
    alignC: mob ? 'stretch' : 'center',

    // landing navigation
    navD: mob ? 'none' : 'flex',
    burgerD: mob ? 'inline-flex' : 'none',

    // employee screen
    mGap: mob ? 'var(--m-gap-mob)' : 'var(--m-gap)',
    mOuterPad: mob ? 'var(--m-outer-pad-mob)' : 'var(--m-outer-pad)',
    mPad: mob ? 'var(--m-pad-mob)' : 'var(--m-pad)',
    mCatCols: mob ? 'var(--m-cat-cols-mob)' : 'var(--m-cat-cols)',
    mTilePad: mob ? 'var(--m-tile-pad-mob)' : 'var(--m-tile-pad)',
    mTileFont: mob ? 'var(--text-tile-mob)' : 'var(--text-tile)',
    mTileDir: (mob ? 'column' : 'row') as 'column' | 'row',
    mTileAlign: mob ? 'flex-start' : 'center',
    qrSize: mob ? 'var(--qr-size-mob)' : 'var(--qr-size)',
  }
}
