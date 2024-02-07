import React from 'react'
import { ButtonBase, ButtonBaseProps } from '../ui/button'

export interface ButtonProps extends ButtonBaseProps {
	loading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { children, loading, ...rest } = props
	return (
		<ButtonBase ref={ref} {...rest}>
			{children}
		</ButtonBase>
	)
})
