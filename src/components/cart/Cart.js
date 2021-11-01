import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    let total = 0, totalCost = 0;
    const { cart } = props;
    for (const product of cart) {
        totalCost += product.salary;
        total++;
    }
    let i = 1;
    const cartIcon = <FontAwesomeIcon icon={faUser} />
    return (
        <div className="py-5 bg-primary px-1 rounded">
            <h2> <small>{cartIcon}</small> Singers added: {total}</h2>
            <h4 className="ps-4">Total costs: {totalCost} </h4>
            {
                cart.map(product => <h4 className="ps-4">{i++}. {product.name}</h4>)
            }
        </div>
    );
};

export default Cart;