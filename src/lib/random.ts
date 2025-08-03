// parts
// - Front Wing
// - Rear Wing
// - Engine
// - Suspension
// - Chassis (eg. RB18, W10, Stolen from Ferrari)
// - Race Strategy (Massive Undercut, Forget to Pit, Crash in Qualifying, Pray for Rain, Safety Car on Lap 13, Zero Stop, Copy Ferrari)

type Part = {
  name: string;
  Pace: number;
  Handling?: number;
  "Tire Wear"?: number;
  Reliability?: number;
  "Top Speed"?: number;
};

type Stats = {
  Pace: number;
  Handling: number;
  "Tire Wear": number;
  Reliability: number;
  "Top Speed": number;
};

const F1_PARTS: Record<string, Part[]> = {
  "Front Wing": [
    {
      name: "Adrian Newey's Napkin Sketch",
      Pace: 95,
      Handling: 90,
      Reliability: 85,
      "Tire Wear": 80,
      "Top Speed": 85,
    },
    {
      name: "Cardboard Special",
      Pace: 15,
      Handling: 20,
      Reliability: 10,
      "Tire Wear": 80,
      "Top Speed": 95,
    },
    {
      name: "Stroll Sr's Credit Card Design",
      Pace: 75,
      Handling: 70,
      Reliability: 90,
      "Tire Wear": 60,
      "Top Speed": 80,
    },
    {
      name: "Wind Tunnel Rejection #47",
      Pace: 20,
      Handling: 25,
      Reliability: 60,
      "Tire Wear": 40,
      "Top Speed": 65,
    },
    {
      name: '"We Have Red Bull at Home"',
      Pace: 85,
      Handling: 80,
      Reliability: 70,
      "Tire Wear": 70,
      "Top Speed": 75,
    },
    {
      name: "Duct Tape and Dreams",
      Pace: 2,
      Handling: 30,
      Reliability: 5,
      "Tire Wear": 90,
      "Top Speed": 60,
    },
    {
      name: "Sebastian's Secret Stash",
      Pace: 90,
      Handling: 85,
      Reliability: 95,
      "Tire Wear": 75,
      "Top Speed": 82,
    },
    {
      name: "Intern's First Day Project",
      Pace: 10,
      Handling: 15,
      Reliability: 20,
      "Tire Wear": 95,
      "Top Speed": 50,
    },
  ],

  "Rear Wing": [
    {
      name: "DRS Permanently Stuck Open",
      Pace: 80,
      Handling: 10,
      "Tire Wear": 10,
      "Top Speed": 100,
    },
    {
      name: "Monaco Spec at Monza",
      Pace: 20,
      Handling: 95,
      "Tire Wear": 85,
      "Top Speed": 10,
    },
    {
      name: "Flexible Floor Era Throwback",
      Pace: 88,
      Handling: 75,
      "Tire Wear": 65,
      "Top Speed": 75,
    },
    {
      name: "Bargain Bin McLaren",
      Pace: 35,
      Handling: 80,
      "Tire Wear": 35,
      "Top Speed": 40,
    },
    {
      name: "Fernando's Revenge Wing",
      Pace: 93,
      Handling: 88,
      "Tire Wear": 40,
      "Top Speed": 85,
    },
    {
      name: "What Rear Wing?",
      Pace: 3,
      Handling: 10,
      "Tire Wear": 20,
      "Top Speed": 10,
    },
    {
      name: "Copy/Paste from Wikipedia",
      Pace: 45,
      Handling: 40,
      "Tire Wear": 50,
      "Top Speed": 65,
    },
    {
      name: "Racing Point Special",
      Pace: 80,
      Handling: 75,
      "Tire Wear": 70,
      "Top Speed": 88,
    },
  ],

  Engine: [
    {
      name: "Mercedes AMG-Petronas Power",
      Pace: 90,
      "Top Speed": 75,
    },
    {
      name: "Lawnmower from B&Q",
      Pace: 15,
      "Top Speed": 10,
    },
    {
      name: "Honda VTEC Turbo (Wrong Series)",
      Pace: 70,
      "Top Speed": 80,
    },
    {
      name: "Red Bull Gives You Wings Engine",
      Pace: 95,
      "Top Speed": 90,
    },
    {
      name: "Reliability Over Performance",
      Pace: 40,
      Reliability: 100,
      "Top Speed": 40,
    },
    {
      name: "2014 Honda McHonda Special",
      Pace: 20,
      "Top Speed": 45,
    },
    {
      name: 'Ferrari\'s "Next Year" Prototype',
      Pace: 85,
      "Top Speed": 90,
    },
    {
      name: "Cosworth DFV (It's Vintage!)",
      Pace: 35,
      "Top Speed": 55,
    },
  ],

  Suspension: [
    {
      name: "Active Suspension (Illegal But Cool)",
      Pace: 95,
      Handling: 98,
      Reliability: 30,
      "Tire Wear": 90,
    },
    {
      name: "Shopping Trolley Wheels",
      Pace: 15,
      Handling: 5,
      Reliability: 80,
      "Tire Wear": 10,
    },
    {
      name: "Red Bull's Rake Philosophy",
      Pace: 88,
      Handling: 92,
      Reliability: 85,
      "Tire Wear": 75,
    },
    {
      name: "Mercedes Low Rake Copy",
      Pace: 82,
      Handling: 85,
      Reliability: 90,
      "Tire Wear": 80,
    },
    {
      name: "Porpoising Simulator 3000",
      Pace: 40,
      Handling: 25,
      Reliability: 60,
      "Tire Wear": 60,
    },
    {
      name: "Ground Effect Gone Wrong",
      Pace: 55,
      Handling: 45,
      Reliability: 75,
      "Tire Wear": 50,
    },
    {
      name: "Williams FW14B Tribute",
      Pace: 90,
      Handling: 88,
      Reliability: 95,
      "Tire Wear": 85,
    },
    {
      name: "Slinky Spring Technology",
      Pace: 25,
      Handling: 20,
      Reliability: 30,
      "Tire Wear": 95,
    },
  ],

  Chassis: [
    {
      name: "RB18",
      Pace: 95,
      Handling: 92,
      Reliability: 90,
      "Tire Wear": 80,
      "Top Speed": 90,
    },
    {
      name: "W10",
      Pace: 88,
      Handling: 85,
      Reliability: 85,
      "Tire Wear": 85,
      "Top Speed": 92,
    },
    {
      name: "Stolen from Ferrari",
      Pace: 70,
      Handling: 75,
      Reliability: 40,
      "Tire Wear": 60,
      "Top Speed": 88,
    },
    {
      name: "AMR22 (Current Disaster)",
      Pace: 45,
      Handling: 50,
      Reliability: 70,
      "Tire Wear": 55,
      "Top Speed": 75,
    },
    {
      name: "Pink Mercedes (Racing Point Era)",
      Pace: 85,
      Handling: 80,
      Reliability: 80,
      "Tire Wear": 75,
      "Top Speed": 85,
    },
    {
      name: "Force India VJM11",
      Pace: 65,
      Handling: 70,
      Reliability: 85,
      "Tire Wear": 80,
      "Top Speed": 88,
    },
    {
      name: "Jordan 191 Tribute",
      Pace: 30,
      Handling: 60,
      Reliability: 95,
      "Tire Wear": 90,
      "Top Speed": 70,
    },
    {
      name: "Frankenstein's Monster",
      Pace: 35,
      Handling: 40,
      Reliability: 20,
      "Tire Wear": 45,
      "Top Speed": 60,
    },
  ],

  "Race Strategy": [
    { name: "Massive Undercut", Pace: 85 },
    { name: "Forget to Pit", Pace: 5 },
    { name: "Crash in Qualifying", Pace: 15 },
    { name: "Pray for Rain", Pace: 75 },
    { name: "Safety Car on Lap 13", Pace: 90 },
    { name: "Zero Stop", Pace: 25 },
    { name: "Copy Ferrari", Pace: 40 },
    { name: "Pit for Softs with 2 Laps Left", Pace: 10 },
    { name: "Split Strategy (Both Wrong)", Pace: 30 },
    { name: '"We are checking"', Pace: 50 },
    { name: "Box Box Box... Never Mind", Pace: 20 },
    { name: "Verstappen's Rejected Strategy", Pace: 95 },
  ],
};

