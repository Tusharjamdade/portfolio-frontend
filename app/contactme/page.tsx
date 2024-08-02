"use client"
import axios from 'axios'
import { redirect, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ContactMe() {
  const route = useRouter()
  const [userDetails, setUserDetails] = useState({ email: "", subject: "", message: "" });
  const [message, setMessage] = useState("Response submitted successfully, Thank You!!");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({ email: "", subject: "", message: "" });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", subject: "", message: "" };

    // Email validation
    if (!userDetails.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
      newErrors.email = "Email address is invalid.";
      isValid = false;
    }

    // Subject validation
    if (!userDetails.subject) {
      newErrors.subject = "Subject is required.";
      isValid = false;
    }

    // Message validation
    if (!userDetails.message) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post("https://portfolio-backend.tusharnjamdade.workers.dev/contactme", userDetails);
        console.log(response)
        if (response) {
          setUserDetails({ email: "", subject: "", message: "" });
          openModal();
          // route.push("/")
        }
      } catch (error) {
        setMessage("An error occurred while sending your message. Please try again.");
        console.log(error)
        openModal();
      }
    } else {
      setMessage("Invalid Inputs. Please enter valid inputes");
      openModal();
    }
  };

  return (
    <section className="bg-white dark:bg-black min-h-screen">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">For any inquiries or collaboration/opportunities, please use the form below to get in touch with me. I&apos;ll respond as soon as possible to your message.</p>
        <form className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input
              value={userDetails.email}
              onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
              type="email"
              id="email"
              className={`shadow-sm bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
              placeholder="name@flowbite.com"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
            <input
              value={userDetails.subject}
              onChange={(e) => setUserDetails({ ...userDetails, subject: e.target.value })}
              type="text"
              id="subject"
              className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
              placeholder="Let us know how we can help you"
              required
            />
            {errors.subject && <p className="text-red-500 text-sm mt-2">{errors.subject}</p>}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea
              value={userDetails.message}
              onChange={(e) => setUserDetails({ ...userDetails, message: e.target.value })}
              id="message"
              rows={6}
              className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
              placeholder="Leave a comment..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            type="button"
            className="mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send message
          </button>
          {isModalOpen && (
            <div
              tabIndex={-1}
              className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50"
            >
              <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-4 md:p-5 text-center">
                  <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    {message}
                  </h3>
                  <button
                    onClick={closeModal}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
