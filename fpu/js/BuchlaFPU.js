export class BuchlaFPU {
    constructor() {
        this.init()
        this.context = new AudioContext()
        this.output = this.context.destination
        this.voice = this.createVoice(this.output)
        // WASM Audio
        // this.wasmnode = this.createProcessor(this.context)

    }

    init() {
        this.bindFunctions()
    }

    bindFunctions() {
        this.createProcessor = this.createProcessor.bind(this)
    }

    async createProcessor() {
        await this.context.audioWorklet.addModule('/fpu/js/FloatingPointUnit.js')
        // console.log(this.module)
        // console.log(Module)
        // const fib = new Fib(this.module)
        // console.log(fib.next())
        const testNode = new AudioWorkletNode(this.context, 'FloatingPointUnit')

        testNode.connect(this.output)

        return testNode
    }

    createVoice(output) {
        const context = this.context

        let voice = {
            mod: context.createOscillator(),
            modGain: context.createGain(),
            osc: context.createOscillator(),
            gain: context.createGain()
        }

        voice.mod.frequency.value = 100
        voice.modGain.gain.value = 100
        voice.osc.frequency.value = 300
        voice.gain.gain.value = 0

        voice.mod.connect(voice.modGain)
        voice.modGain.connect(voice.osc.frequency)
        voice.osc.connect(voice.gain)
        voice.gain.connect(output)

        voice.osc.start(0)
        voice.mod.start(0)

        return voice
    }

    triggerFunction(state) {
        console.log('FPU: triggerFunction', state)
        var now = this.context.currentTime;
        this.voice.gain.gain.setTargetAtTime(0, now, 0.015);
        now = now + 0.015
        this.voice.gain.gain.cancelScheduledValues(now)

        state.functions.get('Level').forEach((functionPoint) => {
            console.log(functionPoint)
            now = now + ((1080 - functionPoint.x) / 1080) * 0.5
            const gain = (680 - functionPoint.y) / 680
            this.voice.gain.gain.linearRampToValueAtTime(gain, now);
        })

        this.voice.gain.gain.linearRampToValueAtTime(0.001, now + 0.03);


        this.context.resume();
    }
}



// function functionExists(f) {
//     return f && typeof f === 'function'
// }

// function isNumber(n) {
//     return typeof n === 'number'
// }

// function testFunctionBinding() {
//     assert(functionExists(Module._new_fib))
//     assert(functionExists(Module._next_val))
// }

// function testNextValReturnsInt() {
//     assert(isNumber(new Fib().next()))
// }

