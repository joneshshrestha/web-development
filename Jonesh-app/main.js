document.querySelector('#open-nav-menu').addEventListener('click', () => {
  document.querySelector('header nav .wrapper').classList.add('nav-open')
})

document.querySelector('#close-nav-menu').addEventListener('click', () => {
  document.querySelector('header nav .wrapper').classList.remove('nav-open')
})

//Greeting Section

const celsiusToFar = (temperature) => {
  return (temperature * 9) / 5 + 32
}

const greetingText = 'Good afternoon!'
const weatherCondition = 'Sunny'
const userLocation = 'Rio De Janeiro'
let temperature = 25
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFar(
  temperature
).toFixed(1)}°C outside`

document.querySelector('#greeting').innerHTML = greetingText
document.querySelector('p#weather').innerHTML = weatherText
