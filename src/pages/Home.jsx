import React from "react";
import Background from './imge/design.jpg'
import Sty from './Home.module.css'
const Home = () => {
  return <div>
    <img src={Background} alt="" className={Sty.Background}/>
  </div>;
};

export default Home;
