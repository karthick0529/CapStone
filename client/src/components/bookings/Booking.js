import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createBooking } from '../../actions/bookingActions';
import Navbar from '../Navbar';

const Booking = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const validationSchema = Yup.object({
    tour: Yup.string().required('Required'),
    companions: Yup.array().of(Yup.string()),
  });

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Book a Tour</h2>
        <Formik
          initialValues={{ tour: '', companions: [] }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(createBooking({ ...values, user: user._id }));
            setSubmitting(false);
          }}
        >
          {({ values, isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Field
                  type="text"
                  name="tour"
                  placeholder="Tour ID"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <ErrorMessage name="tour" component="div" className="text-red-500" />
              </div>
              <FieldArray name="companions">
                {({ insert, remove, push }) => (
                  <div>
                    {values.companions.length > 0 &&
                      values.companions.map((companion, index) => (
                        <div key={index}>
                          <Field
                            name={`companions.${index}`}
                            placeholder="Companion Name"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                          <button
                            type="button"
                            onClick={() => remove(index)}
                            className="px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-700"
                          >
                            -
                          </button>
                          <button
                            type="button"
                            onClick={() => push('')}
                            className="px-4 py-2 font-bold text-white bg-green-600 rounded hover:bg-green-700"
                          >
                            +
                          </button>
                        </div>
                      ))}
                    <button
                      type="button"
                      onClick={() => push('')}
                      className="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700"
                    >
                      Add Companion
                    </button>
                  </div>
                )}
              </FieldArray>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Book Tour
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Booking;
