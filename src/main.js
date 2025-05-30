import { maskPII } from './maskPII.js';

document.getElementById('scan').addEventListener('click', () => {
  const txt = document.getElementById('input').value;
  document.getElementById('output').textContent = maskPII(txt);
}); 