'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa';
import Script from 'next/script';
import { useSearchParams } from 'next/navigation';


export default function ThankYou() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [country, setCountry] = useState("");
  const searchParams = useSearchParams();
  const rawCountry = searchParams.get('country');

  useEffect(() => {
    const interval = 50; // update every 50ms
    const increment = 100 / (4000 / interval); // 5 seconds total
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    // redirect after 5 seconds
    const redirectTimer = setTimeout(() => {
      router.back();
    }, 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "Lead");
    }
  }, []);

    useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const countryParam = params.get("country");
    if (countryParam) {
      setCountry(countryParam.toLowerCase().trim());
    }
  }, []);


  return (
    <>
       <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div style={{ textAlign: 'center', padding: '0 1rem', width: '100%', maxWidth: '400px' }}>
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

    {rawCountry?.toLowerCase() === "india" ? (
        // For India
       <Script id="lead-submission-dhe-ind" strategy="afterInteractive">
{`
  window.gtag('event', 'lead_submission_dhe_ind', {
    lead_language: 'english',
    project_name: 'dubai_hills_estate',
    landing_page: 'dhe_ind',
    currency: 'AED',
    value: 307
  });
`}
</Script>
      ) : (
        // Default (UK or others)
        <Script id="lead-submission-dhe-uk-en" strategy="afterInteractive">
{`
  window.gtag('event', 'lead_submission_dhe_uk_en', {
    lead_language: 'english',
    project_name: 'dubai_hills_estate',
    landing_page: 'dhe_uk_en',
    currency: 'AED',
    value: 306
  });
`}
</Script>
      )}
      
      {/* <Script id="lead-submission-dhe-en" strategy="afterInteractive">
{`
  window.gtag('event', 'lead_submission_dhe_en', {
    lead_language: 'english',
    project_name: 'dubai_hills_estate',
    landing_page: 'dhe_en',
    currency: 'AED',
    value: 305
  });
`}
</Script> */}
    
      </>
  );
}
