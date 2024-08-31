import { Request, Response } from "express";
import carService from "../services/carService";
import { ICar, CompanyImages } from "../models/cars";

export const GetCars = async (req:Request, res:Response) => {
  try {
    const cars:ICar[] = await carService.getAllCars()
    res.status(200).send(cars)
  } catch (error) {
    res.status(500).send({ message: error })
  }
}

export const GetCarByName = async (req: Request, res: Response) => {
  try {
    const carName = req.params.name_car as string
    const car:ICar[] = await carService.getCarByName(carName)
    res.status(200).send(car)
  } catch (error) {
  res.status(500).send({ message: error })
  }
}
    
export const GetCompanyImages = async (req: Request, res: Response) => {
  try {
    const images:CompanyImages[] = await carService.getCompanyImages()
    res.status(200).send(images)
  } catch (error) {
  res.status(500).send({ message: error })
  }
}

export const AddCar = async (req:Request, res:Response) => {
  try {
    const carObj = req.body as ICar
    await carService.addCar(carObj)
    res.status(201).send({ message: `${req.body.name_car_w_brand} foi adicionado!` })
  } catch (error) {
    res.status(500).send({ message: error })
  }
}