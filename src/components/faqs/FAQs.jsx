import { useState } from 'react';
import './faq.css';

const FAQs = () => {
  const [faqsData, setFaqsData] = useState([
    {
      number: 1,
      question: 'How do I sign up to CozyCove',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum fugiat, dicta quos possimus totam consequatur ab minus sit praesentium asperiores?',
    },
    {
      number: 2,
      question: 'Is my personal information secure?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum fugiat, dicta quos possimus totam consequatur ab minus sit praesentium asperiores?',
    },
    {
      number: 3,
      question: 'Can I get a licensed therapist through the platform?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum fugiat, dicta quos possimus totam consequatur ab minus sit praesentium asperiores?',
    },
    {
      number: 4,
      question: 'Is peer support available on the platform?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum fugiat, dicta quos possimus totam consequatur ab minus sit praesentium asperiores?',
    },
    {
      number: 5,
      question: 'How do I get my NFTs?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum fugiat, dicta quos possimus totam consequatur ab minus sit praesentium asperiores?',
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqsData((prevFaqsData) => {
      const updatedFaqsData = prevFaqsData.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open; // Toggle current FAQ
        } else {
          faq.open = false; // Close other FAQs
        }
        return faq;
      });
      return updatedFaqsData;
    });
  };

  return (
    <div className="faqs">
      <div className="faqs-heading">
        <h2>Frequently Asked Questions</h2>
        <p>
          Discover answers to your most common queries with our comprehensive
          list of frequently asked questions.
        </p>
      </div>
      {faqsData.map((faq, index) => (
        <div
          className={`faq ${faq.open ? 'open' : ''}`}
          key={faq.number}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-header">
            <div className="faq-number">{faq.number}.</div>
            <div className="faq-question">{faq.question}</div>
            <div className="faq-icon">{faq.open ? 'x' : '+'}</div>
          </div>
          <div className="faq-answer">
            {faq.open && (
              <div style={{ marginLeft: '20px' }}>{faq.answer}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
