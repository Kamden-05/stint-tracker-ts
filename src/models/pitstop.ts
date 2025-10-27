class PitStop {
    constructor(
        public readonly road_enter_time: number,
    ) {
        
    }

    // start pit stop attributes
    public service_start_time: number | null = null;
    public required_repair_time: number | null = null;
    public optional_repair_time: number | null = null;
    public refuel_amount: number | null = null;
    public tire_change: boolean | null = null;
    
    // end pit stop attributes
    public service_end_time: number | null = null;    
}