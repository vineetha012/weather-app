import { WetherStateContext } from './context'
import React, { useContext, useState } from 'react'
import { Searchweather, Searchweatherhome } from './apiUtils'
import { Nav } from './nav'
import { MainBody } from './mainBody'
export const Search = () => {
    const [searchQuery, setSerachQuery] = useState("")
    const { currentLocation, setCurrentLocation,
        serchedlocation, setSearchedLocation,
        details, setdetails,
        likedLocations, setLikedLocations } = useContext(WetherStateContext)
    const onSubmitHanler = (e) => {
        e.preventDefault()
        if (searchQuery) {
            Searchweather(searchQuery).then(data => {
                console.log(data.cod)
                if (data.cod == 200) {
                    setSearchedLocation(data)
                    setdetails(data)
                }else{
                    alert(data.message)
                    setSearchedLocation(null)
                }

            })
        } else {
            alert("please provide city")
        }
    }
    return (
        <>
            <Nav />
            <div className='search-container'>
                <form onSubmit={(e) => onSubmitHanler(e)}>
                    <input type={'text'} className="citynameInput" placeholder='City' onChange={(e) => setSerachQuery(e.target.value)} />
                    <button type='submit'>check temperature</button>
                </form>
            </div>
            {serchedlocation ? <MainBody currentLocation={serchedlocation} /> : ""}
        </>
    )
}