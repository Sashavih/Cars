import CarForm from './CarForm/CarForm';
import Header from '../../ui/Header';
import Catalog from '../../ui/Catalog';
import { CarService } from '../../../services/car.services.js';
import { useQuery } from '@tanstack/react-query';


const Home = () => {
    const { data, isLoading, } = useQuery(['cars'], () => CarService.getAll(),);
    if (isLoading) return <p>Is loading..</p>

    return (
        <div>
            <h1>Cars Catalog</h1>
            <Header />
            <CarForm />
            <Catalog data={data} />
        </div>

    )
}
export default Home;

/*const Home = () => {
    const { data, isLoading, } = useQuery(['cars'], () => CarService.getAll(),);
    const filterCars = useMemo(() => cars.filter(car => car.price > 20000), [])

useEffect(() => {
        const fetchData = async () => {
            const data = await CarService.getAll();
            setCars(data);
        }
        fetchData();
    }, []);*/
// {!!user && (<></> - переводит в булево значение явно и переворачивает значение.