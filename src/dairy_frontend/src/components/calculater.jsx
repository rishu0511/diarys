import { useState, useRef, useCallback, useEffect } from "react";
import React from "react";

export default function Calculater() {
  const [Value, setvalue] = useState("");
  const [oprater, setoprater] = useState("");
  const [arr, setarr] = useState([""]);
  const [ishidden, sethidden] = useState(true);
  const [isoprater, setOprater] = useState(true);
  const [isgivenO, setgiveno] = useState(false);
  const addnum_1 = useCallback(() => {
    setarr((t) => [...t, "1"]);
    setOprater(false);
  }, [arr, isoprater]);
  const addnum_2 = useCallback(() => {
    setarr((t) => [...t, "2"]);
    setOprater(false);
  }, [arr, isoprater]);
  const addnum_3 = useCallback(() => {
    setarr((t) => [...t, "3"]);
    setOprater(false);
  }, [arr, isoprater]);
  const addnum_4 = useCallback(() => {
    setarr((t) => [...t, "4"]);
    setOprater(false);
  }, [arr, isoprater]);
  const addnum_5 = useCallback(() => {
    setarr((t) => [...t, "5"]);
    setOprater(false);
  }, [arr, isoprater]);
  const addnum_6 = useCallback(() => {
    setarr((t) => [...t, "6"]);
    setOprater(false);
  }, [arr, isoprater]);
  const addnum_7 = useCallback(() => {
    setarr((t) => [...t, "7"]);
    setOprater(false);
  }, [arr, isoprater]);
  const addnum_8 = useCallback(() => {
    setarr((t) => [...t, "8"]);
    setOprater(false);
  }, [arr, isoprater]);
  const addnum_9 = useCallback(() => {
    setarr((t) => [...t, "9"]);
    setOprater(false);
  }, [arr, isoprater]);
  const addnum_0 = useCallback(() => {
    setarr((t) => [...t, "0"]);
    setOprater(false);
  }, [arr, isoprater]);

  const add_plus = useCallback(() => {
    if (isgivenO === false) {
      setarr((t) => [...t, " + "]);
      setoprater(" + ");
      setOprater(true);
    }
    setgiveno(true);
  }, [isgivenO]);
  const add_minus = useCallback(() => {
    if (isgivenO === false) {
      setarr((t) => [...t, " - "]);
      setoprater(" - ");
      setOprater(true);
    }
    setgiveno(true);
  }, [isgivenO]);
  const add_divide = useCallback(() => {
    if (isgivenO === false) {
      setarr((t) => [...t, " ÷ "]);
      setoprater(" ÷ ");
      setOprater(true);
    }
    setgiveno(true);
  }, [isgivenO]);
  const add_multiply = useCallback(() => {
    if (isgivenO === false) {
      setarr((t) => [...t, " × "]);
      setoprater(" × ");
      setOprater(true);
    }
    setgiveno(true);
  }, [isgivenO]);

  let accumulater = Value;
  var new_numbers = "";
  {
    ishidden
      ? (new_numbers = arr.reduce(function (current, accumulater) {
          return current + accumulater;
        }))
      : null;
  }
  console.log(new_numbers);
  const delete_element = useCallback(() => {
    var last = arr.length;
    setarr((prevalue) => {
      return prevalue.filter((item, index) => {
        if (last === 1) {
          sethidden(false);
        } else {
          return index != last - 1;
        }
      });
    });
  }, [arr]);
  const start_write = useCallback(() => {
    sethidden(true);
    setarr((t) => [" "]);
  }, [ishidden, arr]);

  const equalto = useCallback(() => {
    setgiveno(false);
    let index = new_numbers.indexOf(oprater);
    let sec_num = new_numbers.slice(index + 2);

    var f_num = new_numbers.slice(0, index);
    if (index >= 0) {
      var snum = parseFloat(sec_num);
      var fnum = parseFloat(f_num);
    } else {
      var snum = 0;
      var fnum = 0;
    }
    if (oprater === " + ") {
      var store_plus = snum + fnum;
      var parseSp = String(store_plus);
      var split_stringp = parseSp.split("");
      setarr((value) => {
        return split_stringp;
      });
    } else if (oprater === " - ") {
      var store_mnus = fnum - snum;
      var parseSm = String(store_mnus);
      var split_stringm = parseSm.split("");
      setarr((value) => {
        return split_stringm;
      });
    } else if (oprater === " ÷ ") {
      var store_divide = fnum / snum;
      var parseSd = String(store_divide);
      var split_stringd = parseSd.split("");
      setarr((value) => {
        return split_stringd;
      });
    } else if (oprater === " × ") {
      var store_multiply = fnum * snum;
      var parseSM = String(store_multiply);
      var split_stringM = parseSM.split("");
      setarr((value) => {
        return split_stringM;
      });
    } else {
      setarr((value) => {
        return [""];
      });
    }
  }, [arr, oprater]);
  return (
    <div class="calculater">
      <div class="cal-screen">
        <h5>{new_numbers}</h5>
      </div>
      <div class="keyboard">
        <div class="symbols nbox">
          <button onClick={addnum_1}>1</button>
          <button onClick={addnum_2}>2</button>
          <button onClick={addnum_3}>3</button>
          <button onClick={addnum_4}>4</button>
          <button onClick={addnum_5}>5</button>
          <button onClick={addnum_6}>6</button>
          <button onClick={addnum_7}>7</button>
          <button onClick={addnum_8}>8</button>
          <button onClick={addnum_9}>9</button>
          <button onClick={addnum_0}>0</button>
        </div>
        <div class="symbols sbox">
          <button disabled={isoprater} onClick={add_plus}>
            +
          </button>
          <button disabled={isoprater} onClick={add_minus}>
            -
          </button>
          <button disabled={isoprater} onClick={add_divide}>
            ÷
          </button>
          <button disabled={isoprater} onClick={add_multiply}>
            ×
          </button>
          <button disabled={isoprater} onClick={equalto}>
            =
          </button>
          <button id="myH1" onClick={delete_element}>
            back
          </button>
          <button id="cal-startwrite" onClick={start_write}>
            startwrite
          </button>
        </div>
      </div>
    </div>
  );
}
