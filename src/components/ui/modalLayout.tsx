/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { useRouter } from 'next/navigation';

import './modalLayout.css';
import { useEffect } from 'react';

export default function ModalLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const $body = document.querySelector('body');
    $body?.classList.add('overflow-hidden');

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        router.back();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      $body?.classList.remove('overflow-hidden');
    };
  }, [router]);

  return (
    <div
      role="button"
      tabIndex={0} // Add tabIndex attribute to make the element focusable
      onClick={router.back}
      id="backgroundModal"
      className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 cursor-default"
    >
      <div
        role="button"
        id="modal"
        tabIndex={0}
        onClick={(e) => e.stopPropagation()}
        className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg cursor-default"
      >

        {children}
      </div>
    </div>
  );
}
