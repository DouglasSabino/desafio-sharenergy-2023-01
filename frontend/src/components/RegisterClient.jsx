import { useContext } from "react";
import { toast } from 'react-toastify'
import { IoPersonAddSharp } from "react-icons/io5";
import appContext from "../context/appContext";
import Axios from "axios";

function RegisterClient() {
  const {
    clients,
    setClients, 
    clientName, 
    setClientName, 
    clientEmail, 
    setClientEmail, 
    clientPhone, 
    setClientPhone,
    clientAddres, 
    setClientAddres,
    clientCPF, 
    setClientCPF,
    setLoading
    } = useContext(appContext);

  const handleChange = ({target}) => {
    if (target.name === 'name') {
      setClientName(target.value);
    }else if (target.name === 'email') {
      setClientEmail(target.value);
    }else if (target.name === 'phone') {
      setClientPhone(target.value);
    }else if (target.name === 'addres') {
      setClientAddres(target.value);
    } else if (target.name === 'CPF') {
      setClientCPF(target.value);
    }
  }

  const handleClick = () => {
    setLoading(true);
    Axios.post('http://localhost:3001/clients/', {
       nome: clientName,
       email: clientEmail,
       telefone: clientPhone,
       endereco: clientAddres,
       CPF: clientCPF
    }, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
    }).then((response) => {
        toast.success(response.data);
        setClients((prevClients) => [...prevClients, response.data]);
        setClientName('');
        setClientEmail('');
        setClientPhone('');
        setClientAddres('');
        setClientCPF('');
        setLoading(false);
    }) 
    .catch((err) => {
      toast.error(err.response.data.message)
      setLoading(false);
    });
  }

  return (
    <div>
      <h1 className='font-roboto text-2xl ml-24 mt-20'>Cadastrar Novo Cliente</h1>
      <div className='flex'>
        <div className='bg-[#54A3A2] w-96 h-96 mt-10 ml-10 text-center rounded-2xl shadow-xl shadow-black'>
          <input
            value={clientName}
            onChange={handleChange}
            name="name"
            type="text"
            placeholder='Nome'
            className='mt-10 font-roboto rounded-2xl shadow-md pl-5 shadow-black'
          />
          <input
            value={clientEmail}
            onChange={handleChange}
            name="email"
            type="text"
            placeholder='E-mail'
            className='mt-5 font-roboto rounded-2xl shadow-md pl-5 shadow-black'
          />
          <input
            value={clientPhone}
            onChange={handleChange}
            name="phone"
            type="text"
            placeholder='Telefone'
            className='mt-5 font-roboto rounded-2xl shadow-md pl-5 shadow-black'
          />
          <input
            value={clientAddres}
            onChange={handleChange}
            name="addres"
            type="text"
            placeholder='Endereço'
            className='mt-5 font-roboto rounded-2xl shadow-md pl-5 shadow-black'
          />
          <input
            value={clientCPF}
            onChange={handleChange}
            name="CPF"
            type="text"
            placeholder='CPF'
            className='mt-5 font-roboto rounded-2xl shadow-md pl-5 shadow-black'
          />
          <div onClick={handleClick} className="hover:cursor-pointer pl-50 ml-40 text-[3vw] mt-10 active:text-white">
            <IoPersonAddSharp />
          </div>
        </div>
      </div>
        </div>
    );
}

export default RegisterClient;
