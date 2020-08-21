import { THEME_COLOR_MAP, ThemeColors } from './style-constants'

export const getThemeColor = (color: ThemeColors) => {
    return THEME_COLOR_MAP[color]
}
