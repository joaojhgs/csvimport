import userController from '../src/controllers/userController';
import fs from 'fs';
import httpMocks from 'node-mocks-http';

describe('Test Handlers', function () {

    test('test importUsersFromFile success', () => {
        const req = httpMocks.createRequest({ file: {buffer: fs.readFileSync('./__tests__/csvexample.csv')} });
        const res = httpMocks.createResponse()
        userController.importUsersFromFile(req, res)
        const data = res._getData();
        console.log(data);
        expect(res.statusCode).toEqual(200);
    });


});