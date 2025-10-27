class Stint {
    constructor(
        public readonly sessionId: number,
        public readonly stintId: number,
        public readonly driverName: string,
        public readonly stintNumber: number,

        public readonly startTime: number,
        public readonly startPosition: number,
        public readonly startFuel: number,
        public readonly startIncidents: number
    ) { }

    public endTime: number | null = null;
    public endPosition: number | null = null;
    public endFuel: number | null = null;
    public endIncidents: number | null = null;
}
