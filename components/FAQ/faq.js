'use client';

import React, { useState } from 'react';
import { Flex, Text, Card } from 'rebass'; 
import Title from '../Title/title';
import './faq.css';

const faqs = [
  {
    question: 'Что такое TradeBlade',
    answer: [
      'Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.',
      'Он представляет пользователям множество преимуществ, таких как более высокая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.'
    ]
  },
  {
    question: 'Что TradeBlade предлагает инвесторам',
    answer:
      'TradeBlade предлагает инвесторам удобные инструменты для трейдинга и копирования сделок.',
  },
  {
    question: 'Должен ли я перевести свои средства на TradeBlade',
    answer:
      'Нет, ваши средства остаются на вашем счете в Binance. Мы просто предоставляем интерфейс для копирования сделок.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
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
    </section>
  );
}
