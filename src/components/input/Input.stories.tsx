import type { Meta } from '@storybook/react'

import { Mail, X } from 'lucide-react'
import { TextInput } from './TextInput'

const meta = {
	title: 'Example/Text Input',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta

export default meta

export const Playground = () => {
	return (
		<TextInput
			placeholder="John"
			name="username"
			startIcon={<Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />}
			endIcon={<TextInput.Action aria-label="Clear" icon={<X className="h-4 w-4 text-gray-400" aria-hidden="true" />} />}
		/>
	)
}
