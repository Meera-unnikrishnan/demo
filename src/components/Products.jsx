// import {React,useState,useEffect} from 'react';
// import styled from 'styled-components';

// const Container=styled.div`
// padding:20px;
// display:flex;

// `

// const Product = () => {

//   const [data,setData]=useState([]);
//   // console.log(data);
//   useEffect(()=>{
//     FetchData();
//   },[])

//  const FetchData=async()=>{
//   const response=await fetch("https://dummyjson.com/products");
//   // console.log(response);
//   const jsonData=await response.json();
//   // console.log(jsonData);
//   setData(jsonData);
//  }

//   return (
//     <div className='container'>
    
//       {data.map((item)=>{
//         return(
//           <div>
//           <Container>
//           <h1>{item.title}</h1>
//           <p>{item.description}</p>
//           </Container>

//           </div>
//         )
//         })}
//       </div>
    
//  ); 
// }

// export default Product;

import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {data.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;