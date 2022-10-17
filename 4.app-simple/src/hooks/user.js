import { useState, useEffect } from 'react';
import { createUser, getUsers, updateUser, deleteUser } from '../services/storage';

export default function useUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  function insertUser(user) {
    const newUsers = createUser(user);
    setUsers(newUsers);
  }

  function modifyUser(user) {
    const newUsers = updateUser(user.id, user);
    setUsers(newUsers);
  }

  function removeUser(id) {
    const newUsers = deleteUser(id);
    setUsers(newUsers);
  }

  return {
    users,
    insertUser,
    modifyUser,
    removeUser,
  };
}
