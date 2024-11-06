import React from 'react';

interface ButtonProps {
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	children: React.ReactNode;
	className: string
	disabled?: boolean;
	title?: string;
	background?: string;
};

const Button: React.FC<ButtonProps> = ({ type = 'button', onClick, children, className, disabled, title , background}) => {
	return (
		<button type={type} onClick={onClick} className={className} disabled={disabled} title={title} style={{background:background}}>
			{children}
		</button>
	);
};

export default Button;