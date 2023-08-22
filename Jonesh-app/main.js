// Menu Section

const galleryImage = [
  { src: './assets/gallery/image1.jpg', alt: 'Thumbnail Image 1' },
  { src: './assets/gallery/image2.jpg', alt: 'Thumbnail Image 2' },
  { src: './assets/gallery/image3.jpg', alt: 'Thumbnail Image 3' },
]

const products = [
  {
    title: 'AstroFiction',
    author: 'John Doe',
    price: 49.9,
    image: './assets/products/img6.png',
  },
  {
    title: 'Space Odissey',
    author: 'Marie Anne',
    price: 35,
    image: './assets/products/img1.png',
  },
  {
    title: 'Doomed City',
    author: 'Jason Cobert',
    price: 0,
    image: './assets/products/img2.png',
  },
  {
    title: 'Black Dog',
    author: 'John Doe',
    price: 85.35,
    image: './assets/products/img3.png',
  },
  {
    title: 'My Little Robot',
    author: 'Pedro Paulo',
    price: 0,
    image: './assets/products/img5.png',
  },
  {
    title: 'Garden Girl',
    author: 'Ankit Patel',
    price: 45,
    image: './assets/products/img4.png',
  },
]

const menuHandler = () => {
  document.querySelector('#open-nav-menu').addEventListener('click', () => {
    document.querySelector('header nav .wrapper').classList.add('nav-open')
  })

  document.querySelector('#close-nav-menu').addEventListener('click', () => {
    document.querySelector('header nav .wrapper').classList.remove('nav-open')
  })
}

// Greeting Section

const celsiusToFar = (temperature) => {
  return (temperature * 9) / 5 + 32
}

const greetingHandler = () => {
  let currentHour = new Date().getHours()
  let greetingText
  if (currentHour < 12) {
    greetingText = 'Good Morning!'
  } else if (currentHour < 19) {
    greetingText = 'Good Afternoon!'
  } else if (currentHour < 24) {
    greetingText = 'Good Evening!'
  } else {
    greetingText = 'Error!'
  }

  const weatherCondition = 'Sunny'
  const userLocation = 'Rio De Janeiro'
  let temperature = 25
  let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFar(
    temperature
  ).toFixed(1)}°C outside`
  let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature}°C outside`

  document.querySelector('#greeting').innerHTML = greetingText

  document.querySelector('.weather-group').addEventListener('click', (e) => {
    if (e.target.id == 'fahr') {
      document.querySelector('p#weather').innerHTML = fahrText
    } else {
      document.querySelector('p#weather').innerHTML = celsiusText
    }
  })
}

// Local Time Section

const clockHandler = () => {
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
}

// Gallery Section

const galleryHandler = () => {
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
      let selectedIndex = e.target.dataset.arrayIndex
      mainImage.src = galleryImage[selectedIndex].src
      mainImage.alt = galleryImage[selectedIndex].alt
      thumbnail.querySelectorAll('img').forEach((e, i) => {
        e.dataset.selected = false
      })
      e.target.dataset.selected = true
    })
  })
}

const populateProducts = (productList) => {
  let productArea = document.querySelector('.products-area')
  productArea.textContent = ''
  productList.forEach((product, index) => {
    let productItem = document.createElement('div')
    productItem.classList.add('product-item')

    let productImage = document.createElement('img')
    productImage.src = product.image
    productImage.alt = 'Image for ' + product.title

    let productDetails = document.createElement('div')
    productDetails.classList.add('product-details')

    let productTitle = document.createElement('h3')
    productTitle.classList.add('product-title')
    productTitle.textContent = product.title

    let productAuthor = document.createElement('p')
    productAuthor.classList.add('product-author')
    productAuthor.textContent = product.author

    let priceTitle = document.createElement('p')
    priceTitle.classList.add('price-title')
    priceTitle.textContent = 'Price'

    let productPrice = document.createElement('p')
    productPrice.classList.add('product-price')
    productPrice.textContent = product.price > 0 ? '$' + product.price : 'Free'

    productItem.append(productImage)
    productItem.append(productDetails)

    productDetails.append(productTitle)
    productDetails.append(productAuthor)
    productDetails.append(priceTitle)
    productDetails.append(productPrice)

    productArea.append(productItem)
  })
}

const productHandler = () => {
  let freeProducts = products.filter((product) => {
    return !product.price || product.price <= 0
  })

  let paidProducts = products.filter((product) => {
    return product.price > 0
  })

  document.querySelector('.products-filter').addEventListener('click', (e) => {
    if (e.target.id === 'all') {
      populateProducts(products)
    } else if (e.target.id === 'paid') {
      populateProducts(paidProducts)
    } else if (e.target.id === 'free') {
      populateProducts(freeProducts)
    }
  })

  populateProducts(products)

  document.querySelector(
    '.products-filter label[for=all] span.product-amount'
  ).textContent = products.length

  document.querySelector(
    '.products-filter label[for=free] span.product-amount'
  ).textContent = freeProducts.length

  document.querySelector(
    '.products-filter label[for=paid] span.product-amount'
  ).textContent = paidProducts.length
}

const footerHandler = () => {
  let year = new Date().getFullYear()
  document.querySelector(
    'footer'
  ).textContent = `© ${year} - All rights reserved`
}

navigator.geolocation.getCurrentPosition((position) => {
  
})

menuHandler()
greetingHandler()
clockHandler()
galleryHandler()
productHandler()
footerHandler()
