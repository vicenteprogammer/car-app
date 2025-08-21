//Onde fica as ações que nosso componente irá fazer, principas funções.

import { fetchCars } from "../../api/getCars"
import { carModel } from "./props"

export const loadCarData = async  (id:number, setCarData: React.Dispatch<React.SetStateAction<carModel | null>>) =>{
  try{
    const response = await fetchCars(id);
    setCarData(response)
  }catch(e){
    console.error(e);
    setCarData(null)
  }

}

export const nextCar = async (carData: carModel | null,setCarData: React.Dispatch<React.SetStateAction<carModel | null>> ) =>{
  let response = null

  if(carData && carData.id < 10){
    response = await fetchCars(carData.id + 1)
    setCarData(response)
  }

}

export const prevCar = async (carData: carModel | null,setCarData: React.Dispatch<React.SetStateAction<carModel | null>> ) =>{
  let response = null

  if(carData && carData.id > 1){
    response = await fetchCars(carData.id -1)
    setCarData(response)
  }
}