import { useContext } from "react";
import appContext from "../context/appContext";
import { FaDog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HomeHeader() {
  const { user } = useContext(appContext);
  const history = useNavigate();

  const hadleClick = () => {
    history('/random-dog');
  }

  return(
    <div className="flex justify-between h-20 bg-[#54A3A2] shadow font-roboto shadow-black">
      <div className="text-2xl pl-5 pt-5">
        {`Olá ${user.user}`} 
      </div>
      <div>
        <div onClick={hadleClick} className="hover:cursor-pointer text-[3vw] mt-2 mr-32">
          <FaDog />
        </div>
      </div>
    </div>    
  );
}

export default HomeHeader;
