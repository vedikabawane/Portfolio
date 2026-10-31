import React, { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';

export default function InteractiveCalculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [resetNext, setResetNext] = useState(false);

  const handleDigit = (digit) => {
    if (display === '0' || resetNext) {
      setDisplay(digit);
      setResetNext(false);
    } else {
      if (display.length < 12) {
        setDisplay(display + digit);
      }
    }
  };

  const handleDot = () => {
    if (resetNext) {
      setDisplay('0.');
      setResetNext(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperator = (op) => {
    setEquation(`${display} ${op} `);
    setResetNext(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setResetNext(false);
  };

  const handleDelete = () => {
    if (display.length > 1 && !resetNext) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const handleCalculate = () => {
    if (!equation) return;
    try {
      const fullExpr = equation + display;
      // Sanitize input to only valid mathematical characters
      const sanitized = fullExpr.replace(/×/g, '*').replace(/÷/g, '/');
      if (!/^[0-9+\-*/. ()]+$/.test(sanitized)) {
        setDisplay('Error');
        return;
      }
      // Safe evaluation using Function
      const result = Function(`'use strict'; return (${sanitized})`)();
      const rounded = Math.round(result * 10000000) / 10000000;
      setDisplay(String(rounded));
      setEquation(fullExpr + ' =');
      setResetNext(true);
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="calc-embedded-wrapper">
      <div className="calc-title-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CalcIcon size={18} color="var(--accent-mint)" />
          <h4 style={{ fontSize: '0.95rem', color: '#ffffff' }}>Live Demo: CodSoft Calculator Project</h4>
        </div>
        <span className="badge badge-mint">Interactive Mini-App</span>
      </div>

      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
        Try the interactive calculator developed during the CodSoft Web Development Internship. Fully operational in your browser!
      </p>

      <div className="calc-widget">
        <div className="calc-display">
          <div className="calc-history">{equation}</div>
          <div className="calc-screen">{display}</div>
        </div>

        <div className="calc-grid">
          <button onClick={handleClear} className="calc-btn action" title="Clear all">AC</button>
          <button onClick={handleDelete} className="calc-btn action" title="Backspace">⌫</button>
          <button onClick={() => handleOperator('%')} className="calc-btn op">%</button>
          <button onClick={() => handleOperator('÷')} className="calc-btn op">÷</button>

          <button onClick={() => handleDigit('7')} className="calc-btn">7</button>
          <button onClick={() => handleDigit('8')} className="calc-btn">8</button>
          <button onClick={() => handleDigit('9')} className="calc-btn">9</button>
          <button onClick={() => handleOperator('×')} className="calc-btn op">×</button>

          <button onClick={() => handleDigit('4')} className="calc-btn">4</button>
          <button onClick={() => handleDigit('5')} className="calc-btn">5</button>
          <button onClick={() => handleDigit('6')} className="calc-btn">6</button>
          <button onClick={() => handleOperator('-')} className="calc-btn op">−</button>

          <button onClick={() => handleDigit('1')} className="calc-btn">1</button>
          <button onClick={() => handleDigit('2')} className="calc-btn">2</button>
          <button onClick={() => handleDigit('3')} className="calc-btn">3</button>
          <button onClick={() => handleOperator('+')} className="calc-btn op">+</button>

          <button onClick={() => handleDigit('0')} className="calc-btn">0</button>
          <button onClick={handleDot} className="calc-btn">.</button>
          <button onClick={handleCalculate} className="calc-btn equals">=</button>
        </div>
      </div>
    </div>
  );
}
