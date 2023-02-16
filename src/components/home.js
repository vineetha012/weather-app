import React, { useContext, useEffect, useState } from 'react'
import { Searchweather, Searchweatherhome } from './apiUtils'
import { WetherStateContext } from './context'
import { MainBody } from './mainBody'
import { Nav } from './nav'
export const Home = () => {
    const [searchQuery, setSerachQuery] = useState("")
    const { currentLocation, setCurrentLocation,
        sercheddata, setSearcheddata,
        details,setdetails,
        likedLocations, setLikedLocations } = useContext(WetherStateContext)
    const onSubmitHanler = (e) => {
        e.preventDefault()
        Searchweather(searchQuery)
    }
    useEffect(()=>{
        geoLocationobj()
    },[])
    const geoLocationobj = () => {

        const obj= navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position);
            console.log("Longitude is :", position.coords.longitude);
            let lat=position.coords.latitude
            let lon=position.coords.longitude
            Searchweatherhome(lat,lon).then(data=>{
                setCurrentLocation(data)
                setdetails(data)

            })
        });
       
    }
    console.log(currentLocation) 
    return (
        <>  
        <Nav/>
            <div className='mainhome'>
                {
                    currentLocation?<MainBody currentLocation={currentLocation}/>
                    :""
                }
            </div>
        </>
    )
}