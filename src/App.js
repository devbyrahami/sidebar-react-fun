import React, { createContext } from "react";
import "./App.css";
import NavNav from "./components/navnav/navnav";
import SideNav from "./components/sidenav/sidenav";

const items = [
  { name: "home", label: "Home" },
  {
    name: "billing",
    label: "Billing",
    //creating subitems
    items: [{ name: "statements", label: "Statements" }]
  },
  {
    name: "settings",
    label: "Settings",
    //creating subitems'
    items: [{ name: "profile", label: "Profile" }]
  }
];

//need to export
// export const ItemsContext = createContext();

function App() {
  return (
    <div className="App">
      {/* we are passing the data thruout our app,so every component can consume our data
      else if we only pass to 1 component then it wont be resusable */}
      <NavNav />
      <SideNav items={items} />
    </div>
  );
}

export default App;

// <ItemsContext.Provider value={items}> </ItemsContext.Provider>
