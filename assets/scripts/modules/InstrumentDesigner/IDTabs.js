export class IDTabs {
    constructor(container, state, setActiveTab) {
        this.container = container
        this.tabs = [...this.container.children]
        this.setActiveTab = setActiveTab
        this.init()
        console.log('Tabs constructed!', this.container)
    }

    init() {
        this.resolveElements()
        this.bindFunctions()
        this.bindEvents()
    }

    bindEvents() {
        this.container.addEventListener('click', this.handleTabSelect)
    }
    
    bindFunctions() {
        this.handleTabSelect = this.handleTabSelect.bind(this)
    }

    resolveElements() {
    }

    updateUI(state) {
        this.tabs.forEach((tab, i) => {
            tab.innerHTML = state[i]
            tab.setAttribute('data-key', state[i])
        })
    }

    handleTabSelect(event) {
        const delegateTarget = event.target.closest('.tabs-tab')
        if (delegateTarget) {
            this.setActiveTab(delegateTarget.getAttribute('data-key'))
        }
    }
}
