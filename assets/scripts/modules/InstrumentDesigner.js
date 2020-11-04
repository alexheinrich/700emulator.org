export class InstrumentDesigner {
    constructor(container, state, addFunctionPoint) {
        this.container = container
        this.addFunctionPoint = addFunctionPoint
        this.strokeStyle = '#09D323';
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
    }

    bindEvents() {
        this.canvas.onclick = this.handleCanvasClick
    }

    bindFunctions () {
        this.draw = this.draw.bind(this)
        this.handleCanvasClick = this.handleCanvasClick.bind(this)
    }


    resolveElements() {
        this.canvas = this.container.querySelector('.canvas')
        this.ctx = this.canvas.getContext('2d')
    }

    updateUI(state) {
        this.draw(state.functionPoints)
    }

    draw(points) {
        this.ctx.beginPath()
        this.ctx.moveTo(0, 680)
        console.log(points)
        points.forEach(point => {
            this.ctx.lineTo(point.x, point.y)
        })
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.stroke();
    }

    handleCanvasClick(e) {
        const rect = this.canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        this.addFunctionPoint(x, y)

        // this.ctx.fillRect(x - 1, y - 1, 5, 5);
    }
}
