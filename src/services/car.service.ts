import { isValidObjectId } from 'mongoose';
import CustomError from '../errors/customError';
import { carMerge, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';

export default class CarService implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public create = async (car: ICar): Promise<ICar> => {
    const parsed = carMerge.safeParse(car);

    if (!parsed.success) {
      throw parsed.error;
    }
    const result = await this._car.create(parsed.data);

    return result;
  };

  public read = async (): Promise<ICar[]> => {
    const cars = await this._car.read();

    return cars;
  };

  public readOne = async (_id: string): Promise<ICar> => {
    if (!isValidObjectId(_id)) throw new CustomError(400, 'Id must have 24 hexadecimal characters');

    const car = await this._car.readOne(_id);

    if (!car) throw new CustomError(404, 'Object not found');

    return car;
  };
}