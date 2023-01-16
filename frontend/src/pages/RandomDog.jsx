import HomeHeader from '../components/HomeHeader';

function RandomDog() {
    return(
        <div className='md:h-screen md:w-full bg-sky-500/50'>
          <HomeHeader />
          <div className="border border-black ml-auto flex justify-around gap-2 mt-16 pt-52 pb-80 shadow-lg shadow-black mr-auto h-[80vh] mt-3 w-[100rem] md:bg-[#54A3A2] rounded-2xl shadow-2xl shadow-black pb-5">
              <div className='hover:cursor-pointer mr-auto ml-36 w-80'>
                <img src='https://static.vecteezy.com/system/resources/previews/008/478/199/original/red-button-isolate-backbround-3d-render-png.png' alt="imagem de um botão vermelhor"/>
              </div>
          </div>
        </div>
    );
  }
  
  export default RandomDog;