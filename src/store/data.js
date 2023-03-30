import { createSlice } from "@reduxjs/toolkit";

const initialState={list:[]};

const listSlice= createSlice({ 
    name:'list',
    initialState:initialState,
    reducers:{
        add(state,action){
            state.list.push(action.payload);
        },
        fetch(state,action){
            state.list=action.payload;
        }
    }
})

export const listAction=listSlice.actions;

export default listSlice;