import { useForm } from 'react-hook-form';
import { ICarData } from '../../../../types/car.interface.js';
import styles from './CarForm.module.scss';
import ErrorMessage from './ErrorMessage';
import { useCreateCar } from './useCreateCar';


const CarForm = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<ICarData>({
        mode: 'onChange',
    });

    const { createCar } = useCreateCar(reset);
    return (
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <ErrorMessage error={errors?.name?.message} />
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