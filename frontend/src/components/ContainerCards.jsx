import Card from '../components/Card';
import { useEffect } from 'react';
import Axios from 'axios';
import { useContext } from "react";
import appContext from "../context/appContext";
import Loading from './Loading';

function ContainerCards() {
  const {
    cards,
    setCards,
    loading,
    setLoading,
    indexStart,
    indexEnd,
    setIndexStart,
    setIndexEnd,
    page,
    setPage,
    search,
    setSearch,
    showDivPage, 
    setShowDivPage
  } = useContext(appContext);

  const arrayAux = [];

  useEffect(() => async () => {
    const users = await getRamdomUsers();
    setCards(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    search !== "" ? setShowDivPage(false) : setShowDivPage(true)
  },[search]);

  const handleClick = ({ target }) => {
    if (target.innerText === '1') {
      setIndexStart(0);
      setIndexEnd(8);
      setPage('1');
    } else if (target.innerText === '2') {
      setIndexStart(8);
      setIndexEnd(16);
      setPage('2');
    } else if (target.innerText === '3') {
      setIndexStart(16);
      setIndexEnd(24);
      setPage('3');
    }
  }

  const handleChange = ({ target }) => {
    setSearch(target.value);
  }

  async function getRamdomUsers() {
    for (let i = 0; i < 24; i++) {
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
    <div>
      {
        loading ?
          (
            <div className="border border-black ml-auto flex flex-wrap justify-around gap-2 pt-6 mt-16 pt-52 shadow-lg shadow-black mr-auto h-[80vh] mt-3 w-[100rem] md:bg-[#54A3A2] rounded-2xl shadow-2xl shadow-black pb-5">
              <Loading />
            </div>
          ) : (
            <div>
              <div className={`flex ml-32 mt-5 mb-2 text-2xl`}>
                <div className={`${showDivPage ? "flex" : "hidden"}`}>
                  <spam className="font-roboto mr-2">Paginas: </spam>
                  <div
                    onClick={handleClick}
                    className={`border border-black hover:cursor-pointer font-roboto ${page === '1' ? "bg-[#407a79]" : "bg-[#54A3A2]"} mr-2 p-1 px-2 rounded-xl shadow-2xl shadow-black`}>
                    1
                  </div>
                  <div
                    onClick={handleClick}
                    className={`border border-black hover:cursor-pointer font-roboto ${page === '2' ? "bg-[#407a79]" : "bg-[#54A3A2]"} mr-2 p-1 px-2 rounded-xl shadow-2xl shadow-black`}>
                    2
                  </div>
                  <div
                    onClick={handleClick}
                    className={`border border-black hover:cursor-pointer font-roboto ${page === '3' ? "bg-[#407a79]" : "bg-[#54A3A2]"} mr-2 p-1 px-2 rounded-xl shadow-2xl shadow-black`}>
                    3
                  </div>
                </div>
                <div className='rounded-xl ml-auto mr-36'>
                  <input
                    onChange={handleChange}
                    type='text'
                    placeholder='Pesquisar'
                    className='rounded-xl pl-2 mb-3 shadow shadow-black font-roboto'
                  />
                </div>
              </div>
              <div className="border border-black ml-auto flex flex-wrap justify-around gap-2 pt-6 mr-auto h-[80vh] mt-3 w-[100rem] md:bg-[#54A3A2] rounded-2xl shadow-2xl shadow-black pb-5">
                {search === '' ?
                  cards.slice(indexStart, indexEnd).map((card) => {
                    return (
                      <Card
                        key={card.login.username}
                        picture={card.picture.large}
                        firstName={card.name.first}
                        lastName={card.name.last}
                        email={card.email}
                        username={card.login.username}
                        age={card.dob.age}
                      />
                    )
                  }) : cards.slice(0, cards.length).map((card) => {
                    if (
                      card.name.first.toLowerCase().startsWith(search.toLowerCase()) ||
                      card.name.last.toLowerCase().startsWith(search.toLowerCase()) ||
                      card.email.toLowerCase().startsWith(search.toLowerCase()) ||
                      card.login.username.toLowerCase().startsWith(search.toLowerCase())
                    ) {
                      return (
                        <Card
                          key={card.login.username}
                          picture={card.picture.large}
                          firstName={card.name.first}
                          lastName={card.name.last}
                          email={card.email}
                          username={card.login.username}
                          age={card.dob.age}
                        />
                      );
                    }
                  }
                  )
                }
              </div>
            </div>
          )
      }
    </div>
  );
}

export default ContainerCards;
