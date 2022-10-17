export function getUsers() {
  const users = localStorage.getItem('users') || '[]';
  return JSON.parse(users);
}

export function getUserById(id) {
  const users = getUsers();
  return users.find(user => user.id === id);
}

export function createUser(user) {
  const users = getUsers();
  users.push({
    id: new Date().getTime().toString(36),
    ...user,
  });
  localStorage.setItem('users', JSON.stringify(users));

  return users;
}

export function updateUser(id, user) {
  const users = getUsers();
  const newUsers = users.map(u => {
    if (u.id === id) {
      return {
        ...u,
        ...user,
      };
    }
    return u;
  });

  localStorage.setItem('users', JSON.stringify(newUsers));

  return newUsers;
}

export function deleteUser(id) {
  const users = getUsers();
  const newUsers = users.filter(user => user.id !== id);
  localStorage.setItem('users', JSON.stringify(newUsers));

  return newUsers;
}
