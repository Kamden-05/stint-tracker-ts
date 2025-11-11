import { DriverState, DriverEvent, transitions } from "./fsmTypes"

export class FSM {
    private state: DriverState
    private listeners: ((s: DriverState) => void)[] = []

    constructor(initialState: DriverState = "Idle") {
        this.state = initialState
    }

    getState() {
        return this.state
    }

    onTransition(callback: (state: DriverState) => void) {
        this.listeners.push(callback)
    }

    handle(event: DriverEvent) {
        const next = transitions[this.state]?.[event]

        if (next) {
            console.log(`Transition: ${this.state} -> ${next} (event: ${event})`)
            this.state = next
            this.listeners.forEach(fn => fn(next))
        } else {
            console.warn(`Invalid transition form ${this.state} on event ${event}`)
        }
    }
}