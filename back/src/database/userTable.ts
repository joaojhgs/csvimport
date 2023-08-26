import User from './models/user';

const users: User[] = [];

function getUsers(search: string | undefined): User[] {
    if(search && search.length > 0)
        return users.filter(c => Object.values(c).some((v: string) => v.toLowerCase().includes(search.toLowerCase())));
    return users;
}

function insertUser(user: User) {
    users.push(user);
}

export default {
    getUsers,
}