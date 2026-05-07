import { useState } from "react";
import cut1 from "./assets/cut1.jpeg";
import cut2 from "./assets/cut2.jpeg";
import cut3 from "./assets/cut3.jpeg";
import cut4 from "./assets/cut4.jpeg";
import cut5 from "./assets/cut5.jpeg";
import cut6 from "./assets/cut6.jpeg";
import cut7 from "./assets/cut7.jpeg";


const style = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Manrope:wght@300;400;500;600&display=swap');

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  :root {
    --gold: #B8922A;
    --gold-btn: #C9991F;
    --cream: #F4F0EA;
    --cream-2: #EDE8E0;
    --black: #111010;
    --dark: #1A1916;
    --text: #1A1916;
    --muted: #7A7163;
    --border: #DDD8CE;
    --white: #FFFFFF;
  }

  body {
    font-family: 'Manrope', sans-serif;
    background: var(--cream);
    color: var(--text);
    overflow-x: hidden;
  }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--cream); }
  ::-webkit-scrollbar-thumb { background: var(--gold); }

  /* ══ NAVBAR ══ */
 .navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  background: var(--cream);
  border-bottom: 1px solid var(--border);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
  height: 64px;
}
.navbar-left {
  flex-shrink: 0;
}

.navbar-links {
  flex: 1;
  justify-content: center;
}

.navbar-right {
  flex-shrink: 0;
}

  /* ══ HAMBURGER ══ */
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    z-index: 300;
    padding: 10px;
  }

  .hamburger span {
    width: 25px;
    height: 2px;
    background: var(--text);
    transition: all 0.3s ease;
    display: block;
  }

  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

