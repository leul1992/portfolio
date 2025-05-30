'use client';

import { useTheme } from 'next-themes';
import { Button } from './button';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

export const ThemeToggle = ({ className }) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      className={className}
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      {resolvedTheme === 'dark' ? (
        <BsSunFill className="h-5 w-5" />
      ) : (
        <BsMoonFill className="h-5 w-5" color='#33333' />
      )}
    </Button>
  );
};
