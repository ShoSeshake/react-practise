import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import strftime from "strftime";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Dialog,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  DialogTitle,
} from "@material-ui/core";
import { MoreVert, Info, Edit, Delete } from "@material-ui/icons";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  dialogTitle: {
    minWidth: 300,
  },
});

function ActionList(props) {
  const classes = useStyles();
  const { ownTweet, id } = props;
  const handleClose = () => {};

  const handleDelete = (id) => {
    axios.delete(`/api/v1/tweets/${id}`).then((results) => {
      console.log(results)
      // this.setState({products: results.data})
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  const removeItemClient = (id) => {
    console.log(`${id}`);
  }

  console.log(`${id}`);

  if (ownTweet) {
    return (
      <List>
        <ListItem autoFocus button onClick={() => handleClose}>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <Info />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="詳細" />
        </ListItem>
        <ListItem autoFocus button onClick={() => handleClose}>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <Edit />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="編集" />
        </ListItem>
        <ListItem autoFocus button onClick={() => handleDelete(id)}>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <Delete />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="削除" />
        </ListItem>
      </List>
    );
  } else {
    return (
      <List>
        <ListItem autoFocus button onClick={() => handleClose}>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <Info />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="詳細" />
        </ListItem>
      </List>
    );
  }
}

ActionList.propTypes = {
  ownTweet: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, open, ownTweet, id } = props;
  const handleClose = () => {
    onClose();
  };
  // const handleListItemClick = (value) => {
  //   onClose(value);
  // };
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title" className={classes.dialogTitle}>
        タイトル
      </DialogTitle>
      <ActionList ownTweet={ownTweet} id={id} />
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  ownTweet: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

function Tweet(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const cardStyle = {
    marginTop: "2rem",
  };
  const mediaStyle = {
    height: 180,
    maxHeight: 180,
  };
  const tweet = props.tweet;
  const ownTweet = tweet.user_id === props.user_id ? true : false;
  return (
    <React.Fragment>
      <Card style={cardStyle} key={tweet.id} elevation={10}>
        <CardMedia image={tweet.image} title={tweet.title} style={mediaStyle} />
        <CardHeader
          title={tweet.title}
          subheader={tweet.created_at}
          action={
            <IconButton aria-label="settings" onClick={handleClickOpen}>
              <MoreVert />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {tweet.text}
          </Typography>
        </CardContent>
      </Card>
      <SimpleDialog open={open} ownTweet={ownTweet} onClose={handleClose} id={tweet.id} />
    </React.Fragment>
  );
}

export default Tweet;
