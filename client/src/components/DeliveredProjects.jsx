import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaCheckCircle, FaArrowRight, FaStar } from "react-icons/fa";

// ADS CAROUSEL DATA
const adsSlides = [
  "🔥 Flat 30% Off on UI Kits – Limited Time!",
  "🚀 Get Custom Web App in 7 Days",
  "🎨 120+ Premium Icons Pack Released",
  "📦 New UX Case Studies Added Weekly",
];

// FALLBACK (if API not connected)
const fallbackProducts = [
  {
    id: 1,
    title: "E-Commerce UI Kit",
    desc: "Complete design system with 40+ screens and components.",
    tag: "Design",
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 2,
    title: "Portfolio Website",
    desc: "Modern portfolio built with React, Tailwind & animations.",
    tag: "Web Development",
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 3,
    title: "Icon Pack – 120 Icons",
    desc: "Custom-made icon pack for apps & web dashboards.",
    tag: "Icons",
    image: "https://via.placeholder.com/400x250",
  },
];

export default function DeliveredProducts() {
  const [products, setProducts] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [count, setCount] = useState(0);

  // AUTO COUNT ANIMATION (50+ Projects)
  useEffect(() => {
    let start = 0;
    const end = 50;
    const duration = 1500;
    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(interval);
    }, duration / end);
    return () => clearInterval(interval);
  }, []);

  // AUTO-SLIDE CAROUSEL
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % adsSlides.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // FETCH PRODUCTS USING AXIOS (OPTIONAL API)
  useEffect(() => {
    axios
      .get("https://yourapi.com/products")
      .then((res) => setProducts(res.data))
      .catch(() => setProducts(fallbackProducts));
  }, []);

  return (
    <section className="py-20 w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading Section */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-gray-900 mb-3"
        >
          Delivered Products
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg mb-10"
        >
          Designed & built with precision. Trusted by clients across the world.
        </motion.p>

        {/* Stats + Carousel Row */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Stats Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center items-start"
          >
            <h3 className="text-5xl font-extrabold text-orange-600">
              {count}+
            </h3>
            <p className="text-xl text-gray-700 font-semibold">
              Projects Delivered Successfully
            </p>
            <div className="flex items-center gap-2 text-green-600 mt-4">
              <FaStar />
              <span>Top Rated Developer</span>
            </div>
          </motion.div>

          {/* ADS CAROUSEL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-orange-500 text-white rounded-2xl p-6 text-xl font-semibold shadow-lg overflow-hidden relative"
          >
            <motion.div
              key={slideIndex}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -60, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute"
            >
              {adsSlides[slideIndex]}
            </motion.div>
            <div className="h-10"></div>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {products.map((item, index) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group"
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
              />

              <div className="p-6 space-y-3">
                <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                  {item.tag}
                </span>

                <h3 className="text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">{item.desc}</p>

                <div className="flex items-center gap-2 text-green-600 font-medium pt-2">
                  <FaCheckCircle />
                  Delivered Successfully
                </div>

                {/* View Details Link */}
                <Link
                  to={`/product/${item.id}`}
                  className="flex items-center gap-2 text-orange-600 font-medium mt-3 hover:underline"
                >
                  View Details <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="px-8 py-4 text-lg font-semibold bg-orange-600 text-white rounded-xl shadow-lg hover:bg-orange-700 hover:shadow-xl transition inline-flex items-center gap-2"
          >
            View All Products <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
