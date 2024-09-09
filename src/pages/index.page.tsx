import Head from 'next/head';
import AboutUs from '../components/AboutUs/AboutUs';
import ContactUs from '../components/ContactUs';
import Events from '../components/Events/Events';
import MissionPillars from '../components/MissionPillars/MissionPillars';
import HeroHeader from '../components/HeroHeader';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Reactjs Developer Community in Kenya</title>
        <meta
          name="description"
          content="React js Developer Community Kenya is a community of react js developers using react related technologies in the Kenyan software development eco system."
          key="desc"
        />
        <meta
          name="title"
          content="Reactjs Developer Community in Kenya"
          key="title"
        />
      </Head>
      <main className="">
        <HeroHeader />
        <div className="flex flex-col py-12 bg-[#caf0f8]">
          <AboutUs />
        </div>
        <MissionPillars />
        <Events />
        <ContactUs />
      </main>
    </div>
  );
}
