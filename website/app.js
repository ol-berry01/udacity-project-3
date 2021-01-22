/* Global Variables */
const zipCode = document.querySelector("#zip")
const feelings = document.querySelector("#feelings")
const generateBtn = document.querySelector("#generate")
const date = document.querySelector("#date")
const temp = document.querySelector("#temp")
const content = document.querySelector("#content")
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// Create a new date instance dynamically with JS
let d = new Date()
let newDate = month[d.getMonth()] + "." + d.getDate() + "." + d.getFullYear()
