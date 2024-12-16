import "../styles/ClientsList.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ClientsList() {
    const [clients, setClients] = useState([]); // Инициализация как пустой массив
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("/api/clients/")
            .then((response) => {
                const data = response.data;
                console.log("API response:", data); // Для отладки
                // Если данные - объект, превращаем его в массив
                if (typeof data === "object" && data !== null) {
                    setClients(Array.isArray(data) ? data : [data]); // Поддержка массива и одиночного объекта
                } else {
                    console.error("Invalid data format received:", data);
                    setError("Unexpected data format.");
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch clients:", err);
                setError("Failed to load clients.");
                setLoading(false);
            });
    }, []);

    const handleClientClick = (clientId) => {
        navigate(`/clients/${clientId}`);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="clientslist-container">
            <h2 className="clientlist-h2 roboto-regular">Client list</h2>
            {clients.length > 0 ? (
                clients.map((client) => (
                    <div key={client.id} className="client-info">
                        <button
                            className="client-detail-btn roboto-regular"
                            onClick={() => handleClientClick(client.id)}
                        >
                            {client.full_name}
                        </button>
                    </div>
                ))
            ) : (
                <p>No clients found.</p> // Сообщение, если нет клиентов для отображения
            )}
        </div>
    );
}

export default ClientsList;
