import { useState } from "react";
import { StateData } from "@/data/travelData";

interface TripPlannerProps {
  state: StateData;
}

const TripPlanner = ({ state }: TripPlannerProps) => {
  const [days, setDays] = useState(3);
  const [showPlan, setShowPlan] = useState(false);

  const generatePlan = () => {
    const allPlaces = [...state.places];
    const mustWatch = allPlaces.filter((p) => p.mustWatch);
    const others = allPlaces.filter((p) => !p.mustWatch);
    const sorted = [...mustWatch, ...others];

    const plan: { day: number; places: typeof allPlaces }[] = [];
    let placeIndex = 0;

    for (let d = 1; d <= days; d++) {
      const dayPlaces: typeof allPlaces = [];
      const placesPerDay = Math.max(1, Math.ceil(sorted.length / days));
      for (let p = 0; p < placesPerDay && placeIndex < sorted.length; p++) {
        dayPlaces.push(sorted[placeIndex]);
        placeIndex++;
      }
      if (dayPlaces.length > 0) plan.push({ day: d, places: dayPlaces });
    }

    // Fill remaining days with "free day" activities
    for (let d = plan.length + 1; d <= days; d++) {
      plan.push({ day: d, places: [] });
    }

    return plan;
  };

  const plan = showPlan ? generatePlan() : [];

  return (
    <div className="animate-fade-up">
      <div className="bg-card rounded-xl p-8 shadow-card mb-6">
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Plan Your Trip</h3>
        <p className="text-muted-foreground font-body text-sm mb-6">
          Tell us how many days you're visiting {state.name} and we'll create a personalized itinerary.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
          <div className="flex-1 w-full sm:w-auto">
            <label className="font-body text-sm font-medium text-foreground mb-2 block">
              Number of Days
            </label>
            <input
              type="number"
              min={1}
              max={14}
              value={days}
              onChange={(e) => {
                setDays(Math.max(1, Math.min(14, parseInt(e.target.value) || 1)));
                setShowPlan(false);
              }}
              className="w-full sm:w-32 px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex gap-2">
            {[2, 3, 5, 7].map((d) => (
              <button
                key={d}
                onClick={() => { setDays(d); setShowPlan(false); }}
                className={`px-4 py-3 rounded-lg font-body text-sm font-medium transition-all ${
                  days === d
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {d} Days
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowPlan(true)}
            className="bg-gradient-hero text-primary-foreground font-body font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-all"
          >
            Generate Itinerary ✨
          </button>
        </div>
      </div>

      {showPlan && (
        <div className="space-y-4 animate-scale-in">
          <h4 className="font-heading text-xl font-bold text-foreground">
            Your {days}-Day {state.name} Itinerary
          </h4>
          {plan.map((dayPlan) => (
            <div key={dayPlan.day} className="bg-card rounded-xl p-6 shadow-card border-l-4 border-l-primary">
              <h5 className="font-heading text-lg font-semibold text-foreground mb-3">
                Day {dayPlan.day}
              </h5>
              {dayPlan.places.length > 0 ? (
                <div className="space-y-3">
                  {dayPlan.places.map((place, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <span className="text-primary font-body font-bold text-sm mt-0.5">
                        {i + 1}.
                      </span>
                      <div>
                        <p className="font-body text-sm font-semibold text-foreground">
                          {place.name}
                          {place.mustWatch && <span className="ml-2 text-secondary text-xs">⭐ Must See</span>}
                        </p>
                        <p className="text-muted-foreground font-body text-xs mt-1">{place.description}</p>
                        <p className="text-primary font-body text-xs mt-1">⏱ {place.timeNeeded}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-body text-sm text-muted-foreground">
                    🌴 Free day — explore local markets, try street food, or revisit your favorite spots!
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Hotel suggestion */}
          <div className="bg-card rounded-xl p-6 shadow-card border-l-4 border-l-secondary mt-6">
            <h5 className="font-heading text-lg font-semibold text-foreground mb-3">🏨 Recommended Stay</h5>
            <div className="space-y-3">
              {state.hotels.map((hotel, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <span className="text-secondary text-lg">{"★".repeat(hotel.rating)}</span>
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">{hotel.name}</p>
                    <p className="text-primary font-body text-xs">{hotel.priceRange}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripPlanner;
