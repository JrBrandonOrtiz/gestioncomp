import React, { useEffect, useState } from "react";
import Card from "@/components/molecules/card/card";
import Pagination from "@/components/molecules/paginaton/pagination";
import styles from "@/components/template/cardsvacancies/cardsvacancies.module.scss";
import { IVacancies } from "@/models/vacancies";
import { VacancieService } from "@/services/vacancies.services";
import { ICompany } from "@/models/company";

interface IProps {
   data: IVacancies;
}

const CardsVacanciesTemplate: React.FC<IProps> = ({ data }) => {
    const [dataCompany, setDataCompany] = useState<ICompany[]>([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            const useVacancieService = new VacancieService();
            const companies = await useVacancieService.findAllCompanies();
            setDataCompany(companies);
        };
        fetchCompanies();
    }, []);

    if (!data.content || data.content.length === 0) {
        return <div>No hay vacantes disponibles</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.cardsGrid}>
                {data.content.map((vacant) => (
                    <Card
                        key={vacant.id ?? "unknown"}
                        id={vacant.id ? String(vacant.id) : "unknown"}
                        tittle={vacant.title}
                        description={vacant.description}
                        contact={vacant.status}
                        data={dataCompany}
                    />
                ))}
            </div>
            <Pagination data={data} />
        </div>
    );
}

export default CardsVacanciesTemplate;
