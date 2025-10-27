export interface PitStop {
  prev_stint_id: number;

  // start pit stop attributes
  road_enter_time: number;
  service_start_time: number;
  required_repair_time: number;
  optional_repair_time: number;
  refuel_amount: number;
  tire_change: boolean;

  // end pit stop attributes
  service_end_time: number;
  road_exit_time: number;
}
