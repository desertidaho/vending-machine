//2
import VendrService from "./vendrService.js"
import Snack from "../models/snack.js";

//4
let vendrService = new VendrService()

//9
function draw(itemImage) {
  let v = vendrService.Balance
  document.getElementById('paidDisplay').innerText = v.toFixed(2)
  if (itemImage) {
    document.getElementById('dispensedCandy').setAttribute("src", itemImage)
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

}