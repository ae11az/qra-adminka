import Navbar from "../components/Navbar";
import RightNavbar from "../components/RightNavbar";
import ClientsList from "../components/ClientsList";
import "../styles/Home.css"
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <>
            <Navbar onSearchChange={setSearchQuery} />
            <div className="home-container">
                <ClientsList searchQuery={searchQuery} />
                <RightNavbar/>
            </div>
        </>
    );
}

export default Home;
