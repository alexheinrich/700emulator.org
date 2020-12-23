import { IDTabs } from './IDTabs.js';


const inspal = [	/* instrument display color palette */
    '#000',	/*  0 */
    '#FFF',	/*  1 */
    '#AAA',	/*  2 */
    '#F00',	/*  3 */
    '#0FA',	/*  4 */
    '#005',	/*  5 */
    '#055',	/*  6 */
    '#505',	/*  7 */
    '#FA0',	/*  8 */
    '#55A',	/*  9 */
    '#AF0',	/* 10 */
    '#AFF',	/* 11 */
    '#F0A',	/* 1A */
    '#0AF',	/* 1F */
    '#0F0',	/* 14 */
    '#FF0'	/* 15 */
];

const pat = [		/* configuration pattern elements */

    [0x0000, 0x0000, 0x0000, 0x0000,	/* 1 */
        0x0080, 0x0180, 0x0080, 0x0080,
        0x0080, 0x0080, 0x0080, 0x01C0,
        0x0000, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x0000,	/* 2 */
        0x03C0, 0x0420, 0x0020, 0x0020,
        0x03C0, 0x0400, 0x0400, 0x07E0,
        0x0000, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x0000,	/* 3 */
        0x03C0, 0x0420, 0x0020, 0x01C0,
        0x0020, 0x0020, 0x0420, 0x03C0,
        0x0000, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x0000,	/* 4 */
        0x0040, 0x00C0, 0x0140, 0x0240,
        0x0440, 0x07E0, 0x0040, 0x0040,
        0x0000, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x0000,	/* 5 */
        0x03C0, 0x0200, 0x0200, 0x03C0,
        0x0020, 0x0020, 0x0420, 0x03C0,
        0x0000, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x0000,	/* 6 */
        0x03C0, 0x0400, 0x0400, 0x07C0,
        0x0420, 0x0420, 0x0420, 0x03C0,
        0x0000, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x03C0, 0x07E0, 0x0FF0,	/* 7 */
        0x1FF8, 0x1FF8, 0x3FFC, 0x3FFC,
        0x7FFE, 0x7FFE, 0x7FFE, 0xFFFF,
        0xFFFF, 0xFFFF, 0x0000, 0x0000],

    [0x0000, 0x0000, 0xFFFF, 0xFFFF,	/* 8 */
        0xFFFF, 0x7FFE, 0x7FFE, 0x7FFE,
        0x3FFC, 0x3FFC, 0x1FF8, 0x1FF8,
        0x0FF0, 0x07E0, 0x03C0, 0x0000],

    [0x3800, 0x3F00, 0x3FC0, 0x3FF0,	/* 9 */
        0x3FF8, 0x3FFC, 0x3FFE, 0x3FFE,
        0x3FFE, 0x3FFE, 0x3FFC, 0x3FF8,
        0x3FF0, 0x3FC0, 0x3F00, 0x3800],

    [0x001C, 0x00FC, 0x03FC, 0x0FFC,	/* 10 */
        0x1FFC, 0x3FFC, 0x7FFC, 0x7FFC,
        0x7FFC, 0x7FFC, 0x3FFC, 0x1FFC,
        0x0FFC, 0x03FC, 0x00FC, 0x001C],

    [0x0000, 0x0000, 0x0000, 0x0000,	/* 11 */
        0x0080, 0x0180, 0x0080, 0x0000,
        0x0000, 0x0000, 0x0000, 0x01C0,
        0x0000, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x0000,	/* 12 */
        0x03C0, 0x0420, 0x0020, 0x0000,
        0x03C0, 0x0400, 0x0000, 0x07E0,
        0x0000, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x0000,	/* 13 */
        0x03C0, 0x0420, 0x0020, 0x01C0,
        0x0020, 0x0000, 0x0420, 0x03C0,
        0x0000, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x0000,	/* 14 */
        0x0000, 0x0000, 0x0000, 0x0000,
        0x0000, 0x0000, 0x0000, 0x0000,
        0x0000, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x07E0, 0x1FF8, 0x3FFC,	/* 15 */
        0x7FFE, 0x7FFE, 0xFFFF, 0xFFFF,
        0xFFFF, 0xFFFF, 0x7FFE, 0x7FFE,
        0x3FFC, 0x1FF8, 0x07E0, 0x0000],

    [0x0000, 0x7FFE, 0x7FFE, 0x7FFE,	/* 16 */
        0x7FFE, 0x7FFE, 0x7FFE, 0x7FFE,
        0x7FFE, 0x7FFE, 0x7FFE, 0x7FFE,
        0x7FFE, 0x7FFE, 0x7FFE, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x0000,	/* 17 */
        0x03C0, 0x0420, 0x0420, 0x0420,
        0x07E0, 0x0420, 0x0420, 0x0420,
        0x0000, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x0000,	/* 18 */
        0x07C0, 0x0220, 0x0220, 0x03C0,
        0x0220, 0x0220, 0x0220, 0x07C0,
        0x0000, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x0000,	/* 19 */
        0x0000, 0x0000, 0x0000, 0x007F,
        0x00FF, 0x01C0, 0x0180, 0x0180,
        0x0180, 0x0180, 0x0180, 0x0180],

    [0x0180, 0x0180, 0x0180, 0x0180,	/* 20 */
        0x0180, 0x0180, 0x0380, 0xFF00,
        0xFE00, 0x0000, 0x0000, 0x0000,
        0x0000, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x0000,	/* 21 */
        0x0000, 0x0000, 0x0000, 0xFE00,
        0xFF00, 0x0380, 0x0180, 0x0180,
        0x0180, 0x0180, 0x0180, 0x0180],

    [0x0180, 0x0180, 0x0180, 0x0180,	/* 22 */
        0x0180, 0x0180, 0x01C0, 0x00FF,
        0x007F, 0x0000, 0x0000, 0x0000,
        0x0000, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x0000,	/* 23 */
        0x0000, 0x0000, 0x0000, 0xFFFF,
        0xFFFF, 0x0000, 0x0000, 0x0000,
        0x0000, 0x0000, 0x0000, 0x0000],

    [0x0180, 0x0180, 0x0180, 0x0180,	/* 24 */
        0x0180, 0x0180, 0x0180, 0x0180,
        0x0180, 0x0180, 0x0180, 0x0180,
        0x0180, 0x0180, 0x0180, 0x0180],

    [0x0003, 0x0007, 0x000E, 0x001C,	/* 25 */
        0x0038, 0x0070, 0x00E0, 0x01C0,
        0x0380, 0x0700, 0x0E00, 0x1C00,
        0x3800, 0x7000, 0xE000, 0xC000],

    [0xC000, 0xE000, 0x7000, 0x3800,	/* 26 */
        0x1C00, 0x0E00, 0x0700, 0x0380,
        0x01C0, 0x00E0, 0x0070, 0x0038,
        0x001C, 0x000E, 0x0007, 0x0003],

    [0x0000, 0x0000, 0x0000, 0x03C0,	/* 27 */
        0x07E0, 0x0E70, 0x0C30, 0x0C30,
        0x0FF0, 0x0FF0, 0x0C30, 0x0C30,
        0x0C30, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x0FE0,	/* 28 */
        0x0FF0, 0x0630, 0x0630, 0x07E0,
        0x07E0, 0x0630, 0x0630, 0x0FF0,
        0x0FE0, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x0080,	/* 29 */
        0x0180, 0x0380, 0x0180, 0x0180,
        0x0180, 0x0180, 0x0180, 0x03C0,
        0x03C0, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x03C0,	/* 30 */
        0x07E0, 0x0660, 0x0060, 0x03E0,
        0x07C0, 0x0600, 0x0600, 0x07E0,
        0x07E0, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x03C0,	/* 31 */
        0x07E0, 0x0660, 0x0060, 0x01C0,
        0x01C0, 0x0060, 0x0660, 0x07E0,
        0x03C0, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x0000,	/* 32 */
        0x0060, 0x0660, 0x0660, 0x0660,
        0x07F0, 0x07F0, 0x0060, 0x0060,
        0x0060, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x07C0,	/* 33 */
        0x07C0, 0x0600, 0x0600, 0x07C0,
        0x07E0, 0x0060, 0x0060, 0x07E0,
        0x03C0, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x0000, 0x0000, 0x03C0,	/* 34 */
        0x07C0, 0x0600, 0x0600, 0x07C0,
        0x07E0, 0x0660, 0x0660, 0x07E0,
        0x03C0, 0x0000, 0x0000, 0x0000],

    [0x0000, 0x7FFE, 0x7FFE, 0x7FFE,	/* 35 */
        0x7FFE, 0x7FFE, 0x7FFE, 0x7FFE,
        0x7FFE, 0x7FFE, 0x7FFE, 0x7FFE,
        0x7FFE, 0x7FFE, 0x7FFE, 0x0000]
];

