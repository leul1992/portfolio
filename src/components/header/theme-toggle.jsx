'use client';

import { useTheme } from 'next-themes';
import { Button } from './button';

export const ThemeToggle = ({ className }) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className={className}
      variant="secondary"
      size="icon"
      aria-label="theme toggle"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <div className={`${theme === 'dark' ? 'hidden' : 'block'}`}>light</div>
      <div className={`${theme === 'dark' ? 'block' : 'hidden'}`}>dark</div>
    </Button>
  );
};
