import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MobileHeaderCatto = () => {
  return (
    <>
      <header className="w-full bg-white p-6 dark:bg-gray-900">
        <h1 className='text-white'>Catto Header</h1>
        {/* <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <h1 className='text-white'>Catto Header</h1>
        </div> */}
      </header>
    </>
  );
};

export default MobileHeaderCatto;
