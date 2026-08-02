/* ============================================================
   CONFIG, shared constants (mirrors the CV project's scripts/config.js)
   ============================================================ */

export const THEME_KEY = 'portfolio-theme';
export const THEME_DARK = 'dark';
export const THEME_LIGHT = 'light';

export const LANG_KEY = 'portfolio-lang';

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrejlned';
export const TURNSTILE_SITEKEY = '0x4AAAAAADlq-gSDTCI_ln-y';
export const CHECK_EMAIL_DOMAIN = true;

/* Google Apps Script backend. It is the component that verifies the
   Turnstile token and rate-limits; the localStorage cooldown in the
   booking modal is convenience, not a security control. */
export const BOOKING_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxS_WgJtVPPPp14l4xXVL6U5C4yYDYhxuVVMhRjkX67QzDi9gRw1_1PPld5ujsi61Oq/exec';
