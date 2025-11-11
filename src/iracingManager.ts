export type DriverState =
    | "Idle"
    | "OnTrack"
    | "OnPitLane"
    | "InPitBox"
    | "Finished"
    | "Disconnected"

export type DriverEvent = 
    | "SessionStart"
    | "EnterTrack"
    | "EnterPitLane"
    | "PitStopStart"
    | "PitStopEnd"
    | "ExitPitLane"
    | "SessionFinish"
    | "Disconnect"
    | "Reconnect"

export const transitions: Record<DriverState, Partial<Record<DriverEvent, DriverState>>> = {
    Idle: {
        SessionStart: "OnTrack",
    },

    OnTrack: {
        EnterPitLane: "OnPitLane",
        SessionFinish: "Finished",
        Disconnect: "Disconnected",
    },

    OnPitLane: {
        PitStopStart: "InPitBox",
        ExitPitLane: "OnTrack",
    },

    InPitBox: {
        PitStopEnd: "OnPitLane",
    },

    Finished: {
        Disconnect: "Disconnected",
    },

    Disconnected: {
        Reconnect: "Idle",
    },
}

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