/* MOBILE MENU */
@media (max-width: 1024px) {
  .hamburger {
    display: flex;
  }

  .navbar-links {
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    background: var(--cream);
    flex-direction: column;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    border-bottom: 1px solid var(--border);
  }

  .navbar-links.active {
    max-height: 400px;
  }

  .navbar-right {
    display: none;
  }

  .navbar-links a {
    padding: 16px 24px;
  }
}
  .navbar-left { display: flex; align-items: baseline; gap: 10px; text-decoration: none; }
  .navbar-brand { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; letter-spacing: 1px; color: var(--black); }
  .navbar-sub { font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: var(--gold); font-weight: 500; }
  .navbar-links { display: flex; gap: 32px; align-items: center; }
  .navbar-links a { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--text); text-decoration: none; font-weight: 500; opacity: 0.7; transition: opacity 0.2s, color 0.2s; }
  .navbar-links a:hover { opacity: 1; color: var(--gold); }
  .navbar-right { display: flex; align-items: center; gap: 24px; }
  .navbar-phone { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--text); text-decoration: none; font-weight: 500; opacity: 0.75; }
  .navbar-chat { display: flex; align-items: center; gap: 6px; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--text); text-decoration: none; font-weight: 500; opacity: 0.7; }
  .navbar-cta { background: var(--gold-btn); color: var(--white); padding: 10px 24px; font-size: 12px; font-weight: 600; letter-spacing: 1px; text-decoration: none; transition: background 0.2s; }
  .navbar-cta:hover { background: var(--gold); }

  /* ══ HERO ══ */
  .hero {
    min-height: 100vh; background: var(--black);
    background-image: url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1600&q=80');
    background-size: cover; background-position: center;
    position: relative; display: flex; align-items: center; padding-top: 64px;
  }
  .hero::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(to right, rgba(10,10,8,0.88) 55%, rgba(10,10,8,0.5) 100%);
  }
  .hero::after {
    content: ''; position: absolute; inset: 0;
    background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 80px 80px;
  }
  .hero-inner {
    position: relative; z-index: 2;
    max-width: 1280px; margin: 0 auto; width: 100%; padding: 80px 60px;
    display: grid; grid-template-columns: 1fr auto; gap: 60px; align-items: center;
  }
  .hero-eyebrow { display: flex; align-items: center; gap: 12px; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 24px; }
  .hero-eyebrow::before { content: ''; width: 32px; height: 1px; background: var(--gold); }
  .hero-headline { font-family: 'Playfair Display', serif; font-size: clamp(64px, 8vw, 96px); font-weight: 400; line-height: 1; color: var(--white); letter-spacing: -1px; margin-bottom: 28px; }
  .hero-headline .italic { font-style: italic; color: var(--gold); }
  .hero-body { font-size: 15px; color: rgba(255,255,255,0.55); line-height: 1.75; max-width: 440px; margin-bottom: 44px; font-weight: 300; }
  .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }
  .btn-gold { background: var(--gold-btn); color: var(--white); padding: 16px 32px; font-size: 13px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s, transform 0.15s; }
  .btn-gold:hover { background: var(--gold); transform: translateY(-2px); }
  .btn-outline-white { border: 1.5px solid rgba(255,255,255,0.35); color: var(--white); padding: 15px 28px; font-size: 13px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: border-color 0.2s; }
  .btn-outline-white:hover { border-color: white; }
  .hero-stats { display: flex; flex-direction: column; gap: 36px; border-left: 1px solid rgba(255,255,255,0.12); padding-left: 48px; align-self: center; }
  .stat-val { font-family: 'Playfair Display', serif; font-size: 52px; font-weight: 400; color: var(--gold); line-height: 1; }
  .stat-key { font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-top: 6px; font-weight: 500; }
  .hero-scroll { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); font-size: 9px; letter-spacing: 4px; text-transform: uppercase; color: rgba(255,255,255,0.3); z-index: 2; }

  /* ══ SHARED SECTION ══ */
  .sec { padding: 100px 60px; }
  .container { max-width: 1280px; margin: 0 auto; }
  .sec-label { display: flex; align-items: center; gap: 16px; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 20px; justify-content: center; }
  .sec-label::before, .sec-label::after { content: ''; height: 1px; background: var(--gold); width: 40px; }
  .sec-label-left { display: flex; align-items: center; gap: 12px; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 20px; }
  .sec-label-left::before { content: ''; height: 1px; background: var(--gold); width: 36px; }
  .sec-h { font-family: 'Playfair Display', serif; font-size: clamp(40px, 5vw, 62px); font-weight: 400; line-height: 1.1; letter-spacing: -0.5px; }
  .sec-h .italic { font-style: italic; color: var(--gold); }

  /* ══ GALLERY ══ */
  .gallery-sec { background: var(--cream); }
  .gallery-top { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 48px; gap: 32px; }
  .gallery-sub { font-size: 13px; color: var(--muted); max-width: 260px; line-height: 1.7; font-weight: 300; }
  .gallery-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; grid-template-rows: 260px 260px; gap: 10px; }
  .gallery-item { overflow: hidden; }
  .gallery-item:first-child { grid-row: span 2; }
  .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; display: block; }
  .gallery-item:hover img { transform: scale(1.05); }

  /* ══ SERVICES ══ */
  .services-sec { background: var(--cream-2); }
  .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); margin-top: 48px; }
  .svc-item { background: var(--cream); padding: 32px 28px; transition: background 0.2s; }
  .svc-item:hover { background: var(--white); }
  .svc-num { font-size: 10px; letter-spacing: 3px; color: var(--gold); font-weight: 600; margin-bottom: 10px; }
  .svc-name { font-family: 'Playfair Display', serif; font-size: 19px; font-weight: 400; color: var(--text); margin-bottom: 6px; }
  .svc-desc { font-size: 12px; color: var(--muted); line-height: 1.6; font-weight: 300; }

  /* ══ ABOUT ══ */
  .about-sec { background: var(--cream); }
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
  .about-img-wrap { position: relative; }
  .about-img-wrap img { width: 100%; height: 520px; object-fit: cover; display: block; }
  .about-badge { position: absolute; bottom: -20px; right: -20px; width: 108px; height: 108px; background: var(--gold-btn); display: flex; flex-direction: column; align-items: center; justify-content: center; }
  .about-badge-num { font-family: 'Playfair Display', serif; font-size: 38px; font-weight: 400; color: var(--white); line-height: 1; }
  .about-badge-txt { font-size: 8px; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.7); margin-top: 2px; }
  .about-body { font-size: 14px; color: var(--muted); line-height: 1.85; font-weight: 300; margin: 24px 0 40px; max-width: 440px; }
  .pillars { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); }
  .pillar { background: var(--cream-2); padding: 22px 18px; }
  .pillar-title { font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 6px; }
  .pillar-body { font-size: 11px; color: var(--muted); line-height: 1.6; font-weight: 300; }

  /* ══ PRICING — horizontal rows ══ */
  .pricing-sec { background: var(--cream-2); }
  .pricing-header { text-align: center; margin-bottom: 60px; }
  .pricing-list { max-width: 900px; margin: 0 auto; border-top: 1px solid var(--border); }
  .pricing-row { display: flex; align-items: center; justify-content: space-between; padding: 28px 0; border-bottom: 1px solid var(--border); gap: 20px; }
  .pricing-row-left { flex: 1; }
  .pricing-row-name { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 400; color: var(--text); }
  .pricing-row-desc { font-size: 12px; color: var(--muted); margin-top: 4px; font-weight: 300; }
  .pricing-row-price { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 700; color: var(--text); min-width: 120px; text-align: right; }
  .pricing-book-btn { background: var(--gold-btn); color: var(--white); padding: 10px 22px; font-size: 12px; font-weight: 600; text-decoration: none; margin-left: 24px; white-space: nowrap; transition: background 0.2s; }
  .pricing-book-btn:hover { background: var(--gold); }

  /* ══ TESTIMONIALS ══ */
  .testimonials-sec { background: var(--cream); }
  .test-top { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 48px; }
  .test-rating { font-family: 'Playfair Display', serif; font-size: 56px; font-weight: 400; color: var(--gold); display: flex; align-items: center; gap: 10px; }
  .test-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .test-card { background: var(--white); padding: 40px 36px; border: 1px solid var(--border); transition: border-color 0.2s, box-shadow 0.2s; }
  .test-card:hover { border-color: var(--gold); box-shadow: 0 4px 32px rgba(184,146,42,0.08); }
  .test-q-mark { font-family: 'Playfair Display', serif; font-size: 48px; line-height: 1; color: var(--gold); opacity: 0.5; margin-bottom: 20px; }
  .test-body { font-size: 15px; color: var(--text); line-height: 1.7; font-weight: 300; margin-bottom: 24px; }
  .test-divider { height: 1px; background: var(--border); margin-bottom: 20px; }
  .test-name { font-size: 13px; font-weight: 600; color: var(--text); }
  .test-role { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: var(--muted); margin-top: 2px; }

  /* ══ BOOKING ══ */
  .booking-sec { background: var(--dark); }
  .booking-inner { display: grid; grid-template-columns: 360px 1fr; gap: 80px; align-items: start; }
  .booking-label { font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 16px; display: flex; align-items: center; gap: 10px; }
  .booking-label::before { content: ''; width: 32px; height: 1px; background: var(--gold); }
  .booking-h { font-family: 'Playfair Display', serif; font-size: 52px; font-weight: 400; color: var(--white); line-height: 1.05; margin-bottom: 20px; }
  .booking-h .italic { font-style: italic; color: var(--gold); }
  .booking-sub { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.7; font-weight: 300; margin-bottom: 36px; }
  .booking-perks { display: flex; flex-direction: column; gap: 12px; }
  .booking-perk { display: flex; align-items: center; gap: 10px; font-size: 13px; color: rgba(255,255,255,0.55); font-weight: 300; }
  .booking-perk::before { content: '✓'; color: var(--gold); font-weight: 700; font-size: 14px; }
  .booking-panel { background: var(--cream); padding: 36px; }
  .form-section-title { font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: var(--muted); font-weight: 600; margin-bottom: 14px; }
  .svc-tiles { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; margin-bottom: 28px; }
  .svc-tile { border: 1.5px solid var(--border); background: var(--white); padding: 10px 14px; font-size: 12px; font-weight: 500; color: var(--text); cursor: pointer; transition: border-color 0.15s, background 0.15s; text-align: left; outline: none; font-family: 'Manrope', sans-serif; }
  .svc-tile:hover { border-color: var(--gold); }
  .svc-tile.active { border-color: var(--gold-btn); background: var(--gold-btn); color: var(--white); }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
  .form-col { display: flex; flex-direction: column; gap: 8px; }
  .form-col label { font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: var(--muted); font-weight: 600; }
  .form-input { border: 1.5px solid var(--border); background: var(--white); padding: 12px 14px; font-size: 13px; color: var(--text); font-family: 'Manrope', sans-serif; outline: none; width: 100%; transition: border-color 0.2s; }
  .form-input:focus { border-color: var(--gold); }
  .time-chips { display: flex; flex-wrap: wrap; gap: 6px; }
  .time-chip { border: 1.5px solid var(--border); background: var(--white); padding: 8px 12px; font-size: 11px; font-weight: 500; color: var(--text); cursor: pointer; transition: border-color 0.15s, background 0.15s; outline: none; font-family: 'Manrope', sans-serif; }
  .time-chip:hover { border-color: var(--gold); }
  .time-chip.active { border-color: var(--gold-btn); background: var(--gold-btn); color: var(--white); }
  .form-names { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0 20px; }
  .form-submit-btn { width: 100%; background: var(--gold-btn); color: var(--white); border: none; padding: 18px; font-size: 13px; font-weight: 600; font-family: 'Manrope', sans-serif; cursor: pointer; letter-spacing: 0.5px; transition: background 0.2s; }
  .form-submit-btn:hover { background: var(--gold); }

  /* ══ CONTACT ══ */
  .contact-sec { background: var(--cream-2); text-align: center; }
  .contact-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 40px; margin: 60px auto 48px; max-width: 760px; }
  .contact-icon { font-size: 20px; color: var(--gold); margin-bottom: 14px; }
  .contact-title { font-size: 16px; font-weight: 600; color: var(--text); margin-bottom: 8px; font-family: 'Playfair Display', serif; }
  .contact-body { font-size: 13px; color: var(--muted); line-height: 1.6; font-weight: 300; }
  .contact-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
  .btn-gold-outline { border: 1.5px solid var(--gold-btn); color: var(--text); padding: 14px 28px; font-size: 12px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s, color 0.2s; }
  .btn-gold-outline:hover { background: var(--gold-btn); color: var(--white); }

  /* ══ FOOTER ══ */
  .footer { background: var(--black); padding: 60px; }
  .footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1.2fr; gap: 60px; padding-bottom: 48px; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .footer-brand { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; color: var(--white); }
  .footer-brand span { font-size: 9px; letter-spacing: 4px; text-transform: uppercase; color: var(--gold); font-family: 'Manrope', sans-serif; font-weight: 500; margin-left: 8px; }
  .footer-tagline { font-size: 12px; color: rgba(255,255,255,0.35); line-height: 1.7; margin: 16px 0 24px; max-width: 280px; font-weight: 300; }
  .footer-btns { display: flex; gap: 10px; flex-wrap: wrap; }
  .footer-btn { border: 1px solid rgba(255,255,255,0.2); color: rgba(255,255,255,0.6); padding: 9px 16px; font-size: 10px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; transition: border-color 0.2s, color 0.2s; }
  .footer-btn:hover { border-color: var(--gold); color: var(--gold); }
  .footer-col-title { font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 20px; }
  .footer-links { display: flex; flex-direction: column; gap: 12px; }
  .footer-links a { font-size: 14px; color: rgba(255,255,255,0.5); text-decoration: none; font-weight: 300; transition: color 0.2s; }
  .footer-links a:hover { color: var(--white); }
  .footer-contact-list { display: flex; flex-direction: column; gap: 10px; }
  .footer-contact-list p { font-size: 13px; color: rgba(255,255,255,0.45); font-weight: 300; line-height: 1.5; }
  .footer-bottom { padding-top: 28px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
  .footer-copy { font-size: 11px; color: rgba(255,255,255,0.25); font-weight: 300; }
  .footer-right { font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: rgba(255,255,255,0.2); }

  /* ══ FLOATING ══ */
  .floating-wa { position: fixed; bottom: 80px; right: 28px; z-index: 300; width: 52px; height: 52px; border-radius: 50%; background: var(--gold-btn); color: var(--white); display: flex; align-items: center; justify-content: center; font-size: 22px; text-decoration: none; box-shadow: 0 4px 20px rgba(184,146,42,0.4); transition: transform 0.2s; }
  .floating-wa:hover { transform: scale(1.08); }
  .floating-tel { position: fixed; bottom: 20px; right: 28px; z-index: 300; width: 52px; height: 52px; border-radius: 50%; background: var(--cream); border: 1.5px solid var(--border); color: var(--text); display: flex; align-items: center; justify-content: center; font-size: 20px; text-decoration: none; box-shadow: 0 2px 12px rgba(0,0,0,0.08); transition: transform 0.2s; }
  .floating-tel:hover { transform: scale(1.08); }

  /* ══ RESPONSIVE ══ */
  @media (max-width: 1024px) {
    .sec { padding: 72px 32px; }
    .hero-inner { grid-template-columns: 1fr; padding: 80px 32px; }
    .hero-stats { flex-direction: row; border-left: none; border-top: 1px solid rgba(255,255,255,0.12); padding-left: 0; padding-top: 32px; }
    .about-grid, .booking-inner { grid-template-columns: 1fr; gap: 48px; }
    .gallery-grid { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
    .gallery-item:first-child { grid-row: span 1; }
    .footer-grid { grid-template-columns: 1fr; gap: 36px; }
    .test-grid { grid-template-columns: 1fr; }
    .contact-grid { grid-template-columns: 1fr; max-width: 300px; }
  }
  @media (max-width: 640px) {
    .navbar { padding: 0 20px; }
    .sec { padding: 60px 20px; }
    .services-grid, .svc-tiles { grid-template-columns: 1fr 1fr; }
    .form-row, .form-names { grid-template-columns: 1fr; }
    .booking-panel { padding: 20px; }
    .footer { padding: 40px 20px; }
    .hero-inner { padding: 80px 20px; }
    .pricing-row { flex-wrap: wrap; }
    .pricing-row-price { min-width: auto; text-align: left; }
  }

  /* ══ BOOKING COUNTER BANNER ══ */
.booking-counter-bar {
  background: var(--dark);
  border-bottom: 1px solid rgba(184,146,42,0.2);
  padding: 10px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
}
.booking-counter-bar-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  font-weight: 500;
}
.booking-counter-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gold);
  animation: pulse 1.8s ease-in-out infinite;
  flex-shrink: 0;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.7); }
}
.booking-counter-num {
  font-family: 'Playfair Display', serif;
  font-size: 15px;
  color: var(--gold);
  font-weight: 700;
}

