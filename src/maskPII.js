const emailRe  = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
const phoneRe  = /(?:\+?\d{1,3}[\s.-]?)?(?:\(\d{1,4}\)[\s.-]?)?\d[\d\s.-]{7,}\d/g;
const ssnRe   = /\b\d{1,2}\s?\d{2}\s?\d{2}\s?\d{2,3}\s?\d{3}\s?\d{3}\s?\d{2}\b/g;
const dateRe  = /\b\d{1,2}[\/\-.]\d{1,2}[\/\-.]\d{2,4}\b/g;

function maskPII(text) {
  return text
    .replace(emailRe,  '[email protégé]')
    .replace(ssnRe,    '[numéro SS protégé]')
    .replace(phoneRe,  '[téléphone protégé]')
    .replace(dateRe,   '[date protégée]');
}

export { maskPII };