export class F1Car {
  parts: Record<string, Part> = {};
  performance: Stats;
  steering = pickRandomValue(["Understeer", "Oversteer", "Both"]);
  qualifyingPosition: number;

  constructor() {
    for (let key in F1_PARTS) {
      let pool = F1_PARTS[key];
      this.parts[key] = pool[Math.floor(Math.random() * pool.length)];
    }

    this.performance = {
      Pace: this.calculateSynergyStat("Pace"),
      Handling: this.calculateSynergyStat("Handling"),
      "Tire Wear": this.calculateSynergyStat("Tire Wear"),
      Reliability: this.calculateSynergyStat("Reliability"),
      "Top Speed": this.calculateSynergyStat("Top Speed"),
    };

    this.qualifyingPosition = Math.ceil(
      Math.max(
        1,
        Math.min(
          20,
          20 -
            ((this.performance.Pace / 10) * 2 +
              Math.random() * 2 * (Math.random() > 0.5 ? 1 : -1)),
        ),
      ),
    );
  }

  private calculateStat(stat: keyof Stats): number {
    let result = 0;
    let parts = 0;
    for (let part of Object.values(this.parts)) {
      if (typeof part[stat] === "number") {
        result += part[stat];
        parts++;
      }
    }
    return Math.floor(result / parts);
  }
  private calculateMinMaxStat(stat: keyof Stats): number {
    const values: number[] = [];

    for (let part of Object.values(this.parts)) {
      if (typeof part[stat] === "number") {
        values.push(part[stat]);
      }
    }

    if (values.length === 0) return 50;

    const min = Math.min(...values);
    const max = Math.max(...values);
    const avg = values.reduce((a, b) => a + b, 0) / values.length;

    // 40% chance to use min (disaster), 40% chance to use max (glory), 20% average
    const roll = Math.random();
    if (roll < 0.4) return min; // Disaster strikes!
    if (roll < 0.8) return max; // Everything works perfectly!
    return Math.floor(avg); // Boring average
  }

