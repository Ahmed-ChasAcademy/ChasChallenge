'use client'
import { useState } from 'react';
import TabbedModal from './Multi/MultiTab';

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Open Modal Button */}
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      {/* Tabbed Modal */}
      <TabbedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
