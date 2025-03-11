'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import Title from '../Title/title';
import 'swiper/css';
import 'swiper/css/scrollbar';
import './deals.css';

export default function DealsSection() {
  const deals = [
    { pair: 'NEAR/USDT', profit: '58.6206', char: '%', goal: 'Цель 4', date: '06.10.2022' },
    { pair: 'BTC/USDT', profit: '6.02', char: '%', goal: 'Цель 3', date: '06.10.2022' },
    { pair: 'ETH/USDT', profit: '16.3', char: '%', goal: 'Цель 4', date: '06.10.2022' },
    { pair: 'NEAR/USDT', profit: '0.963', char: '%', goal: 'Цель 4', date: '06.10.2022' },
    { pair: 'NEAR/USDT', profit: '58.6206', char: '%', goal: 'Цель 4', date: '06.10.2022' },
  ];

  return (
    <section className="deals-section">
        <Title className="title-white">ПРОШЕДШИЕ СДЕЛКИ</Title>

        <div className="status">
            <div className="status-dot"></div>
            <span className='status-label'>Онлайн</span>
        </div>

        <Swiper
            modules={[Scrollbar]}
            spaceBetween={20}
            slidesPerView={4.5}
            grabCursor={true}
            loop={false}
            scrollbar={{ draggable: true, hide: false }}
        >
            {deals.map((deal, index) => (
            <SwiperSlide key={index}>
                <div className="deal-card">
                    <div>
                        <h3>{deal.pair}</h3>
                        <p className='deal-spot'>SPOT · <span className='deal-time'>1 мин. назад</span></p>
                    </div>

                    <div>
                        <p className="profit-label">ПРИБЫЛЬ</p>
                        <p className="profit-value numeric">{deal.profit}<span>{deal.char}</span><span className='deal-arrow'>↑</span></p>
                    </div>

                    <div className="deal-card-footer">
                        <span className='deal-goal'>{deal.goal}</span>
                        <span className='deal-date'>Дата входа {deal.date}</span>
                    </div>
                    <Image src='./logo-group.svg' alt='Картинка' className='deal-logo' width={163} height={160}/>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
    </section>
  );
}