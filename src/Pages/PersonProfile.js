import React , {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listAction } from "../store/data";


const PersonProfile=()=>{

// const list=useSelector(state=>state.list.list)
const params=useParams();
// const dispatch=useDispatch();
// console.log(list)

// useEffect(()=>{
//   async function fetchData(){
//   try {const res=await axios.get(`https://crudcrud.com/api/cd6f4d8d0d7347f185661e8a7b1c84cb/persons`)
//   if(res){ 
//     console.log(res.data)
//     dispatch(listAction.fetch(res.data))
//   }} catch(error){
//     console.log(error)
//   }
//  }
// fetchData();
// },[])

const list=[{name:'Kavya',prof:'Dancer',mail:'kavya@gmail.com'}]

console.log(params.personID)

let person=list.find(item=>item.name===params.personID)
console.log(list)

return (
    <>
    <h4>{person.name} {person.prof}</h4>
    </>
)
}

export default PersonProfile;