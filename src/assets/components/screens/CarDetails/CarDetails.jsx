import { useNavigate, useParams } from "react-router";
import { CarService } from '../../../services/car.services.js';
import { useState, useEffect } from "react";
import { CarItem } from "../home/CarItem/CarItem";
import { Link } from "react-router-dom";


const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState();

    useEffect(() => {
        if (!id) return;
        const fetchData = async () => {
            const data = await CarService.getById(id);
            setCar(data);
        }
        fetchData();
    }, [id]);

    const nav = useNavigate();

    if (!car?.name) return <p>Loading...</p>;
    return (
        <div>
            <button onClick={() => nav('/')} className="btn">Back</button>
            <CarItem car={car} /></div>
    )
}
export default CarDetails;