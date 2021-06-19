// 1. selecting every element that we need
const openBtn = document.querySelector("#open-button")
const closeBtn = document.querySelector("#close-button")
const overlayDiv = document.querySelector("#overlay")
const modalDiv = document.querySelector("#modal")

// 2. Adding eventListener to open button
openBtn.addEventListener("click", (e) => {
  overlayDiv.classList.add("open")
  modalDiv.classList.add("open")
})
// 3. Adding Eventlistener to close button
closeBtn.addEventListener("click", (e) => {
  modalDiv.classList.remove("open")
  overlayDiv.classList.remove("open")
})
// 4. Adding Eventlistener to remove overlay class that we have added
overlayDiv.addEventListener("click", (e) => {
  modalDiv.classList.remove("open")
  overlayDiv.classList.remove("open")
})

// step 3 code and step 4 code are similar...so here function makes our program easy
// Add this function instead of arrow function that we have used in step 3 and 4

/*function removeClass(){
  modalDiv.classList.remove("open")
  overlayDiv.classList.remove("open")
}
*/
