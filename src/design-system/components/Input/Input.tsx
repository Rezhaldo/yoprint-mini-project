import { InputAdornment, TextField, type TextFieldProps } from '@mui/material';
import type { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from 'react';
import styles from './Input.module.scss';

export type InputProps = {
	id?: string;
	type?: HTMLInputTypeAttribute;
	status?: 'normal' | 'error';
	placeholder?: string;
	fullWidth?: boolean;
	suffix?: ReactNode;
	startAdornment?: ReactNode;
	value?: string | unknown;
	onChange?: (event: string) => void;
	className?: string;
	disabled?: boolean;
	textFieldProps?: TextFieldProps;
};

export function Input({
	id,
	type = 'text',
	status = 'normal',
	fullWidth,
	placeholder,
	suffix,
	startAdornment,
	value = '',
	onChange,
	className,
	disabled,
	textFieldProps,
}: InputProps) {
	return (
		<TextField
			{...textFieldProps}
			className={`${styles.input}
			${styles[`input--status-${status}`]}
			${className}
			${disabled && styles.disabled}
			`}
			id={id}
			type={type}
			variant="outlined"
			placeholder={placeholder}
			fullWidth={fullWidth}
			disabled={disabled}
			value={value}
			onChange={(event: ChangeEvent<HTMLInputElement>) => onChange?.(event.target.value)}
			slotProps={{
				input: {
					endAdornment: suffix ? (
						<InputAdornment className={styles.input__adornment} position="end">
							{suffix}
						</InputAdornment>
					) : undefined,
					startAdornment: startAdornment ? (
						<InputAdornment className={styles.input__adornment} position="start">
							{startAdornment}
						</InputAdornment>
					) : undefined,
				},
				...textFieldProps?.slotProps,
			}}
		/>
	);
}
