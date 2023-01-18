import HomeHeader from '../components/HomeHeader';
import { useContext, useEffect } from "react";
import appContext from "../context/appContext";
import imagem from "../images/image-begin.jpg";
import httpNotFound from "../images/not-found-http.jpg";
import validHttpCodes from "../validHttpCodes";

function RandomDog() {
  const { catImage, setCatImage, httpCode, setHttpCode } = useContext(appContext);

  useEffect(() => async () => {
    setCatImage(imagem);
  }, []);

  const handleClick = () => {
    if (!validHttpCodes.includes(Number(httpCode))) setCatImage(httpNotFound); 
    else setCatImage(`https://http.cat/${httpCode}.jpg`);
  }

  const handleChange = ({target}) => {
    setHttpCode(target.value);
  }


  return (
    <div className='md:h-screen md:w-full bg-sky-500/50'>
      <HomeHeader />
      <div className="border border-black ml-auto mt-16 pt-5 pb-50 shadow-lg shadow-black mr-auto h-[80vh] mt-3 w-[100rem] md:bg-[#54A3A2] rounded-2xl">
        <div>
          <h1 className='font-roboto text-3xl text-center mb-5'>Pesquise Por Algum Codigo Http</h1>
          <div className='rounded-xl text-center'>
            <input
              onChange={handleChange}
              type='number'
              min='0'
              max='599'
              placeholder='Http Code'
              className='rounded-xl w-28 pl-2 mb-3 mr-5 shadow shadow-black font-roboto'
            />
            <button
              onClick={handleClick} 
              className='hover:cursor-pointer font-roboto text-center justify-center border border-black p-2 rounded-2xl shadow-lg shadow-black active:bg-[#407a79] active:shadow-none'>
                Pesquisar
            </button>
            <div className='h-300 w-200'>
              <img className='mt-7 shadow-xl shadow-black ml-auto mr-auto' src={catImage} alt='deu bom'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomDog;