import heroImage from "@/assets/hero-travel.jpg";

const HeroSection = ({ onExplore }: { onExplore: () => void }) => {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      <img
        src={heroImage}
        alt="Taj Mahal at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <p className="text-primary-foreground/80 font-body text-sm uppercase tracking-[0.3em] mb-4 animate-fade-up">
          Discover Incredible India
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Your Journey <br />
          <span className="text-gradient">Starts Here</span>
        </h1>
        <p className="text-primary-foreground/70 font-body text-lg md:text-xl max-w-2xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Explore the top tourist states, discover must-visit places, find the best hotels, and plan your perfect trip.
        </p>
        <button
          onClick={onExplore}
          className="bg-gradient-hero text-primary-foreground font-body font-semibold px-8 py-4 rounded-full text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Explore States ↓
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
