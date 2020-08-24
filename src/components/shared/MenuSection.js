import React, { Component } from "react";
import menuItems from "./menuItems";
import { Drawer, ListItem, List, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const styles = {
  list: {
    width: 250,
  },
  links: {
    textDecoration: "none",
  },
  menuHeader: {
    paddingLeft: "30px",
  },
};

export default class MenuSection extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClick(item) {
    this.setState((prevState) => ({ [item]: !prevState[item] }));
  }

  handler(children) {
    const { classes } = this.props;
    const { state } = this;

    return children.map((subOption) => {
      if (!subOption.children) {
        return (
          <div key={subOption.name}>
            <ListItem button key={subOption.name}>
              <Link to={subOption.url} className={styles.links}>
                <ListItemText inset primary={subOption.name} />
              </Link>
            </ListItem>
          </div>
        );
      }
      return (
        <div key={subOption.name}>
          <ListItem button onClick={() => this.handleClick(subOption.name)}>
            <ListItemText inset primary={subOption.name} />
            {state[subOption.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={state[subOption.name]} timeout="auto" unmountOnExit>
            {this.handler(subOption.children)}
          </Collapse>
        </div>
      );
    });
  }

  render() {
    const { classes, drawerOpen, menuOptions } = this.props;
    return (
      <div className={styles.list}>
        <Drawer
          variant="persistent"
          anchor="left"
          open
          classes={{ paper: styles.list }}
        >
          <div>
            <List>
              <ListItem key="menuHeading" divider disableGutters>
                <ListItemText
                  className={styles.menuHeader}
                  inset
                  primary="Nested Menu"
                />
              </ListItem>
              {this.handler(menuItems.data)}
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}
