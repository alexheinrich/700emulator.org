import { IDTabs } from './IDTabs.js';
export class InstrumentDesigner {
    constructor(container, state, addFunctionPoint, removeLastFunctionPoint) {
        this.container = container
        this.addFunctionPoint = addFunctionPoint
        this.removeLastFunctionPoint = removeLastFunctionPoint
        this.strokeStyle = '#09D323';
        this.fillStyle = '#F2F300';
        this.lineWidth = 2;
        this.state = Object.assign(state, this.getDefaultState())
        this.init()
        this.updateUI(state)
        // console.log('Instrument Designer constructed!', state)
    }

    init() {
        // this.state = this.getDefaultState()
        this.resolveElements()
        this.bindFunctions()
        this.bindEvents()

        this.ctx.strokeStyle = this.strokeStyle
        this.ctx.lineWidth = this.lineWidth
        this.ctx.fillStyle = this.fillStyle

        this.tabs = new IDTabs(this.container.querySelector('.tabs'), this.state, this.setActiveTab)
    }

    bindEvents() {
        this.canvas.onclick = this.handleCanvasClick
        document.addEventListener('keypress', this.handleKeypress);
    }

    bindFunctions () {
        this.drawFunction = this.drawFunction.bind(this)
        this.handleCanvasClick = this.handleCanvasClick.bind(this)
        this.handleKeypress = this.handleKeypress.bind(this)
        this.getDefaultState = this.getDefaultState.bind(this)
        this.setActiveTab = this.setActiveTab.bind(this)
    }

    resolveElements() {
        this.canvas = this.container.querySelector('.canvas')
        this.ctx = this.canvas.getContext('2d')
    }

    updateUI(state) {
        const canvasFunction = state.functions.get(this.state.beingEdited)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.drawFunction(canvasFunction)
        this.drawFunctionPoints(canvasFunction)
    }

    drawFunctionPoints(points) {
        points.forEach(point => {
            this.ctx.fillRect(point.x - this.lineWidth, point.y - this.lineWidth, 4, 4)
        })
    }

    drawFunction(points) {
        this.ctx.beginPath()
        
        const [firstPoint] = points.splice(0, 1)
        this.ctx.moveTo(firstPoint.x, firstPoint.y)
        
        points.forEach(point => {
            this.ctx.lineTo(point.x, point.y)
        })

        points.unshift(firstPoint)
        this.ctx.stroke()
    }

    handleCanvasClick(e) {
        const rect = this.canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        this.addFunctionPoint(x, y, this.state.beingEdited)
    }

    handleKeypress(e) {
        this.removeLastFunctionPoint(this.state.beingEdited)   
    }

    setActiveTab(tabClicked) {
        const currentTab = this.state.beingEdited
        this.state.beingEdited = tabClicked

        let tabs = [...this.state.functions.keys()]
        const [tabLevel] = tabs.splice(tabs.indexOf('Level'), 1)
        
        if (currentTab !== tabLevel && tabClicked !== tabLevel) {
            // put clicked tab to the index of current tab
            tabs.splice(tabs.indexOf(tabClicked), 1, tabLevel)
        } else if (tabClicked !== tabLevel) {
            // just switch around the elements
            tabs.splice(tabs.indexOf(tabClicked), 1, currentTab)
        }

        this.tabs.updateUI(tabs)
        this.updateUI(this.state)
    }

    getDefaultState() {
        return {
            beingEdited: 'Level'
        }
    }
}
