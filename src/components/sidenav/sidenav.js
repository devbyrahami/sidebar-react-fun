import React, { useContext, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./sidenav.styles.css";
import { Collapse } from "reactstrap";

// import ItemsContext from "../App";

/*--HARDCODE DATA
const SideNav = () => {
  const items = useContext(ItemsContext);
  
    (disablePadding and dense were used to slightly shrink the size of each of the items,
    and the button prop was used to add the stunning ripple effect).
    
  return (
    <div>
      <List disablePadding dense>
        <ListItem button>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Billing</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Settings</ListItemText>
        </ListItem>
      </List>
    </div>
  );
};
export default SideNav;
*/

//--2ND METHOD,DYNAMIC DATA
//creating another component to separate Parent and child menu item
const SideBarItem = ({
  label,
  items,
  depthStep = 10,
  depth = 0,
  ...otherProps
}) => {
  const [collapse, setCollapse] = useState(false);
  const toggleCollapse = () => setCollapse(!collapse);

  return (
    <>
      <ListItem button dense {...otherProps} onClick={toggleCollapse}>
        <ListItemText style={{ paddingLeft: depth * depthStep }}>
          <span>{label}</span>
        </ListItemText>
      </ListItem>
      {/*RECURSION- It will call itself until there is no more items in the array and it will auto stop */}
      <Collapse isOpen={collapse}>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map(subItem => (
              <SideBarItem
                key={subItem.name}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
              />
            ))}
          </List>
        ) : null}
      </Collapse>
    </>
  );
};

function SideNav({ items, depthStep, depth }) {
  return (
    <div className="sidenav-style">
      <List disablePadding dense>
        {items.map((sidebarItem, index) => (
          <SideBarItem
            key={`${sidebarItem.name}${index}`}
            depthStep={depthStep}
            depth={depth}
            {...sidebarItem}
          />
        ))}
      </List>
    </div>
  );
}

export default SideNav;
