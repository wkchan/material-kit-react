import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import image from "assets/img/my_pic_small.jpg";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

// import SectionBasics from "./Sections/SectionBasics.js";
// import SectionNavbars from "./Sections/SectionNavbars.js";
// import SectionTabs from "./Sections/SectionTabs.js";
// import SectionPills from "./Sections/SectionPills.js";
// import SectionNotifications from "./Sections/SectionNotifications.js";
// import SectionTypography from "./Sections/SectionTypography.js";
// import SectionJavascript from "./Sections/SectionJavascript.js";
// import SectionCarousel from "./Sections/SectionCarousel.js";
// import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
// import SectionLogin from "./Sections/SectionLogin.js";
// import SectionExamples from "./Sections/SectionExamples.js";
// import SectionDownload from "./Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/components.js";
// import classNames from "classnames";

const useStyles = makeStyles(styles);
const imgStyles = makeStyles(imagesStyles);

export default function Components(props) {
  const classes = useStyles();
  const imgClasses = imgStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Linus Chan's Portfolio"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/mt_taranaki.jpg").default}>
        <div className={classes.gridContainer}>
          <GridContainer>
            <GridItem xs={4} sm={4} className={imgClasses.marginLeft}>
              <img
                src={image}
                alt="..."
                className={
                  imgClasses.imgRoundedCircle + " " + imgClasses.imgFluid
                }
              />
            </GridItem>
            <GridItem xs={12} sm={8}>
              <div className={classes.brand}>
                <h1 className={classes.title}>My name is Linus Chan</h1>
                <h3 className={classes.subtitle}>
                  A Developer who loves Data Engineering, Video Streaming
                  Technologies, and Cloud Technologies.
                </h3>
                <div className={classes.text}>
                  This website is my latest side project. I will keep updating
                  this page. Please come back later.
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      {/* 
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload />
      </div> */}
      <Footer />
    </div>
  );
}
