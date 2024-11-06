import React from "react";
import styles from "./contentdiv.module.scss";

interface DivProps{
	children: React.ReactNode;

}

const ContentDiv :React.FC<DivProps> = ({children}) => {
    return(
        <div className={styles.divContainer}>
            {children}
     </div>
    )
  
}

export default ContentDiv;