const patctab = [	/* pattern colors */
    0,	/* 1 */
    0,	/* 2 */
    0,	/* 3 */
    0,	/* 4 */
    0,	/* 5 */
    0,	/* 6 */
    12,	/* 7 */
    12,	/* 8 */
    12,	/* 9 */
    12,	/* 10 */
    0,	/* 11 */
    0,	/* 12 */
    0,	/* 13 */
    0,	/* 14 */
    13,	/* 15 */
    8,	/* 16 */
    0,	/* 17 */
    0,	/* 18 */
    2,	/* 19 */
    2,	/* 20 */
    2,	/* 21 */
    2,	/* 22 */
    2,	/* 23 */
    2,	/* 24 */
    2,	/* 25 */
    2,	/* 26 */
    0,	/* 27 */
    0,	/* 28 */
    0,	/* 29 */
    0,	/* 30 */
    0,	/* 31 */
    0,	/* 32 */
    0,	/* 33 */
    0,	/* 34 */
    4	/* 35 */
];


const cfg = [
    [
        [22, 18, 104],	/* 1 */
        [23, 100, 42],	/* 2 */
        [24, 112, 36],	/* 3 */
        [20, 65, 104],	/* 4 */
        [22, 65, 104],	/* 5 */
        [23, 80, 104],	/* 6 */
        [23, 96, 104],	/* 7 */
        [20, 112, 104],	/* 8 */
        [24, 65, 88],	/* 9 */
        [19, 65, 78],	/* 10 */
        [21, 84, 78],	/* 11 */
        [23, 74, 78],	/* 12 */
        [19, 46, 70],	/* 13 */
        [23, 58, 70],	/* 14 */
        [23, 72, 70],	/* 15 */
        [20, 84, 70],	/* 16 */
        [24, 46, 68],	/* 17 */
        [24, 46, 82],	/* 18 */
        [21, 46, 42],	/* 19 */
        [23, 30, 42],	/* 20 */
        [19, 18, 26],	/* 21 */
        [23, 32, 26],	/* 22 */
        [24, 18, 40],	/* 23 */
        [24, 18, 56],	/* 24 */
        [24, 18, 78],	/* 25 */
        [24, 112, 78],	/* 26 */
        [24, 112, 54],	/* 27 */
        [21, 112, 26],	/* 28 */
        [23, 96, 26],	/* 29 */
        [19, 84, 42],	/* 30 */
        [7, 18, 90],	/* 31 */
        [7, 46, 56],	/* 32 */
        [7, 18, 42],	/* 33 */
        [7, 112, 90],	/* 34 */
        [7, 84, 56],	/* 35 */
        [7, 112, 42],	/* 36 */
        [15, 18, 66],	/* 37 */
        [15, 84, 91],	/* 38 */
        [15, 112, 66],	/* 39 */
        [15, 46, 89],	/* 40 */
        [16, 46, 26],	/* 41 */
        [35, 84, 26],	/* 42 */
        [29, 18, 90],	/* 43 */
        [30, 46, 56],	/* 44 */
        [31, 18, 42],	/* 45 */
        [32, 112, 90],	/* 46 */
        [33, 84, 56],	/* 47 */
        [34, 112, 42],	/* 48 */
        [29, 18, 66],	/* 49 */
        [30, 84, 91],	/* 50 */
        [31, 112, 66],	/* 51 */
        [32, 45, 89],	/* 52 */
        [27, 46, 26],	/* 53 */
        [28, 84, 26],	/* 54 */
        [23, 34, 104],	/* 55 */
        [23, 50, 104],	/* 56 */
    ],
];


