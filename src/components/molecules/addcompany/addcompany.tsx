"use client"
import Button from "../../atoms/button/button"
import styles from "./addcompany.module.scss"
import { IoMdAddCircleOutline } from "react-icons/io";
import FormCompany from "../formcompany/formcompany";
import { useState } from "react";
import React from "react";


const AddCompany: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button className={styles.button} onClick={handleOpenModal}>
                <IoMdAddCircleOutline /> Agregar compañía
            </Button>


            {isModalOpen && <FormCompany onClose={handleCloseModal} />
            }
        </>
    )
}

export default AddCompany;