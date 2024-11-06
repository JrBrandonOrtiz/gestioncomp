import React from "react";

interface ITextProps{
    className: string;
    children: string
}

const Text:React.FC<ITextProps> = ({className,children})=>{
    return(
        <h1 className={className}>{children}</h1>
    )
}

export default Text;