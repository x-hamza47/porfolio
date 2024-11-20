import { SpotLight } from './ui/Spotlight'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <SpotLight className="-top-40 -left-10 md:-left-32 md:-top-10 h-screen" />
        <SpotLight
          className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
        <SpotLight className="-top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.3] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center flex-col items-center relative my-20 w-[100vw]">
        <div>
          <h2 className='uppercase tracking-widest text-blue-100 max-w-80 text-xs text-center'>Designing Tomorrow’s Digital Landscapes</h2>
        </div>
      </div>
    </div>
  );
}

export default Hero