import {cfg, patctab, pat, inspal} from './variables.js';
export class FMConfig {
    constructor(canvas, state) {
        this.canvas = canvas
        this.init()
        this.updateUI(state)
    }

    init() {
        this.resolveElements()
        this.bindFunctions()
        this.bindEvents()
    }

    bindEvents() {
    }

    bindFunctions() {
        this.putpat = this.putpat.bind(this)
        this.dispcfg = this.dispcfg.bind(this)
    }

    resolveElements() {
        this.ctx = this.canvas.getContext('2d')
    }

    updateUI() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.dispcfg(1);
    }

    dispcfg(nn) {
        const cfgdat = cfg[nn];

        cfgdat.forEach((currentValue) => {
            let cfp = currentValue;
            const np = cfp[0];
            this.putpat(np, cfp[1], cfp[2], patctab[np - 1]);
        })
    }

    putpat(pn, px, py, patc) {
        let xp, yp, pr, pc;
        let pw;

        for (pr = 0; pr < 16; pr++) {
            pw = pat[pn - 1][pr];
            yp = py - 8 + pr;

            for (pc = 0; pc < 16; pc++) {
                xp = px - 8 + pc;

                if (pw & (1 << (15 - pc))) {
                    this.ctx.fillStyle = inspal[patc];
                    this.ctx.fillRect(xp * 2, yp * 2, 2, 2)
                }
            }
        }
    }
}

