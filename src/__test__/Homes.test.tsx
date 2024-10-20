// src/math.ts

// Implementación de la función
export function add(a: number, b: number): number {
    return a + b;
  }
  
  // Pruebas
  if (require.main === module) {
    const { test, expect } = require('@jest/globals');
  
    test('sums two numbers correctly', () => {
      expect(add(1, 2)).toBe(3);
      expect(add(-1, -1)).toBe(-2);
      expect(add(0, 0)).toBe(0);
    });
  
    // Ejecutar Jest programáticamente (esto es opcional)
    (async () => {
      const { runCLI } = require('jest');
      await runCLI({ _: ['src/math.ts'] }, [process.cwd()]);
    })();
  }
  