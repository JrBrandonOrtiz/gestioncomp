import React from "react";

interface ITittleProps{
    className: string;
    children: string
}

const Tittle:React.FC<ITittleProps> = ({className,children})=>{
    return(
        <h1 className={className}>{children}</h1>
    )
}

export default Tittle;