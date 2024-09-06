export const parkingLotProblem = {
  id: 56,
  title: 'Parking Lot',
  description:
    'Design a parking lot using object-oriented principles. The parking lot should have multiple levels, and each level has multiple spots. The parking lot can accommodate cars, bikes, and buses. Implement the classes and methods needed to support parking and tracking the availability of spots.',
  solution: `
// Enum for Vehicle Size
enum VehicleSize {
  Motorcycle = 'Motorcycle',
  Compact = 'Compact',
  Large = 'Large',
}

// Abstract Vehicle class
abstract class Vehicle {
  licensePlate: string;
  size: VehicleSize;
  spotsNeeded: number;

  constructor(licensePlate: string, size: VehicleSize, spotsNeeded: number) {
    this.licensePlate = licensePlate;
    this.size = size;
    this.spotsNeeded = spotsNeeded;
  }

  abstract canFitInSpot(spot: ParkingSpot): boolean;
}

// Different vehicle types extending Vehicle
class Motorcycle extends Vehicle {
  constructor(licensePlate: string) {
    super(licensePlate, VehicleSize.Motorcycle, 1);
  }

  canFitInSpot(spot: ParkingSpot): boolean {
    return true; // Can fit in any spot
  }
}

class Car extends Vehicle {
  constructor(licensePlate: string) {
    super(licensePlate, VehicleSize.Compact, 1);
  }

  canFitInSpot(spot: ParkingSpot): boolean {
    return spot.size === VehicleSize.Compact || spot.size === VehicleSize.Large;
  }
}

class Bus extends Vehicle {
  constructor(licensePlate: string) {
    super(licensePlate, VehicleSize.Large, 5);
  }

  canFitInSpot(spot: ParkingSpot): boolean {
    return spot.size === VehicleSize.Large;
  }
}

// Parking Spot class
class ParkingSpot {
  size: VehicleSize;
  vehicle: Vehicle | null;
  spotNumber: number;

  constructor(size: VehicleSize, spotNumber: number) {
    this.size = size;
    this.vehicle = null;
    this.spotNumber = spotNumber;
  }

  isAvailable(): boolean {
    return this.vehicle === null;
  }

  park(vehicle: Vehicle): boolean {
    if (this.canFitVehicle(vehicle) && this.isAvailable()) {
      this.vehicle = vehicle;
      console.log('Parked vehicle ' + vehicle.licensePlate + ' in spot ' + this.spotNumber);
      return true;
    }
    return false;
  }

  unpark() {
    console.log('Unparked vehicle ' + (this.vehicle ? this.vehicle.licensePlate : 'None') + ' from spot ' + this.spotNumber);
    this.vehicle = null;
  }

  canFitVehicle(vehicle: Vehicle): boolean {
    return vehicle.canFitInSpot(this);
  }
}

// Parking Level class
class ParkingLevel {
  spots: ParkingSpot[];
  levelNumber: number;

  constructor(levelNumber: number, numSpots: number) {
    this.levelNumber = levelNumber;
    this.spots = [];
    for (let i = 0; i < numSpots; i++) {
      const size = i % 3 === 0 ? VehicleSize.Large : (i % 3 === 1 ? VehicleSize.Compact : VehicleSize.Motorcycle);
      this.spots.push(new ParkingSpot(size, i + 1));
    }
  }

  parkVehicle(vehicle: Vehicle): boolean {
    for (const spot of this.spots) {
      if (spot.park(vehicle)) {
        return true;
      }
    }
    console.log('No available spot for vehicle ' + vehicle.licensePlate + ' on level ' + this.levelNumber);
    return false;
  }

  unparkVehicle(licensePlate: string) {
    for (const spot of this.spots) {
      if (spot.vehicle && spot.vehicle.licensePlate === licensePlate) {
        spot.unpark();
        return;
      }
    }
    console.log('Vehicle ' + licensePlate + ' not found on level ' + this.levelNumber);
  }
}

// Parking Lot class
class ParkingLot {
  levels: ParkingLevel[];

  constructor(numLevels: number, spotsPerLevel: number) {
    this.levels = [];
    for (let i = 0; i < numLevels; i++) {
      this.levels.push(new ParkingLevel(i + 1, spotsPerLevel));
    }
  }

  parkVehicle(vehicle: Vehicle): boolean {
    for (const level of this.levels) {
      if (level.parkVehicle(vehicle)) {
        return true;
      }
    }
    console.log('No available spot for vehicle ' + vehicle.licensePlate + ' in the parking lot.');
    return false;
  }

  unparkVehicle(licensePlate: string) {
    for (const level of this.levels) {
      level.unparkVehicle(licensePlate);
    }
  }
}

// Example usage:
const parkingLot = new ParkingLot(3, 10);
const car = new Car('CAR123');
const bike = new Motorcycle('BIKE123');
const bus = new Bus('BUS123');

parkingLot.parkVehicle(car);
parkingLot.parkVehicle(bike);
parkingLot.parkVehicle(bus);

parkingLot.unparkVehicle('CAR123');
parkingLot.unparkVehicle('BIKE123');
parkingLot.unparkVehicle('BUS123');
`,
}

