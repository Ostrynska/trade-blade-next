'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import './deals.css';

export default function DealsSection() {
  const deals = [
    { pair: 'NEAR/USDT', profit: '58.6206%', goal: 'Цель 4', date: '06.10.2022' },
    { pair: 'BTC/USDT', profit: '6.02%', goal: 'Цель 3', date: '06.10.2022' },
    { pair: 'ETH/USDT', profit: '16.3%', goal: 'Цель 4', date: '06.10.2022' },
    { pair: 'NEAR/USDT', profit: '0.963%', goal: 'Цель 4', date: '06.10.2022' },
  ];

  return (
    <section className="deals-section">
    <h2>ПРОШЕДШИЕ СДЕЛКИ</h2>

    <div className="status">
        <div className="status-dot"></div>
        <span>Онлайн</span>
    </div>

          <Swiper
              modules={[Scrollbar]}
        spaceBetween={24}
        slidesPerView={3}
        grabCursor={true}
        loop={false}
        scrollbar={{ draggable: true, hide: false }}
    >
        {deals.map((deal, index) => (
        <SwiperSlide key={index}>
            <div className="deal-card">
            <div>
                <h3>{deal.pair}</h3>
                <p>SPOT · 1 мин. назад</p>
            </div>

            <div>
                <p className="profit-label">ПРИБЫЛЬ</p>
                <p className="profit-value">{deal.profit} ↑</p>
            </div>

            <div className="deal-card-footer">
                <span>{deal.goal}</span>
                <span>Дата входа {deal.date}</span>
            </div>
            </div>
        </SwiperSlide>
        ))}
    </Swiper>
    </section>
  );
}