import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faCompressAlt, faHome, faMagic, faMailBulk, faMobileAlt, faNotesMedical, faShare, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { faAirbnb, faAppStore, fab, faGithub, faGithubSquare, faLinkedin, faMailchimp, faMedium } from '@fortawesome/free-brands-svg-icons';


const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 300,
    maxHeight: 150,
    minHeight: 150,
    marginBottom: 15,
    marginRight: 15,
  },

  secondary :{
    minWidth: 300,
    maxWidth: 300,
    maxHeight: 150,
    minHeight: 150,
    margin: 0,
  },

  root2 : {
    minWidth: 130,
    maxWidth: 130,
    maxHeight: 60,
    minHeight: 60,
    marginBottom: 15,
  },

  secondary2 :{
    minWidth: 130,
    maxWidth: 130,
    maxHeight: 60,
    minHeight: 60,
    margin: 0,
  }

});

const cardStyle = {
  backgroundColor: "#519162",
}

const cardStyle2 = {
  backgroundColor: "#3a3a3a",
}


const typoGStyle = {
  fontFamily: "Johnston",
  fontWeight: 300,
  fontSize: "29px",
  color: "white",
}

const popoverFont2 = {
  fontFamily: "Johnston",
  fontSize: "20px",
  color: "white",
}


const popoverStyle = {
  minWidth: 1000,
  minHeight: 1000,
}

export default function ImgMediaCard() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
    setAnchorEl3(null);

  };

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const id = open ? 'simple-popover' : undefined;

  return (

    <div class = "all">
        <div class = "main-div">


        <div class="typewriter">
          <h1>Hey, I'm Ben.</h1>
        </div>
        <h3 class = "second">I build software.</h3>
        <h2>I'm a 3rd year Computing student at Queen's University. Explore my links below or shoot me an email at <a href="mailto: ben.minor@queensu.ca">ben.minor@queensu.ca</a> to chat :)</h2>
        <a class = "fa-a"><FontAwesomeIcon icon={faGithub} size='2x' color='#3a3a3a'/></a>
        <a class = "fa-a"><FontAwesomeIcon icon={faLinkedin} size='2x' color='#3a3a3a'/></a>
        <a class = "fa-a"><FontAwesomeIcon icon={faMedium} size='2x' color='#3a3a3a'/></a>
        <a class = "fa-a"><FontAwesomeIcon icon={faAppStore} size='2x' color='#3a3a3a'/></a>


        <br></br><br></br>
        <div class="resume-div">

        <Card className={classes.root2} style={cardStyle2}>
            <CardActionArea className={classes.secondary2} >
              <CardContent>
                <Typography style={popoverFont2}>Resume</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <br></br>
        <div class = "down-arrow">
          <p><a href = "#main-area">&#x2193;</a></p>
        </div>


        </div>
    </div>
  );
}