// Example implementation to test the solution
enum VehicleSize {
  Motorcycle = 'Motorcycle',
  Compact = 'Compact',
  Large = 'Large',
}

abstract class Vehicle {
  licensePlate: string
  size: VehicleSize
  spotsNeeded: number

  constructor(licensePlate: string, size: VehicleSize, spotsNeeded: number) {
    this.licensePlate = licensePlate
    this.size = size
    this.spotsNeeded = spotsNeeded
  }

  abstract canFitInSpot(spot: ParkingSpot): boolean
}

class Motorcycle extends Vehicle {
  constructor(licensePlate: string) {
    super(licensePlate, VehicleSize.Motorcycle, 1)
  }

  canFitInSpot(spot: ParkingSpot): boolean {
    return true
  }
}

class Car extends Vehicle {
  constructor(licensePlate: string) {
    super(licensePlate, VehicleSize.Compact, 1)
  }

  canFitInSpot(spot: ParkingSpot): boolean {
    return spot.size === VehicleSize.Compact || spot.size === VehicleSize.Large
  }
}

class Bus extends Vehicle {
  constructor(licensePlate: string) {
    super(licensePlate, VehicleSize.Large, 5)
  }

  canFitInSpot(spot: ParkingSpot): boolean {
    return spot.size === VehicleSize.Large
  }
}

class ParkingSpot {
  size: VehicleSize
  vehicle: Vehicle | null
  spotNumber: number

  constructor(size: VehicleSize, spotNumber: number) {
    this.size = size
    this.vehicle = null
    this.spotNumber = spotNumber
  }

  isAvailable(): boolean {
    return this.vehicle === null
  }

  park(vehicle: Vehicle): boolean {
    if (this.canFitVehicle(vehicle) && this.isAvailable()) {
      this.vehicle = vehicle
      console.log(
        'Parked vehicle ' +
          vehicle.licensePlate +
          ' in spot ' +
          this.spotNumber,
      )
      return true
    }
    return false
  }

  unpark() {
    console.log(
      'Unparked vehicle ' +
        (this.vehicle ? this.vehicle.licensePlate : 'None') +
        ' from spot ' +
        this.spotNumber,
    )
    this.vehicle = null
  }

  canFitVehicle(vehicle: Vehicle): boolean {
    return vehicle.canFitInSpot(this)
  }
}

class ParkingLevel {
  spots: ParkingSpot[]
  levelNumber: number

  constructor(levelNumber: number, numSpots: number) {
    this.levelNumber = levelNumber
    this.spots = []
    for (let i = 0; i < numSpots; i++) {
      const size =
        i % 3 === 0
          ? VehicleSize.Large
          : i % 3 === 1
            ? VehicleSize.Compact
            : VehicleSize.Motorcycle
      this.spots.push(new ParkingSpot(size, i + 1))
    }
  }

  parkVehicle(vehicle: Vehicle): boolean {
    for (const spot of this.spots) {
      if (spot.park(vehicle)) {
        return true
      }
    }
    console.log(
      'No available spot for vehicle ' +
        vehicle.licensePlate +
        ' on level ' +
        this.levelNumber,
    )
    return false
  }

  unparkVehicle(licensePlate: string) {
    for (const spot of this.spots) {
      if (spot.vehicle && spot.vehicle.licensePlate === licensePlate) {
        spot.unpark()
        return
      }
    }
    console.log(
      'Vehicle ' + licensePlate + ' not found on level ' + this.levelNumber,
    )
  }
}

class ParkingLot {
  levels: ParkingLevel[]

  constructor(numLevels: number, spotsPerLevel: number) {
    this.levels = []
    for (let i = 0; i < numLevels; i++) {
      this.levels.push(new ParkingLevel(i + 1, spotsPerLevel))
    }
  }

  parkVehicle(vehicle: Vehicle): boolean {
    for (const level of this.levels) {
      if (level.parkVehicle(vehicle)) {
        return true
      }
    }
    console.log(
      'No available spot for vehicle ' +
        vehicle.licensePlate +
        ' in the parking lot.',
    )
    return false
  }

  unparkVehicle(licensePlate: string) {
    for (const level of this.levels) {
      level.unparkVehicle(licensePlate)
    }
  }
}

// Example usage:
const parkingLot = new ParkingLot(3, 10)
const car = new Car('CAR123')
const bike = new Motorcycle('BIKE123')
const bus = new Bus('BUS123')

parkingLot.parkVehicle(car)
parkingLot.parkVehicle(bike)
parkingLot.parkVehicle(bus)

parkingLot.unparkVehicle('CAR123')
parkingLot.unparkVehicle('BIKE123')
parkingLot.unparkVehicle('BUS123')
