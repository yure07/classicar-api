"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carRepository_1 = __importDefault(require("../repositories/carRepository"));
class CarService {
    async getAllCars() {
        return await carRepository_1.default.getAll();
    }
    async getCarByName(carName) {
        return await carRepository_1.default.getByName(carName);
    }
    async getCompanyImages() {
        return await carRepository_1.default.getCompanyImages();
    }
    async addCar(car) {
        return await carRepository_1.default.post(car);
    }
}
exports.default = new CarService();
