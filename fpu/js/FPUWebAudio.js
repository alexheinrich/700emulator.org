export class FPUWebAudio {
    constructor() {
        this.init()
        this.context = new AudioContext()
        this.output = this.context.destination
        this.voice = this.createVoice(this.output)
    }

    createVoice(output) {
        const context = this.context

        let voice = {
            mod: context.createOscillator(),
            modGain: context.createGain(),
            osc: context.createOscillator(),
            gainNode: context.createGain()
        }

        voice.mod.frequency.value = 100
        voice.modGain.gain.value = 100
        voice.osc.frequency.value = 300
        voice.gainNode.gain.value = 0

        voice.mod.connect(voice.modGain)
        voice.modGain.connect(voice.osc.frequency)
        voice.osc.connect(voice.gainNode)
        voice.gainNode.connect(output)

        voice.osc.start(0)
        voice.mod.start(0)

        return voice
    }

    normalizeGain(rawValue) {
        const range = 680
        return (range - rawValue) / range
    }

    normalizeTime(rawValue) {
        const range = 1080
        return rawValue * 5 / range
    }

    triggerFunction(state) {
        console.log('FPU: triggerFunction', state)
        let now = this.context.currentTime
        this.voice.gainNode.gain.cancelScheduledValues(now)
        this.voice.gainNode.gain.setValueAtTime(0, now)
        
        const functionPoints = state.functions.get('Level')

        if (functionPoints.length > 1) {
            const [firstPoint] = functionPoints.splice(0, 1)
            now = now + this.normalizeTime(firstPoint.x)
            this.voice.gainNode.gain.setValueAtTime(this.normalizeGain(firstPoint.y), now)
            console.log('firstPoint', firstPoint)
            let lastX = firstPoint.x

            functionPoints.forEach((functionPoint) => {
                console.log(functionPoint)
                const gain = this.normalizeGain(functionPoint.y)
                const timeIncrement = this.normalizeTime(functionPoint.x - lastX)
                now = now + timeIncrement
                this.voice.gainNode.gain.linearRampToValueAtTime(gain, now)
    
                lastX = functionPoint.x
            })
    
            now = now + 0.03
            this.voice.gainNode.gain.linearRampToValueAtTime(0.001, now)

            functionPoints.unshift(firstPoint)
        }

        this.context.resume();
    }
}
