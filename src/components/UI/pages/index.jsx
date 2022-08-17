//Import React
import React from "react";

//Mis componentes
import Footer from "../footer";
//import Header from "../header";

//Styles
import "./styles.css";

const Page = (props) => {
  return (
    <div id="body">
      <div className="container-app">
        <Header
          style={{
            height: "5em",
            width: "100%",
          }}
        />
        <div className="content">{props.children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