  private calculateMultiplicativeStat(stat: keyof Stats): number {
    let base = 50; // Starting point

    for (let part of Object.values(this.parts)) {
      if (typeof part[stat] === "number") {
        // Convert to multiplier: 0-100 becomes 0.0-2.0
        const multiplier = part[stat] / 50;
        base = base * multiplier;
      }
    }

    // Clamp to reasonable bounds and add some randomness
    return Math.floor(
      Math.max(1, Math.min(100, base * (0.8 + Math.random() * 0.4))),
    );
  }
  private calculateSynergyStat(stat: keyof Stats): number {
    let result = 0;
    let parts = 0;

    // Calculate base average
    for (let part of Object.values(this.parts)) {
      if (typeof part[stat] === "number") {
        result += part[stat];
        parts++;
      }
    }

    if (parts === 0) return 50;

    const baseAverage = result / parts;

    // Apply synergy bonuses/penalties
    let synergyMultiplier = 1.0;

    // God-tier combinations
    if (
      this.parts["Front Wing"]?.name === "Adrian Newey's Napkin Sketch" &&
      this.parts["Engine"]?.name === "Red Bull Gives You Wings Engine"
    ) {
      synergyMultiplier *= 1.3; // 30% bonus
    }

    // Disaster combinations
    if (
      this.parts["Front Wing"]?.name === "Duct Tape and Dreams" ||
      this.parts["Engine"]?.name === "Lawnmower from B&Q"
    ) {
      synergyMultiplier *= 0.7; // 30% penalty
    }

    // Meme combinations
    if (
      this.parts["Race Strategy"]?.name === "Copy Ferrari" &&
      this.parts["Chassis"]?.name === "Stolen from Ferrari"
    ) {
      synergyMultiplier *= 0.5; // Peak comedy, terrible performance
    }

    // Add more chaos
    const chaos = 0.6 + Math.random() * 0.8; // Random multiplier between 0.6-1.4

    return Math.floor(
      Math.max(1, Math.min(100, baseAverage * synergyMultiplier * chaos)),
    );
  }
}

let pickRandomValue = (arr: any[]) =>
  arr[Math.floor(Math.random() * arr.length)];
