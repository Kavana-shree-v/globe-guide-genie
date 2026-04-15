import { useState } from "react";
import { StateData } from "@/data/travelData";
import TripPlanner from "./TripPlanner";
import BudgetCalculator from "./BudgetCalculator";
import LocalFoodExplorer from "./LocalFoodExplorer";

interface StateDetailProps {
  state: StateData;
  onBack: () => void;
}

const StarRating = ({ rating }: { rating: number }) => (
  <span className="text-secondary">
    {"★".repeat(rating)}{"☆".repeat(5 - rating)}
  </span>
);

const StateDetail = ({ state, onBack }: StateDetailProps) => {
  const [activeTab, setActiveTab] = useState<"places" | "hotels" | "budget" | "food" | "planner" | "tips">("places");

  const tabs = [
    { key: "places" as const, label: "🏛 Places" },
    { key: "hotels" as const, label: "🏨 Hotels" },
    { key: "budget" as const, label: "💰 Budget" },
    { key: "food" as const, label: "🍽 Food" },
    { key: "planner" as const, label: "📅 Planner" },
    { key: "tips" as const, label: "💡 Tips" },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={state.image} alt={state.name} className="w-full h-full object-cover" width={800} height={600} />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <button
            onClick={onBack}
            className="mb-4 text-primary-foreground/70 hover:text-primary-foreground font-body text-sm flex items-center gap-2 transition-colors"
          >
            ← Back to All States
          </button>
          <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground font-bold">{state.name}</h1>
          <p className="text-primary-foreground/80 font-body text-lg mt-2 max-w-2xl">{state.tagline}</p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm font-body text-primary-foreground/70">
            <span>🗓 Best: {state.bestTime}</span>
            <span>🌡 Avg: {state.avgTemp}</span>
            <span>🗣 {state.language}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-muted-foreground font-body text-lg mb-8 leading-relaxed">{state.description}</p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? "bg-gradient-hero text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Places Tab */}
        {activeTab === "places" && (
          <div className="grid gap-4 md:grid-cols-2 animate-fade-up">
            {state.places.map((place, i) => (
              <div
                key={i}
                className={`bg-card rounded-xl p-6 shadow-card border transition-all hover:shadow-card-hover ${
                  place.mustWatch ? "border-l-4 border-l-secondary" : "border-transparent"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{place.name}</h3>
                  {place.mustWatch && (
                    <span className="bg-secondary/10 text-secondary text-xs font-body font-semibold px-2 py-1 rounded-full whitespace-nowrap">
                      ⭐ Must Watch
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground font-body text-sm mt-2 leading-relaxed">{place.description}</p>
                <p className="text-primary font-body text-xs font-medium mt-3">⏱ {place.timeNeeded}</p>
              </div>
            ))}
          </div>
        )}

        {/* Hotels Tab */}
        {activeTab === "hotels" && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 animate-fade-up">
            {state.hotels.map((hotel, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-card border border-transparent hover:shadow-card-hover transition-all">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{hotel.name}</h3>
                </div>
                <StarRating rating={hotel.rating} />
                <p className="text-primary font-body text-sm font-semibold mt-2">{hotel.priceRange}</p>
                <p className="text-muted-foreground font-body text-sm mt-2">{hotel.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {hotel.amenities.map((a, j) => (
                    <span key={j} className="bg-muted text-muted-foreground text-xs font-body px-2 py-1 rounded-md">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Budget Tab */}
        {activeTab === "budget" && <BudgetCalculator state={state} />}

        {/* Food Tab */}
        {activeTab === "food" && <LocalFoodExplorer state={state} />}

        {/* Planner Tab */}
        {activeTab === "planner" && <TripPlanner state={state} />}

        {/* Tips Tab */}
        {activeTab === "tips" && (
          <div className="bg-card rounded-xl p-8 shadow-card animate-fade-up">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Travel Tips for {state.name}</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {state.tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <span className="text-secondary text-xl">💡</span>
                  <p className="text-foreground font-body text-sm">{tip}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Best Time", value: state.bestTime, icon: "🗓" },
                { label: "Language", value: state.language, icon: "🗣" },
                { label: "Currency", value: state.currency, icon: "💰" },
                { label: "Avg Temp", value: state.avgTemp, icon: "🌡" },
              ].map((info, i) => (
                <div key={i} className="bg-background rounded-lg p-4 text-center border border-border">
                  <span className="text-2xl">{info.icon}</span>
                  <p className="font-body text-xs text-muted-foreground mt-1">{info.label}</p>
                  <p className="font-body text-sm font-semibold text-foreground mt-1">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StateDetail;
