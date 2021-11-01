import React from 'react';
import './Singers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"


const Singers = (props) => {

    const { name, Age, role, country, salary, img } = props.singer;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const cartIconTwo = <FontAwesomeIcon icon={faFacebook} />
    const cartIconthree = <FontAwesomeIcon icon={faGoogle} />

    return (

        <div className="col">
            <div className="card h-100 bg-info ">
                <div className="text-center">
                    <img src={img} className="image-round" alt="" />
                </div>
                <div className="px-4 py-2">
                    <h4>Name:   {name}</h4>
                    <h4>Role:   {role}</h4>
                    <h4>Age:   {Age}</h4>
                    <h4>Country:  {country}</h4>
                    <h4>Salary:  {salary}</h4>
                    <button type="button" className="btn btn-primary" onClick={() => props.addToCart(props.singer)}>{cartIcon} Add to cart</button>
                    <h2 className="text-center"><small>{cartIconTwo}</small>    <small className="ps-3">{cartIconthree}</small></h2>
                </div>
            </div>
        </div>

    );
};

export default Singers;