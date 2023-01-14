import { useContext, useEffect } from "react";
import appContext from "../context/appContext";

function Card(props) {
  const { cards, setCards, loading } = useContext(appContext);
  
  useEffect(() => {
    console.log(cards);
  });

  return(
    <div className="h-20 w-80 text-black">
      {loading ? <div>Loading ...</div> : (
      <div className="flex-col justify-center shadow-sm shadow-black bg-[#D6DF33] rounded-2xl">
        <img className="pt-6 w-[10vw] ml-auto mr-auto" src={props.picture}/>
        <div className="bg-[#CCCCCC] shadow-lg shadow-black mb-10 rounded-2xl">
          <h3 className="pt-3 mt-3 ml-3 font-roboto">{`Nome: ${props.firstName} ${props.lastName}`}</h3>
          <h3 className="ml-3 font-roboto">{`Email: ${props.email}`}</h3>
          <h3 className="ml-3 font-roboto">{`Usuario: ${props.username}`}</h3>
          <h3 className="pb-6 ml-3 font-roboto">{`Idade: ${props.age}`}</h3>
        </div>
      </div>  
      )}
    </div>
  );
}

export default Card;
