import appContext from "../context/appContext";
import { useContext, useEffect } from "react";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import Axios from "axios";

function ClientsList() {
  const { clients, setClients, setLoading } = useContext(appContext);

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

  useEffect(() => {
    {
      clients.map((c) => {
        return (
          <div className={`${clients.indexOf(c) === 0 ? "mt-40": ""} ml-3 hover:cursor-pointer bg-[#54A3A2] mb-5 ml-48 flex text-2xl border w-[50vw] rounded-xl border-black shadow-md shadow-black py-1 justify-between`}>
            <h1 key={c.id} className="font-roboto ml-10">{c.nome}</h1>
            <div className="flex pr-10">
              <div className="active:text-white mr-2">
                <AiOutlineEdit />
              </div>
              <div className="active:text-white">
                <AiFillDelete />
              </div>
            </div>
          </div>
        );
      })
    }
  }, [clients]);



  return (
    <div>
      {
        clients.map((c) => {
          return (
            <div className={`${clients.indexOf(c) === 0 ? "mt-40": ""} ml-3 hover:cursor-pointer bg-[#54A3A2] mb-5 ml-48 flex text-2xl border w-[50vw] rounded-xl border-black shadow-md shadow-black py-1 justify-between`}>
              <h1 key={c.id} className="font-roboto ml-10">{c.nome}</h1>
              <div className="flex pr-10">
                <div className="active:text-white mr-2">
                  <AiOutlineEdit />
                </div>
                <div className="active:text-white">
                  <AiFillDelete />
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
