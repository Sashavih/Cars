import React from "react";

const Price: React.FC<{ price: string }> = ({ price }) => {
    return (
        <p>{new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'USD',
        }).format(+price)}</p>)
}

export default React.memo(Price);