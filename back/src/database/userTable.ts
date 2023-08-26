import User from './models/user';

const users: User[] = [];

function getUsers(search: string): User[] {
    if(search && search.length > 0)
        return users.filter(c => Object.values(c).some((v: string) => v.toLowerCase().includes(search.toLowerCase())));
    return users;
}

export default {
    getUsers,
}