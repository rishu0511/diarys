import react from "react";
import { useState, useCallback, useEffect } from "react";
import Allorder from "./createorder.jsx";
import React from "react";
export default function Searchdiv(props) {
  const [Value, setValue] = useState("");
  const [sId, setsid] = useState(0);
  const [Id, setid] = useState(0);
  const [object, setobject] = useState([]);
  const [search, setsearch] = useState(false);;
   const [Object, setObject] = useState({
      name: "",
      place: "",
      order: "",
      amount: "",
      totalamount: "",
    });
  function handlechange(event) {
    const { name, value } = event.target;
    setValue((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  }
  useEffect(() => {
    const len = props.ORDERS.length;
    props.ORDERS.forEach((element,index)=> {
        if(element.name === Value.name){
            setsid(index)
        }
    });
  });
  function Remove() {
    setsearch(false);
  }
  const searchbutton = useCallback(() => {
    setsearch(true);;
    const eObje = props.ORDERS.filter((item, index) => {
        return index === sId;
      });
    const obje = eObje[0];
    const Name = obje.name;
    const Place = obje.place;
    const Amount = obje.amount;
    const Order = obje.order;
    const Totalamount = obje.totalamount;
    Object.name = Name;
    Object.place = Place;
    Object.amount = Amount;
    Object.totalamount = Totalamount;
    Object.order = Order;
    props.SEARCHF();
  }, [props.ORDERS,sId]);
  return (
    <div class="searchdiv">
      <input
        onChange={handlechange}
        id="searchI"
        name="name"
        placeholder="Name..."
        type="text"
      />
      <button class="note-btn-add" onClick={searchbutton}>
        {" "}
        search
      </button>
      {search ? (
        <div class="active">
          <p>Name: {Object.name}</p>
          <p>Place: {Object.place}</p>
          <p>Order :{Object.order}</p>
          <p>Amount: {Object.amount}</p>
          <p>Total amount: {Object.totalamount}</p>
          <button class="note-btn-add" onClick={Remove}>
            Remove
          </button>
        </div>
      ) : null}
    </div>
  );
}
