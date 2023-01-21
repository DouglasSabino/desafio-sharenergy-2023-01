import appContext from "../context/appContext";
import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Axios from "axios";


function ClientsList() {
  const { 
    update,
    clients, 
    setClients, 
    setLoading, 
    setClientName, 
    setClientEmail,
    setClientPhone,
    setClientAddres,
    setClientCPF,
    setIdToEdit,
    setEdit
  } = useContext(appContext);
  const history = useNavigate();

  const handleDelete = ({ target }) => {
    const id = target.name;
    Axios.delete(`http://localhost:3001/clients/${id}`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((doc) => {
      toast.error(doc.data)
      const newClientList = clients.map((c) => c._id !== id );
      setClients(newClientList);
    })
      .catch((err) => console.log(err));
  }

  const handleClick = async ({ target }) => {
    const id = target.id;
    await Axios.get(`http://localhost:3001/clients/${id}`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((doc) => localStorage.setItem('client', JSON.stringify(doc.data)))
    .catch((err) => console.log(err));
    history(`/clients/${id}`);
  }

  const handleEdit = async ({target}) => {
    setEdit(true)
    const id = target.name;
    await Axios.get(`http://localhost:3001/clients/${id}`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((doc) => {
      const { nome, email, telefone, endereco, CPF } = doc.data;
      setClientName(nome);
      setClientEmail(email);
      setClientPhone(telefone);
      setClientAddres(endereco);
      setClientCPF(CPF);
      setIdToEdit(id);
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/clients/', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((doc) => {
      setClients(doc.data);
      setLoading(false);
    }
    )
      .catch((err) => {
        console.log(err);
        setLoading(false);
      }

      );
  }, []);

  // COMPONENTIZAR RENDERIZAÇÃO DE CLIENTES  
  useEffect(() => {
    {
      clients.map((c) => {
        return (
          <div
            id={c._id}
            onClick={handleClick}
            className={`${clients.indexOf(c) === 0 ? "mt-40" : ""}
            hover:text-white hover:cursor-pointer hover:shadow-none
            bg-[#54A3A2] mb-5 ml-48 flex text-2xl border w-[50vw]
            rounded-xl border-black shadow-md shadow-black py-1 justify-between`}
          >
            <h1 className="font-roboto ml-10">{c.nome}</h1>
            <div className="flex pr-10">
              <div
                onClick={handleEdit}
                className={`w-7 h-7 
                mr-3 bg-[#FFFF00] rounded-md 
                shadow shadow-black active:shadow-none 
                border border-black p-1`}
              >
                <img
                  name={c._id}
                  src="https://www.freeiconspng.com/thumbs/edit-icon-png/edit-new-icon-22.png"
                  alt="icone edit"
                />
              </div>
              <div
                onClick={handleDelete}
                className="w-7 h-7 p-1 bg-[#FF0000] rounded-md 
                shadow shadow-black active:shadow-none border border-black"
              >
                <img
                  name={c._id}
                  src="https://cdn-icons-png.flaticon.com/512/18/18297.png"
                  alt="icone lixeira"
                />
              </div>
            </div>
          </div>
        );
      })
    }
  }, [update]);

  return (
    <div>
      {
        clients.map((c) => {
          return (
            <div
              id={c._id}
              onClick={handleClick}
              className={`${clients.indexOf(c) === 0 ? "mt-40" : ""}
              hover:text-white hover:cursor-pointer hover:shadow-none
              bg-[#54A3A2] mb-5 ml-48 flex text-2xl border w-[50vw]
              rounded-xl border-black shadow-md shadow-black py-1 justify-between`}
            >
              <h1 className="font-roboto ml-10">{c.nome}</h1>
              <div className="flex pr-10">
                <div
                  onClick={handleEdit}
                  className={`w-7 h-7 
                  mr-3 bg-[#FFFF00] rounded-md 
                  shadow shadow-black active:shadow-none 
                  border border-black p-1`}
                >
                  <img
                    name={c._id}
                    src="https://www.freeiconspng.com/thumbs/edit-icon-png/edit-new-icon-22.png"
                    alt="icone edit"
                  />
                </div>
                <div
                  onClick={handleDelete}
                  className="w-7 h-7 p-1 bg-[#FF0000] rounded-md 
                  shadow shadow-black active:shadow-none border border-black"
                >
                  <img
                    name={c._id}
                    src="https://cdn-icons-png.flaticon.com/512/18/18297.png"
                    alt="icone lixeira"
                  />
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default ClientsList;
