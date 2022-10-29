import { Model } from 'mongoose';

export default abstract class MongoModel<T> {
  private _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }
}