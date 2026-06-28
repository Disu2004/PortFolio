import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import NotFound from './Components/NotFound';
import emailjs from '@emailjs/browser';

function App() {
  useEffect(() => {
    if (!sessionStorage.getItem('portfolio_visited')) {
      sessionStorage.setItem('portfolio_visited', 'true');
      
      const getBrowser = () => {
        const ua = navigator.userAgent;
        if (ua.includes("Firefox")) return "Firefox";
        if (ua.includes("SamsungBrowser")) return "Samsung Browser";
        if (ua.includes("Opera") || ua.includes("OPR")) return "Opera";
        if (ua.includes("Trident")) return "Internet Explorer";
        if (ua.includes("Edge") || ua.includes("Edg")) return "Edge";
        if (ua.includes("Chrome")) return "Chrome";
        if (ua.includes("Safari")) return "Safari";
        return "Unknown";
      };

      const getOS = () => {
        const ua = navigator.userAgent;
        if (ua.includes("Win")) return "Windows";
        if (ua.includes("Mac")) return "MacOS";
        if (ua.includes("Linux")) return "Linux";
        if (ua.includes("Android")) return "Android";
        if (ua.includes("like Mac")) return "iOS";
        return "Unknown";
      };

      const getDevice = () => {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return "Tablet";
        if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return "Mobile";
        return "Desktop";
      };

      const sendEmail = (ip, location) => {
        const templateParams = {
          time: new Date().toLocaleString(),
          ip: ip,
          location: location,
          device: getDevice(),
          browser: getBrowser(),
          os: getOS(),
          page: window.location.href,
          referrer: document.referrer || 'Direct'
        };

        emailjs.send(
          'service_nicinac', 
          'template_332md0n', 
          templateParams, 
          'xxa5TfoomBMBFVawf'
        ).then(() => {
          console.log("Visit notification sent.");
        }).catch((err) => {
          console.error("Failed to send visit notification", err);
        });
      };

      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          const loc = `${data.city || ''}, ${data.region || ''}, ${data.country_name || ''}`.replace(/^[,\s]+|[,\s]+$/g, '').replace(/,\s*,/g, ', ');
          sendEmail(data.ip || 'Unknown', loc || 'Unknown Location');
        })
        .catch(() => {
          sendEmail('Unknown', 'Unknown Location');
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
