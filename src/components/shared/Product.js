import { useState } from "react";
import { Link } from "react-router-dom";

function Product(props){
    const product = props.product;
    return ( // jsx
        <div className="col-3 mt-3 mb-3">
            <div className="card">
                <img src={product.thumbnail} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={"/product/"+product.id} className="btn btn-primary me-1">Detail</Link>
                    <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
            </div>
        </div>
    );
}
export default Product; // create component