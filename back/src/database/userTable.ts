import User from '../models/user';

const users: User[] = [];

function searchCustomers(search: string): User[] {
    return users.filter(c => Object.values(c).some((v: string) => v.includes(search)));
}

function getCustomers(): User[] {
    return users;
}