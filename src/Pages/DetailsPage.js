import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listAction } from "../store/data";

const DetailsPage = () => {
  const list=useSelector(state=>state.list.list)
  const dispatch=useDispatch();


  useEffect(()=>{
    async function fetchData(){
    try {const res=await axios.get(`https://crudcrud.com/api/cd6f4d8d0d7347f185661e8a7b1c84cb/persons`)
    if(res){ 
      console.log(res.data)
      dispatch(listAction.fetch(res.data))
    }} catch(error){
      console.log(error)
    }
   }
fetchData();

  },[])
  return (
    <>
      <h1>DetailsPage</h1>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.name}>
              {" "}
              <Link to={`/details/${item.name}`}>{ item.name} </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DetailsPage;
