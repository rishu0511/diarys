import "../../assets/main.css";
import React, { useState } from "react";
import Form from "./form.jsx";
import Forme from "./forme.jsx";
import Orders from "./orders.jsx";
import Allorder from "./createorder.jsx";
import Calculater from "./calculater.jsx";
import Searchdiv from "./search.jsx";;

export default function App() {
  const [ishidden, sethidden] = useState(false);
  const [ishiddenshow, setshow] = useState(false);
  const [order, setorder] = useState([]);
  const [object, setobject] = useState([]);
  const [isedit, setedit] = useState(false);
  const [ids, setid] = useState(0);
  const [Input, setInput] = useState({
    name: "",
    place: "",
    order: "",
    amount: "",
    totalamount: "",
  });

  function addorder(orders) {
    sethidden(false);
    setshow(true);
    setorder((prevalue) => {
      return [...prevalue, orders];
    });
  }
  function deleteorder(id) {
    setorder((prevalue) => {
      return prevalue.filter((item, index) => {
        return index != id;
      });
    });
  }

  function deleteid(id) {
    const eObjec = order.filter((item, index) => {
      return index === id;
    });
    setid(id);
    setobject(eObjec);
    setedit(true);
    sethidden(false);
    setshow(false);
    const obje = eObjec[0];
    const Name = obje.name;
    const Place = obje.place;
    const Amount = obje.amount;
    const Order = obje.order;
    const Totalamount = obje.totalamount;
    Input.name = Name;
    Input.place = Place;
    Input.amount = Amount;
    Input.totalamount = Totalamount;
    Input.order = Order;
  }
  function searchfinder() {
    setshow(false);
    sethidden(false);
  }
  function Expand() {
    setshow(false);
    if (ishidden === false) {
      sethidden(true);
    } else if (ishidden === true) {
      sethidden(false);
    }
  }
  function Expandorder() {
    sethidden(false);
    if (ishiddenshow === false) {
      setshow(true);
    } else if (ishiddenshow === true) {
      setshow(false);
    }
  }
  function showid() {
    setedit(false);
  }
  return (
    <div className="App">
      <h1>Rajendra works Shop</h1>
      <h2 id="title">All orders</h2>
      <div>
        <button onClick={Expand} class="expand">
          New orders{" "}
        </button>
        <button onClick={Expandorder} class="expand-show">
          Show orders
        </button>
      </div>
      <Searchdiv ORDERS={order} SEARCHF={searchfinder} />
      {isedit ? (
        <Forme
          ADD={addorder}
          SHOWID={showid}
          INPUT={Input}
          DELETEO={deleteorder}
          ID={ids}
        />
      ) : null}
      {ishidden ? <Form ADD={addorder} /> : null}
      {ishiddenshow ? (
        <Allorder SHOWID={deleteid} ORDER={order} DELETEID={deleteorder} />
      ) : null}

      <Calculater />
  
    </div>
  );
}

