import React from 'react';
import './Category.css';
import{useState,useEffect} from 'react';
const Category = () => {

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
    <>

    <h1 className='text-center text-info'>Let's Shop</h1>
    <div className='container-fluid mx-2'>
    <div className='row mt-5 mx-2'>
    <div className='col-md-3'>
    <div>
    <button className='btn btn-warning w-100 mb-4'>smartphones</button>
    </div>
    <div>
    <button className='btn btn-warning w-100 mb-4'>laptops</button>
    </div>
    <div>
    <button className='btn btn-warning w-100 mb-4'>fragrances</button>
    </div>
    <div>
    <button className='btn btn-warning w-100 mb-4'>skincare</button>
    </div>
    <div>
    <button className='btn btn-warning w-100 mb-4'>home-decoration</button>
    </div>
    </div>
   
    <div className='col-md-9'>
    <div className='row'>
    {data.map((item)=>{
        return(
      <>
      <div className='col-md-4'>
      <div className="card">
       <img src={item.thumbnail} className ="card-img-top" alt="..."/>
      <div className="card-body">
     <h5 className="card-title">{item.title}</h5>
     <h6 className="card-price">${item.price}</h6>
     <a href="#" className="btn btn-success mb-4">View More</a>
     <a href="#" className="btn btn-warning mb-4">Add to Cart</a>
  </div>
 
</div>
</div>
</>

    
    )})}
    </div>
    </div> 
    </div>
    </div>
    
</>

);
}


export default Category;
