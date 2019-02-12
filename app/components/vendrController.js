//Private
//2
import VendrService from "./vendrService.js"


//4
let vendrService = new VendrService()

function draw() {

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

}