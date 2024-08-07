import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/admin/users`)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <ul className="space-y-4">
        {users.map(user => (
          <li key={user._id} className="p-4 bg-white rounded shadow">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewUsers;
