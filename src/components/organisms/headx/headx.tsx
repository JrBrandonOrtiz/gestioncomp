import React, { ReactNode } from "react";
import Caption from "@/components/atoms/caption/caption";
import styles from "./headx.module.scss";

interface IHeadxProps {
    title: string;
    children: ReactNode;
}

const Headx: React.FC<IHeadxProps> = ({ title, children }) => {
    return (
        <div className={styles.container}>
            <Caption className={styles.caption}>{title}</Caption>

            {children}

        </div>
    );
};

export default Headx;
