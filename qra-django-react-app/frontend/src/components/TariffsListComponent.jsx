import "../styles/TariffsListComponent.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function TariffsListComponent() {
    const [tariffs, setTariffs] = useState([]); // Инициализация как пустой массив
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("/api/tariffs/")
            .then((response) => {
                const data = response.data;
                console.log("API response:", data); // Для отладки
                // Если данные - объект, превращаем его в массив
                if (typeof data === "object" && data !== null) {
                    setTariffs(Array.isArray(data) ? data : [data]); // Поддержка массива и одиночного объекта
                } else {
                    console.error("Invalid data format received:", data);
                    setError("Unexpected data format.");
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch tariffs:", err);
                setError("Failed to load tariffs.");
                setLoading(false);
            });
    }, []);

    const handleTariffClick = (tariffId) => {
        navigate(`/tariffs/${tariffId}`);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="tariffslist-container">
            <h2 className="tariffslist-h2 roboto-regular">Tariff list</h2>
            {tariffs.length > 0 ? (
                tariffs.map((tariff) => (
                    <div key={tariff.id} className="tariff-info">
                        <button
                            className="tariff-detail-btn roboto-regular"
                            onClick={() => handleTariffClick(tariff.id)}
                        >
                            {tariff.name} ---- {tariff.price} som 
                        </button>
                    </div>
                ))
            ) : (
                <p>No tariffs found.</p>
            )}
        </div>
    );
}

export default TariffsListComponent;
