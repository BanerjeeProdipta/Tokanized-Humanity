import HeroSection from '../components/ui/landing/HeroSection';
import HomeFeed from '../components/ui/landing/HomeFeed';
import HowItWorks from '../components/ui/landing/HowItWorks';
import SliderComponent from '../components/ui/landing/Slider';

function Landing() {
  return (
    <div className="w-full space-y-24">
      <HeroSection />
      <SliderComponent />
      <HowItWorks />
      <HomeFeed />
    </div>

  );
}

export default Landing;
