// index.js

const ramenMenu = document.querySelector('#ramen-menu')
// const ramenDetail = document.querySelector('#ramen-detail')
const ramenImg = document.querySelector('.detail-image')
const ramenName = document.querySelector('.name')
const ramenRestaurant = document.querySelector('.restaurant')
const ramenRating = document.querySelector('#rating-display')
const ramenComment = document.querySelector('#comment-display')
const ramenForm = document.querySelector('#new-ramen')


// Callbacks
const handleClick = (ramenObj) => {
  // *Equals create clickable image, could name this way
  // *control + click to see all the ones that was name the same
  // Add code

  const img = document.createElement('img')
  img.src = ramenObj.image
  img.alt = ramenObj.name // *not important for the code challenge
  img.addEventListener('click', (event) =>{
    renderRamen(ramenObj)
  })
  ramenMenu.appendChild(img)// Add the ramen thumbnail to the menu
  // 插入 加上 ramen Detail 是中間的大圖
  // psuedoCode  
};

function renderRamen(ramenObj){ // 外來的 你給這個func的包裹 
  // console.log(`rendering ramen ${ramenObj.name}`)
  ramenImg.src = ramenObj.image
  ramenName.textContent = ramenObj.name
  ramenRestaurant.textContent = ramenObj.restaurant
  ramenRating.textContent = ramenObj.rating
  ramenComment.textContent = ramenObj.comment
}

const addSubmitListener = () => { // 不需要外來的東西就可以執行他的任務
  // Add code
  ramenForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputName = document.querySelector('#new-name').value // *concept similar to .src
    const inputRest = document.querySelector('#new-restaurant').value
    const inputImg = document.querySelector('#new-image').value
    const inputRating = document.querySelector('#new-rating').value
    // 如果要rating<10, 寫If else
    const inputCom = document.querySelector('#new-comment').value
    // Create a new ramen object
    const newRamen = { // *create an object, declare an variable, variables are objects
      name: inputName,
      restaurant: inputRest,
      image: inputImg,
      rating: inputRating,
      comment: inputCom,
    };
    console.log('New Ramen:'+ newRamen); // new ramen 是object, console.log 會長 New Ramen:[object Object]
    
    // Add the new ramen thumbnail to the menu
    handleClick(newRamen);
    event.target.reset()
  })
  
}


const displayRamens = () => {
  // Add code
  fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(jsonData => {
      jsonData.forEach((ramenObj) => {
      handleClick(ramenObj)

    })
    if (jsonData.length > 0 ){
      renderRamen(jsonData[0]);
    }
  }) 

};


const main = () => {
  // Invoke displayRamens here
  displayRamens()
  // Invoke addSubmitListener here
  addSubmitListener()

}

main()

// Export functions for testing 給其他file用的
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

