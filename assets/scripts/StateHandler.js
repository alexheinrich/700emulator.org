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
    this.addFunctionPoint = this.addFunctionPoint.bind(this)
    this.updateUI = this.updateUI.bind(this)
  }

  setState (key, value) {
    this.state[key] = value
    clearTimeout(this.updateUITimeout)
    this.updateUITimeout = setTimeout(() => {
      this.updateUI(this.state)
    }, throttleDuration)
  }

  updateUI (state) {
    const updateUI = new CustomEvent('updateUI', { detail: { state } })
    document.dispatchEvent(updateUI)
  }

  addFunctionPoint (x, y) {
    this.state.functionPoints.push({x: x, y: y})
    this.setState('functionPoints', this.state.functionPoints)
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
