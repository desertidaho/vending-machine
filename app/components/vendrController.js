//Private
//2
import VendrService from "./vendrService.js"
import Snack from "../models/snack.js";


//4
let vendrService = new VendrService()


//9
function draw(itemImage) {
  let v = vendrService.Balance
  document.getElementById('paidDisplay').innerText = v.toFixed(2)
  document.getElementById('dispensedCandy').setAttribute("src", itemImage)
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
    //check that item image is defined if has value draw() image and update balance in dom

  }

}