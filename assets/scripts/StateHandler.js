const throttleDuration = 10

export class StateHandler {
  constructor() {
    this.updateUITimeout = setTimeout(() => { })
    this.bindFunctions()
    this.state = Object.assign({}, this.getDefaultState())
  }

  bindFunctions() {
    this.setState = this.setState.bind(this)
    this.getDefaultState = this.getDefaultState.bind(this)
    this.addFunctionPoint = this.addFunctionPoint.bind(this)
    this.removeLastFunctionPoint = this.removeLastFunctionPoint.bind(this)
    this.updateUI = this.updateUI.bind(this)
    this.triggerFunction = this.triggerFunction.bind(this)
  }

  setState(key, value) {
    this.state[key] = value
    clearTimeout(this.updateUITimeout)
    this.updateUITimeout = setTimeout(() => {
      this.updateUI(this.state)
      if (this.state.triggerFunction === true) this.triggerFunction(this.state)
    }, throttleDuration)
  }

  updateUI(state) {
    console.log('updateUI', state)
    const updateUI = new CustomEvent('updateUI', { detail: { state } })
    document.dispatchEvent(updateUI)
  }

  triggerFunction(state) {
    const triggerFunction = new CustomEvent('triggerFunction', { detail: { state } })
    document.dispatchEvent(triggerFunction)
  }

  addFunctionPoint(x, y) {
    const functionPoints = this.state.functionPoints
    if (functionPoints[functionPoints.length - 1].x < x) {
      this.state.functionPoints.push({ x: x, y: y })
      this.setState('functionPoints', functionPoints)
      this.setState('triggerFunction', true)
    }
  }

  removeLastFunctionPoint() {
    const functionPoints = this.state.functionPoints
    functionPoints.pop()
    this.setState('functionPoints', functionPoints)
    this.setState('triggerFunction', false)
  }

  getDefaultState() {
    return {
      functionPoints: [
        { x: 0, y: 680 },
        { x: 100, y: 75 },
        { x: 200, y: 150 },
        { x: 380, y: 145 }
      ],
      triggerFunction: true
    }
  }
}
