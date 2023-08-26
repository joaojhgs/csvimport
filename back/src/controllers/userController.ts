import { Request, Response } from 'express';
import userTable from '../database/userTable';
 
async function getUsers(req: Request, res: Response) {
    const query = req.params.q;
    const customer = userTable.getUsers(query);
    if (customer.length > 0)
        res.json(customer);
    else
        res.sendStatus(404);
}

export default {
    getUsers,
}