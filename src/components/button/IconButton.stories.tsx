import type { Meta } from '@storybook/react'

import { Mail } from 'lucide-react'
import IconButton from './IconButton'

const meta = {
	title: 'Example/Icon',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta

export default meta

export const Playground = (args) => {
	return <IconButton icon={<Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />} {...args} />
}

Playground.argTypes = {
	variant: {
		control: 'select',
		options: ['default', 'secondary', 'ghost'],
	},
	size: {
		control: 'radio',
		options: ['default', 'sm', 'lg'],
	},
}
