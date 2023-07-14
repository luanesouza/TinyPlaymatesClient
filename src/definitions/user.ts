export interface User {
  name: string,
  role: 'parent' | 'babysitter' | 'nanny',
  email?: string,
}

export enum UserRoles {
  PARENT = 'parent',
  BABYSITTER = 'babysitter',
  NANNY = 'nanny'
}