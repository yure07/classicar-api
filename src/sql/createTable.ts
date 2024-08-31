import { sql } from "../config/sql";

/* sql`
  CREATE TABLE cars (
    id TEXT PRIMARY KEY,
    company VARCHAR(16),
    name_car_w_brand VARCHAR(64),
    name_car_no_brand VARCHAR(56),
    name_car_see_more VARCHAR(48),
    year VARCHAR(24),
    short_description TEXT,
    long_description TEXT,
    price NUMERIC,
    power VARCHAR(16),
    veloc_max INTEGER,
    motor VARCHAR(80),
    aspiration VARCHAR(24),
    transmission VARCHAR(32),
    car_image_1 TEXT,
    car_image_2 TEXT,
    car_image_3 TEXT,
    company_image TEXT
  )
`
  .then(() => {
    console.log('a tabela foi criada!')
  })
  .catch((err) => {
    console.log('erro ao criar tabela:' + err)
  }) */

/* sql`DROP TABLE cars`
.then(() => {
  console.log('a tabela foi deletada!')
})
.catch((err) => {
  console.log('erro ao deletar tabela:' + err)
}) */

sql `UPDATE cars 
  SET car_image_1 = 'https://i.ibb.co/K6dn11d/cbimage-97.webp',
      car_image_2 = 'https://i.ibb.co/JRryb37/cbimage-98.webp',
      car_image_3 = 'https://i.ibb.co/zh16S3p/cbimage-99.jpg'
  WHERE name_car_w_brand = 'Porsche 959'`
  .then(() => {
    console.log('dado atualizado!')
  })
  .catch((err) => {
    console.log('erro ao atualizar dado!' + err)
  })