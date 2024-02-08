import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
	title: 'Example/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
	args: {
		children: 'Hello',
		variant: 'secondary',
		loading: false,
	},
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'secondary', 'ghost', 'outline'],
		},
		size: {
			control: 'radio',
			options: ['default', 'sm', 'lg'],
		},
	},
}
