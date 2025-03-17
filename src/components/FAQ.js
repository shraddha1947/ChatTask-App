import React, { useState } from "react";
import "./FAQ.css";
import {
  FaQuestionCircle,
  FaLightbulb,
  FaRocket,
  FaLock,
  FaCogs,
  FaMobileAlt,
  FaRegSmile,
  FaSyncAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const faqData = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days...",
    icon: <FaQuestionCircle />,
  },
  {
    question: "How does the subscription work?",
    answer: "You will be billed monthly or annually...",
    icon: <FaLightbulb />,
  },
  {
    question: "Is your platform secure?",
    answer: "Yes, we use industry-standard encryption...",
    icon: <FaLock />,
  },
  {
    question: "Can I use it on mobile?",
    answer: "Absolutely, we are mobile-friendly...",
    icon: <FaMobileAlt />,
  },
  {
    question: "How to get technical support?",
    answer: "You can contact support via email or chat...",
    icon: <FaCogs />,
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, if you're not satisfied within 14 days...",
    icon: <FaRegSmile />,
  },
  {
    question: "What is the roadmap ahead?",
    answer: "We plan to add more AI features...",
    icon: <FaRocket />,
  },
  {
    question: "Can I upgrade later?",
    answer: "Yes, you can upgrade anytime...",
    icon: <FaSyncAlt />,
  },
];

const FAQ = () => {
  const initialVisibleCount = 4;
  const [openIndex, setOpenIndex] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleLoadMore = () => {
    setExpanded(!expanded);
    setOpenIndex(null);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>

      {(expanded ? faqData : faqData.slice(0, initialVisibleCount)).map(
        (item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <div className="faq-icon">{item.icon}</div>
              <div className="faq-text">{item.question}</div>
              <div className="faq-toggle-icon">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        )
      )}

      <button className="load-more-btn" onClick={toggleLoadMore}>
        {expanded ? "Show Less" : "Load More"}
      </button>
    </div>
  );
};

export default FAQ;
