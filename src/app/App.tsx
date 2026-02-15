import { RouterProvider } from 'react-router';
import { router } from '@/app/routes';
import { Toaster } from '@/app/components/ui/sonner';

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
