import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Coins(props) {
  const [type, setType] = useState("");
  const [value, setValue] = useState("");

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
        height: "300px",
        width: "300px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Update</h1>
      <div>
        <table style={{ width: "100%" }}>
          <tr>
            <th>Type</th>
            <th>Value</th>
          </tr>

          {props.coins.map((element) => {
            return (
              <tbody>
                <td style={{ textAlign: "center" }}>{element.type}</td>
                <td style={{ textAlign: "center" }}>{element.value}</td>
              </tbody>
            );
          })}
        </table>
      </div>
      <div>
        <label>Type</label>
        <input
          onChange={(element) => {
            setType(element.target.value);
          }}
          type="text"
        ></input>
        <br />
        <label>Value</label>
        <input
          onChange={(element) => {
            setValue(element.target.value);
          }}
          type="number"
        ></input>
      </div>
      <div className="btns-block__wrapper">
        <Link to="/">
          <button>Back</button>
        </Link>
        <button
          onClick={() => {
            if (props.coins.some((element) => element.type === type)) {
              props.updateCoin(type, value);
            } else props.addCoin(type, value);
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
}
