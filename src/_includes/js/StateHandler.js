const throttleDuration = 10

export class StateHandler {
  constructor() {
    this.updateUITimeout = setTimeout(() => { })
    this.bindFunctions()
    this.state = Object.assign({}, this.getDefaultState())
    console.log('StateHandler constructed!', this.state)
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
    console.log('StateHandler: updateUI.', state)
    const updateUI = new CustomEvent('updateUI', { detail: { state } })
    document.dispatchEvent(updateUI)
  }

  triggerFunction(state) {
    const triggerFunction = new CustomEvent('triggerFunction', { detail: { state } })
    document.dispatchEvent(triggerFunction)
  }

  addFunctionPoint(funcKey, x, y) {
    let functions = this.state.functions.get(funcKey)
    if (functions.length === 0 || functions[functions.length - 1].x < x) {
      functions.push({ x: x, y: y })
      this.state.functions.set(funcKey, functions)
      this.setState('functions', this.state.functions)
      this.setState('triggerFunction', true)
    }
  }

  removeLastFunctionPoint(funcKey) {
    const functions = this.state.functions.get(funcKey)
    functions.pop()
    this.state.functions.set(funcKey, functions)
    this.setState('functions', this.state.functions)
    this.setState('triggerFunction', false)
  }

  getDefaultState() {
    const functions = new Map([
      [
        'Level',
        [
          { x: 0, y: 680 },
          { x: 100, y: 75 },
          { x: 200, y: 150 },
          { x: 380, y: 145 }
        ]
      ],
      [
        'Frq 1',
        [
          { x: 0, y: 0 },
          { x: 100, y: 75 },
          { x: 200, y: 150 },
          { x: 380, y: 145 }
        ]
      ],
      [
        'Frq 2',
        [
          { x: 0, y: 10 },
          { x: 100, y: 75 },
          { x: 200, y: 150 },
          { x: 380, y: 145 }
        ]
      ],
      [
        'Frq 3',
        [
          { x: 0, y: 20 },
          { x: 100, y: 75 },
          { x: 200, y: 150 },
          { x: 380, y: 145 }
        ]
      ],
      [
        'Frq 4',
        [
          { x: 0, y: 680 },
          { x: 100, y: 75 },
          { x: 200, y: 150 },
          { x: 380, y: 145 }
        ]
      ],
      [
        'Filtr',
        [
          { x: 0, y: 680 },
          { x: 100, y: 75 },
          { x: 200, y: 150 },
          { x: 380, y: 145 }
        ]
      ],
      [
        'Loctn',
        [
          { x: 0, y: 680 },
          { x: 100, y: 75 },
          { x: 200, y: 150 },
          { x: 380, y: 145 }
        ]
      ],
      [
        'Ind 1',
        [
          { x: 0, y: 680 },
          { x: 100, y: 75 },
          { x: 200, y: 150 },
          { x: 380, y: 145 }
        ]
      ],
      [
        'Ind 2',
        [
          { x: 0, y: 680 },
          { x: 100, y: 75 },
          { x: 200, y: 150 },
          { x: 380, y: 145 }
        ]
      ],
      [
        'Ind 3',
        [
          { x: 0, y: 680 },
          { x: 100, y: 75 },
          { x: 200, y: 150 },
          { x: 380, y: 145 }
        ]
      ],
      [
        'Ind 4',
        [
          { x: 0, y: 680 },
          { x: 100, y: 75 },
          { x: 200, y: 150 },
          { x: 380, y: 145 }
        ]
      ],
      [
        'Ind 5',
        [
          { x: 0, y: 680 },
          { x: 100, y: 75 },
          { x: 200, y: 150 },
          { x: 380, y: 145 }
        ]
      ],
      [
        'Ind 6',
        [
          { x: 0, y: 680 },
          { x: 100, y: 75 },
          { x: 200, y: 150 },
          { x: 380, y: 145 }
        ]
      ],
    ])
    return {
      functions: functions,
      triggerFunction: true
    }
  }
}
