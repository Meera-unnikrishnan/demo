// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useEffect} from "react";
const ShowProduct = () => {

    const [data,setData]=useState([]);
    // console.log(data);
    useEffect(()=>{
      FetchData();
    },[])

    const FetchData = () => {
        fetch(`https://dummyjson.com/products`)
          .then((response) => response.json())
          .then((actualData) => {
            console.log(actualData);
            setData(actualData.products);
            console.log(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
      return (
        <div>
       {data.map((item)=>{
        return(
            <div className="col">
            <div className="card shadow-sm">
                {item.discountPercentage}
                <img
                  className="card-img-top bg-dark cover"
                  height="200"
                  alt=""
                  src={item.thumbnail}
                />
              <div className="card-body">
                <h5 className="card-title text-center text-dark text-truncate">
                  {item.title}
                </h5>
                <p className="card-text text-center text-muted mb-0">{item.price}</p>
                <div className="d-grid d-block">
                  <button className="btn btn-outline-dark mt-3">
                    <FontAwesomeIcon icon={["fas", "cart-plus"]} /> Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )   
    }
       )}
    </div>
       
       )
    }
    export default ShowProduct;