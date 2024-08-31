import { Router } from "express";
import { AddCar, 
  GetCars, 
  GetCarByName,
  GetCompanyImages } 
from "../controllers/carController";

export const router: Router = Router()

router.get('/cars/companies_images', GetCompanyImages)
router.get('/cars/:name_car', GetCarByName)
router.get('/cars', GetCars)

router.post('/cars', AddCar)
router.delete('/cars/:id_car')