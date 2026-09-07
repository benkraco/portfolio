import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./i18n/index.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main>
      <div className="background">
        <svg className="waves" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <path className="wave wave-1" d="M-100 80C120 20 280 20 470 100C680 190 820 210 1040 130C1230 60 1370 60 1540 130V-100H-100Z" />
          <path className="wave wave-2" d="M-100 250C100 140 300 130 500 230C700 330 850 360 1060 260C1260 165 1400 170 1540 250V-20C1360 -80 1190 -40 1020 40C800 140 680 120 470 20C270 -70 80 -30 -100 70Z" />
          <path className="wave wave-3" d="M-100 430C130 320 310 330 500 420C720 525 850 560 1080 450C1280 355 1400 370 1540 440V200C1370 120 1210 120 1030 200C820 295 690 280 480 180C270 80 80 100 -100 190Z" />
          <path className="wave wave-4" d="M-100 650C120 540 310 550 520 650C730 750 880 780 1080 680C1280 580 1410 590 1540 660V430C1380 350 1220 350 1040 440C830 540 700 520 490 420C280 320 90 340 -100 430Z" />
          <path className="wave wave-5" d="M-100 900V760C120 670 300 690 510 790C720 890 870 930 1090 830C1290 740 1420 760 1540 830V1000H-100Z" />
        </svg>
      </div>
      <App />
    </main>
  </StrictMode>,
)
