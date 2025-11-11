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