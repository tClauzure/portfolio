'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Conatct() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id='contact' className='mx-auto max-w-2xl px-6 py-24'>
      {/* Accroche */}
      <h2
        className='mb-4 font-mono text-3xl font-semibold'
        style={{ color: 'var(--text-primary)' }}
      >
        Travaillons ensemble
      </h2>
      <p
        className='mb-10 font-mono text-sm leading-relaxed'
        style={{ color: 'var(--text-muted)' }}
      >
        Une idée de projet, une opportunité ou juste envie d'échanger ?
        <br />
        Envoie-moi un message, je vous répondrai rapidement.
      </p>

      {/* Formulaire */}
      <div className='flex flex-col gap-4'>
        <input
          id='input_name'
          type='text'
          placeholder='Ton nom'
          value={name}
          onChange={e => setName(e.target.value)}
          className='input'
        />

        <input
          id='input_email'
          type='email'
          placeholder='Ton email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          className='input'
        />

        <textarea
          id='input_message'
          placeholder='Ton message'
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows={6}
          className='input'
          style={{ resize: 'none' }}
        />

        {/* Bouton envoi */}
        <button
          onClick={handleSubmit}
          disabled={status === 'loading'}
          className='rounded-full px-6 py-3 font-mono text-sm transition-all duration-200'
          style={{
            border: '1px solid var(--text-accent)',
            color:
              status === 'loading' ? 'var(--text-muted)' : 'var(--text-accent)',
            borderColor:
              status === 'loading' ? 'var(--text-muted)' : 'var(--text-accent)',
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          }}
          onMouseEnter={e => {
            if (status === 'loading') return;
            e.currentTarget.style.backgroundColor = 'var(--text-accent)';
            e.currentTarget.style.color = 'var(--background)';
            e.currentTarget.style.boxShadow =
              '0 0 20px rgba(110, 231, 183, 0.3)';
          }}
          onMouseLeave={e => {
            if (status === 'loading') return;
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--text-accent)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {status === 'loading' ? 'Envoi en cours...' : 'Envoyer'}
        </button>

        {/* Feedback */}
        {status === 'success' && (
          <p
            className='text-center font-mono text-sm'
            style={{ color: 'var(--text-accent)' }}
          >
            ✓ Message envoyé, je vous répondrai bientôt !
          </p>
        )}
        {status === 'error' && (
          <p
            className='text-center font-mono text-sm'
            style={{ color: '#f87171' }}
          >
            ✗ Merci de remplir tous les champs.
          </p>
        )}
      </div>
    </section>
  );
}
