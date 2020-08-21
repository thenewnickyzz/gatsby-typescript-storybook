import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import {
    ThemeColors,
    BASE_UNIT,
    FONT_FAMILY,
    BUTTON_FONT_SIZE,
} from '../../util/style-constants'
import { getThemeColor } from '../../util/style-functions'
import color from 'color'

interface IProps {
    variant?: 'filled' | 'outline'
    color?: ThemeColors
}

// Todo: styles for the filled state
const StyledButton = styled.button<IProps>`
    background: ${props =>
        props.variant === 'filled' ? getThemeColor(props.color) : 'white'};
    color: ${props =>
        props.variant === 'filled' ? 'white' : getThemeColor(props.color)};
    font-weight: 500;
    padding: ${BASE_UNIT * 2}px ${BASE_UNIT * 5}px;
    font-family: ${FONT_FAMILY};
    font-size: ${BUTTON_FONT_SIZE}px;
    border-radius: 30px;
    border: ${props =>
        props.variant === 'outline'
            ? `1px solid ${getThemeColor(props.color)}`
            : 'none'};
    cursor: pointer;
    transition: 0.2s ease-out;

    &:hover {
        background: ${props =>
            props.variant === 'outline'
                ? getThemeColor(props.color)
                : color(getThemeColor(props.color)).darken(0.2)};
        color: white;
    }
`

const Button: React.FC<IProps & React.HTMLProps<HTMLButtonElement>> = props => {
    const { children, variant, color } = props
    return (
        <StyledButton variant={variant} color={color}>
            {children}
        </StyledButton>
    )
}

Button.defaultProps = {
    color: 'primary',
    variant: 'filled',
}

export default Button
