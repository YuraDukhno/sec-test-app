import React from "react";
import { Link } from "react-router-dom";
import Exchange from "./Exchange";
import { useState } from "react";

export default function Main(props) {
  const [numberInput, setNumberInput] = useState("");
  const [fromType, setFromType] = useState();
  const [toType, setToType] = useState();
  const [flag, setFlag] = useState(false);

  const calculate = (fromType, toType, numberInput) => {
    // debugger;
    let fromValue = 0;
    let toValue = 0;
    for (let i = 0; i < props.coins.length; i++) {
      if (props.coins[i].type === fromType) fromValue = props.coins[i].value;
      if (props.coins[i].type === toType) toValue = props.coins[i].value;
    }
    alert((fromValue / toValue) * numberInput);
    props.addExchange(fromType, toType, fromValue, toValue, numberInput);
  };

  const hidden = () => {
    if (
      numberInput < 0 ||
      numberInput.length === 0 ||
      fromType === toType ||
      fromType === "Select Type" ||
      toType === "Select Type"
    ) {
      return (
        <div
          className="btn-start__wrapper"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button disabled>Start</button>
        </div>
      );
    } else
      return (
        <div
          className="btn-start__wrapper"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button
            onClick={() => {
              calculate(fromType, toType, numberInput);
            }}
          >
            Start
          </button>
        </div>
      );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignContent: "center",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "grey",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Exchange</h1>
      <div
        className="from-input__wrapper"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <p>From:</p>
        <select onChange={(element) => setFromType(element.target.value)}>
          <option>Select Type</option>
          {props.coins.map((element) => {
            return <option>{element.type}</option>;
          })}
        </select>
        <input
          onChange={(element) => setNumberInput(element.target.value)}
          type="number"
        ></input>
      </div>
      <div
        className="to-input__wrapper"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <p>To:</p>
        <select onChange={(element) => setToType(element.target.value)}>
          <option>Select Type</option>
          {props.coins.map((element) => {
            return <option>{element.type}</option>;
          })}
        </select>
      </div>
      {hidden()}
      <div className="btns-block__wrapper">
        <Link to="/Coins">
          <button>Update</button>
        </Link>
        <button>Facebook Share</button>
        <button
          onClick={(v) =>
            setFlag((prevFlag) => {
              return !prevFlag;
            })
          }
        >
          View exchange list
        </button>
      </div>
      <div className="exchange-list__wrapper">
        {flag
          ? props.exchanges.map((element, index) => {
              return (
                <div>
                  <Exchange
                    fromType={element.fromType}
                    toType={element.toType}
                    fromValue={element.fromValue}
                    toValue={element.toValue}
                    number={element.number}
                    index={index}
                    deleteExchange={props.deleteExchange}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