/* ══ SUCCESS TOAST ══ */
.booking-toast {
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  background: var(--dark);
  border: 1px solid var(--gold);
  color: var(--white);
  padding: 16px 28px;
  font-size: 13px;
  font-weight: 500;
  z-index: 500;
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  white-space: nowrap;
}
.booking-toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
.booking-toast-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #25D366;
  flex-shrink: 0;
}

/* ══ INLINE BOOKING COUNT IN FORM ══ */
.booking-live-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(184,146,42,0.1);
  border: 1px solid rgba(184,146,42,0.25);
  padding: 6px 12px;
  font-size: 11px;
  color: var(--gold);
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
}
.booking-live-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
  animation: pulse 1.8s ease-in-out infinite;
}
`;



const serviceDescriptions = {
  "Adult Hair": "Precision cut, consultation, style finish",
  "Kids Cut": "Gentle, attentive service for young bosses",
  "Beard Trim": "Shape, line-up and moisturise",
  "Hair Coloring": "Colour consultation and full application",
  "Beard Dyeing": "Natural or fashion shades, expertly blended",
  "Hair & Beard Maintenance": "Full grooming session, head to chin",
  "Groom Package": "Premium all-in package for your big day",
  "Hair Shape-up": "Clean edges and defined silhouette",
  "Scalp Treatment": "Deep conditioning and scalp care",
  "Shampoo & Conditioner": "Cleanse, condition and blow-dry",
  "Hair Treatment": "Repair and strengthen with premium products",
  "Hair Dye": "Full colour or highlights",
  "Hair Wash": "Shampoo and conditioning rinse",
  "Shave": "Close shave with finishing balm",
  "Manicure": "Trim, file, buff and moisturise",
  "Pedicure": "Full foot care and finish",
  "Hot Towel Shave": "Classic ritual with hot lather and blade",
  "Curly Hair": "Curl-specific cut and styling",
  "Full Beard Dyeing": "Root to tip — complete beard colour",
};

export default function App() {
  const [service, setService] = useState("Adult Hair");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("09:00");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
const [bookingCount, setBookingCount] = useState(() => {
  return parseInt(localStorage.getItem("bosschigo_bookings") || "247", 10);
});
const [justBooked, setJustBooked] = useState(false);

  const services = [
    "Adult Hair","Kids Cut","Beard Trim","Hair Coloring","Beard Dyeing",
    "Hair & Beard Maintenance","Groom Package","Hair Shape-up","Scalp Treatment",
    "Shampoo & Conditioner","Hair Treatment","Hair Dye","Hair Wash","Shave",
    "Manicure","Pedicure","Hot Towel Shave","Curly Hair","Full Beard Dyeing",
  ];

  const pricing = [
    ["Adult Hair","₦15,000"],["Kids Cut","₦8,000"],["Beard Trim","₦5,000"],
    ["Hair Coloring","₦25,000"],["Beard Dyeing","₦10,000"],
    ["Hair & Beard Maintenance","₦20,000"],["Groom Package","₦25,000"],
    ["Hair Shape-up","₦5,000"],["Scalp Treatment","₦20,000"],
    ["Shampoo & Conditioner","₦10,000"],["Hair Treatment","₦25,000"],
    ["Hair Dye","₦20,000"],["Hair Wash","₦10,000"],["Shave","₦5,000"],
    ["Manicure","₦15,000"],["Pedicure","₦25,000"],
    ["Hot Towel Shave","₦10,000"],["Curly Hair","₦30,000"],["Full Beard Dyeing","₦20,000"],
  ];

  const galleryImages = [
    { src: cut1 },
    { src: cut2 },
    { src: cut3 },
    { src: cut4 },
    { src: cut5 },
    { src: cut6 },
    { src: cut7 },
  ];


  const times = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"];

  const handleBooking = () => {
    const newCount = bookingCount + 1;
    localStorage.setItem("bosschigo_bookings", newCount);
    setBookingCount(newCount);
    setJustBooked(true);
    setTimeout(() => setJustBooked(false), 5000);
  
    const message = `Hello BOSSCHIGO, my name is ${name}.\nI want to book:\nService: ${service}\nDate: ${date}\nTime: ${time}\nPhone: ${phone}\n\n📲 *Booked via BOSSCHIGO Website*`;
    window.open(`https://wa.me/2348101349997?text=${encodeURIComponent(message)}`, "_blank");
  };
  return (
    <>
      <style>{style}</style>

      {/* NAVBAR */}
      <nav className="navbar">
  <a href="#" className="navbar-left">
    <span className="navbar-brand">BOSSCHIGO</span>
    <span className="navbar-sub">Barbershop</span>
  </a>

  {/* HAMBURGER BUTTON */}
  <div className={`hamburger${menuOpen ? " active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
    <span></span>
    <span></span>
    <span></span>
  </div>

  {/* NAV LINKS */}
  <div className={`navbar-links${menuOpen ? " active" : ""}`}>
    <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
    <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
    <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
    <a href="#booking" onClick={() => setMenuOpen(false)}>Book</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
  </div>

  <div className="navbar-right">
    <a href="tel:+2348101349997" className="navbar-phone">📞 0810 134 9997</a>
    <a href="#booking" className="navbar-chat">💬 Chat Now</a>
    <a href="#booking" className="navbar-cta">Book Now</a>
  </div>
</nav>

{/* BOOKING COUNTER BAR */}
<div className="booking-counter-bar" style={{ marginTop: "64px" }}>
        <div className="booking-counter-bar-item">
          <div className="booking-counter-pulse"></div>
          <span><span className="booking-counter-num">{bookingCount}</span> bookings made from this site</span>
        </div>
        <div className="booking-counter-bar-item">
          <span>💬</span>
          <span>All bookings confirmed via <strong style={{ color: "#25D366" }}>WhatsApp</strong></span>
        </div>
        <div className="booking-counter-bar-item">
          <span>⚡</span>
          <span>Instant confirmation</span>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">Precision Grooming · Luxury Experience</div>
            <h1 className="hero-headline">
              Precision.<br />Style.<br /><span className="italic">Luxury.</span>
            </h1>
            <p className="hero-body">
              BOSSCHIGO Barbershop crafts every cut with the discipline of a tailor and the eye of an artist. Experience grooming engineered for men who lead.
            </p>
            <div className="hero-btns">
              <a href="#booking" className="btn-gold">Book Your Chair →</a>
              <a href="tel:+2348101349997" className="btn-outline-white">📞 Call Us</a>
            </div>
          </div>
          <div className="hero-stats">
            <div><div className="stat-val">12+</div><div className="stat-key">Years of mastery</div></div>
            <div><div className="stat-val">8K+</div><div className="stat-key">Chairs filled</div></div>
            <div><div className="stat-val">5.0</div><div className="stat-key">Average rating</div></div>
          </div>
        </div>
        <div className="hero-scroll">Scroll to explore</div>
      </section>

      {/* GALLERY */}
      <section className="sec gallery-sec">
        <div className="container">
          <div className="gallery-top">
            <div>
              <div className="sec-label-left"><span>Gallery</span></div>
              <h2 className="sec-h">Crafted for the<br /><span className="italic">modern</span> gentleman.</h2>
            </div>
            <p className="gallery-sub">Every chair, every cut — a testament to the craft we've built over a decade in Lagos.</p>
          </div>
          <div className="gallery-grid">
          {galleryImages.map((img, i) => (
  <div key={i} className="gallery-item">
    <img src={img.src} alt={`Gallery ${i + 1}`} />
  </div>
))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="sec services-sec">
        <div className="container">
          <div className="sec-label-left"><span>Our Services</span></div>
          <h2 className="sec-h">Premium grooming<br /><span className="italic">tailored</span> for you.</h2>
          <div className="services-grid">
            {services.map((item, i) => (
              <div key={i} className="svc-item">
                <div className="svc-num">{(i + 1).toString().padStart(2, "0")}</div>
                <div className="svc-name">{item}</div>
                <div className="svc-desc">{serviceDescriptions[item]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="sec about-sec">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap">
              <img src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1200&auto=format&fit=crop" alt="About BOSSCHIGO" />
              <div className="about-badge">
                <span className="about-badge-num">12</span>
                <span className="about-badge-txt">Years</span>
              </div>
            </div>
            <div>
              <div className="sec-label-left"><span>About BOSSCHIGO</span></div>
              <h2 className="sec-h">Where the chair<br />becomes a <span className="italic">throne.</span></h2>
              <p className="about-body">
                BOSSCHIGO Barbershop was founded on a single belief: a great cut changes how a man carries himself. We've built a sanctuary where craft, conversation and confidence are sharpened in equal measure.
              </p>
              <div className="pillars">
                {[["Mastery","Trained, certified, obsessed."],["Hygiene","Sterilised tools, every chair."],["Hospitality","Espresso, conversation, calm."]].map(([t, b], i) => (
                  <div key={i} className="pillar">
                    <div className="pillar-title">{t}</div>
                    <div className="pillar-body">{b}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="sec pricing-sec">
        <div className="container">
          <div className="pricing-header">
            <div className="sec-label"><span>Pricing</span></div>
            <h2 className="sec-h">Honest pricing.<br /><span className="italic">Premium service.</span></h2>
          </div>
          <div className="pricing-list">
            {pricing.map(([title, price], i) => (
              <div key={i} className="pricing-row">
                <div className="pricing-row-left">
                  <div className="pricing-row-name">{title}</div>
                  <div className="pricing-row-desc">{serviceDescriptions[title]}</div>
                </div>
                <div className="pricing-row-price">{price}</div>
                <a href="#booking" className="pricing-book-btn">Book</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec testimonials-sec">
        <div className="container">
          <div className="test-top">
            <div>
              <div className="sec-label-left"><span>Testimonials</span></div>
              <h2 className="sec-h">Words from the<br /><span className="italic">chair.</span></h2>
            </div>
            <div className="test-rating">5.0 ★</div>
          </div>
          <div className="test-grid">
            {[
              ["The most precise haircut I've ever had. BOSSCHIGO turned my chair time into a ritual.","Tunde A.","Executive, Lagos"],
              ["Walked in tired, walked out unstoppable. The hot-towel shave is worth every naira.","Ifeanyi O.","Entrepreneur"],
              ["Clean space, sharp tools, sharper barbers. My only barbershop now.","Chidi M.","Creative Director"],
              ["They listen first, then cut. That's why every visit looks like the one I imagined.","Segun B.","Architect, Lagos"],
            ].map(([review, auth, role], i) => (
              <div key={i} className="test-card">
                <div className="test-q-mark">"</div>
                <p className="test-body">{review}</p>
                <div className="test-divider" />
                <div className="test-name">{auth}</div>
                <div className="test-role">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="sec booking-sec">
        <div className="container">
          <div className="booking-inner">
            <div>
              <div className="booking-label">Book Your Chair</div>
              <h2 className="booking-h">Reserve your<br /><span className="italic">moment.</span></h2>
              <p className="booking-sub">Pick your service, date and time. We'll confirm instantly via WhatsApp.</p>
              <div className="booking-perks">
                <div className="booking-perk">Instant WhatsApp confirmation</div>
                <div className="booking-perk">Punctual, no-wait policy</div>
                <div className="booking-perk">Flexible rescheduling</div>
              </div>
            </div>

            <div className="booking-panel">
              <div className="booking-live-badge">
                <div className="booking-live-dot"></div>
                {bookingCount} customers booked via this site
              </div>
              <div className="form-section-title">Service</div>
              <div className="svc-tiles">
                {services.map((item) => (
                  <button key={item} className={`svc-tile${service === item ? " active" : ""}`} onClick={() => setService(item)}>
                    {item}
                  </button>
                ))}
              </div>

              <div className="form-row">
                <div className="form-col">
                  <label>Date</label>
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="form-input" />
                </div>
                <div className="form-col">
                  <label>Time</label>
                  <div className="time-chips">
                    {times.map((t) => (
                      <button key={t} className={`time-chip${time === t ? " active" : ""}`} onClick={() => setTime(t)}>{t}</button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="form-names">
                <div className="form-col">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
                </div>
                <div className="form-col">
                  <label>Phone</label>
                  <input type="tel" placeholder="+234..." value={phone} onChange={(e) => setPhone(e.target.value)} className="form-input" />
                </div>
              </div>

              <button onClick={handleBooking} className="form-submit-btn">
                Confirm Booking via WhatsApp
              </button>
            </div>
          </div>
        </div>
        <div className={`booking-toast${justBooked ? " show" : ""}`}>
          <div className="booking-toast-dot"></div>
          ✅ Booking sent via WhatsApp — BOSSCHIGO will confirm shortly!
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="sec contact-sec">
        <div className="container">
          <div className="sec-label"><span>Get In Touch</span></div>
          <h2 className="sec-h">Visit. Call. <span className="italic">Chat.</span></h2>
          <div className="contact-grid">
            {[
              ["📍","Visit","BOSSCHIGO Barbershop\nLagos, Nigeria"],
              ["🕒","Hours","Mon – Sat: 9am – 8pm\nSunday: 12pm – 6pm"],
              ["✉️","Email","hello@bosschigo.com"],
            ].map(([icon, title, body], i) => (
              <div key={i}>
                <div className="contact-icon">{icon}</div>
                <div className="contact-title">{title}</div>
                <div className="contact-body">{body.split("\n").map((l, j) => <span key={j}>{l}<br /></span>)}</div>
              </div>
            ))}
          </div>
        <div className="contact-btns">
            <a href="https://wa.me/2348101349997" className="btn-gold" target="_blank" rel="noreferrer">💬 Chat on WhatsApp</a>
            <a href="tel:+2348101349997" className="btn-gold-outline">📞 +234 810 134 9997</a>
          </div>
          <div style={{ marginTop: "48px", border: "1px solid var(--border)", overflow: "hidden", lineHeight: 0 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15853.375846874325!2d3.3460606!3d6.604108999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9229c06efb83%3A0x9537f84505b00dc5!2zQk9TU0NISUdPIChCQVJCRVIpIFNIT1Ag8J-SiPCfkojwn5KI!5e0!3m2!1sen!2sng!4v1778157648127!5m2!1sen!2sng"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BOSSCHIGO Barbershop Location"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">BOSSCHIGO <span>Barbershop</span></div>
              <p className="footer-tagline">Precision grooming and luxury service crafted for the modern gentleman.</p>
              <div className="footer-btns">
                <a href="https://wa.me/2348101349997" className="footer-btn" target="_blank" rel="noreferrer">💬 WhatsApp</a>
                <a href="tel:+2348101349997" className="footer-btn">📞 Call</a>
              </div>
            </div>
            <div>
              <div className="footer-col-title">Quick Links</div>
              <div className="footer-links">
                <a href="#">Home</a><a href="#services">Services</a><a href="#about">About</a>
                <a href="#pricing">Pricing</a><a href="#booking">Book</a><a href="#contact">Contact</a>
              </div>
            </div>
            <div>
              <div className="footer-col-title">Hours &amp; Contact</div>
              <div className="footer-contact-list">
                <p>Mon – Sat: 9am – 8pm</p>
                <p>Sunday: 12pm – 6pm</p>
                <p style={{ marginTop: 8 }}>+234 810 134 9997</p>
                <p>hello@bosschigo.com</p>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-copy">© 2026 BOSSCHIGO Barbershop. All rights reserved.</span>
            <span className="footer-right">Crafted with Precision.</span>
          </div>
        </div>
      </footer>

      {/* FLOATING */}
      <a href="https://wa.me/2348101349997" className="floating-wa" target="_blank" rel="noreferrer">💬</a>
      <a href="tel:+2348101349997" className="floating-tel">📞</a>
    </>
  );
}