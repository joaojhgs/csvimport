import userController from '../src/controllers/userController';
import fs from 'fs';
import httpMocks from 'node-mocks-http';
import userTable from '../src/database/userTable';

describe('Test Handlers', function () {

    test('test getUsers without any data', async () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse()
        userController.getUsers(req, res)
        expect(res.statusCode).toEqual(404);
    });

    test('test getUsers with data', () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse()
        userTable.insertUser({
            name: 'John Doe',
            city: 'New York',
            country: 'USA',
            favorite_sport: 'Basketball'
        })
        userController.getUsers(req, res)
        expect(res.statusCode).toEqual(200);
    });

    test('test getUsers with data and query', () => {
        const req = httpMocks.createRequest({ query: { q: 'doe' } });
        const res = httpMocks.createResponse()
        userTable.insertUser({
            name: 'John Doe',
            city: 'New York',
            country: 'USA',
            favorite_sport: 'Basketball'
        })
        userController.getUsers(req, res)
        expect(res.statusCode).toEqual(200);
    });

    test('test importUsersFromFile success', async () => {
        const req = httpMocks.createRequest({ file: { buffer: fs.readFileSync('./__tests__/csvexample.csv') } });
        const res = httpMocks.createResponse()
        await userController.importUsersFromFile(req, res)
        expect(res.statusCode).toEqual(200);
    });

    test('test importUsersFromFile without file', async () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse()
        await userController.importUsersFromFile(req, res)
        expect(res.statusCode).toEqual(400);
    });

    test('test importUsersFromFile with problematic file', async () => {
        const req = httpMocks.createRequest({ file: { buffer: fs.readFileSync('./__tests__/csvexample malformed.csv') } });
        const res = httpMocks.createResponse()
        await userController.importUsersFromFile(req, res)
        expect(res.statusCode).toEqual(500);
    });

    test('test parseUserCsv success', async () => {
        const expectedResult = [
            {
                name: 'John Doe',
                city: 'New York',
                country: 'USA',
                favorite_sport: 'Basketball'
            },
            {
                name: 'Jane Smith',
                city: 'London',
                country: 'UK',
                favorite_sport: 'Football'
            },
            {
                name: 'Mike Johnson',
                city: 'Paris',
                country: 'France',
                favorite_sport: 'Tennis'
            },
            {
                name: 'Karen Lee',
                city: 'Tokyo',
                country: 'Japan',
                favorite_sport: 'Swimming'
            },
            {
                name: 'Tom Brown',
                city: 'Sydney',
                country: 'Australia',
                favorite_sport: 'Running'
            },
            {
                name: 'Emma Wilson',
                city: 'Berlin',
                country: 'Germany',
                favorite_sport: 'Basketball'
            }
        ];
        const data = await userController.parseUsersCsv({ buffer: fs.readFileSync('./__tests__/csvexample.csv') } as Express.Multer.File)
        expect(JSON.stringify(data)).toBe(JSON.stringify(expectedResult));
    });
    test('test parseUserCsv malformed csv', async () => {
        const expectedError = { "message": "Unexpected Error: column header mismatch expected: 4 columns got: 7" }
        let error;
        try {
            await userController.parseUsersCsv({ buffer: fs.readFileSync('./__tests__/csvexample malformed.csv') } as Express.Multer.File);
        } catch (e) {
            error = e;
        }
        expect(JSON.stringify(error)).toBe(JSON.stringify(expectedError));
    });

    test('test parseUserCsv malformed keys', async () => {
        const expectedError = { message: `Key 1 is invalid` }
        let error;
        try {
            await userController.parseUsersCsv({ buffer: fs.readFileSync('./__tests__/csvexample malformedkey.csv') } as Express.Multer.File);
        } catch (e) {
            error = e;
        }
        expect(JSON.stringify(error)).toBe(JSON.stringify(expectedError));
    });
});