export interface Stint {
  driver_name: string;
  stint_number: number;

  start_time: number;
  start_position: number;
  start_fuel: number;
  start_incidents: number;

  end_time: number | null;
  end_position: number | null;
  end_fuel: number | null;
  end_incidents: number | null;
}
