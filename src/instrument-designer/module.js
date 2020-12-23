import { EditedFunction } from './EditedFunction/module.js';
import { FMConfig } from './FMConfig/module.js';
import { Tabs } from './Tabs/module.js';

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
    }

    init() {
        this.resolveElements()
        this.bindFunctions()
        this.bindEvents()

        this.editedFunction = new EditedFunction(this.container.querySelector('.canvas'), this.state, this.addFunctionPoint, this.removeLastFunctionPoint)
        this.fmConfig = new FMConfig(this.container.querySelector('.fmConfig'), this.state, this.setActiveTab)
        this.tabs = new Tabs(this.container.querySelector('.tabs'), this.state, this.setActiveTab)
    }

    bindEvents() {
    }

    bindFunctions() {
        this.getDefaultState = this.getDefaultState.bind(this)
        this.setActiveTab = this.setActiveTab.bind(this)
    }

    resolveElements() {
    }

    updateUI(state) {
        this.editedFunction.updateUI(this.state)
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
