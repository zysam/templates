import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
function App() {
  
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">React Tailwind v4</h1>
      <p className="text-lg text-gray-500">This is a starter project for React with Tailwind v4 and Shadcn/UI 2.6.0</p>
      <Button>Click me</Button>
    </div>
  );
}

export default App;