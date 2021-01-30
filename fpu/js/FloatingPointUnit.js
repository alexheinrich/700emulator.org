import Module from '/fpu/wasm/gen/hello.js';

class FloatingPointUnit extends AudioWorkletProcessor {
    constructor(options) {
        super()
        console.log(options.numberOfInputs)
        console.log(Module)

        this.sin = new Sin(Module)

        // for (let i = 0; i < 440; i++) {
        //     console.log(this.sin.next())
        // }

    }

    process(inputs, outputs, parameters) {
        const output = outputs[0]
        for (let channelIndex = 0; channelIndex < output.length; channelIndex++) {
            const channel = output[channelIndex];

            for (let i = 0; i < channel.length; i++) {
                channel[i] = this.sin.next()
            }
        }
        return true
    }
}

registerProcessor('FloatingPointUnit', FloatingPointUnit)

class Sin {
    constructor(module) {
        this.module = module
        this.instance = module._new_sin(330)
    }

    next() {
        return this.module._next_val(this.instance)
    }
}
