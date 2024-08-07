import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser } from '../../actions/adminActions';
import { Link } from 'react-router-dom';

const ManageUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.admin.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Manage Users</h2>
      <Link to="add" className="px-4 py-2 font-bold text-white bg-green-600 rounded hover:bg-green-700">Add User</Link>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Mobile</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td className="py-2">{user.name}</td>
              <td className="py-2">{user.email}</td>
              <td className="py-2">{user.mobile}</td>
              <td className="py-2">
                <Link to={`edit/${user._id}`} className="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700">Edit</Link>
                <button
                  onClick={() => dispatch(deleteUser(user._id))}
                  className="px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-700 ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
