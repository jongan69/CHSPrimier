import { useEffect, useState } from 'react';

export const useStaggeredAnimation = (
  elementCount: number,
  staggerDelay: number = 100,
  initialDelay: number = 200
) => {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    // Animate elements one by one with staggered delays
    for (let i = 0; i < elementCount; i++) {
      const timer = setTimeout(() => {
        setVisibleElements(prev => [...prev, i]);
      }, initialDelay + (i * staggerDelay));
      
      timers.push(timer);
    }

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [elementCount, staggerDelay, initialDelay]);

  const isVisible = (index: number) => visibleElements.includes(index);

  return { isVisible };
};

export default useStaggeredAnimation; 