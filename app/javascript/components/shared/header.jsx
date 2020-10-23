import React from "react";
import PropTypes from "prop-types";
import { AppBar, Typography, Toolbar, IconButton } from "@material-ui/core";
import {AccountCircle, Create} from '@material-ui/icons'
class Header extends React.Component {
  render() {
    const style={
      color:"white",
      textDecoration: "none",
    }
    const appBarStyle={
      justifyContent:"space-between",
    }
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar style={appBarStyle}>
            <Typography variant="h6" style={style}>
              <a href="/" style={style}>PicTweet</a>
            </Typography>
            <div className="user_nav grid-6">
              <span>
              <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
              </span>
              <IconButton
              edge="end"
              aria-label="create"
              aria-haspopup="true"
              color="inherit"
            >
              <Create />
            </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

// HelloWorld.propTypes = {
//   greeting: PropTypes.string
// };
export default Header;
