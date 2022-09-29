import { NextPage } from 'next';
import { HomePageLayout } from '../components/layouts';
import { Box } from '../components/styles';
import { Faq, Features1, Features2, Features3, Footer, Hero, Navbar, Testimonials, Trusted } from '../components/ui';

const HomePage: NextPage = () => {

  return (
    <HomePageLayout>
      <Navbar />
      <Box as='main'>
        <Hero />
        <Trusted />
        <Features1 />
        <Features2 />
        <Features3 />
        <Testimonials />
        <Faq />
        <Footer />
      </Box>
    </HomePageLayout>
  )
}

export default HomePage;