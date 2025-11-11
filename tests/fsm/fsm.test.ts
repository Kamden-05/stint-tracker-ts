// fsm.test.ts
import { describe, it, expect, vi } from "vitest";
import { FSM } from "../../src/fsm/fsm";
import { DriverEvent } from "../../src/fsm/fsmTypes";

describe("FSM", () => {
  it("should start in the initial state", () => {
    const fsm = new FSM();
    expect(fsm.getState()).toBe("Idle");
  });

  it("should transition to the next state on a valid event", () => {
    const fsm = new FSM();
    const event: DriverEvent = "SessionStart";
    fsm.handle(event);
    expect(fsm.getState()).toBe("OnTrack"); // according to transitions
  });

  it("should not transition on an invalid event", () => {
    const fsm = new FSM();
    const consoleWarnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => {});

    // "PitStopEnd" is invalid from Idle
    fsm.handle("PitStopEnd" as DriverEvent);

    expect(fsm.getState()).toBe("Idle");
    expect(consoleWarnSpy).toHaveBeenCalled();

    consoleWarnSpy.mockRestore();
  });

  it("should call listeners on valid transitions", () => {
    const fsm = new FSM();
    const listener = vi.fn();
    fsm.onTransition(listener);

    fsm.handle("SessionStart");
    expect(listener).toHaveBeenCalledWith("OnTrack");
  });

  it("should handle full flow from OnTrack -> OnPitLane -> InPitBox -> OnPitLane -> OnTrack", () => {
    const fsm = new FSM("OnTrack");

    fsm.handle("EnterPitLane"); // OnTrack -> OnPitLane
    expect(fsm.getState()).toBe("OnPitLane");

    fsm.handle("PitStopStart"); // OnPitLane -> InPitBox
    expect(fsm.getState()).toBe("InPitBox");

    fsm.handle("PitStopEnd"); // InPitBox -> OnPitLane
    expect(fsm.getState()).toBe("OnPitLane");

    fsm.handle("ExitPitLane"); // OnPitLane -> OnTrack
    expect(fsm.getState()).toBe("OnTrack");
  });
});