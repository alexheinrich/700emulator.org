export class FPUWebAssembly {
    constructor() {
        this.context = new AudioContext()
        this.output = this.context.destination
        this.floatingPointUnit = this.createFPU(this.context)
    }

    async createFPU() {
        await this.context.audioWorklet.addModule('/fpu/js/FloatingPointUnit.js')

        const floatingPointUnit = new AudioWorkletNode(this.context, 'FloatingPointUnit')
        floatingPointUnit.connect(this.output)

        return floatingPointUnit
    }

    triggerFunction(state) {
        console.log('FPU: triggerFunction', state)

        this.context.resume();
    }
}
