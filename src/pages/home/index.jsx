import React, { useEffect, useState } from "react";
import Content from "../../comps/content/Content";
import Header from "../../comps/Header";
import styles from './stayle.module.css'
const Home = () => {

  return (
    <div className={`col ${styles.hiro}`}>
      <Header/>
      <Content/>
    </div>
  );
};

export default Home;
