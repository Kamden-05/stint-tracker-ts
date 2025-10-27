class Stint {
    constructor(
        public readonly driver_name: string,
        public readonly stint_number: number,

        public readonly start_time: number,
        public readonly start_position: number,
        public readonly start_fuel: number,
        public readonly start_incidents: number
    ) { }

    public end_time: number | null = null;
    public end_position: number | null = null;
    public end_fuel: number | null = null;
    public end_incidents: number | null = null;
}
