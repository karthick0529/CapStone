import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getUser, updateUser } from '../../actions/adminActions';
import { useNavigate, useParams } from 'react-router-dom';

const UserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useSelector(state => state.admin.users.find(user => user._id === id));

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    mobile: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    if (id) {
      dispatch(updateUser(id, values));
    } else {
      dispatch(addUser(values));
    }
    setSubmitting(false);
    navigate('/admin/users');
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">{id ? 'Edit User' : 'Add User'}</h2>
      <Formik
        initialValues={user || { name: '', email: '', mobile: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <ErrorMessage name="name" component="div" className="text-red-500" />
            </div>
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div>
              <Field
                type="text"
                name="mobile"
                placeholder="Mobile"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <ErrorMessage name="mobile" component="div" className="text-red-500" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              {id ? 'Update User' : 'Add User'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
