import { CarItem } from './CarItem/CarItem';
import { useContext, useEffect, useMemo, useState } from 'react';
import CarForm from './CarForm/CarForm.jsx';
import { CarService } from '../../../services/car.services.js';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';


const Home = () => {
    const { data, isLoading, } = useQuery(['cars'], () => CarService.getAll(),);
    const { user, setUser } = useContext(AuthContext);


    //const filterCars = useMemo(() => cars.filter(car => car.price > 20000), [])
    /*
useEffect(() => {
        const fetchData = async () => {
            const data = await CarService.getAll();
            setCars(data);
        }
        fetchData();
    }, []);*/

    if (isLoading) return <p>Is loading..</p>
    return (
        <div>
            <h1>Cars Catalog</h1>

            {user ? (
                <>
                    <h2>Welcome, {user.name}!</h2>
                    <button onClick={() => setUser(null)}>Logout</button>
                </>
            )
                : (
                    <button onClick={() => setUser({
                        name: 'Sasha',
                    })}>Login</button>
                )
            }
            <CarForm />
            <div>
                {data.length ? data.map(car => (
                    <CarItem key={car.id} car={car} />
                ))
                    : <p>There are no cars</p>
                }
            </div>
        </div >
    )
}
export default Home;
// {!!user && (<></> - переводит в булево значение явно и переворачивает значение.