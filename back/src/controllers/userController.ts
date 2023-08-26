import { Request, Response } from 'express';
import userTable from '../database/userTable';

function getUsers(req: Request, res: Response) {
    const query = req.query.q?.toString();

    if (typeof query !== 'string') res.sendStatus(500);

    const customer = userTable.getUsers(query);

    if (customer.length > 0)
        res.json(customer);
    else
        res.sendStatus(404);
}

function importUsersFromFile(req: Request, res: Response) {
    if (!req.files) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
}

export default {
    getUsers,
    importUsersFromFile,
}