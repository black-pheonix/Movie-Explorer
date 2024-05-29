import React, { createContext, useContext, useState } from 'react';
import { NotificationContext } from './Notification';

export const SearchContext = createContext();

let timeoutId;
const debounce = (func, delay) => {
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const SearchProvider = ({ children }) => {
    const [searching, setSearching] = useState(false);
    const [results, setResults] = useState([]);
    const [resultNotFound, setResultNotFound] = useState(false);
    

    const useNotification = useContext(NotificationContext); 

    const search = async (method, query, updaterFunction) => {
        const {error, results} = await method(query);
        if(error) return useNotification.updateNotification('error', error);

        if(!results.length) {
          setResults([]);
          updaterFunction && updaterFunction([]);
          return setResultNotFound(true);
        }

        setResultNotFound(false);
        setResults(results);
        updaterFunction && updaterFunction([...results]);
    };

    const resetSearch = () => {
      setSearching(false);
      setResults([]);
      setResultNotFound(false);
    };

    const handleSearch = (method, query, updaterFunction) => {
      setSearching(true);
      if(!query.trim()){
        updaterFunction && updaterFunction([]);
        return resetSearch();
      }
      debounceFunction(method, query, updaterFunction);
    };

    const debounceFunction = debounce(search, 300);


	return (
        <SearchContext.Provider value={{searching, resultNotFound, results, handleSearch, resetSearch}}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;
