const emailRe  = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
const phoneRe  = /(?:\+?\d{1,3}[\s.-]?)?(?:\(\d{1,4}\)[\s.-]?)?\d[\d\s.-]{7,}\d/g;

function maskPII(text) {
  return text
    .replace(emailRe,  '[email protégé]')
    .replace(phoneRe,  '[téléphone protégé]');
}

document.getElementById('scan').addEventListener('click', () => {
  const txt = document.getElementById('input').value;
  document.getElementById('output').textContent = maskPII(txt);
}); 