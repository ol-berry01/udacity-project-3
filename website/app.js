/* Global Variables */
const zipCode = document.querySelector("#zip")
const feelings = document.querySelector("#feelings")
const generateBtn = document.querySelector("#generate")
const date = document.querySelector("#date")
const temp = document.querySelector("#temp")
const content = document.querySelector("#content")
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const baseUrl = "//api.openweathermap.org/data/2.5/weather?zip="
const secretKey = "abff52ecfed597778c0d38f6b4faa03e"

// Create a new date instance dynamically with JS
let d = new Date()
let newDate = month[d.getMonth()] + "." + d.getDate() + "." + d.getFullYear()

generateBtn.addEventListener("click", e => {
  e.preventDefault()
  const newZip = zipCode.value
  const newFeelings = feelings.value

  //   console.log(`Test: ${newDate}, ${newZip}, ${newFeelings}`)

  getWeather(baseUrl, newZip, secretKey).then(weatherData => {
    // date.innerHTML = `${newDate}`
    // temp.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}&deg;C`
    // content.innerHTML = `Entry: ${newFeelings}`

    postWeather("/addWeather", {
      date: newDate,
      temp: weatherData.main.temp,
      feelings: newFeelings
    })
  })
})

const getWeather = async (url, zip, key) => {
  const response = await fetch(`${url}${zip},us&appid=${key}`)

  try {
    const weatherData = await response.json()
    return weatherData
  } catch (err) {
    console.log("error:", err)
  }
}

const postWeather = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  try {
    const newEntry = await response.json()
    return newEntry
  } catch (error) {
    console.log("Error: ", error)
  }
}
