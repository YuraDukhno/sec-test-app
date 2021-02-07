import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Components/Main";
import Coins from "./Components/Coins";

function App() {
  const [exchanges, setExchanges] = useState([]);
  const [coins, setCoins] = useState([
    { type: "Dollar", value: 3.38 },
    { type: "Euro", value: 4 },
    { type: "Shekel", value: 1 },
  ]);

  const addCoin = (type, value) => {
    setCoins([{ type, value }, ...coins]);
  };

  const updateCoins = (type, value) => {
    debugger;
    // console.log(coins);
    let newCoins = [...coins];
    for (let i = 0; i < newCoins.length; i++) {
      debugger;
      if (newCoins[i].type === type) newCoins[i].value = value;
    }
    setCoins(newCoins);

    // setCoins(newCoins);
  };

  const addExchange = (fromType, toType, fromValue, toValue, number) => {
    setExchanges([
      { fromType, toType, fromValue, toValue, number },
      ...exchanges,
    ]);
  };

  const deleteExchange = (id) => {
    let newExchangeList = exchanges.filter((element, index) => index === id);
    setExchanges(newExchangeList);
  };

  return (
    <div
      className="App"
      style={{
        minHeight: "600px",
        minWidth: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "nowrap",
      }}
    >
      <Router>
        <Route
          exact
          path="/"
          component={() => {
            return (
              <Main
                coins={coins}
                addExchange={addExchange}
                exchanges={exchanges}
                deleteExchange={deleteExchange}
              />
            );
          }}
        />
        <Switch>
          <Route
            exact
            path="/Coins"
            component={() => {
              return (
                <Coins
                  coins={coins}
                  addCoin={addCoin}
                  updateCoin={updateCoins}
                />
              );
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
