export interface ICar{
  company: string;
  name_car_w_brand: string;
  name_car_no_brand: string;
  name_car_see_more: string;
  year: number;
  short_description: string;
  long_description: string;
  price: number;
  power: number;
  veloc_max: number;
  motor: string;
  aspiration: string;
  transmission: string;
  car_image_1: string;
  car_image_2: string;
  car_image_3: string;
  company_image: string;
}

export interface CompanyImages{
  company_image: string;
}