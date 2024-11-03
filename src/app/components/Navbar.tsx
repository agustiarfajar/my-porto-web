
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export default function Navbar() {
    return(
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-8 items-center">
                <a href="/" aria-label="Home">
                    <div className="mx-2">
                        <span className="text-2xl">Guzti</span>
                        <span className="text-2xl text-sky-400">Art</span>
                    </div>
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/guztiart" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />                   
                </a>
                <a href="https://www.github.com/agustiarfajar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />                   
                </a>
                <a href="https://www.instagram.com/guztiart_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />                   
                </a>
                <a href="https://www.tiktok.com/@guztiart06" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
                    <FaTiktok />                   
                </a>
            </div>
        </nav>   
    );
}