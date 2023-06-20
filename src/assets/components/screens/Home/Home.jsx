import { CarItem } from './CarItem/CarItem';
import { useEffect, useMemo, useState } from 'react';
import CarForm from './CarForm/CarForm.jsx';
import { CarService } from '../../../services/car.services.js';


const Home = () => {
    //const filterCars = useMemo(() => cars.filter(car => car.price > 20000), [])
    const [cars, setCars] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await CarService.getAll();
            setCars(data);
        }
        fetchData();
    }, []);
    return <div >
        <h1>Cars Catalog</h1>
        <CarForm setCars={setCars} />
        <div>
            {cars.length ? cars.map(car => (
                <CarItem key={car.id} car={car} />
            ))
                : <p>There are no cars</p>
            }
        </div>
    </div>
}
export default Home;