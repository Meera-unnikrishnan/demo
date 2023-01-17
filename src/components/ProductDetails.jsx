// import React from 'react';
// import{useState,useEffect} from 'react';
// const ProductDetails = () => {

//     const [data,setData]=useState([]);
//     // console.log(data);
//     useEffect(()=>{
//       FetchData();
//     },[])

//     const FetchData = () => {
//         fetch(`https://dummyjson.com/products`)
//           .then((response) => response.json())
//           .then((actualData) => {
//             // console.log(actualData);
//             setData(actualData.product);
//             // console.log(data);
//           })
//           .catch((err) => {
//             console.log(err.message);
//           });
//       };
//   return (
//     <div>
//     {data.map((item,index)=>{
//         return(
//     <div className='container'>
//       <p key={index}></p>
//       <div className="card" style={{height: '26rem',width:'26rem'}}>
//       <img src={item.thumbnail} style={{ objectFit: 'cover',width: '20rem',
//       height: '10rem' }} className ="card-img-top" alt="..."/>
//      <div className="card-body" style={{height:'75px'}}>
//      <h5 className="card-title">{item.title}</h5>
// </div>
// </div>
// </div>
//     )}
// )}
// </div>
// );
// }


// export default ProductDetails;
