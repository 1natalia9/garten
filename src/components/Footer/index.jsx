import React from 'react'
import s from './index.module.css'
import map from './media/map.png'

export default function Footer() {
  return (
    <div className={s.container}>
      <div className={s.contacts}>
        <div>

          <p className={s.contact}>Contact</p>
          <p className={s.num}>+49 999 999 99 99</p>

          <div className={s.media}>
            <div>
             <div className={s.inst}><i class="lab la-instagram"></i></div>
              <p>instagram</p>
            </div>
            <div>
              <div className={s.inst}><i class="lab la-whatsapp"></i></div>
              <p>WhatsApp</p>
            </div>
          </div>

               

         </div>

          <div className={s.adr}>
                <p className={s.adres}>Address</p>
                <p className={s.str}>Linkstraße 2, 8 OG, 10785,<br/> Berlin, Deutschland</p>
                <p>Working Hours:</p>
                <p>24 hours a day</p>
          
        </div>
      </div>
      <div className={s.map}>
        <img src={map} alt="map" />
      </div>
    </div>

  )
}
