import * as sinon from 'sinon';
import { expect } from 'chai';
import CarModel from '../../../models/Car';
import CarService from '../../../services/car.service';
import { validCar, validCarId } from '../../mocks/car.mock';

describe('Testa a service Car', () => {

  const car = new CarModel();
  const carService = new CarService(car);

  afterEach(async () => {
    sinon.restore();
  });

  describe('Testa se um carro é criado corretamente', () => {

    before(async () => {
      sinon.stub(car, 'create').resolves(validCarId);
    });

    it('Criando um carro com sucesso', async () => {
      const createdCar = await carService.create(validCar);
      expect(createdCar).to.be.deep.equal(validCarId);
    });

  });
  
});