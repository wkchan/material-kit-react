import { container } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  container,
  gridContainer: {
    ...container,
    "@media (min-height: 320px)": {
      paddingTop: "1rem",
    },
    "@media (min-height: 640px)": {
      paddingTop: "2rem",
    },
  },
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    color: "#ffffff",
    "@media (min-height: 320px)": {
      fontSize: "2.4rem",
    },
    "@media (min-height: 640px)": {
      fontSize: "3rem",
    },
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0",
    color: "#ffffff",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
};

export default componentsStyle;
