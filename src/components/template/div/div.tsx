import styles from "./div.module.scss";
import Panel from "@/components/organisms/panel/panel";
import Tittle from "@/components/atoms/tittle/tittle";
import React ,{ ReactNode } from "react";
import { VacancieService } from "@/services/vacancies.services";

interface IDivProps{

    children:ReactNode
}
const Div:React.FC<IDivProps>=async ({children}) => {

    const UseVacancieService = new VacancieService();
   
    const data = await UseVacancieService.findAllCompanies();
    return (
        <div className={styles.divContainer}>
            <Tittle className={styles.tittle}>{"Panel de Administración"}</Tittle>
            <Panel  data={data}/>
            {children}

        </div>
    )

}

export default Div;