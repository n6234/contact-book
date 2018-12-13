export class User {
  id: number;
  name: string;
  surname: string;
  phone: string;
  email: string;
}

export const users: User[] = [
  { id: 0, name: 'Thomas', surname: 'Darnois', phone: '07532689', email: 't.dranoi@criteo.com' },
  { id: 1, name: 'Paulina', surname: 'Wiklo', phone: '07532689', email: 'p.wiklo@criteo.com' },
  { id: 2, name: 'Adriano', surname: 'Dell Aquila', phone: '07532689', email: 'a.dellaquila@criteo.com' },
  { id: 3, name: 'Sophie', surname: 'Hogwitz', phone: '07532689', email: 's.hogwitz@criteo.com' },
  { id: 4, name: 'Karina', surname: 'Gratze', phone: '07532689', email: 'k.gratze@criteo.com' },
]
