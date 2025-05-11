// MUI
import { Box, Button as MUIButton, type ButtonProps as MUIButtonProps } from '@mui/material';

// Component
import { CircularProgress } from '@design-system/components';

// Style
import styles from './button.module.scss';

export type ButtonVariant = 'text' | 'outline' | 'contained';
type Type = 'button' | 'submit' | 'reset';
export type ButtonColorProps =
	| 'primary'
	| 'success'
	| 'error'
	| 'warning'
	| 'info'
	| 'text'
	| 'disabled';

type Props = {
	type?: Type;
	className?: string;
	variant: ButtonVariant;
	color?: ButtonColorProps;
	fullWidth?: boolean;
	disabled?: boolean;
	isSubmitting?: boolean;
	children: React.ReactNode;
	buttonProps?: MUIButtonProps;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export function Button({
	type = 'button',
	className,
	variant,
	color = 'primary',
	fullWidth,
	disabled,
	isSubmitting,
	children,
	buttonProps,
	onClick,
}: Props) {
	const buttonDisabled = disabled || isSubmitting;
	const colorState = disabled ? 'disabled' : color;

	return (
		<MUIButton
			type={type}
			disabled={buttonDisabled}
			className={`${styles[variant]}
			${className}
			${styles.button}
			${fullWidth && styles.fullWidth}
			${styles[`button-color--color-${colorState}`]}
			${buttonDisabled && styles[`${variant}-disabled`]}`}
			onClick={onClick}
			{...buttonProps}
		>
			{children}

			{isSubmitting && (
				<Box ml={1} display="flex" justifyContent="center" alignItems="center">
					<CircularProgress
						circularProgressProps={{
							size: 20,
						}}
					/>
				</Box>
			)}
		</MUIButton>
	);
}
