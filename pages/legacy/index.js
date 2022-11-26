import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../../sections';
import { Footer, Navbar } from '../../components';

const Home = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
    <Footer />
  </div>
);

export default Home;
