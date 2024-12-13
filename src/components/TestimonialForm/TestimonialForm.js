import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const TestimonialForm = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "First name must be at least 2 characters")
      .required("First name is required"),
    lastName: Yup.string()
      .min(2, "Last name must be at least 2 characters")
      .required("Last name is required"),
    companyName: Yup.string().required("Company name is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };

  return (
    <div className="flex gap-16 ">
    <section className="mb-12">
    <p className="uppercase text-yellow-500 p-2 rounded-lg flex items-center mt-5 ml-2 ">
              <hr className="w-10 border-t-1 border-red-500 me-2  " />
              testimonials
            </p>
            <h1 className="font-bold mb-3 lg:text-[30px] text-white">
            What Our Happy Client Say About Us
            </h1>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <img
            src="https://lh3.googleusercontent.com/a-/ALV-UjUadPgQswf8Unpfl9gSeluEr9IsfxT_RvLL_YX5G1cIt7TTaA6D=w64-h64-c-rp-mo-br100"
            alt="Client"
            className="w-12 h-12 rounded-full mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold">Ghanishtha Sharma</h3>
          <p className="text-sm text-gray-500">10 months ago</p>
          <div className="text-yellow-500 text-lg mt-2">⭐⭐⭐⭐⭐</div>
          <blockquote className="text-gray-700 mt-4">
            "Stonepedia's team is too helpful and has great stock availability.
            Thank you, I will surely recommend it to my representatives!"
          </blockquote>
        </div>
        <div className="flex items-end justify-end">
        <button className="bg-red-500 uppercase hover:bg-orange-400 text-lg mt-5 text-white w-[200px] h-[40px]  p-2">
                      Write Review
                      
                    </button>
        </div>
      </section>

      
      <section className="bg-white p-6 rounded-lg shadow-md w-[500px]">
      <p className="uppercase text-yellow-500 p-2 rounded-lg flex items-center mt-5 ml-2 ">
              <hr className="w-10 border-t-1 text-left border-red-500 me-2  " />
              Happy to consult
            </p>
        <h2 className="text-3xl font-bold text-center mb-4">
          Book Consultation Now
        </h2>
        <p className="text-left text-gray-600 mb-6">
        Our dedicated team will gt back to you within next 24 hours
        </p>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            companyName: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <Field
                    name="firstName"
                    placeholder="First Name"
                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="flex flex-col">
                  <Field
                    name="lastName"
                    placeholder="Last Name"
                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <Field
                  name="companyName"
                  placeholder="Company Name"
                  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="companyName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex flex-col">
                <Field
                  name="message"
                  placeholder="Write Your Message"
                  as="textarea"
                  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Submit Request
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </div>
      
  );
};

export default TestimonialForm;
