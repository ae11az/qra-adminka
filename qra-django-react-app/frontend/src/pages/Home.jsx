import Navbar from "../components/Navbar";
import ClientsList from "../components/ClientsList";
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <>
        <div>
            <Navbar onSearchChange={setSearchQuery} />
            <ClientsList searchQuery={searchQuery} />
        </div>
        </>
    );
}

export default Home;
