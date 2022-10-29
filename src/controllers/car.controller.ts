import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';

export default class CarController {
  private _service: IService<ICar>;

  constructor(service: IService<ICar>) {
    this._service = service;
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const createdCar = await this._service.create(req.body);
    
    return res.status(201).json(createdCar);
  };

  public read = async (_req: Request, res: Response<ICar[]>): Promise<Response> => {
    const cars = await this._service.read();

    return res.status(200).json(cars);
  };
}