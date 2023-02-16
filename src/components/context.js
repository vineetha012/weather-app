import React, { createContext, useState } from "react";
export const WetherStateContext=createContext()
export const WeatherAppContextProvider=({children})=>{
    const [currentLocation,setCurrentLocation]=useState(null)
    const [serchedlocation,setSearchedLocation]=useState(null)
    const [likedLocations,setLikedLocations]=useState(null)
    const [details,setdetails]=useState(null)
    return(
        <WetherStateContext.Provider value={
            {currentLocation,setCurrentLocation,
                serchedlocation,setSearchedLocation,
                likedLocations,setLikedLocations,
                details,setdetails
            }}>
            {children}
        </WetherStateContext.Provider>
    )
}