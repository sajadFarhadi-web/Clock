setInterval(setClock , 1000)
const hourHand = document.querySelector('[data-hour-hand]')
const minHand  = document.querySelector('[data-min-hand]')
const secHand  = document.querySelector('[data-sec-hand]')
function setClock(){
    const jariDate = new Date()
    const secsRat = jariDate.getSeconds() / 60
    const minsRat = (secsRat + jariDate.getMinutes()) / 60
    const hoursRat = (minsRat + jariDate.getHours()) / 12

    setRotation(secHand , secsRat)
    setRotation(minHand , minsRat)
    setRotation(hourHand , hoursRat)
}

function setRotation(element, rotationRat){
    element.style.setProperty('--rotation' , rotationRat * 360)
}
setClock()