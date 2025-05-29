import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/#features' },
    { name: 'Examples', path: '/#examples' },
    { name: 'FAQ', path: '/#faq' },
  ];

  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              JSON<span className="text-primary">Toolbox</span>
            </span>
          </Link>
          <nav className="hidden md:flex ml-10 space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  location.pathname === item.path || 
                  (location.pathname.includes(item.path) && item.path !== '/')
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className="text-muted-foreground hover:text-foreground"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button asChild variant="outline" size="sm" className="ml-2">
            <a href="#try-it-now" className="hidden sm:inline-flex">
              Try It Now
            </a>
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden mt-4">
        <div className="flex overflow-x-auto pb-2 space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'whitespace-nowrap px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
                location.pathname === item.path || 
                (location.pathname.includes(item.path) && item.path !== '/')
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
