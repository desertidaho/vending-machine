import VendingMachine from '../models/vendingMachine.js'

//Private
//3
let vm = new VendingMachine()





//Services maintain data and manipulation of data here
//Public


export default class VendrService {
  constructor() {
    //5
  }

  get Balance() {
    return _vendr.balance
  }

  paidQuarter() {
    _vendr.balance += .25
  }


}