'use client';

import React, { useState } from 'react';
import { Flex, Text, Card } from 'rebass';
import { faqs } from '../../data/data';
import Title from '../Title/title';
import './faq.css';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id='faq-section'>
      <div className='faq-container'>
      <Title className="faq-title">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</Title>

      {faqs.map((faq, index) => (
        <Card
          key={index}
          onClick={() => toggleFaq(index)}
          className={`faq-card ${openIndex === index ? 'active' : ''}`}
        >
          <Flex className="faq-header" justifyContent="space-between" alignItems="center">
            <Text className="faq-question">{faq.question}</Text>
            <Text className="faq-icon">{openIndex === index ? '⌃' : '⌄'}</Text>
          </Flex>

          {openIndex === index && (
            <div className="faq-answer">
              {Array.isArray(faq.answer) ? (
                faq.answer.map((paragraph, idx) => (
                  <Text key={idx} className="faq-paragraph">{paragraph}</Text>
                ))
              ) : (
                <Text className="faq-paragraph">{faq.answer}</Text>
              )}
            </div>
          )}
        </Card>
      ))}
      </div>
    </section>
  );
}
