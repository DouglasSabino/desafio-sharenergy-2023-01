import HomeHeader from '../components/HomeHeader';
import Loading from '../components/Loading';
import Axios from 'axios';
import { useContext, useEffect } from "react";
import appContext from "../context/appContext";

function RandomDog() {
  const { 
    randomDogImage, 
    setRandomDogImage, 
    loading, 
    setLoading,
    arrayDogImage,
    setArrayDogImage
  } = useContext(appContext);

  useEffect(() => async () => {
    setLoading(true);
    const dogs = await getRandomDogs();
    setArrayDogImage(dogs);
    setRandomDogImage(dogs[0]);
  }, []);

  const changeDog = () => {
    const randomIndex = Math.floor(Math.random() * arrayDogImage.length);
    setRandomDogImage(arrayDogImage[randomIndex]);
  }

  async function getRandomDogs() {
    const arrayAux = [];
    for (let i = 0; i < 50; i++) {
      arrayAux.push(Axios.get('https://random.dog/woof.json')
        .then((res) => {
          return res.data.url
        })
        .catch((error) => {
          console.log(error);
        }))
    }
    const result = await Promise.all(arrayAux)
      .then((res) => {
        return res
      }).catch((error) => {
        console.log(error);
      });
    setLoading(false);  
    return result;
  }

  return (
    <div className='md:h-screen md:w-full bg-sky-500/50'>
      <HomeHeader />
      <div className="border border-black ml-auto mt-16 pt-10 pb-50 
      shadow-lg shadow-black mr-auto h-[80vh] mt-3 w-[100rem] md:bg-[#54A3A2] rounded-2xl">
        <div className='flex flex-col justify-center'>
          <button
            onClick={changeDog} 
            className='hover:cursor-pointer font-roboto mx-20 text-center 
            justify-center border border-black p-5 rounded-2xl shadow-lg shadow-black 
            active:bg-[#407a79] active:shadow-none'>
              Cliqui Aqui :)
          </button>
        {
          loading ? (
            <div className="relative ml-auto mr-auto mt-36">
              <Loading />
            </div>
          ) : (
            <div className="relative">
              <img 
                className="object-contain mt-36 h-80 w-80 m-auto" 
                src={randomDogImage} 
                alt="Imagem de cachorro aleatoria" 
              />
            </div>
          )
        }
        </div>
      </div>
    </div>
  );
}

export default RandomDog;