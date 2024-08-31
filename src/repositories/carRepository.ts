import { randomUUID } from "crypto"
import type { ICar, CompanyImages } from "../models/cars"
import { sql } from "../config/sql"

class DataBaseNeon{
  async getAll(): Promise<ICar[]>{
    return await sql<ICar[]>`SELECT * FROM cars`
  }

  async getByName(carName: string): Promise<ICar[]>  {
    let cars: ICar[]

    const with_brand = await sql<ICar[]>
      `SELECT *
      FROM cars
      WHERE name_car_w_brand
      ILIKE ${'%' + carName + '%'}`

    const see_more = await sql<ICar[]>
      `SELECT *
      FROM cars
      WHERE name_car_see_more
      ILIKE ${'%' + carName + '%'}`
      
    if(with_brand) cars = with_brand
    else cars = see_more

    return cars
  }

  async getCompanyImages(): Promise<CompanyImages[]> {
    return await sql<CompanyImages[]>
      `SELECT company_image 
      FROM cars 
      WHERE company_image != 'base 64'`
  }

  async post(car: ICar){
    const carId = randomUUID()
    const { 
      company,
      name_car_w_brand,
      name_car_no_brand,
      name_car_see_more,
      year,
      short_description,
      long_description,
      price,
      power,
      veloc_max,
      motor,
      aspiration,
      transmission,
      car_image_1,
      car_image_2,
      car_image_3,
      company_image
    } = car
    await sql`insert into cars (
      id, company, name_car_w_brand, name_car_no_brand, name_car_see_more,
      year, short_description, long_description, price, power, veloc_max,
      motor, aspiration, transmission, car_image_1, car_image_2, car_image_3,
      company_image
    ) 
    VALUES (
      ${carId}, ${company}, ${name_car_w_brand}, ${name_car_no_brand},
      ${name_car_see_more}, ${year}, ${short_description},
      ${long_description}, ${price}, ${power}, ${veloc_max}, ${motor},
      ${aspiration}, ${transmission}, ${car_image_1}, ${car_image_2},
      ${car_image_3}, ${company_image}
    )`
  }

  /*
  async delete(carId: string){
    await sql`delete from cars where id = ${carId}`
  } */
}

export default new DataBaseNeon()