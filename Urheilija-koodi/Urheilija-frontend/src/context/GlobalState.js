import React, { useReducer } from "react";
import AppReducer from "./AppReducer";
import UrheilijaContext from "./YhteystiedotContext";
import { GET_URHEILIJAT } from "./types";
import axios from "axios";
const GlobalState = (props) => {
  let initialState = {
    urheilijatiedot: [],
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const getUrheilijat = async () => {
    try {
      let res = await axios.get("http://localhost:3001/urheilijat");
      let { data } = res;
      dispatch({ type: GET_URHEILIJAT, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
  const getUrheilija = async (id) => {
    try {
      let sql = "http://localhost:3001/urheilijat/" + id;
      let res = await axios.get(sql);
      let { data } = res;
      console.log("GET_URHEILIJA:");
      dispatch({ type: "GET_URHEILIJA", payload: data });
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  const addUrheilija = async (uusiUrheilija) => {
    try {
      const res = await axios
        .post(`http://localhost:3001/lisaa`, uusiUrheilija)
        .then((res) => {
          dispatch({ type: "ADD_URHEILIJA", payload: res.data });
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const setUrheilija = async (id, paivitettyUrheilija) => {
    try {
      const res = await axios
        .put(`http://localhost:3001/urheilijat/${id}`, paivitettyUrheilija)
        .then((res) => {
          dispatch({ type: "EDIT_URHEILIJA", payload: res.data });
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const deleteUrheilija = async (id) => {
    try {
      let sql = "http://localhost:3001/urheilijat/" + id["id"];

      const res = await axios.delete(sql).then((res) => {
        dispatch({ type: "DELETE_URHEILIJA", payload: id["id"] });
        console.log(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <UrheilijaContext.Provider
      value={{
        urheilijatiedot: state.urheilijatiedot,
        getUrheilijat,
        setUrheilija,
        addUrheilija,
        deleteUrheilija,
        getUrheilija,
      }}
    >
      {props.children}
    </UrheilijaContext.Provider>
  );
};
//};
export default GlobalState;
