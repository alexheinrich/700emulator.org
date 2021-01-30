import Module from '/fpu/wasm/gen/hello.js';

class FloatingPointUnit extends AudioWorkletProcessor {
    constructor(options) {
        super()
        console.log(options.numberOfInputs)
        console.log(Module)

        this.sin = new Sin(Module)

        for (let i = 0; i < 440; i++) {
            console.log(this.sin.next())
        }
        console.log(Math.random() * 2 - 1)

    }

    process(inputs, outputs, parameters) {
        const output = outputs[0]
        output.forEach(channel => {
            for (let i = 0; i < channel.length; i++) {
                // channel[i] = Math.random() * 2 - 1
                channel[i] = this.sin.next()
            }
        })
        return true
    }
}

registerProcessor('FloatingPointUnit', FloatingPointUnit)

class Sin {
    constructor(module) {
        this.module = module
        this.instance = module.__Z7new_sinv()
    }

    next() {
        return this.module._next_val(this.instance)
    }
}
