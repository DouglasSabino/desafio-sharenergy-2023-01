import HomeHeader from '../components/HomeHeader';
import RegisterClient from "../components/RegisterClient";


function Clients() {
  return (
    <div className='md:h-screen md:w-full bg-sky-500/50'>
      <HomeHeader />
      <RegisterClient />
    </div>
  );
}

export default Clients;