// import styled from "styled-components";
// import {ShoppingCartOutlined,SearchOutlined,FavoriteBorderOutlined} from "@mui/icons-material";
// import {React,useState,useEffect} from 'react';
// import { Button } from "@mui/material";
// const Title=styled.h1`
//   display:flex;
//   align-items:center;
//   justify-content:center;
// `
// const Info=styled.div`
// opacity: 0;
// width: 100%;
// height: 100%;
// position: absolute;
// top: 0;
// left: 0;
// background-color: rgba(0, 0, 0, 0.2);
// z-index: 3;
// display: flex;
// align-items: center;
// justify-content: center;
// transition: all 0.5s ease;
// cursor: pointer;

// `
// const Container = styled.div`
// flex:1;
// margin:5px;
// min-width: 280px;
// height: 350px;
// display: flex;
// align-items: center;
// justify-content: center;
// background-color: #f5fbfd;
// position: relative;
// &:hover ${Info}{
//     opacity: 1;
//   }
// `

// // const Circle=styled.div`
// // width: 200px;
// // height: 200px;
// // border-radius: 50%;
// // background-color: white;
// // position: absolute;
// // `;

// const Image=styled.img`
// height: 75%;
// width:50%;
// z-index: 2;
// `;


// const Icon=styled.div`
// width: 40px;
// height: 40px;
// border-radius: 50%;
// background-color: white;
// display: flex;
// align-items: center;
// justify-content: center;
// margin: 10px;
// transition: all 0.5s ease;
// &:hover {
//     background-color: #e9f5f5;
//     transform: scale(1.1);
//   }
// `



// const Product = () => {

//     const [data,setData]=useState([]);
//     // console.log(data);
//     useEffect(()=>{
//       FetchData();
//     },[])

//     const FetchData = () => {
//         fetch(`https://dummyjson.com/products`)
//           .then((response) => response.json())
//           .then((actualData) => {
//             console.log(actualData);
//             setData(actualData.products);
//             console.log(data);
//           })
//           .catch((err) => {
//             console.log(err.message);
//           });
//       };
  
// //    const FetchData=async()=>{
// //     const response=await fetch("https://dummyjson.com/products");
// //     // console.log(response);
// //     const jsonData=await response.json();
// //     // console.log(jsonData);
// //     setData(jsonData);
// //     console.log(data);
// //    }
  
//    return (
//     <div>
//     <Title>
//     <h1>Our Products</h1>
//     </Title>
//    {data.map((item)=>{
//     return(
//    <Container>
//     <Image src={item.thumbnail}/>
//     <div><h2>{item.title}</h2></div>
//     <Info>
//         <Icon>
//         <ShoppingCartOutlined/>
//         </Icon>
//         <Icon>
//         <SearchOutlined/>
//         </Icon>
//         <Icon>
//         <FavoriteBorderOutlined/>
//         </Icon>
//     </Info>
// </Container>
//     )   
// }
//    )}
// </div>
   
//    )
// }

// export default Product;

import React from 'react';
import{useState,useEffect} from 'react';
const Product = () => {

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
    <div className='container'>
    <h1 className='text-center text-info'>OUR PRODUCT</h1>
    <div className='row '>
    {data.map((item,index)=>{
        return(
         
      <div className='col-md-3'>
      <div className="card" style={{height: '26rem',width:'26rem'}} key={index}>     
      <img src={item.thumbnail} style={{ objectFit: 'cover',width: '20rem',
      height: '10rem' }} className ="card-img-top" alt="..."/>
     <div className="card-body" style={{height:'75px'}}>
     <h5 className="card-title">{item.title}</h5>
     <div className="card-footer" style={{width: '25rem',padding:'1px'}}>
     <button className="btn btn-success">View Details</button>
     <button className="btn btn-warning">Add to Cart</button>
     </div>
</div>
</div>
</div>
     
    
    )})}
</div></div></div>

);
}


export default Product;
