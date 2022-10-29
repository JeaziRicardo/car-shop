import { Router } from 'express';
import CarController from '../controllers/car.controller';
import CarModel from '../models/Car';
import CarService from '../services/car.service';

const carRouter = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

carRouter.get('/', carController.read);
carRouter.post('/', carController.create);

export default carRouter;