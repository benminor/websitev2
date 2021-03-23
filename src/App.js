import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faHome, faMailBulk, faMobileAlt, faShare, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { faAirbnb, faAppStore, fab, faGithub, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';


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
  fontFamily: "Yeseva One",
  fontWeight: 300,
  fontSize: "29px",
  color: "white",
}

const popoverFont2 = {
  fontFamily: "Yeseva One",
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
          <h1>Hi, I'm Ben.</h1>
        </div>
        <h2>I'm a 3rd year Computing student at Queen's University.</h2>
        <a class = "fa-a"><FontAwesomeIcon icon={faGithub} size='lg'/></a>
        <a class = "fa-a"><FontAwesomeIcon icon={faLinkedin} size='lg'/></a>
        <a class = "fa-a"><FontAwesomeIcon icon={faAppStore} size='lg'/></a>


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

        <div class = "card-div">

          <Card className={classes.root} style={cardStyle}>
            <CardActionArea className={classes.secondary} aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
              <CardContent>
                <Typography style={typoGStyle}>Work Experience</Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className={classes.root} style={cardStyle}>
            <CardActionArea className={classes.secondary} aria-describedby={id} variant="contained" color="primary" onClick={handleClick2}>
              <CardContent>
                <Typography style={typoGStyle}>Education</Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className={classes.root} style={cardStyle} aria-describedby={id} variant="contained" color="primary" onClick={handleClick3}>
            <CardActionArea className={classes.secondary}>
              <CardContent>
                <Typography style={typoGStyle}>Personal Projects</Typography>
              </CardContent>
            </CardActionArea>
          </Card>


        </div>
      </div>
      <div>

      <Popover
        id={id}
        style={popoverStyle}
        open={open}
        //anchorEl={anchorEl}

        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        >
          <div class = "popover-class">
          <h2>My Work Experience</h2>
          <hr></hr>
          <h4>Software Developer @ Queen's Media & Technology</h4>
            <h5>March 2020 - Present</h5>
              <p>
                - Developing an innovative COVID-19 contact tracing mobile app using React Native, Firebase Database, and Git version control
                <br></br>
                - Weekly meetings with a full product team to iterate through developmental and design ideas.
              </p>


          <br></br>
          <h4>Finance Director @ Queen's Pre-Dental Society</h4>
            <h5>March 2020 - Present</h5>
              <p>
                - Directly in charge of allocating club funds and managing the budget
                <br></br>
                - Helped secure funding from notable DAT resource company, DAT Crusher
                <br></br>
                - Developed and am solely in charge of the club website

              </p>

          <br></br>
          <h4>Technical Consultant (Internship) @ Framework Venture Partners</h4>
            <h5>September 2020 - December 2020</h5>
              <p>
                - Maintained and updated the software platforms I built during my summer internship, including an external web application and an internal data scraper
                <br></br>
                - Developed internal software programs to automate manual MS Excel entry using Python
              </p>

          <br></br>
          <h4>Developer & Analyst (Internship) @ Framework Venture Partners</h4>
            <h5>May 2020 - September 2020</h5>
              <p>
                - Built an automated Python based data parser to aggregate portfolio data from over 300 investment funds
                using Firebase Realtime Database, AWS Lightsail, and Git version control
                <br></br>
                - Managed a junior team member who assisted me in full-stack web development of our start-up feedback form
                <br></br>
                - Automated Salesforce integration tasks using Salesforce REST API in Python which saved team members hours
                of manual entry and calculation per week
                <br></br>
                - Performed 100+ one-on-one meetings with CEOs of Series A, and Series B software and FinTech start-ups to
                analyze financial metrics to determine if an investment strategy exists
                <br></br>
                - Contributed to investment decks for our portfolio companies to analyze aspects such as the competitive
                landscape, total addressable market size, and unit economics
              </p>

              <br></br>

          <h4>Computer Technician (Internship) @ DCR Systems Group</h4>
            <h5>May 2019 - August 2019</h5>
              <p>
                - Configured, installed, and updated internal software and hardware resources for notable accounting firms, law
                firms, and international schools
                <br></br>
                - Performed PC cloning/imaging with Symantec Ghost and Paragon Disk Manager
                <br></br>
                - Worked efficiently and cooperatively in 6 person team to meet strict contractual deadlines
              </p>


          </div>
      </Popover>

      <Popover
        id={id}
        style={popoverStyle}
        open={open2}
        //anchorEl={anchorEl}

        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        >
          <div class = "popover-class">
          <h2>My Education</h2>
          <h4>Bachelor of Computing Honours (BCmpH) @ Queen's University</h4>

          </div>
      </Popover>

      <Popover
        id={id}
        style={popoverStyle}
        open={open3}
        //anchorEl={anchorEl}

        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        >
          <div class = "popover-class">
          <h2>My Personal Projects</h2>
          <hr></hr>
          <h4>Software Developer @ Queen's Media & Technology</h4>

          </div>
      </Popover>
    </div>
    </div>
  );
}
