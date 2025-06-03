import { describe, expect, it } from 'vitest';
import { maskPII } from '../src/maskPII.js';

describe('maskPII', () => {
  it('mask e-mail', () => {
    expect(maskPII('Contact : a@b.com')).toBe('Contact : [email protégé]');
  });
  it('mask phone', () => {
    expect(maskPII('tel 06 12 34 56 78')).toMatch('[téléphone protégé]');
  });
  it('mask SS', () => {
    expect(maskPII('NIR 1 84 12 75 123 456 97')).toMatch('[numéro SS protégé]');
  });
  it('mask date', () => {
    expect(maskPII('Rdv 12/05/2025')).toMatch('[date protégée]');
  });
  it('mask date textuelle', () => {
    expect(maskPII('Rdv le 12 janvier')).toMatch('[date protégée]');
    expect(maskPII('Rdv le 12 janvier 2025')).toMatch('[date protégée]');
  });
}); 