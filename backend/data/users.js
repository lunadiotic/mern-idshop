import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@mail.com',
    password: bcrypt.hashSync('password', 10),
    isAdmin: true,
  },
  {
    name: 'User',
    email: 'user@mail.com',
    password: bcrypt.hashSync('password', 10),
    isAdmin: false,
  },
  {
    name: 'Hakim',
    email: 'hakim@mail.com',
    password: bcrypt.hashSync('password', 10),
    isAdmin: false,
  },
]

export default users
