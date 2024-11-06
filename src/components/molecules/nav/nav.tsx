"use client"
import Link from "next/link"
import styles from "./nav.module.scss"
import { PiSuitcase } from "react-icons/pi";
import { LuBuilding2 } from "react-icons/lu"
import { usePathname } from "next/navigation";


const Navbar = () => {
    const currentPath = usePathname();

    return (
        <nav className={styles.Nav}>
            <ul>
                <Link href="/vacancies" className={`${styles.link} ${currentPath === "/vacancies"?styles.Vactive: ""}`} ><PiSuitcase/>Vacantes</Link>
                <Link href="/company" className={`${styles.link} ${currentPath === "/company"?styles.Cactive: ""}`}><LuBuilding2/>Compañías</Link>
            </ul>
        </nav>
    )
}

export default Navbar;