import React, {  useState } from "react";
import styles from "./formvacanciesupdate.module.scss";
import Input from "@/components/atoms/input/input";
import Button from "@/components/atoms/button/button";
import Label from "@/components/atoms/label/label";
import Overlay from "@/components/atoms/overlay/overlay";
import FormContainer from "@/components/atoms/formcontainer/formcontainer";
import { ICompany } from "@/models/company";
import { VacancieService } from "@/services/vacancies.services";
import { useRouter } from "next/navigation";

interface IFormVacanciesProps {
    onClose: () => void;
    data: ICompany[];
    vacancyId: string; 
}

const FormVacanciesUpdate: React.FC<IFormVacanciesProps> = ({ onClose, data, vacancyId }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('ACTIVE');
    const [companyId, setCompanyId] = useState('');
    
    const router = useRouter();
    const useVacancieServices = new VacancieService();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const updatedVacancie = await useVacancieServices.updateVacancie(vacancyId, {
                title,
                description,
                status,
                companyId,
            });

            console.log('Vacancy updated:', updatedVacancie);
            onClose();
            router.refresh();
        } catch (err) {
            console.error(err);
        } 
    };

    return (
        <Overlay>
            <FormContainer onClick={onClose} tittle="Actualizar vacante">
                <form onSubmit={handleSubmit}>
                    <div>
                        <Label className={styles.label}>Título</Label>
                        <Input
                            className={styles.input}
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <Label className={styles.label}>Descripción</Label>
                        <textarea
                            id="description"
                            className={styles.textarea}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <Label className={styles.label}>Estado</Label>
                        <select
                            id="status"
                            className={styles.select}
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="ACTIVE">ACTIVE</option>
                            <option value="CLOSED">INACTIVE</option>
                        </select>
                    </div>
                    <div>
                        <Label className={styles.label}>Compañía</Label>
                        <select
                            id="company"
                            className={styles.select}
                            value={companyId}
                            onChange={(e) => setCompanyId(e.target.value)}
                            required
                        >
                            <option value="">Selecciona una compañía</option>
                            {data.map((comp) => (
                                <option value={comp.id} key={comp.id}>
                                    {comp.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <Button type="submit" className={styles.submitButton}>
                            Actualizar
                        </Button>
                    </div>
                </form>
            </FormContainer>
        </Overlay>
    );
};

export default FormVacanciesUpdate;