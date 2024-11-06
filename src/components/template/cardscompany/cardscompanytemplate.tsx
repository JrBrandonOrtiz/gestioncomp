"use client";
import React from "react";
import Card from "@/components/molecules/card/card";
import Pagination from "@/components/molecules/paginaton/pagination";
import styles from "./cardscompany.module.scss";
import { IGetCompanyResponse } from "@/models/company";


interface IProps {
    data: IGetCompanyResponse;
 

}

function CardsCompanyTemplate({ data }: IProps) {

    return (
        <div className={styles.container}>
            <div className={styles.cardsGrid}>
                {data.content.map((company) => (
                    <Card
                        key={company.id}
                        id={company.id}
                        tittle={company.name}
                        description={company.location}
                        contact={company.contact} data={[]}                    />
                ))}
            </div>
      
            <Pagination
         data={data}
            />
        </div>
    );
};

export default CardsCompanyTemplate;