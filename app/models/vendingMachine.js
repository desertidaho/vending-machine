import Snack from "./snack.js"

export default class VendingMachine {
  constructor() {
    this.snacks = {
      a1: new Snack('Snickers', 'A1', 0.50, './assets/img/snickers.png'),
      a2: new Snack('Twix', 'A2', 0.75, './assets/img/twix.jpg'),
      a3: new Snack('Oreos', 'A3', 1.00, './assets/img/oreo.jpg')
    }
    this.balance = 0
  }

}