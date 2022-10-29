import * as sinon from 'sinon';
import { expect } from 'chai';
import CarModel from '../../../models/Car';
import { Model } from 'mongoose';
import { validCar, validCarId } from '../../mocks/car.mock';

describe('Testa a model Car', () => {

  const car = new CarModel();

  afterEach(async() => {
    sinon.restore();
  });

  describe('Testa se um carro é criado corretamente', () => {

    before(async () => {
      sinon.stub(Model, 'create').resolves(validCarId);
    });

    it('Criando um carro com sucesso', async () => {
      const createdCar = await car.create(validCar);
      expect(createdCar).to.be.deep.equal(validCarId);
    });

  });

});