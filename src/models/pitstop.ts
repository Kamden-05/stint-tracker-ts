export interface PitStop {
  road_enter_time: number;

  // start pit stop attributes
  service_start_time: number | null;
  required_repair_time: number | null;
  optional_repair_time: number | null;
  refuel_amount: number | null;
  tire_change: boolean | null;

  // end pit stop attributes
  service_end_time: number | null;
  road_exit_time: number | null;
}
