import { useState } from "react";

function Product(props){
    const product = props.product;
  //  const liked = 0; // readonly
    const [liked,setLiked] = useState(0);
    const upLiked = ()=> { // arrow function
        setLiked(liked+1);// liked = liked + 1;
    }
    return ( // jsx
        <div className="col-3">
            <h1>{ product.name }</h1>
            <p>${ product.price }</p>
            <p>Sản phẩm hot nhất của Apple</p>
            <p>{ product.qty > 0 ? "Còn hàng": "Hết hàng" }</p>
            <p>
            <i className="bi bi-hand-thumbs-up-fill text-warning"></i> 
            <b>{liked}</b>
            </p>
            <button onClick={upLiked} className="btn btn-outline-danger" type="button">Like</button>
        </div>
    );
}
export default Product; // create component