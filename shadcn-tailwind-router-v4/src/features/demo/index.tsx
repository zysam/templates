import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { AppInfo } from '@/components/app-info';

function Demo() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 px-4">
      <div className="max-w-3xl w-full space-y-12 text-center">
        {/* Header Section */}
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Modern Stack
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Production Ready
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A minimal starter template with React, Tailwind CSS v4, Shadcn/UI & TanStack Router
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          {[
            { name: 'React 19', icon: '⚛️' },
            { name: 'Tailwind v4', icon: '🎨' },
            { name: 'Shadcn/UI', icon: '✨' },
            { name: 'TanStack', icon: '🚀' }
          ].map((tech) => (
            <div key={tech.name} className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-2">{tech.icon}</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</div>
            </div>
          ))}
        </div>

        {/* Interactive Demo */}
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Interactive Demo</p>
            <div className="space-y-4">
              <Button 
                onClick={() => setCount(count + 1)} 
                size="lg"
                className="w-full sm:w-auto"
              >
                Click Counter
              </Button>
              <div className="text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {count}
              </div>
              {count > 0 && (
                <p className="text-sm text-gray-500 dark:text-gray-400 animate-in fade-in duration-500">
                  {count === 1 ? 'Great start!' : count < 5 ? 'Keep going!' : count < 10 ? 'You\'re on fire! 🔥' : 'Amazing! 🎉'}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 animate-in fade-in duration-1000 delay-500">
          <AppInfo />
        </div>
      </div>
    </div>
  );
}

export default Demo;