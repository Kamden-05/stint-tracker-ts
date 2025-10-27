class PitStop {
    constructor(
        public readonly roadEnterTime: number,
    ) {
        
    }

    // start pit stop attributes
    public serviceStartTime: number | null = null;
    public requiredRepairTime: number | null = null;
    public optionalRepairTime: number | null = null;
    public refuelAmount: number | null = null;
    public tireChange: boolean | null = null;
    
    // end pit stop attributes
    public serviceEndTime: number | null = null;
}