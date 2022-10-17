import UserItem from './components/UserItem';
import UsersGroup from './components/UsersGroup';
import useUser from './hooks/user';
import './App.css';
import { customForm } from './utils/customForm';

function App() {
  const { users, insertUser, removeUser, modifyUser } = useUser();

  function handleSubmit(event) {
    const modifyForm = customForm(event);
    const user = {
      name: modifyForm.get('name'),
      email: modifyForm.get('email'),
    };

    insertUser(user);
  }

  if (!users) {
    return <p>Loading...</p>;
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' name='name' />
        <input type='email' placeholder='Email' name='email' />
        <button type='submit'>Add</button>
      </form>
      <UsersGroup>
        {users.length === 0 ? (
          <p>No users</p>
        ) : (
          users.map(user => <UserItem key={user.id} user={user} onModify={modifyUser} onRemove={removeUser} />)
        )}
      </UsersGroup>
    </div>
  );
}

export default App;
