'use client'
import ContentDiv from "@/components/atoms/contentdiv/contentdiv";
import Head from "@/components/atoms/head/head";
import React, { useState } from "react";
import styles from "./card.module.scss";
import Text from "@/components/atoms/text/text";
import Button from "@/components/atoms/button/button";
import { GoPencil } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import FormVacancieUpdate from "../formvacanciesupdate/formvacanciesupdate";
import { VacancieService } from "@/services/vacancies.services";
import { ICompany } from "@/models/company";
import FormCompanyUpdate from "../formcompanyupdate/formcompanyupdate";
import { CompanyService } from "@/services/company.services";

interface ICardsProps {
    id: string;
    tittle: string;
    description: string;
    contact: string;
    data: ICompany[];
}

const Card: React.FC<ICardsProps> = ({ id, tittle, description, contact, data }) => {
    const currentPath = usePathname();
    const useCompanyServer = new CompanyService();
    const useVacanciesServer = new VacancieService();
    const router = useRouter();

    const [isModalOpen, setModalOpen] = useState(false);
    const [isCompanyModalOpen, setCompanyModalOpen] = useState(false);

    const handleDeleteCompany = async (id: string) => {
        const userConfirmed = window.confirm("¿Estás seguro que deseas eliminar esta compañía?");
        if (!userConfirmed) return;

        try {
            await useCompanyServer.destroy(id);
            router.refresh();
        } catch (error) {
            console.error("Error al eliminar compañía", error, id);
            alert("Ha ocurrido un error al eliminar la compañía, vuelve a intentarlo");
        }
    };

    const handleDeleteVacancies = async (id: string) => {
        const userConfirmed = window.confirm("¿Estás seguro que deseas eliminar esta vacante?");
        if (!userConfirmed) return;

        try {
            await useVacanciesServer.destroy(id);
            router.refresh();
        } catch (error) {
            console.error("Error al eliminar vacante", error, id);
        }
    };

    const handleUpdateVacancies = () => {
        setModalOpen(true);
    };

    const handleUpdateCompany = () => {
        setCompanyModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCompanyModalOpen(false);
    };

    return (
        <>
            <ContentDiv key={id}>
                <div className={styles.container}>
                    <Head className={styles.title}>{tittle}</Head>
                    <Text className={styles.text}>{description}</Text>
                    <Text className={styles.text}>{contact}</Text>
                </div>
                <div className={styles.actions}>
                    <Button
                        className={`${currentPath === "/company" ? styles.buttonEdit : styles.buttonEditVacancies}`}
                        onClick={currentPath === "/company" ? handleUpdateCompany : handleUpdateVacancies}
                    >
                        <GoPencil />
                    </Button>
                    <Button
                        className={styles.buttonDelete}
                        onClick={() => (currentPath === "/company" ? handleDeleteCompany(id) : handleDeleteVacancies(id))}
                    >
                        <FaRegTrashAlt />
                    </Button>
                </div>
            </ContentDiv>

            {isModalOpen && (
                <FormVacancieUpdate vacancyId={id} onClose={closeModal} data={data} />
            )}
            {isCompanyModalOpen && (
                <FormCompanyUpdate companyID={id} onClose={closeModal} />
            )}
        </>
    );
};

export default Card;
