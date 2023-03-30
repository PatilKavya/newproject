import React from "react";
//import './Form.css'
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { listAction } from "../store/data";

const Form = () => {
  console.log("Form");
  const dispatch=useDispatch();

  const history=useHistory();
  const submitHandler = async(e) => {
    e.preventDefault();
    const mail= e.target.mail.value;
    const obj = {
      name: e.target.name.value,
      prof: e.target.prof.value,
      mail: e.target.mail.value,
    };
dispatch(listAction.add(obj));
 try {const res=await axios.post(`https://crudcrud.com/api/cd6f4d8d0d7347f185661e8a7b1c84cb/persons`,obj)
if(res){ 
  console.log(res.data)
}} catch(error){
  console.log(error)
}
    console.log(obj);
   history.replace('/home')
  };

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <label>Name: </label>
          <input type="text" name="name" id="name" />
          <label>Profession: </label>
          <input type="text" name="prof" id="prof" />
          <label>Email: </label>
          <input type="email" name="mail" id="mail" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
