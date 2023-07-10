import { FC } from 'react';
import styles from './CarForm.module.scss';

const ErrorMessage: FC<{ error?: string }> = ({ error }) => {
    if (!error) return null;
    return (
        error && (
            <p className={styles.error}>Name is required!</p>
        )
    )

}
export default ErrorMessage;
