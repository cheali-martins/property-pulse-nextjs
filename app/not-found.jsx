"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-red-500 mb-4"
      >
        <FaExclamationTriangle className="text-7xl" />
      </motion.div>
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-9xl font-extrabold text-red-500"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl text-gray-700 mb-6"
      >
        Oops! Page not found.
      </motion.p>
      <Link href="/" passHref>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="text-lg text-blue-600 hover:underline"
        >
          Please go back to home
        </motion.div>
      </Link>
    </div>
  );
};
export default NotFoundPage;

{
  /* <section class="bg-blue-50 min-h-screen flex-grow">
  <div class="container m-auto max-w-2xl py-24">
    <div class="bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0">
      <div class="flex justify-center">
        <FaExclamationTriangle className="text-yellow-400 text-8xl fa-5x" />
      </div>
      <div class="text-center">
        <h1 class="text-3xl font-bold mt-4 mb-2">Page Not Found</h1>
        <p class="text-gray-500 text-xl mb-10">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded"
        >
          Go Home
        </Link>
      </div>
    </div>
  </div>
  <div class="flex-grow"></div>
</section>; */
}
