import { useState } from 'react';
import { customForm } from '../utils/customForm';

function UserItem({ user, onRemove, onModify }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = event => {
    const modifyForm = customForm(event);

    const modifiedUser = {
      id: user.id,
      name: modifyForm.get('name'),
      email: modifyForm.get('email'),
    };

    onModify(modifiedUser);
    setIsEditing(false);
  };

  return (
    <article>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type='text' defaultValue={user.name} name='name' />
          <input type='email' defaultValue={user.email} name='email' />
          <button type='submit'>Save</button>
          <button type='button' onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button onClick={() => onRemove(user.id)}>Remove</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </article>
  );
}

export default UserItem;
