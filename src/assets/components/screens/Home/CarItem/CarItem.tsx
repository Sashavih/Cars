import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CarItem.module.scss';
import Price from './Price';
import { ICar } from '../../../../types/car.interface';

export const CarItem = ({ car }: { car: ICar }) => {
    const [count, setCount] = useState(0);
    return (
        <div className={styles.item}>
            <div className={styles.info}>
                <h2>{car.name}</h2>
                <Price price={car.price} />
            </div>
            <div
                style={{
                    backgroundImage: `url(${car.image})`,
                }}
                className={styles.img} />
            <Link to={`/car/${car.id}`} className='btn'>Read More</Link>
        </div>
    )
}