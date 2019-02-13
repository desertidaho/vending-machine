import VendingMachine from '../models/vendingMachine.js'
import Snack from '../models/snack.js';

//3
let _vendr = new VendingMachine()

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

  buy(itemNum) {
    let targetSnack = _vendr.snacks[itemNum]
    if (targetSnack.price <= _vendr.balance) {
      _vendr.balance -= targetSnack.price
      return targetSnack.image
    }
  }

}