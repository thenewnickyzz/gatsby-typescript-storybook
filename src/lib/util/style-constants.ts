// Units
export const BASE_UNIT = 8

export const PAGE_MARGIN_SMALL_SCREEN = BASE_UNIT * 2
export const PAGE_MARGIN_LARGE_SCREEN = BASE_UNIT * 4

// Fonts
export const FONT_FAMILY = `'Montserrat', sans-serif`
export const BODY_FONT_SIZE = 16
export const BUTTON_FONT_SIZE = 16

// COLORS
export const PRIMARY_COLOR = '#21C492'
export const SECONDARY_COLOR = '#21A5C4'

export const PRIMARY_FONT_COLOR = '#272B33'
export const SECONDARY_FONT_COLOR = '#6F7786'

export const THEME_COLOR_MAP = {
    primary: PRIMARY_COLOR,
    secondary: SECONDARY_COLOR,
}

export type ThemeColors = keyof typeof THEME_COLOR_MAP
