import { useNavigate } from 'react-router-dom'
export const MainBody = ({ currentLocation }) => {
    let temperature = currentLocation.list[0].main.temp;
    let celciusTemp = Math.round(temperature - 273.15);
    const addlikeHandler = () => {

    }

    const navigate = useNavigate()
    const datailsPage = () => {
        navigate('/details')
    }
    return (
        <div className='mainbody'>
            <div>
                <div className='buttons'>
                    <button onClick={() => addlikeHandler()}>add like</button>
                    <button onClick={() => datailsPage()}> details</button>
                </div>
                <div className="upper-container">
                    <div className="main-temperature">
                        <div>{currentLocation.list[0].weather[0].description}</div>
                        <h1>{celciusTemp} °C</h1>
                        <div>{currentLocation.city.name}</div>

                    </div>
                </div>
                <div className="bottom-container">
                    <div className="rows windcont">
                        <div className="prop">
                            <label> wind </label>
                            <div>{currentLocation.list[0].wind.speed} Km/h</div>
                        </div>
                        <div className="prop">
                            <label> humidity </label>
                            <div> {currentLocation.list[0].main.humidity} </div>
                        </div>
                        <div className="prop">
                            <label> pressure </label>
                            <div> {currentLocation.list[0].main.pressure} hPa</div>
                        </div>
                    </div>
                    <div className="rows ">

                    </div>
                </div>
            </div>

        </div>
    )
}
export const MainSearchBody = ({ currentLocation }) => {
    let temperature = currentLocation.main.temp;
    let celciusTemp = Math.round(temperature - 273.15);
    const addlikeHandler = () => {

    }

    const navigate = useNavigate()
    const datailsPage = () => {
        navigate('/details')
    }
    return (
        <>
            <div>
                <button onClick={() => addlikeHandler()}>add like</button>
                <button onClick={() => datailsPage()}> details</button>
            </div>
            <div className="upper-container">
                <div className="main-temperature">
                    <div>{currentLocation.weather[0].description}</div>
                    <h1>{celciusTemp} °C</h1>
                    <div>{currentLocation.name}</div>

                </div>
            </div>
            <div className="bottom-container">
                <div className="rows windcont">
                    <div className="prop">
                        <label> wind </label>
                        <div>{currentLocation.wind.speed} Km/h</div>
                    </div>
                    <div className="prop">
                        <label> humidity </label>
                        <div> {currentLocation.main.humidity} </div>
                    </div>
                    <div className="prop">
                        <label> pressure </label>
                        <div> {currentLocation.main.pressure} hPa</div>
                    </div>
                </div>
                <div className="rows ">

                </div>
            </div>
        </>
    )
}