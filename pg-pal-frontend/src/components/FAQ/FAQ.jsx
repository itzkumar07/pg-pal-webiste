import { useState } from 'react';
import './FAQ.css';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are the check-in and check-out times?",
      answer: "Check-in time is 2:00 PM and check-out time is 11:00 AM. Early check-in and late check-out can be arranged based on availability."
    },
    {
      question: "Do you offer airport shuttle service?",
      answer: "Yes, we provide complimentary airport shuttle service for our guests. Please inform us of your arrival details at least 24 hours in advance."
    },
    {
      question: "Are pets allowed?",
      answer: "We are a pet-friendly establishment. Small pets are welcome with prior notice. Additional cleaning fees may apply."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Free cancellation is available up to 48 hours before check-in. Cancellations made within 48 hours will incur a one-night charge."
    },
    {
      question: "Is parking available?",
      answer: "Yes, we offer complimentary valet parking for all our guests. Additional secure parking is available for long-term stays."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-content">
          <div className="faq-header">
            <p className="section-subtitle">NEED HELP?</p>
            <h2 className="section-title">Everything you need<br />to know right now</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="faq-image">
          <img 
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932" 
            alt="FAQ"
          />
          <div className="faq-overlay">
            <h3>FAQ</h3>
          </div>
        </div>
      </div>
    </section>
  );
}