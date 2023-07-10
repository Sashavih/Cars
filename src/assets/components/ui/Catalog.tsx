import { CarItem } from "../screens/home/CarItem/CarItem";
import { ICar } from "../../types/car.interface";

interface ICatalog {
    data?: ICar[]
}
const Catalog: React.FC<ICatalog> = ({ data = [] }) => {
    return <div>
        {data.length ? data.map(car => (
            <CarItem key={car.id} car={car} />
        ))
            : <p>There are no cars</p>
        }
    </div >
}
export default Catalog;