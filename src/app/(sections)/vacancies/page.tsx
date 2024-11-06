"use client";

import React, { useEffect, useState } from "react";
import Div from "@/components/template/div/div";
import CardsVacanciesTemplate from "@/components/template/cardsvacancies/cardsvacancies";
import Headx from "@/components/organisms/headx/headx";
import AddVacancies from "@/components/molecules/addvacancies/addvacancies";
import { VacancieService } from "@/services/vacancies.services";
import { ICompany } from "@/models/company";
import { useSearchParams } from "next/navigation";

export default function Vacants() {
    const [data, setData] = useState<any>([]);
    const [dataCompany, setDataCompany] = useState<ICompany[]>([]);
    const searchParams = useSearchParams();

    useEffect(() => {
        const page = searchParams?.get("page") ? parseInt(searchParams.get("page")!) : 1;
        const size = searchParams?.get("size") ? parseInt(searchParams.get("size")!) : 3;

        const useVacancieService = new VacancieService();
        const fetchData = async () => {
            const fetchedData = await useVacancieService.findAll(page, size);
            const fetchedCompanyData = await useVacancieService.findAllCompanies();
            setData(fetchedData);
            setDataCompany(fetchedCompanyData);
        };

        fetchData();
    }, [searchParams]);

    return (
        <Div>
            <Headx title={"Vacantes"}>
                <AddVacancies data={dataCompany} />
            </Headx>
            <CardsVacanciesTemplate data={data} />
        </Div>
    );
}
