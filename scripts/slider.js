function slider(id) {
  const slider = document.querySelector(`#${id}`)
  const container = slider.querySelector(`.${id}__container`)
  const slides = container.querySelectorAll(`.slide`)

  const btnNext = slider.querySelector(`.${id}__btn--next`)
  const btnPrev = slider.querySelector(`.${id}__btn--prev`)

  const pagination = slider.querySelectorAll(`.${id}__pagination`)

  const slidesCount = slides.length - 1
  const screenWidth = window.innerWidth;
  const maxPos = -screenWidth * slidesCount

  let position = 0
  let currentSlide = 1
  let prevSlide

  function toggleActiveClass(prev) {
    paginationItems[prev].classList.remove('pagination__item--active')
    paginationItems[currentSlide].classList.add('pagination__item--active')
  }

  function switcher(mode) {
    prevSlide = currentSlide

    if (mode === 'next') {
      position = position === (maxPos) ? 0 : position -= screenWidth
      currentSlide = currentSlide === slidesCount ? 1 : currentSlide++
    }

    if (mode === 'prev') {
      position = position === 0 ? (maxPos) : position += screenWidth
      currentSlide = currentSlide === 1 ? slidesCount : currentSlide--
    }

    container.style.left = `${position}px`
  }

  function jumpTo(number) {
    prevSlide = currentSlide
    position = -screenWidth * number
    currentSlide = number++
    
    container.style.left = `${position}px`
  }

  btnNext.addEventListener('click', () => {
    switcher('next')
  })

  btnPrev.addEventListener('click', () => {
    switcher('prev')
  })

  pagination.forEach((item) => {
    const paginationItems = item.querySelectorAll('.pagination__item')

    paginationItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        jumpTo(index)
      })
    })
  })
  
}

slider('mainSlider')
