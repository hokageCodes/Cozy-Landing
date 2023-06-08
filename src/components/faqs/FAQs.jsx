import { useState } from 'react';
import './faq.css';

const FAQs = () => {
  const [faqsData, setFaqsData] = useState([
    {
      number: 1,
      question: 'How do I sign up to CozyCove',
      answer:
        'Create an account by connecting your wallet to access a world of support and community.',
    },
    {
      number: 2,
      question: 'Is my personal information secure?',
      answer:
        'Yes, our platform is built on blockchain technology to ensure that your personal information is always encrypted and stored securely.',
    },
    {
      number: 3,
      question: 'Can I get a licensed therapist through the platform?',
      answer:
        'Our platform provides a directory of licensed therapists and mental health professionals you can connect with for therapy sessions.',
    },
    {
      number: 4,
      question: 'Is peer support available on the platform?',
      answer:
        'Yes, our platform provides a community of like-minded individuals who are going through similar mental health challenges.',
    },
    {
      number: 5,
      question: 'How do I get my NFTs?',
      answer:
        'When you claim the NFTs you have earned from accomplished tasks.',
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
              <div className='answer'>{faq.answer}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
