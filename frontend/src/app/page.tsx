import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import HeroSection from '@/components/ui/landing/HeroSection';

export default async function HomePage() {
  const user = await currentUser();

  if (user) {
    redirect('/dashboard');
  }

  return (
    <main className="min-h-screen bg-[#f3f3f1]">
      <HeroSection />
    </main>
  );
}