import { useEffect, useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.svg";

function Navbar({ onSearchChange = () => {} }) {
    const [username, setUsername] = useState("");

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    return (
        <nav className="nav-container">
            <img src={logo} className="nav-logo" alt="Logo" />
            <h1 className="nav-h1">
                {username ? (
                    <>
                        Welcome back: <span className="username">{username}</span>!
                    </>
                ) : (
                    "Welcome!"
                )}
            </h1>
        </nav>
    );
}

export default Navbar;
