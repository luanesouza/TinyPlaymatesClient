import { memo } from 'react';
import { User, UserRoles } from '../definitions';
import parents from '../assets/users/parents.png';

function UserCard({ name, role }: User) {
  const profileImage = () => {
    if (role === UserRoles.PARENT) { 
      return <img src={parents} />;
    }
  };

  return (
    <section>
      <div>
        { profileImage() }
        <h3> {name} </h3>
      </div>
      <div>
        {role.toUpperCase()}
      </div>
    </section>
  );
}

const MemoizedUserCard = memo(UserCard);

export default MemoizedUserCard;