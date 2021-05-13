/**
 * class for drone entity
 */
export class Drone {
  id: number;
  name: string;
  serialNo: string;
  manufacturerId: number;
  maxWeightPackageDelivery: number;
  maxSpeed: number;
  maxHeight: number;

  constructor(
    serialNo?: string,
    manufacturerId?: number,
    maxWeightPackageDelivery?: number,
    maxSpeed?: number,
    maxHeight?: number
  ) {
    this.serialNo = serialNo;
    this.manufacturerId = manufacturerId;
    this.maxWeightPackageDelivery = maxWeightPackageDelivery;
    this.maxSpeed = maxSpeed;
    this.maxHeight = maxHeight;
  }
}
