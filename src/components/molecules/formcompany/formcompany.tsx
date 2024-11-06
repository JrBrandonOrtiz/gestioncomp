import React, { useState } from "react";
import styles from "./formcompany.module.scss";
import Input from "@/components/atoms/input/input";
import Button from "@/components/atoms/button/button";
import Label from "@/components/atoms/label/label";
import Overlay from "@/components/atoms/overlay/overlay";
import FormContainer from "@/components/atoms/formcontainer/formcontainer";

interface IFormCompanyProps {
    onClose: () => void;
}

const FormCompany: React.FC<IFormCompanyProps> = ({ onClose }) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, location, contact });
    };

    return (
        <Overlay>
            <FormContainer onClick={onClose} tittle="Agregar compañía">
                <form onSubmit={handleSubmit}>
                    <Label className={styles.label}>Nombre</Label>
                    <Input
                        className={styles.input}
                        type="text"
                        placeHolder="Ingrese el nombre de la compañía"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Label className={styles.label}>Ubicación</Label>
                    <Input
                        className={styles.input}
                        type="text"
                        placeHolder="Ingrese la ubicación"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />

                    <Label className={styles.label}>Contacto</Label>
                    <Input
                        className={styles.input}
                        type="text"
                        placeHolder="Ingrese el contacto"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />

                    <Button type="submit" className={styles.submitButton}>Agregar</Button>
                </form>
            </FormContainer>
        </Overlay>
    );
};

export default FormCompany;