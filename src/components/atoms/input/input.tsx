import React from 'react';

interface InputProps {
    type: string;
    className?: string;
    placeHolder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    required?: boolean | undefined;
}

const Input: React.FC<InputProps> = ({
    type = '',
    className = '',
    placeHolder = '',
    value = '',
    onChange,
    onKeyDown,
    required

}) => {
    return (
        <input
            type={type}
            className={className}
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            required={required}
 
        />
    );
};

export default Input;
