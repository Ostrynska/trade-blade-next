'use client';

import { useState } from 'react';
import Image from 'next/image';
import './pricing.css';
import Title from '../Title/title';
import Button from '../Buttons/button';

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState('СПОТ');

  const spotPlans = [
    {
      name: 'STANDART',
      price: '$234',
      discount: '-35%',
      features: [
        'Ручной трейдинг',
        'Автоматическое или полуавтоматическое копирование сделок',
        'Личный кабинет со статистикой',
        'Среднесрочные сделки с уровнями набора портфеля',
      ],
      duration: '12 месяцев',
    },
    {
      name: 'VIP',
      price: '$585',
      discount: '-35%',
      features: [
        'Ручной трейдинг',
        'Автоматическое или полуавтоматическое копирование сделок',
        'Личный кабинет со статистикой',
        'Краткосрочные, среднесрочные и инвест сделки',
        'Доступ в Vip чат с командой',
        'Наш авторский курс по трейдингу',
      ],
      duration: '12 месяцев',
    },
  ];

  const futuresPlans = [
    {
      name: 'STANDART',
      price: '$234',
      discount: '-35%',
      features: [
        'Ручной трейдинг',
        'Автоматическое или полуавтоматическое копирование сделок',
        'Личный кабинет со статистикой',
        'Среднесрочные сделки с уровнями набора портфеля',
      ],
      duration: '12 месяцев',
    },
    {
      name: 'VIP',
      price: '$585',
      discount: '-35%',
      features: [
        'Ручной трейдинг',
        'Автоматическое или полуавтоматическое копирование сделок',
        'Личный кабинет со статистикой',
        'Краткосрочные, среднесрочные и инвест сделки',
        'Доступ в Vip чат с командой',
        'Наш авторский курс по трейдингу',
      ],
      duration: '12 месяцев',
    },
  ];

  const plans = activeTab === 'СПОТ' ? spotPlans : futuresPlans;

  return (
    <section className="pricing-section">
      <div className='pricing-wrapper'>
        <Title className="title-white">ТАРИФЫ</Title>

        <div className="pricing-tabs">
          {['СПОТ', 'ФЬЮЧЕРС'].map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.name.includes('VIP') ? 'vip' : ''}`}>
        <div>
            <h3 className="plan-name">{plan.name}</h3>

            <ul className="features-list">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  <span>✓</span><p>{feature}</p>
                </li>
              ))}
            </ul>
        </div>

        <div>
            <div className="pricing-footer">
              <div className="price-block">
                <span className="price">{plan.price}</span>
                <span className="discount">{plan.discount}</span>
              </div>

              <div className="duration">
                {plan.duration} <Image src='./down-icon.svg' alt='Иконка вниз' className='arrow' width={24} height={24}/>
              </div>
            </div>

            <Button variant="filled" size="lg" className="try-button" bottomText="5 дней бесплатно">
              ПОПРОБОВАТЬ
            </Button>
            </div>
        </div>
        ))}
      </div>
    </section>
  );
}
