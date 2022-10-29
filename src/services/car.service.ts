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
}