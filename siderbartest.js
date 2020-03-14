const SideNav = ({ items }) => {
  //   const items = useContext(ItemsContext);

  return (
    //we are styling the parent dive so the child can fit it according to diff screen
    <div className="sidenav-style">
      <List disablePadding dense>
        {/* passing and destructuring subitems like so..*/}
        {items.map(({ label, name, items: subItems, ...otherProps }) => {
          return (
            <React.Fragment key={name}>
              <ListItem {...otherProps} button>
                <ListItemText>{label}</ListItemText>
              </ListItem>

              {/* RECURSION HERE and 
                checking if there is subItems we will show like so,
              else show nothing*/}
              {Array.isArray(subItems) ? (
                <List disablePadding>
                  {subItems.map(subItem => {
                    return (
                      <ListItem key={subItem.name} button>
                        <ListItemText className="sidebar-item-text">
                          {subItem.label}
                        </ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              ) : null}
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
};
