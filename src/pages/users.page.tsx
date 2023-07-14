import { memo, useEffect, useState } from 'react';
import UserCard from '../components/userCard';
import { User } from '../definitions';
import { getAllUsers } from '../utils/api';

function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => { 
    async function getUsers(): Promise<void> {
      try {
        const users: User[] | undefined = await getAllUsers();
        if (typeof users !== 'undefined') {
          setUsers(users);
        }
      } catch (e) {
        console.error(e);
      }
    }
    
    getUsers();
    
  }, []);
  return (
    <>
      {users.map((user) => (
        <UserCard
          key={`${user.name}-${new Date()}`}
          name={user.name}
          role={user.role}
        />
      ))}
    </>
  );
}

const UsersMemo = memo(Users);
export default UsersMemo;