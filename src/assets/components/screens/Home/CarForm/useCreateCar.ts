import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CarService } from '../../../../services/car.services';
import { SubmitHandler, UseFormReset } from 'react-hook-form';
import { ICarData } from '../../../../types/car.interface';

export const useCreateCar = (reset: UseFormReset<ICarData>) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation(['create car'], (data: ICarData) =>
        CarService.create(data), {
        onSuccess: () => {
            queryClient.invalidateQueries(['cars']);
            reset();
        }
    });

    const createCar: SubmitHandler<ICarData> = data => {
        //setCars(prev => [{ id: prev.length + 1, ...data }, ...prev,]);
        mutate({ ...data })
    }
    return { createCar }
}