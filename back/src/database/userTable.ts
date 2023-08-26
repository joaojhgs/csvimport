import { IUser } from './models/user';

const users: IUser[] = [];

function getUsers(search: string | undefined): IUser[] {
    if (search && search.length > 0)
        return users.filter(c => Object.values(c).some((v: string) => v.toLowerCase().includes(search.toLowerCase())));
    return users;
}

function insertUser(user: IUser) {
    users.push(user);
}

export default {
    getUsers,
    insertUser,
}