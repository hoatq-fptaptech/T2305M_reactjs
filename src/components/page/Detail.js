import { useParams } from "react-router-dom"

export default function Detail(){
    const {id} = useParams();
    const _getDetail = async ()=> {
        const url = `https://dummyjson.com/products/1`;
    }
    return (
        <div className="container">
            <h1>Detail page</h1>
        </div>
    )
}