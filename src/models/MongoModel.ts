import { Model, UpdateQuery } from 'mongoose';
import { IModel } from '../interfaces/IModel';

export default abstract class MongoModel<T> implements IModel<T> {
  private _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    const creates = await this._model.create(obj);
    return creates;
  }

  public async read(): Promise<T[]> {
    const reads = await this._model.find();
    return reads;
  }

  public async readOne(_id: string): Promise<T | null> {
    const read = await this._model.findOne({ _id });
    return read;
  }

  public async update(_id: string, obj: T): Promise<T | null> {
    const up = await this._model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
    );
    return up;
  }

  public async delete(_id: string): Promise<T | null> {
    const deletes = await this._model.findByIdAndDelete({ _id });
    return deletes;
  }
}