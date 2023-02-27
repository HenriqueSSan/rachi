import { Header } from './components/Header';
import { Hero } from './components/Hero';

export function App() {
  return (
    <>
      <Header />
      <main className="mt-[70px]">
        <Hero />
      </main>
    </>
  );
}
