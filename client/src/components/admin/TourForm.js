import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addTour, getTour, updateTour } from '../../actions/adminActions';
import { useNavigate, useParams } from 'react-router-dom';

const TourForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const tour = useSelector(state => state.admin.tours.find(tour => tour._id === id));

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    location: Yup.string().required('Required'),
    price: Yup.number().required('Required'),
    schedule: Yup.date().required('Required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    if (id) {
      dispatch(updateTour(id, values));
    } else {
      dispatch(addTour(values));
    }
    setSubmitting(false);
    navigate('/admin/tours');
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">{id ? 'Edit Tour' : 'Add Tour'}</h2>
      <Formik
        initialValues={tour || { title: '', description: '', location: '', price: '', schedule: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <Field
                type="text"
                name="title"
                placeholder="Title"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <ErrorMessage name="title" component="div" className="text-red-500" />
            </div>
            <div>
              <Field
                type="text"
                name="description"
                placeholder="Description"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <ErrorMessage name="description" component="div" className="text-red-500" />
            </div>
            <div>
              <Field
                type="text"
                name="location"
                placeholder="Location"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <ErrorMessage name="location" component="div" className="text-red-500" />
            </div>
            <div>
              <Field
                type="number"
                name="price"
                placeholder="Price"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <ErrorMessage name="price" component="div" className="text-red-500" />
            </div>
            <div>
              <Field
                type="date"
                name="schedule"
                placeholder="Schedule"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <ErrorMessage name="schedule" component="div" className="text-red-500" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              {id ? 'Update Tour' : 'Add Tour'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TourForm;
