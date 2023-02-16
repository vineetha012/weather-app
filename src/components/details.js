import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { WetherStateContext } from "./context";
import { MainBody } from "./mainBody";
import { Nav } from "./nav";
export const Details = () => {
    const { currentLocation, setCurrentLocation,
        sercheddata, setSearcheddata,
        details, setdetails,
        likedLocations, setLikedLocations } = useContext(WetherStateContext)

    return (
        <>
            <Nav />
            {details ?
                <div >
                    <MainBody currentLocation={details} />
                    <div className="detail-container">
                        <div>
                        <div style={{ color: "white", textAlign: "center", fontSize: "30px", marginTop: "30px" }}>forecast</div>
                        <div>
                            {
                                details.list.map((data, index) => {
                                    if (index <= 2) {
                                        let date = (data.dt_txt)
                                        date = date.split(" ")
                                        console.log(date)
                                        return (
                                            <div key={index} className="forcast rows" >
                                                <div className="colus">
                                                    <label>time</label>
                                                    <div>{date[1]}</div>
                                                </div>
                                                <div className="colus">
                                                    <label>time</label>
                                                    <div>{data.main.pressure}</div>
                                                </div>
                                                <div className="colus">
                                                    <label>Temperature</label>
                                                    <div>{data.main.temp}</div>
                                                </div>
                                                <div className="colus">
                                                    <label>Humidity</label>
                                                    <div>{data.main.humidity}</div>
                                                </div>
                                            </div>
                                        )
                                    }

                                })
                            }
                        </div>
                        </div>
                        
                    </div>

                </div>

                : ""}

        </>
    )
}