import React from 'react'
import Button from './button'
import { select, withKnobs } from '@storybook/addon-knobs'
// import {} from '@stor'

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs],
}

export const Default = () => {
    const variant = select(
        'variant',
        {
            outline: 'outline',
            filled: 'filled',
        },
        'outline'
    )
    const color = select(
        'color',
        {
            primary: 'primary',
            secondary: 'secondary',
        },
        'primary'
    )
    return (
        <Button variant={variant} color={color}>
            Hello Button
        </Button>
    )
}
