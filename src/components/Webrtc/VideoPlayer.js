import React, { useContext } from "react";
import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";

import { SocketContext } from "./Context";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "350px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
    marginLeft: "150px",
  },
  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  paper: {
    padding: "10px",
    border: "2px solid black",
    margin: "10px",
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <div className="">
          <Grid className="" item xs={12} md={6}>
            <span className="ml-60">{localStorage.getItem("user").toUpperCase()}</span>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="">
          <Grid className="" item xs={12} md={6}>
            <span className="ml-60">{localStorage.getItem("user").toUpperCase()}</span>
            <video
              playsInline
              muted
              ref={userVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </div>          
      )}
    </Grid>
  );
};

export default VideoPlayer;
