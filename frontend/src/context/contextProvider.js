import React, { useState } from "react";
import PropTypes from 'prop-types';
import appContext from './appContext';

function ContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState({});
  const [cards, setCards] = useState([]);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [indexStart, setIndexStart] = useState(0);
  const [indexEnd, setIndexEnd] = useState(8);
  const [page, setPage] = useState('1');
  const [search, setSearch] = useState('');
  const [showDivPage, setShowDivPage] = useState(true);
  const [randomDogImage, setRandomDogImage] = useState('');
  const [arrayDogImage, setArrayDogImage] = useState([]);
  const [catImage, setCatImage] = useState('primary');
  const [httpCode, setHttpCode] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientAddres, setClientAddres] = useState('');
  const [clientCPF, setClientCPF] = useState('');
  const [edit, setEdit] = useState(false);
  const [idToEdit, setIdToEdit] = useState('');
  const [update, setUpdate] = useState(false);

  const contextValue = {
    user, 
    setUser,
    clients, 
    setClients,
    cards,
    setCards,
    username,
    setUserName,
    password,
    setPassword,
    loading, 
    setLoading,
    indexStart, 
    setIndexStart,
    indexEnd, 
    setIndexEnd,
    page, 
    setPage,
    search, 
    setSearch,
    showDivPage,
    setShowDivPage,
    randomDogImage,
    setRandomDogImage,
    arrayDogImage,
    setArrayDogImage,
    catImage,
    setCatImage,
    httpCode,
    setHttpCode,
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
    client, 
    setClient,
    edit,
    setEdit,
    idToEdit,
    setIdToEdit,
    update,
    setUpdate
  };
  
  return (
    <appContext.Provider value={ contextValue }>
      { children }
    </appContext.Provider>
  );

};

ContextProvider.propTypes = { children: PropTypes.node.isRequired };

export default ContextProvider;