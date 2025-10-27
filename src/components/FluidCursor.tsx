'use client';
import { useEffect } from 'react';

import useFluidCursor from '@/hooks/use-FluidCursor';

const FluidCursor = () => {
  useEffect(() => {
    useFluidCursor();
  }, []);

  return (
    <div className="fixed top-0 left-0 z-0 w-full h-full min-h-screen">
      <canvas 
        id="fluid" 
        className="absolute top-0 left-0 w-full h-full min-h-screen" 
        style={{ 
          width: '100vw', 
          height: '100vh',
          top: 0,
          left: 0
        }} 
      />
    </div>
  );
};
export default FluidCursor;