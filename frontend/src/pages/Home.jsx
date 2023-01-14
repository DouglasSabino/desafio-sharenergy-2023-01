import HomeHeader from '../components/HomeHeader';
import ContainerCards from '../components/ContainerCards';

function Home() {
  return(
      <div className='md:h-screen md:w-full bg-sky-500/50'>
        <HomeHeader />    
        <ContainerCards />     
      </div>
  );
}

export default Home;