import { useContext, useRef } from "react";
import appContext from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { FaCat, FaHome, FaDog, FaRegIdCard } from "react-icons/fa";

function HomeHeader() {
  const homeRef = useRef(null);
  const dogRef = useRef(null);
  const catRef = useRef(null);
  const clientRef = useRef(null);

  const { user } = useContext(appContext);
  const history = useNavigate();

  const clickHome = () => {
    history('/home');
  }

  const clickDog = () => {
    history('/random-dog');
  }

  const clickCat = () => {
    history('/http-cat');
  }

  return(
    <div className="flex justify-between h-20 bg-[#54A3A2] shadow font-roboto shadow-black">
      <div className="text-2xl pl-5 pt-5">
        {`Olá ${user.user}`} 
      </div>
      <div className="flex mb-4">
        <div
          name="home"
          ref={homeRef} 
          onClick={clickHome} 
          className="hover:cursor-pointer text-[3vw] mt-3 mr-10 active:text-white"
        >
          <FaHome />
        </div>
        <div
          name="dog"
          ref={dogRef}  
          onClick={clickDog} 
          className="hover:cursor-pointer text-[3vw] mt-2 mr-10 active:text-white"
        >
          <FaDog />
        </div>
        <div
          ref={catRef}  
          onClick={clickCat} 
          className="hover:cursor-pointer text-[3vw] mt-2 mr-10 active:text-white"
        >
          <FaCat />
        </div>
        <div
         ref={clientRef}  
         //onClick={handleClick} 
         className="hover:cursor-pointer text-[3vw] mt-3 mr-32 active:text-white"
       >
         <FaRegIdCard />
       </div>
      </div>
    </div>    
  );
}

export default HomeHeader;
