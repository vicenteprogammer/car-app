

import axios from "axios"
import { carModel } from "../components/CardView/props"
import { CAR_API_URL } from "../constants/car"

interface Car{
  cars: carModel[]
}

export const fetchCars = async(id: number) =>{
  const response = await axios.get<Car>(CAR_API_URL);
  const carData = response.data.cars.find((car)=> car.id === id) || null;

  return carData;

}