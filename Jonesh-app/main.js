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
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFar(
  temperature
).toFixed(1)}°C outside`
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature}°C outside`

document.querySelector('#greeting').innerHTML = greetingText

document.querySelector('.weather-group').addEventListener('click', (e) => {
  console.log(e.target.id)

  if (e.target.id == 'fahr') {
    document.querySelector('p#weather').innerHTML = fahrText
  } else {
    document.querySelector('p#weather').innerHTML = celsiusText
  }
})
