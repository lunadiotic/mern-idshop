import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    emai: 'admin@mail.com',
    password: bcrypt.hashSync('password', 10),
    isAdmin: true,
  },
  {
    name: 'User',
    emai: 'user@mail.com',
    password: bcrypt.hashSync('password', 10),
    isAdmin: false,
  },
  {
    name: 'Hakim',
    emai: 'hakim@mail.com',
    password: bcrypt.hashSync('password', 10),
    isAdmin: false,
  },
]

export default users
