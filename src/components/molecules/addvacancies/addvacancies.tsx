"use client";
import React, { useState } from "react";
import Button from "../../atoms/button/button";
import styles from "./addvacancies.module.scss";
import { IoMdAddCircleOutline } from "react-icons/io";
import FormVacancies from "../formvacancies/formvacancies";
import { ICompany } from "@/models/company";

interface IProps {
    data: ICompany[];
}

const AddVacancies: React.FC<IProps> = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);  
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button className={styles.buton} onClick={handleOpenModal}>
                <IoMdAddCircleOutline /> Agregar vacantes
            </Button>
            
            {isModalOpen && <FormVacancies onClose={handleCloseModal} data={data} />}
        </>
    );
};

export default AddVacancies;
