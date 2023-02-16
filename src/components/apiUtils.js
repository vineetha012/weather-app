//https://api.openweathermap.org/data/2.5/weather?q=tirupati&appid=a230806cf843d0dde9e7a98408f28351
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// setCity("");
   // let response=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
export const Searchweather = (searchQuery) => {
    let response=fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&appid=d885aa1d783fd13a55050afeef620fcb`
    ).then(response => response.json()).catch(error => console.log(error))
    console.log(response)
    return response
}
///https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
export const Searchweatherhome = (lat, lon) => {
    let response = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=d885aa1d783fd13a55050afeef620fcb`
    ).then(response => response.json()).catch(error => console.log(error))
    return response
    //    data => {
    //      console.log(data)
    //      return data
    //      // const kelvin = data.main.temp;
    //      // const celcius = kelvin - 273.15;
    //      // console.log(kelvin,celcius)
    //      //setResult("Temperature at "+city+"\n"+Math.round(celcius)+"°C");

     
 }
