import { useState, useRef } from "react";
import { states } from "@/data/travelData";
import HeroSection from "@/components/HeroSection";
import StateCard from "@/components/StateCard";
import StateDetail from "@/components/StateDetail";
import TravelMoodQuiz from "@/components/TravelMoodQuiz";

const Index = () => {
  const [selectedStateId, setSelectedStateId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const statesRef = useRef<HTMLDivElement>(null);

  const selectedState = states.find((s) => s.id === selectedStateId);

  const filteredStates = states.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tagline.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollToStates = () => {
    statesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (selectedState) {
    return (
      <div className="min-h-screen bg-background">
        <StateDetail state={selectedState} onBack={() => setSelectedStateId(null)} />
        {/* Footer */}
        <footer className="bg-foreground/5 border-t border-border py-8 text-center">
          <p className="text-muted-foreground font-body text-sm">
            🇮🇳 India Travel Guide — Discover the beauty of Incredible India
          </p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onExplore={scrollToStates} />

      {/* Travel Mood Quiz */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            🎯 Find Your Perfect Destination
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Take our quick quiz and discover which Indian state matches your travel personality
          </p>
        </div>
        <TravelMoodQuiz onSelectState={(id) => {
          setSelectedStateId(id);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }} />
      </section>

      {/* States Section */}
      <section ref={statesRef} className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Top Tourist States
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Choose a state to discover amazing places, hotels, and plan your trip
          </p>

          {/* Search */}
          <div className="mt-6 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search states..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 rounded-full border border-input bg-card text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring shadow-card"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredStates.map((state, i) => (
            <StateCard
              key={state.id}
              state={state}
              index={i}
              onClick={() => {
                setSelectedStateId(state.id);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          ))}
        </div>

        {filteredStates.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground font-body text-lg">No states found matching "{searchQuery}"</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-8 text-center">
        <p className="text-muted-foreground font-body text-sm">
          🇮🇳 India Travel Guide — Discover the beauty of Incredible India
        </p>
      </footer>
    </div>
  );
};

export default Index;
