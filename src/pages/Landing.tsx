import HomeFeed from '../components/ui/landing/HomeFeed';
import SliderComponent from '../components/ui/landing/Slider';

function Landing() {
  return (
    <div className="w-full space-y-6">
      <SliderComponent />
      <HomeFeed />
    </div>

  );
}

export default Landing;
