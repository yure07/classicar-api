import { ICar, CompanyImages } from "../models/cars";
import carRepository from "../repositories/carRepository";

class CarService{
  async getAllCars(): Promise<ICar[]> {
    return await carRepository.getAll();
  }

  async getCarByName(carName: string): Promise<ICar[]> {
    return await carRepository.getByName(carName)
  }

  async getCompanyImages(): Promise<CompanyImages[]> {
    return await carRepository.getCompanyImages()
  }

  async addCar(car: ICar): Promise<void> {
    return await carRepository.post(car);
  }
}

export default new CarService()