export class InstrumentDesigner {
    constructor(container, state, addFunctionPoint, removeLastFunctionPoint) {
        this.container = container
        this.addFunctionPoint = addFunctionPoint
        this.removeLastFunctionPoint = removeLastFunctionPoint
        this.strokeStyle = '#09D323';
        this.fillStyle = '#F2F300';
        this.lineWidth = 2;
        this.state = Object.assign(state, this.getDefaultState())
        this.init()
        this.updateUI(state)
        // console.log('Instrument Designer constructed!', state)
    }

    init() {
        // this.state = this.getDefaultState()
        this.resolveElements()
        this.bindFunctions()
        this.bindEvents()

        this.ctx.strokeStyle = this.strokeStyle
        this.ctx.lineWidth = this.lineWidth
        this.ctx.fillStyle = this.fillStyle

        this.tabs = new IDTabs(this.container.querySelector('.tabs'), this.state, this.setActiveTab)
    }

    bindEvents() {
        this.canvas.onclick = this.handleCanvasClick
        document.addEventListener('keypress', this.handleKeypress);
    }

    bindFunctions() {
        this.drawFunction = this.drawFunction.bind(this)
        this.handleCanvasClick = this.handleCanvasClick.bind(this)
        this.handleKeypress = this.handleKeypress.bind(this)
        this.getDefaultState = this.getDefaultState.bind(this)
        this.setActiveTab = this.setActiveTab.bind(this)
        this.drawConfig = this.drawConfig.bind(this)
        this.putpat = this.putpat.bind(this)
        this.dispcfg = this.dispcfg.bind(this)
    }

