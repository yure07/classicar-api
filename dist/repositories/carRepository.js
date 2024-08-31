"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const sql_1 = require("../config/sql");
class DataBaseNeon {
    async getAll() {
        return await (0, sql_1.sql) `SELECT * FROM cars`;
    }
    async getByName(carName) {
        let cars;
        const with_brand = await (0, sql_1.sql) `SELECT *
      FROM cars
      WHERE name_car_w_brand
      ILIKE ${'%' + carName + '%'}`;
        const see_more = await (0, sql_1.sql) `SELECT *
      FROM cars
      WHERE name_car_see_more
      ILIKE ${'%' + carName + '%'}`;
        if (with_brand)
            cars = with_brand;
        else
            cars = see_more;
        return cars;
    }
    async getCompanyImages() {
        return await (0, sql_1.sql) `SELECT company_image 
      FROM cars 
      WHERE company_image != 'base 64'`;
    }
    async post(car) {
        const carId = (0, crypto_1.randomUUID)();
        const { company, name_car_w_brand, name_car_no_brand, name_car_see_more, year, short_description, long_description, price, power, veloc_max, motor, aspiration, transmission, car_image_1, car_image_2, car_image_3, company_image } = car;
        await (0, sql_1.sql) `insert into cars (
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
    )`;
    }
}
exports.default = new DataBaseNeon();
