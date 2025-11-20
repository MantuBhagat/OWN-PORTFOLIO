import React from "react";
import { motion } from "framer-motion";

const Testimonial = () => {
  const testimonial = [
    {
      text: "This developer transformed our ideas into a stunning reality. Their attention to detail and dedication to excellence is unmatched.",
      clientName: "Jane Doe",
      clientTitle: "CEO, Acme Corp",
      clientImage: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "Working with this developer was a game-changer for our business. Their innovative solutions and proactive approach exceeded our expectations.",
      clientName: "John Smith",
      clientTitle: "CTO, Beta Inc",
      clientImage: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      text: "The professionalism and expertise demonstrated by this developer were truly impressive. They delivered high-quality results on time and within budget.",
      clientName: "Alice Johnson",
      clientTitle: "Founder, Gamma LLC",
      clientImage: "https://randomuser.me/api/portraits/women/46.jpg",
    },
  ];

  return (
    <motion.div
      className="testimonial-container grid grid-cols-1 md:grid-cols-3 gap-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {testimonial.map((item, index) => (
        <div
          key={index}
          className="testimonial-card flex flex-col p-6 bg-white rounded-lg shadow-md"
        >
          <p className="testimonial-text">"{item.text}"</p>
          <div className="client-info flex items-center mt-4">
            <img
              src={item.clientImage}
              alt={item.clientName}
              className="client-image"
            />
            <div className="client-details ml-4">
              <h4 className="client-name">{item.clientName}</h4>
              <p className="client-title">{item.clientTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Testimonial;
