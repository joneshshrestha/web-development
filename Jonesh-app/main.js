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

setInterval(() => {
  document.querySelector('span[data-time=hours]').textContent = new Date()
    .getHours()
    .toString()
    .padStart(2, '0')
  document.querySelector('span[data-time=minutes]').textContent = new Date()
    .getMinutes()
    .toString()
    .padStart(2, '0')
  document.querySelector('span[data-time=seconds]').textContent = new Date()
    .getSeconds()
    .toString()
    .padStart(2, '0')
}, 1000)

const galleryImage = [
  { src: './assets/gallery/image1.jpg', alt: 'Thumbnail Image 1' },
  { src: './assets/gallery/image2.jpg', alt: 'Thumbnail Image 2' },
  { src: './assets/gallery/image3.jpg', alt: 'Thumbnail Image 3' },
]

const mainImage = document.querySelector('#gallery > img')
let clickedThumbnail
mainImage.src = galleryImage[0].src
mainImage.alt = galleryImage[0].alt

const thumbnail = document.querySelector('.thumbnails')

thumbnail.addEventListener('click', (e) => {
  clickedThumbnail = e.target.alt
  return clickedThumbnail
})

galleryImage.forEach((e, i) => {
  let thumb = document.createElement('img')
  thumb.src = e.src
  thumb.alt = e.alt
  thumb.dataset.arrayIndex = i
  thumb.dataset.selected = i === 0 ? true : false
  thumbnail.appendChild(thumb)
  thumb.addEventListener('click', (e) => {
    mainImage.src = galleryImage[e.target.dataset.arrayIndex].src
    mainImage.alt = galleryImage[e.target.dataset.arrayIndex].alt
  })
})
