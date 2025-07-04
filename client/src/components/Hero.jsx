import { motion } from "framer-motion";
import profile from "../assets/ProfilePic.jpg";
import { FaGithub, FaInstagram, FaShare } from "react-icons/fa";

const Hero = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative sm:block block text-center space-x-4 mb-8">
        <h1 className="mb-8 text-6xl">
          <br />
          I'm{" "}
          <span className="text-8xl font-bold">
            Mantu
            <br />
            Bhagat
          </span>
        </h1>
        <p className="text-2xl font-semibold text-gray-700">
          I turn ideas into interactive web expreriences.
        </p>

        <div className="mt-8 flex space-x-6">
          <small className="md:w-[400px] sm:w-full text-gray-500 ">
            With a passion for design and code, I build stunning
            websites,scalable apps, and user-focused solutions. Whether it's a
            portfolio, an e-commerce site, or a social plateform - I bring your
            vision to life with creativity and expertise.
          </small>
        </div>

        <div className="mt-8 flex space-x-6">
          <p className="text-center font-bold text-4xl">
            +50
            <br />
            <small className="md:text-xl sm:text-base text-gray-500 flex w-full max-w-full">
              projects completed
            </small>
          </p>
          <p className="text-center font-bold text-4xl">
            +170
            <br />
            <small className="md:text-xl sm:text-base text-gray-500 flex w-full max-w-full">
              Git repositories
            </small>
          </p>
        </div>
      </div>

      <div className="relative w-[400px] h-[460px] ">
        <img
          src={profile}
          alt="Mantu Bhagat"
          className="w-full h-full object-cover  transition-transform rounded-[0_32px_0_32px] "
        />
        <div className="absolute bottom-0 left-0 bg-white p-2 rounded-[0_30px_0_30px] transition ">
          <div className="flex justify-center items-center space-x-4 bg-black p-2 rounded-full text-white">
            <FaGithub className="text-xl" />
          </div>
          <div className="flex justify-center items-center space-x-4 mt-4 bg-pink-500 p-2 rounded-full text-white">
            <FaInstagram className="text-xl" />
          </div>
          <div className="flex justify-center items-center space-x-4 mt-4  bg-black p-2 rounded-full text-white">
            <FaShare className="text-xl" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