    resolveElements() {
        this.canvas = this.container.querySelector('.canvas')
        this.ctx = this.canvas.getContext('2d')
        this.canvasConfig = this.container.querySelector('.canvasConfig')
        this.ctxConfig = this.canvasConfig.getContext('2d')
    }

    updateUI(state) {
        const canvasFunction = state.functions.get(this.state.beingEdited)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.drawFunction(canvasFunction)
        this.drawFunctionPoints(canvasFunction)
        this.drawConfig()
    }

    drawConfig() {
        console.log('drawConfig')
        this.dispcfg(0);
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
                    // vputp(idoct, xp, yp, patc);

                    this.ctxConfig.fillStyle = inspal[patc];
                    this.ctxConfig.fillRect(xp * 2, yp * 2, 2, 2)
                }
            }
        }
    }


    drawFunctionPoints(points) {
        points.forEach(point => {
            this.ctx.fillRect(point.x - this.lineWidth, point.y - this.lineWidth, 4, 4)
        })
    }

    drawFunction(points) {
        this.ctx.beginPath()

        const [firstPoint] = points.splice(0, 1)
        this.ctx.moveTo(firstPoint.x, firstPoint.y)

        points.forEach(point => {
            this.ctx.lineTo(point.x, point.y)
        })

        points.unshift(firstPoint)
        this.ctx.stroke()
    }

    handleCanvasClick(e) {
        const rect = this.canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        this.addFunctionPoint(x, y, this.state.beingEdited)
    }

    handleKeypress(e) {
        this.removeLastFunctionPoint(this.state.beingEdited)
    }

    setActiveTab(tabClicked) {
        const currentTab = this.state.beingEdited
        this.state.beingEdited = tabClicked

        let tabs = [...this.state.functions.keys()]
        const [tabLevel] = tabs.splice(tabs.indexOf('Level'), 1)

        if (currentTab !== tabLevel && tabClicked !== tabLevel) {
            // put clicked tab to the index of current tab
            tabs.splice(tabs.indexOf(tabClicked), 1, tabLevel)
        } else if (tabClicked !== tabLevel) {
            // just switch around the elements
            tabs.splice(tabs.indexOf(tabClicked), 1, currentTab)
        }

        this.tabs.updateUI(tabs)
        this.updateUI(this.state)
    }

    getDefaultState() {
        return {
            beingEdited: 'Level'
        }
    }
}
