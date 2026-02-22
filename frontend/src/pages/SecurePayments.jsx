import React from 'react';
import '../styles/SecurePayments.css';

const paymentOptions = [
  {
    name: 'Cow Abduction Credits',
    icon: '🐄',
    details: 'Trade certified bovine-abduction vouchers for down payments on frontier habitats.',
  },
  {
    name: 'Pass-The-Probe Initiative',
    icon: '🛸',
    details: 'Community-backed relay program where each member funds the next colonist in line.',
  },
  {
    name: 'Moon Cheese Escrow',
    icon: '🧀',
    details: 'Deposit lunar dairy reserves into neutral escrow until interstellar title transfer clears.',
  },
  {
    name: 'Tractor Beam Installments',
    icon: '🔦',
    details: 'Low-gravity monthly installments automatically collected by orbital beam sync.',
  },
];

function SecurePayments() {
  return (
    <div className="secure-payments-page">
      <section className="secure-payments-hero">
        <h1>Secure Payments</h1>
        <p>Trusted and totally intergalactic methods to close deals across the universe.</p>
      </section>

      <section className="payments-grid">
        {paymentOptions.map((option) => (
          <article className="payment-card" key={option.name}>
            <span className="payment-icon">{option.icon}</span>
            <h3>{option.name}</h3>
            <p>{option.details}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default SecurePayments;
