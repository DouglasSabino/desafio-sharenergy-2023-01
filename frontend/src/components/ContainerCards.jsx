import Card from '../components/Card';
import { useEffect } from 'react';
import Axios from 'axios';
import { useContext } from "react";
import appContext from "../context/appContext";

function ContainerCards() {
  const { cards, setCards, setLoading } = useContext(appContext);
  const arrayAux = [];

  useEffect(() => async () => {
     const users = await getRamdomUsers();
     setCards(users);
     setLoading(false);
  }, []);

async function getRamdomUsers() {
   for (let i=0; i<24; i++) {
    arrayAux.push(Axios.get('https://randomuser.me/api/')
     .then((res) => {
       return res.data.results[0]
     })
     .catch((error) => {
       console.log(error);
     }))   
  }
  const result = Promise.all(arrayAux)
  .then((res) => {
    return res
  }).catch((error) => {
    console.log(error);
  });

  return result;
}

  return (
  <div className="ml-auto flex flex-wrap justify-around gap-2 pt-6 mr-auto h-[80vh] mt-16 w-[100rem] md:bg-[#54A3A2] rounded-2xl shadow-lg shadow-black pb-5">
   { cards.slice(0, 8).map((card) => {
    return (
      <Card
        picture={card.picture.large}
        firstName={card.name.first} 
        lastName={card.name.last}
        email={card.email} 
        username={card.login.username} 
        age={card.dob.age} 
      />
    )
   }) 
   }
  </div>
);
}

export default ContainerCards;
