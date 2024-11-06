"use client"
import Input from "@/components/atoms/input/input";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import styles from "./search.module.scss"

interface InputSearchProps {
    onSearch: (query: string) => void;
}

const Search: React.FC<InputSearchProps> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState("");

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            onSearch(inputValue);
            setInputValue(""); 
        }
    };

    return (
        <div className={styles.container}>
            <IoSearchSharp className={styles.icon} />
            <Input
                type="text"
                placeHolder="Search..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress} 
            />
        </div>
    );
};

export default Search;