import React, { useState } from "react";
import PropTypes from 'prop-types';
import appContext from './appContext';

function ContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [cards, setCards] = useState([]);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);

  const contextValue = {
    user, 
    setUser,
    cards,
    setCards,
    username,
    setUserName,
    password,
    setPassword,
    loading, 
    setLoading
  };
  
  return (
    <appContext.Provider value={ contextValue }>
      { children }
    </appContext.Provider>
  );

};

ContextProvider.propTypes = { children: PropTypes.node.isRequired };

export default ContextProvider;