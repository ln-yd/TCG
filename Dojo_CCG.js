class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        target.res -= this.power;
        console.log("target res is now ", target.res);
    }
}
class RedBeltNinja extends Unit {
    constructor() {
        super("Red Belt Ninja", 3, 3, 4);
    }
}
class BlueEyesYellowPython extends Unit {
    constructor() {
        super("Blue Eyes Yellow Python", 8, 7, 8);
    }
}
class BlackBeltNinja extends Unit {
    constructor() {
        super("Black Belt Ninja", 3, 3, 4);
    }
}
class Effect extends Card {
    constructor(name, cost, magnitude) {
        super(name, cost);
        this.magnitude = magnitude;
    }
    play(target, stat) {
        // Failing case: Target is not a unit as we expected
        if (!(target instanceof Unit)) {
            throw new Error("Target must be a unit!");
        }

        // Everything is normal! Continue
        if (stat.equals("power")) {
            target.power += this.magnitude
            console.log("target power: ", target.res)
        } else if (stat.equals("res")) {
            target.res += this.magnitude;
            console.log("target resilience: ", target.res)
        } else {
            throw new Error("stat must be 'power' or 'res'!");
        }

    }
}

class HardAlgorithm extends Effect {
    constructor() {
        super("Hard Algorithm", 2, 3);
        this.text = "Increase targets resilience by " + this.magnitude;
    }
    play(target) {
        super.play(target, "resilience");
    }
}
class UnhandledPromiseRejection extends Effect {
    constructor() {
        super("Unhandled Promise Rejection", -2, 3);
        this.text = "Reduce targets resilience by " + this.magnitude;
    }
    play(target) {
        super.play(target, "resilience");
    }
}
class PairProgramming extends Effect {
    constructor() {
        super("Pair Programming", 3, 0);
        this.text = "Increase target's power by" + this.magnitude;
    }
}

let hardAlgorithm = new HardAlgorithm();
let redBeltNinja = new RedBeltNinja();

console.log("Red Belt Ninja resilience: ", redBeltNinja.res)
hardAlgorithm.play(redBeltNinja);