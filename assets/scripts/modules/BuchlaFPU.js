export class BuchlaFPU {
    constructor(test) {
        console.log(test)
        this.context = new AudioContext()
        this.output = this.context.destination
        this.voice = this.createVoice(this.output)
    }

    bindEvents() {
        this.canvas.onclick = this.handleCanvasClick
        document.addEventListener('click', this.handleKeypress);
    }


    bindFunctions() {
        this.drawFunction = this.drawFunction.bind(this)
        this.handleCanvasClick = this.handleCanvasClick.bind(this)
        this.handleKeypress = this.handleKeypress.bind(this)
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
        // this.voice.gain.gain.cancelScheduledValues(now)

        state.functionPoints.forEach((functionPoint) => {
            console.log(functionPoint)
            now = now + ((1080 - functionPoint.x) / 1080) * 0.5
            const gain = (680 - functionPoint.y) / 680
            this.voice.gain.gain.linearRampToValueAtTime(gain, now);
        })

        // this.voice.gain.gain.linearRampToValueAtTime(0.001, now + 0.03);

        this.context.resume();

    }
}
