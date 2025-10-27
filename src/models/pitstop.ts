export interface PitStopDto {
  stint_id: number;

  // start pit stop attributes
  road_enter_time: number;
  service_start_time: number;
  refuel_amount: number;
  repairs: boolean;
  tire_change: boolean;

  // end pit stop attributes
  service_end_time: number;
  road_exit_time: number;
}

export class PitStop {
  constructor(readonly stintId: number, readonly roadEnterTime: number) {}

  serviceStartTime?: number;
  requiredRepairTime?: number;
  optionalRepairTime?: number;
  refuelAmount?: number;
  serviceEndTime?: number;
  roadExitTime?: number;

  // tires
  leftFront?: boolean;
  rightFront?: boolean;
  leftRear?: boolean;
  rightRear?: boolean;

  get hasRepairs(): boolean {
    return ((this.optionalRepairTime ?? 0) + (this.requiredRepairTime ?? 0)) > 0;
  }

  get hasTireChange(): boolean {
    return [this.leftFront, this.rightFront, this.leftRear, this.rightRear].some(t => t === true);
  }

  get pitDuration(): number | undefined{
    return this.roadExitTime === undefined ? undefined : this.roadExitTime - this.roadEnterTime;
  }

  get boxTime(): number | undefined {
    return this.serviceEndTime === undefined ? undefined : this.serviceEndTime - this.serviceStartTime;
  }

  toDto(): PitStopDto {
    return {
      stint_id: this.stintId,
      road_enter_time: this.roadEnterTime,
      service_start_time: this.serviceStartTime,
      refuel_amount: this.refuelAmount,
      repairs: this.hasRepairs,
      tire_change: this.hasTireChange,
      service_end_time: this.serviceEndTime,
      road_exit_time: this.roadExitTime,
    };
  }
}
