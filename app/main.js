//1
import VendrController from "./components/vendrController.js"

//6
class App {
  constructor() {
    //7
    this.controllers = {
      vendrController: new VendrController()
    }
  }
}

// @ts-ignore
window.app = new App()