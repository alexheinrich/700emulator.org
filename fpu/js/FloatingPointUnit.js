import Module from '/fpu/gen/hello.js';

class FloatingPointUnit extends AudioWorkletProcessor {
    constructor(options) {
        super()
        console.log(options.numberOfInputs)
        console.log(Module)

        this.fib = new Fib(Module)

        for (let i = 0; i < 440; i++) {
            console.log(this.fib.next())
        }
        console.log(Math.random() * 2 - 1)

    }

    process(inputs, outputs, parameters) {
        const output = outputs[0]
        output.forEach(channel => {
            for (let i = 0; i < channel.length; i++) {
                // channel[i] = Math.random() * 2 - 1
                channel[i] = this.fib.next()
            }
        })
        return true
    }
}

registerProcessor('FloatingPointUnit', FloatingPointUnit)

class Fib {
    constructor(module) {
        this.module = module
        this.instance = module._new_fib()
    }

    next() {
        return this.module._next_val(this.instance)
    }
}
