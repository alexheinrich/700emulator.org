const throttleDuration = 10

export class StateHandler {
  constructor () {
    this.updateUITimeout = setTimeout(() => { })
    this.bindFunctions()
    this.state = Object.assign({}, this.getDefaultState())
  }

  bindFunctions () {
    this.setState = this.setState.bind(this)
    this.getDefaultState = this.getDefaultState.bind(this)
  }

  setState (key, value) {
    this.state[key] = value
    clearTimeout(this.updateUITimeout)
    this.updateUITimeout = setTimeout(() => {
      this.updateUI(this.state)
    }, throttleDuration)
  }

  getDefaultState () {
    return {
        functionPoints: [
            {x: 0, y: 680}, 
            {x: 100, y: 75},
            {x: 100, y: 25}
        ]
    }
  }
}
