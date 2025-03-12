'use client';

import React, { useState, useEffect, useRef } from 'react';
import './features-item.css';

export default function FeaturesItem({ label, value, char }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState(0);

  const targetValue = parseFloat(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000; // 2 секунди
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * targetValue);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, targetValue]);

  return (
    <li className="features-item" ref={ref}>
      <p className="features-label">{label}</p>
      <p className="features-value numeric">
        {count}
        <span>{char}</span>
      </p>
    </li>
  );
}