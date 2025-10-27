export interface Stint {
  driver: string;
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
