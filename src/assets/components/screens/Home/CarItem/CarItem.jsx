import styles from './CarItem.module.scss';

export const CarItem = ({ car }) => {
    return (
        <div className={styles.item}>
            <div className={styles.info}>
                <h2>{car.name}</h2>
                <p>{new Intl.NumberFormat('ru-RU', {
                    style: 'currency',
                    currency: 'USD',
                }).format(car.price)}</p>
            </div>
            <div
                style={{
                    backgroundImage: `url(${car.image})`,
                }}
                className={styles.img} />
            <button className='btn'>Read More</button>
        </div>
    )
}