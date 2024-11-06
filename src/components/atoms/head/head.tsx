import React from "react";

interface IHeadProps{
    className: string;
    children: string
}

const Head:React.FC<IHeadProps> = ({className,children})=>{
    return(
        <h3 className={className}>{children}</h3>
    )
}

export default Head;