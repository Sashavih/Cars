import styles from './CarForm.module.scss';
import { useForm } from 'react-hook-form';

const CarForm = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });
    console.log(errors);

    const createCar = (data) => {

        //setCars(prev => [{ id: prev.length + 1, ...data }, ...prev,]);
        reset();
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            {errors?.name?.message && (
                <p className={styles.error}>Name is required!</p>
            )}
            {errors?.price?.message && (
                <p className={styles.error}>Price is required!</p>
            )}

            <input
                {...register('name', { required: 'name is required!' })}
                placeholder='Name' />
            <input
                {...register('price', { required: 'price is required!' })}
                placeholder='Price' />
            <input
                {...register('image', { required: false })}
                placeholder='Image' />
            <button className='btn' >Create</button>
        </form>

        //без react hook forms
        /*<form className={styles.form}>
            <input placeholder='Name' onChange={e => setData(prev => ({
                ...prev, name: e.target.value
            }))} value={data.name} />
            <input placeholder='Price' onChange={e => setData(prev => ({
                ...prev, price: e.target.value
            }))} value={data.price} />
            <input placeholder='Image' onChange={e => setData(prev => ({
                ...prev, image: e.target.value
            }))} value={data.image} />
            <button className='btn' onClick={e => createCar(e)}>Create</button>
        </form>*/
    )
}
export default CarForm;