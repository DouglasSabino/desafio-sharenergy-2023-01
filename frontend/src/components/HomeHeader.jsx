import { useContext } from "react";
import appContext from "../context/appContext";

function HomeHeader() {
  const { user } = useContext(appContext);
  return(
    <div className="h-20 bg-[#54A3A2] shadow font-roboto shadow-black">
      <div className="text-2xl pl-5 pt-5">
        {`Olá ${user.user}`} 
      </div>
    </div>    
  );
}

export default HomeHeader;
