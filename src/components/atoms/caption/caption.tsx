import React from "react";

interface ICaptionProps{
    className: string;
    children: string;
}

const Caption:React.FC<ICaptionProps> = ({className,children})=>{
    return(
        <h2 className={className}>{children}</h2>
    )
}

export default Caption;