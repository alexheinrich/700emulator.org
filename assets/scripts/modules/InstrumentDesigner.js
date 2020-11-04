export class InstrumentDesigner {
    constructor(container, state, addFunctionPoint, removeLastFunctionPoint) {
        this.container = container
        this.addFunctionPoint = addFunctionPoint
        this.removeLastFunctionPoint = removeLastFunctionPoint
        this.strokeStyle = '#09D323';
        this.fillStyle = '#F2F300';
        this.lineWidth = 2;
        this.init()
        this.updateUI(state)
        console.log('Instrument Designer constructed!')
        console.log('StateHandler', state)
    }

    init() {
        this.resolveElements()
        this.bindFunctions()
        this.bindEvents()

        this.ctx.strokeStyle = this.strokeStyle
        this.ctx.lineWidth = this.lineWidth
        this.ctx.fillStyle = this.fillStyle
    }

    bindEvents() {
        this.canvas.onclick = this.handleCanvasClick
        document.addEventListener('keypress', this.handleKeypress);
    }

    bindFunctions () {
        this.drawFunction = this.drawFunction.bind(this)
        this.handleCanvasClick = this.handleCanvasClick.bind(this)
        this.handleKeypress = this.handleKeypress.bind(this)
    }

    resolveElements() {
        this.canvas = this.container.querySelector('.canvas')
        this.ctx = this.canvas.getContext('2d')
    }

    updateUI(state) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawFunction(state.functionPoints)
        this.drawFunctionPoints(state.functionPoints)
    }

    drawFunctionPoints(points) {
        points.forEach(point => {
            this.ctx.fillRect(point.x - this.lineWidth, point.y - this.lineWidth, 4, 4)
        })
    }

    drawFunction(points) {
        this.ctx.beginPath()
        this.ctx.moveTo(0, 680)
        points.forEach(point => {
            this.ctx.lineTo(point.x, point.y)
        })
        this.ctx.stroke();
    }

    handleCanvasClick(e) {
        const rect = this.canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        this.addFunctionPoint(x, y)
    }

    handleKeypress(e) {
        this.removeLastFunctionPoint()   
    }
}
