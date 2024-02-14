interface User {
  id: number,
  username: string,
  email: string,
  type: 'STAFF' | 'PARENT',
  isAdmin: boolean
}

export default User;
