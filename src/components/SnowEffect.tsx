import React, { useMemo } from 'react';

interface SnowflakeProps {
  enabled: boolean;
}

export const SnowEffect: React.FC<SnowflakeProps> = ({ enabled }) => {
  const flakes = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      id: i,
      left: `${(i * 4.16) + (i % 3) * 0.5}%`,
      delay: `${(i * 0.45) % 6}s`,
      duration: `${7 + (i % 5) * 2}s`,
      size: i % 4 === 0 ? 'text-xs' : i % 3 === 0 ? 'text-sm' : 'text-[10px]',
      opacity: 0.25 + (i % 4) * 0.15,
      char: i % 5 === 0 ? '❄' : i % 3 === 0 ? '✨' : '❅'
    }));
  }, []);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className={`snow-particle select-none text-amber-100/40 ${flake.size}`}
          style={{
            left: flake.left,
            animationDelay: flake.delay,
            animationDuration: flake.duration,
            opacity: flake.opacity,
          }}
        >
          {flake.char}
        </span>
      ))}
    </div>
  );
};
