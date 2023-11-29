import AboutMe from '@/app/ui/About/AboutMe';
import { NavBar } from '@/app/ui/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <div className='home-gradient bg-cover bg-center bg-no-repeat'>
          <section>
            <AboutMe />
          </section>
        </div>
      </main>
    </>
  );
}
