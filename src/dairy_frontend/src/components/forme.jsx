import {
    useRef,
    useState,
    useEffect,
    createContext,
    useContext,
  } from "react";
  import React from "react";
  export default function Forme(props) {
    const [isedit, setedit] = useState(false);
    const [ishidden, sethidden] = useState(true);
    const [input, setinput] = useState({
      name: "",
      place: "",
      order: "",
      amount: "",
      totalamount: "",
    });
  
    useEffect(() => {
      const obje = props.INPUT;
      const Name = obje.name;
      const Place = obje.place;
      const Amount = obje.amount;
      const Order = obje.order;
      const Totalamount = obje.totalamount;
      input.name = Name;
      input.place = Place;
      input.amount = Amount;
      input.totalamount = Totalamount;
      input.order = Order;
    }, []);
    function gotoedit() {
      setedit(true);
      sethidden(false);
    }
    function handleChange(event) {
      const { name, value } = event.target;
      setinput((prevalue) => {
        return {
          ...prevalue,
          [name]: value,
        };
      });
    }
    function handlesubmit() {
      props.ADD(input);
      setinput({
        name: "",
        place: "",
        order: "",
        amount: "",
        totalamount: "",
      });
      setedit(false);
      sethidden(true);
      props.SHOWID();
      props.DELETEO(props.ID);
      event.preventDefault();
    }
  
    return (
      <div class="FORM">
        <h3 hidden={isedit}>You are going to edit {props.INPUT.name}</h3>
        <button hidden={isedit} class="note-btn-add" onClick={gotoedit}>
          {" "}
          edit
        </button>
  
        <form>
          <input
            hidden={ishidden}
            onChange={handleChange}
            name="name"
            placeholder="Name..."
            value={input.name}
            type="text"
            inputmode="email"
          />
          <input
            hidden={ishidden}
            onChange={handleChange}
            name="place"
            placeholder="Place..."
            value={input.place}
            type="text"
            inputmode="email"
          />
          <textarea
            hidden={ishidden}
            onChange={handleChange}
            name="order"
            placeholder="Order details..."
            value={input.order}
            type="text"
            inputmode="email"
          />
          <input
            hidden={ishidden}
            onChange={handleChange}
            name="amount"
            placeholder="Amount..."
            value={input.amount}
            type="text"
            inputmode="numeric"
          />
          <input
            hidden={ishidden}
            onChange={handleChange}
            name="totalamount"
            placeholder="Total Amount..."
            value={input.totalamount}
            type="text"
            inputmode="numeric"
          />
          <button hidden={ishidden} onClick={handlesubmit}>
            Add
          </button>
        </form>
      </div>
    );
  }
  