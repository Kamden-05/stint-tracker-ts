export interface SessionTelemetry {
  SessionTime: number;
  SessionTick: number;
  SessionNum: number;
  SessionState: number;
  SessionUniqueID: number;
  SessionFlags: number;
  SessionTimeRemain: number;
  SessionLapsRemain: number;
  SessionLapsRemainEx: number;
  DisplayUnits: number;
  RadioTransmitCarIdx: number;
  RadioTransmitRadioIdx: number;
  RadioTransmitFrequencyIdx: number;
  DriverMarker: boolean;
  IsReplayPlaying: boolean;
  ReplayFrameNum: number;
  ReplayFrameNumEnd: number;
  IsDiskLoggingEnabled: boolean;
  IsDiskLoggingActive: boolean;
  FrameRate: number;
  CpuUsageBG: number;
}

export interface PlayerTelemetry {
  PlayerCarIdx: number;
  PlayerCarPosition: number;
  PlayerCarClassPosition: number;
  PlayerTrackSurface: number;
  PlayerTrackSurfaceMaterial: number;
  PlayerCarTeamIncidentCount: number;
  PlayerCarMyIncidentCount: number;
  PlayerCarDriverIncidentCount: number;
  PlayerCarWeightPenalty: number;

  OnPitRoad: boolean;
  IsOnTrack: boolean;
  PushToPass: boolean;

  Lap: number;
  LapCompleted: number;
  LapDist: number;
  LapDistPct: number;
  RaceLaps: number;

  LapBestLap: number;
  LapBestLapTime: number;
  LapLastLapTime: number;
  LapCurrentLapTime: number;

  LapDeltaToBestLap: number;
  LapDeltaToBestLap_DD: number;
  LapDeltaToBestLap_OK: boolean;

  LapDeltaToOptimalLap: number;
  LapDeltaToOptimalLap_DD: number;
  LapDeltaToOptimalLap_OK: boolean;

  LapDeltaToSessionBestLap: number;
  LapDeltaToSessionBestLap_DD: number;
  LapDeltaToSessionBestLap_OK: boolean;

  LapDeltaToSessionOptimalLap: number;
  LapDeltaToSessionOptimalLap_DD: number;
  LapDeltaToSessionOptimalLap_OK: boolean;

  LapDeltaToSessionLastlLap: number;
  LapDeltaToSessionLastlLap_DD: number;
  LapDeltaToSessionLastlLap_OK: boolean;

  EnterExitReset: number;
  Speed: number;
  VelocityX: number;
  VelocityY: number;
  VelocityZ: number;
  Yaw: number;
  YawNorth: number;
  Pitch: number;
  Roll: number;

  SteeringWheelAngle: number;
  Throttle: number;
  Brake: number;
  Clutch: number;
  Gear: number;
  RPM: number;

  FuelLevel: number;
  FuelLevelPct: number;

  WaterTemp: number;
  OilTemp: number;
  OilPress: number;
  OilLevel: number;
  FuelPress: number;
  Voltage: number;
  ManifoldPress: number;
}

export interface CarTelemetry {
  CarIdxLap: number[];
  CarIdxLapCompleted: number[];
  CarIdxLapDistPct: number[];
  CarIdxTrackSurface: number[];
  CarIdxTrackSurfaceMaterial: number[];
  CarIdxOnPitRoad: boolean[];
  CarIdxPosition: number[];
  CarIdxClassPosition: number[];
  CarIdxF2Time: number[];
  CarIdxEstTime: number[];
  CarIdxSteer: number[];
  CarIdxRPM: number[];
  CarIdxGear: number[];
}

export interface TireTelemetry {
  RFcoldPressure: number;
  RFtempCL: number;
  RFtempCM: number;
  RFtempCR: number;
  RFwearL: number;
  RFwearM: number;
  RFwearR: number;

  LFcoldPressure: number;
  LFtempCL: number;
  LFtempCM: number;
  LFtempCR: number;
  LFwearL: number;
  LFwearM: number;
  LFwearR: number;

  RRcoldPressure: number;
  RRtempCL: number;
  RRtempCM: number;
  RRtempCR: number;
  RRwearL: number;
  RRwearM: number;
  RRwearR: number;

  LRcoldPressure: number;
  LRtempCL: number;
  LRtempCM: number;
  LRtempCR: number;
  LRwearL: number;
  LRwearM: number;
  LRwearR: number;
}

export interface SuspensionTelemetry {
  RFshockDefl: number;
  RFshockDefl_ST: number[];
  RFshockVel: number;
  RFshockVel_ST: number[];

  LRshockDefl: number;
  LRshockDefl_ST: number[];
  LRshockVel: number;
  LRshockVel_ST: number[];

  RRshockDefl: number;
  RRshockDefl_ST: number[];
  RRshockVel: number;
  RRshockVel_ST: number[];
}

export interface SteeringTelemetry {
  SteeringWheelTorque: number;
  SteeringWheelTorque_ST: number[];
  SteeringWheelPctTorque: number;
  SteeringWheelPctTorqueSign: number;
  SteeringWheelPctTorqueSignStops: number;
  SteeringWheelPctDamper: number;
  SteeringWheelAngleMax: number;
  ShiftIndicatorPct: number;
  ShiftPowerPct: number;
  ShiftGrindRPM: number;
}

export interface TrackTelemetry {
  TrackTemp: number;
  TrackTempCrew: number;
  AirTemp: number;
  WeatherType: number;
  Skies: number;
  AirDensity: number;
  AirPressure: number;
  WindVel: number;
  WindDir: number;
  RelativeHumidity: number;
  FogLevel: number;
}

export interface Telemetry {
  session: SessionTelemetry;
  player: PlayerTelemetry;
  cars: CarTelemetry;
  tires: TireTelemetry;
  suspension: SuspensionTelemetry;
  steering: SteeringTelemetry;
  track: TrackTelemetry;
}
