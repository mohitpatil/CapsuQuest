import React, { useState, createContext, ReactNode } from "react";
import { baseURL } from "./constants";

export interface IApiContext {
  data: any | null;
  fetchMed: (searchTerm: string) => Promise<void>;
}

interface ApiProviderProps {
  children: ReactNode;
}

/**
 * Created the context, which will be used to pass the data and the fetchMed function to the components
 */
export const ApiContext = createContext<IApiContext | undefined>(undefined);

/**
 * The provider component, which will be used to wrap the app and provide the data and fetchMed function
 */
export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const [data, setData] = useState<any | null>(null);

  const fetchMed = async (searchTerm: string) => {
    const response = await fetch(
      `${baseURL}/new_search?q=${searchTerm}&pharmacyIds=1,2,3`
    ).then((res) => res.json()).then(res => res.data);
    console.log(response);
    setData(response);
  };

  return (
    <ApiContext.Provider value={{ data, fetchMed }}>
      {children}
    </ApiContext.Provider>
  );
};
