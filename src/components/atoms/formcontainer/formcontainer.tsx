import React, { ReactNode } from "react";
import styles from "./formcontainer.module.scss";
import Button from "../button/button";
import { IoMdClose } from "react-icons/io";
import Caption from "../caption/caption";


interface IFormContainerProps {
    children: ReactNode;
    onClick: ()=> void;
    tittle: string
}

const FormContainer: React.FC<IFormContainerProps> = ({ children,onClick,tittle }) => {

    return (
        <div className={styles.formContainer}>
            <Button className={styles.closeIcon} onClick={onClick}>
                <IoMdClose size={24} />
            </Button>
            <Caption className={styles.title}>{tittle}</Caption>

            {children}
        </div>
    )
}

export default FormContainer;