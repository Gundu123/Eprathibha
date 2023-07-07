import axios from "axios"
import { useState } from "react"

let WeatherApp = () => {
  let [city, setcity] = useState("")
  let [Data, setData] = useState(null)

  let HandleEvent = (e) => {
    setcity(e.target.value)
  }

  let HandleSubmit = (e) => {
    e.preventDefault()
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=490902af326511a0d8e659081284cfa8&units=metric`)
      .then((val) => {
       setData(val)
        console.log(val)
      })
      .catch((e) => {
        console.log("input not found")
      })
  }

  return (
    <div>
      <form onSubmit={HandleSubmit} >
        <input type="text" name="submit"  onChange={HandleEvent} />
        <input type="submit" value="Submit"/>
      </form>
      {Data && (
        <>
          <h1>{Data.data.name} Weather</h1>
          <p>Country:{Data.data.sys.country}</p>
          <p>Temperature: {Data.data.main.temp}°C</p>
          <p>Humidity: {Data.data.main.humidity}%</p>
          {/* <p>Cloudiness: {Data.data.clouds.all}%</p>
          <p>wind:{Data.data.wind.speed}</p> */}
        </>
      )}
    </div>
  )
}

export default WeatherApp
