import * as sinon from 'sinon';
import { expect } from 'chai';
import { Request, Response } from 'express';
import CarModel from '../../../models/Car';
import CarService from '../../../services/car.service';
import CarController from '../../../controllers/car.controller';
import { validCar, validCarId } from '../../mocks/car.mock';

describe('Testa a controller Car', () => {

  const car = new CarModel();
  const carService = new CarService(car);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  after(async () => {
    sinon.restore();
  });

  describe('Testa se um carro é criado corretamente', () => {
    before(async () => {
      sinon.stub(carService, 'create').resolves(validCarId)

      req.body = validCar;
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    it('Criando um carro com sucesso', async () => {
      await carController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(validCarId)).to.be.true;
    });

  });

});