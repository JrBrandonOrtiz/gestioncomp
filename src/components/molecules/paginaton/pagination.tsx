'use client'
import React from "react";
import styles from "./pagination.module.scss";
import Button from "@/components/atoms/button/button";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { IGetCompanyResponse } from "@/models/company";
import { IVacancies } from "@/models/vacancies";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
    data: IGetCompanyResponse | IVacancies
}

const Pagination: React.FC<PaginationProps> = ({ data }) => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const onPageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());

        router.push(`?${params.toString()}`);
    };
    const currentPage = data.pageable.pageNumber + 1;
    return (
        <div className={styles.pagination}>
            <Button
                className={styles.paginationButton}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <MdNavigateBefore />
            </Button>
            <span>Página {currentPage} de {data.totalPages}</span>
            <Button
                className={styles.paginationButton}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === data.totalPages}
            >
                <MdNavigateNext />
            </Button>
        </div>
    );
};

export default Pagination;