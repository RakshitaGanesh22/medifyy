import { createContext } from 'react';
import React, { useState } from 'react';

export const LocationContext = createContext();


export function LocationProvider({ children }) {
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");
  const [state,setState]=useState([]);
  const [city,setCity]=useState([]);
  const[cardData,setCardData]=useState(null);
  const[cardArray,setCardArray]=useState([]);

  return (
    <LocationContext.Provider value={{ stateName, setStateName, cityName, setCityName,state,setState,city,setCity,cardData,setCardData ,cardArray,setCardArray}}>
      {children}
    </LocationContext.Provider>
  );
}
