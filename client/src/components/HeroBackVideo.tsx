import heroVideo from '../assets/video/massage-video.mp4';

export function HeroBackVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        className="h-10/12 w-full object-cover"
      >
        <source src="video/massage-video.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-black opacity-30" />
    </div>
  );
}
