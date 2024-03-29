import { Request, Response } from 'express';
import userTable from '../database/userTable';
import * as fastcsv from 'fast-csv';
import { IUser, User } from '../database/models/user';

function getUsers(req: Request, res: Response) {
    const query = req.query.q?.toString();
    const users = userTable.getUsers(query);
    return res.json(users);
}

export async function parseUsersCsv(file: Express.Multer.File): Promise<IUser[]> {
    return new Promise((resolve, reject) => {
        const csvData: IUser[] = [];
        const parser = fastcsv.parse({ headers: true })
            .on('data', (row) => {
                csvData.push(row);
            })
            .on('end', () => {
                Object.keys(csvData[0]).forEach((key, keyNumber) => {
                    if (!Object.keys(User).includes(key)) return reject({ message: `Key ${keyNumber} is invalid` });
                })
                resolve(csvData)
            })
            .on('error', (error) => {
                return reject({ message: error.message });
            })
        parser.write(file.buffer);
        parser.end();
    })
}

async function importUsersFromFile(req: Request, res: Response) {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    const file = req.file;
    try {
        const data = await parseUsersCsv(file)
        data.forEach((user) => userTable.insertUser(user));
        return res.status(200).json({
            message: 'File uploaded and parsed successfully'
        })
    } catch (e) {
        return res.status(500).json(e)
    }
}

export default {
    getUsers,
    importUsersFromFile,
    parseUsersCsv,
}