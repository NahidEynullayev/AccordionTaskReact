import React from "react";
import Header from "./AccordionHeader/Header";
import "./ComponentsContainer.scss";

import FagDataList from "./AccordionMain/FagDataList/FagDataList";
const ComponentsContainer = () => {
  return (
    <React.Fragment>
      <div className="Container">
        <Header />
        <FagDataList />
      </div>
    </React.Fragment>
  );
};

export default ComponentsContainer;
