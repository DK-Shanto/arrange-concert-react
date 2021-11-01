import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Singers from '../singers/Singers';



const Buy = () => {
    const [singers, setSingers] = useState([]);
    const [cart, setCarts] = useState([]);
    useEffect(() => {
        fetch('./project-data.json')
            .then(res => res.json())
            .then(data => setSingers(data))
    }, [])

    const addToCart = (cartProduct) => {
        const newData = [...cart, cartProduct];
        setCarts(newData);
    }
    return (
        <div className="row">
            <div className="col-9">
                <div className="row row-cols-md-3 g-4">
                    {
                        singers.map(singer => <Singers
                            key={singer.id}
                            singer={singer}
                            addToCart={addToCart}
                        ></Singers>)
                    }
                </div>
            </div>
            <div className="col-3 text-white">
                {
                    <Cart cart={cart}></Cart>
                }

            </div>
        </div>
    );
};

export default Buy;