import React, { useState } from "react";
import styles from "./formvacancies.module.scss";
import Input from "@/components/atoms/input/input";
import Button from "@/components/atoms/button/button";
import Label from "@/components/atoms/label/label";
import Overlay from "@/components/atoms/overlay/overlay";
import FormContainer from "@/components/atoms/formcontainer/formcontainer";
import { VacancieService } from "@/services/vacancies.services";
import { ICompany } from "@/models/company";
import { useRouter } from "next/navigation";

interface IFormVacanciesProps {
    onClose: () => void;
    data: ICompany[];
}

const FormVacancies: React.FC<IFormVacanciesProps> = ({ onClose, data }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('OPEN');
    const [company, setCompany] = useState('');

    const router = useRouter();
    const useVacanciesServer = new VacancieService();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const newVacancie = await useVacanciesServer.createVacancie({
                title,
                description,
                status,
                companyId: company,
            });

            console.log('Vacante creada:', newVacancie);
            onClose();
            router.refresh();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Overlay>
            <FormContainer onClick={onClose} tittle="Agregar vacantes">
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
                            className={styles.textarea}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <Label className={styles.label}>Estado</Label>
                        <select
                            className={styles.select}
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="OPEN">Activo</option>
                            <option value="CLOSED">Inactivo</option>
                        </select>
                    </div>

                    <div>
                        <Label className={styles.label}>Compañía</Label>
                        <select
                            className={styles.select}
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
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
                            Agregar
                        </Button>
                    </div>
                </form>
            </FormContainer>
        </Overlay>
    );
};

export default FormVacancies;
