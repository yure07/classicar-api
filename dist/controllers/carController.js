"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCar = exports.GetCompanyImages = exports.GetCarByName = exports.GetCars = void 0;
const carService_1 = __importDefault(require("../services/carService"));
const GetCars = async (req, res) => {
    try {
        const cars = await carService_1.default.getAllCars();
        res.status(200).send(cars);
    }
    catch (error) {
        res.status(500).send({ message: error });
    }
};
exports.GetCars = GetCars;
const GetCarByName = async (req, res) => {
    try {
        const carName = req.params.name_car;
        const car = await carService_1.default.getCarByName(carName);
        res.status(200).send(car);
    }
    catch (error) {
        res.status(500).send({ message: error });
    }
};
exports.GetCarByName = GetCarByName;
const GetCompanyImages = async (req, res) => {
    try {
        const images = await carService_1.default.getCompanyImages();
        res.status(200).send(images);
    }
    catch (error) {
        res.status(500).send({ message: error });
    }
};
exports.GetCompanyImages = GetCompanyImages;
const AddCar = async (req, res) => {
    try {
        const carObj = req.body;
        await carService_1.default.addCar(carObj);
        res.status(201).send({ message: `${req.body.name_car_w_brand} foi adicionado!` });
    }
    catch (error) {
        res.status(500).send({ message: error });
    }
};
exports.AddCar = AddCar;
