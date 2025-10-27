export interface StintDto {
  driver_name: string;
  number: number;

  // start attributes
  start_time: number;
  start_position: number;
  start_fuel: number;
  start_incidents: number;

  // end attributes
  end_time?: number;
  end_position?: number;
  end_fuel?: number;
  end_incidents?: number;
}

export class Stint {
  laps: number[];

  constructor(
    readonly driverName: string,
    readonly stintNumber: number,
    readonly startTime: number,
    readonly startPosition: number,
    readonly startFuel: number,
    readonly startIncidents: number,
  ) {
    this.laps = [];
  }
 
  stintId?: number;
  endTime?: number;
  endPosition?: number;
  endFuel?: number;
  endIncidents?: number;

  toDto(): StintDto{
    return {
      driver_name: this.driverName,
      number: this.stintNumber,
      
      // start values
      start_time: this.startTime,
      start_position: this.startPosition,
      start_fuel: this.startFuel,
      start_incidents: this.startIncidents,

      // end values
      end_time: this.endTime,
      end_position: this.endPosition,
      end_fuel: this.endFuel,
      end_incidents: this.endIncidents,
    }
  }
}
