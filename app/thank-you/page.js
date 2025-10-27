'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa';

export default function ThankYou() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [country, setCountry] = useState('');

  // Progress bar + redirect
  useEffect(() => {
    const interval = 50; // update every 50ms
    const increment = 100 / (4000 / interval); // 4 seconds total
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    const redirectTimer = setTimeout(() => {
      router.back();
    }, 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  // Facebook Pixel (Lead)
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
  }, []);

  // Detect country from URL
  useEffect(() => {
    const c = searchParams.get('country');
    if (c) {
      setCountry(c.toLowerCase().trim());
    }
  }, [searchParams]);

  // ✅ Fire correct Google Analytics event
  useEffect(() => {
    if (!country || !window.gtag) return;

    let eventName = 'lead_submission_dhe_uk_en'; // Default
    let value = 306;

    if (country === 'india') {
      eventName = 'lead_submission_dhe_ind_en';
      value = 307;
    } else if (country === 'ireland') {
      eventName = 'lead_submission_dhe_ir_en';
      value = 308;
    } else if (country === 'uk') {
      eventName = 'lead_submission_dhe_uk_en';
      value = 306;
    }

    window.gtag('event', eventName, {
      lead_language: 'english',
      project_name: 'dubai_hills_estate',
      landing_page: 'dhe_en',
      currency: 'AED',
      value,
    });
  }, [country]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          padding: '0 1rem',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <FaCheckCircle size={100} color="#9f8151" />
        <h1
          style={{
            fontSize: '2rem',
            marginTop: '1rem',
            fontWeight: '600',
            color: '#0b4a35',
          }}
        >
          Thank You for Your Interest!
        </h1>
        <p
          style={{
            marginTop: '0.5rem',
            fontSize: '1rem',
            color: '#0b4a35',
          }}
        >
          We will get back to you very soon.
        </p>

        {/* Progress Bar */}
        <div
          style={{
            marginTop: '2rem',
            height: '6px',
            width: '100%',
            backgroundColor: '#eee',
            borderRadius: '3px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              backgroundColor: '#9f8151',
              transition: 'width 50ms linear',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
