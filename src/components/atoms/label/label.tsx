import React from "react";

interface ILabelProps{
    className: string;
    children: string
}

const Label:React.FC<ILabelProps> = ({className,children})=>{
    return(
        <label className={className}>{children}</label>
    )
}

export default Label;