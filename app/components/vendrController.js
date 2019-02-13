//2
import VendrService from "./vendrService.js"

//4
let vendrService = new VendrService()

//9
function draw(itemImage, cashBack) {
  let v = vendrService.Balance
  document.getElementById('paidDisplay').innerText = v.toFixed(2)
  if (itemImage) {
    document.getElementById('dispensedCandy').setAttribute("src", itemImage)
  }
  if (v == 0) {
    document.getElementById('paidDisplay').innerText = v.toFixed(2)
    document.getElementById('dispensedCandy').setAttribute("src", "./assets/img/black-box.jpg")
  }
}

//Public
export default class VendrController {
  constructor() {
    //8
    draw()
  }

  paidQuarter() {
    vendrService.paidQuarter()
    draw()
  }

  buy(itemNum) {
    let itemImage = vendrService.buy(itemNum)
    if (itemImage) {
      draw(itemImage)
    }
  }

  cashOut() {
    vendrService.cashOut()
    draw()
  }

}