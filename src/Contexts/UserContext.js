import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(false);
  const [nomeJogador, setNomeJogador] = useState('');

  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        nomeJogador,
        setNomeJogador
      }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  const { signed, setSigned, nome, setNome } = context;
  return { signed, setSigned, nome, setNome };
}
