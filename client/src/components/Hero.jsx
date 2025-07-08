import { motion } from "framer-motion";
import profile from "../assets/ProfilePic.jpg";
import { FaGithub, FaInstagram, FaShare } from "react-icons/fa";

const Hero = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative sm:block block text-center space-x-4 mb-8">
        <h1 className="mb-8 text-6xl ">
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
          <small className="md:w-[600px] sm:w-full text-xl text-gray-500 ">
            With a passion for design and code, I build stunning Websites,
            Scalable apps, and User-focused solutions. Whether it's a portfolio,
            an e-commerce site, or a social plateform - I bring your vision to
            life with creativity and expertise.
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
        <div className="absolute border bottom-0 left-0 bg-white p-2 rounded-[0_30px_0_30px] transition ">
          <div className="flex hover:bg-gray-100 cursor-pointer justify-center items-center   p-2 rounded-full ">
            <FaGithub className="text-2xl " />
          </div>
          <div className="flex text-pink-600 cursor-pointer hover:bg-gray-100 justify-center items-center mt-4 p-2 rounded-full ">
            <FaInstagram className="text-xl " />
          </div>
          <div className="flex hover:bg-gray-100 cursor-pointer justify-center items-center  mt-4 p-2 rounded-full">
            <FaShare className="text-xl text-blue-800" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
