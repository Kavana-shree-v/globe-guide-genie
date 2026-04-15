import { useState } from "react";
import { StateData } from "@/data/travelData";

interface BudgetCalculatorProps {
  state: StateData;
}

const BudgetCalculator = ({ state }: BudgetCalculatorProps) => {
  const [budget, setBudget] = useState(10000);
  const [days, setDays] = useState(3);
  const [travelers, setTravelers] = useState(2);

  const dailyBudget = Math.floor(budget / days);
  const perPersonBudget = Math.floor(budget / travelers);
  const dailyPerPerson = Math.floor(dailyBudget / travelers);

  // Hotels that fit within daily per-person budget
  const affordableHotels = state.hotels
    .filter((h) => h.priceMin <= dailyPerPerson * travelers)
    .sort((a, b) => a.priceMin - b.priceMin);

  // Activities that fit within remaining budget after hotel
  const cheapestHotelCost = affordableHotels.length > 0 ? affordableHotels[0].priceMin : 0;
  const remainingDailyBudget = dailyBudget - cheapestHotelCost;

  const affordableActivities = state.activities
    .filter((a) => a.cost <= remainingDailyBudget / travelers)
    .sort((a, b) => a.cost - b.cost);

  const getBudgetLevel = () => {
    if (dailyPerPerson >= 10000) return { label: "Luxury", color: "text-secondary", emoji: "👑", bg: "bg-secondary/10" };
    if (dailyPerPerson >= 4000) return { label: "Comfort", color: "text-primary", emoji: "✨", bg: "bg-primary/10" };
    if (dailyPerPerson >= 1500) return { label: "Mid-Range", color: "text-accent-foreground", emoji: "🎒", bg: "bg-accent" };
    return { label: "Backpacker", color: "text-muted-foreground", emoji: "🏕", bg: "bg-muted" };
  };

  const budgetLevel = getBudgetLevel();

  return (
    <div className="animate-fade-up space-y-6">
      {/* Input Section */}
      <div className="bg-card rounded-xl p-8 shadow-card">
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">💰 Budget Calculator</h3>
        <p className="text-muted-foreground font-body text-sm mb-6">
          Enter your budget and we'll find the best options in {state.name}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <label className="font-body text-sm font-medium text-foreground mb-2 block">Total Budget (₹)</label>
            <input
              type="number"
              min={1000}
              step={1000}
              value={budget}
              onChange={(e) => setBudget(Math.max(1000, parseInt(e.target.value) || 1000))}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <div className="flex gap-2 mt-2">
              {[5000, 15000, 30000, 50000].map((b) => (
                <button
                  key={b}
                  onClick={() => setBudget(b)}
                  className={`px-3 py-1 rounded-full text-xs font-body font-medium transition-all ${
                    budget === b ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  ₹{(b / 1000).toFixed(0)}K
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-body text-sm font-medium text-foreground mb-2 block">Number of Days</label>
            <input
              type="number"
              min={1}
              max={14}
              value={days}
              onChange={(e) => setDays(Math.max(1, Math.min(14, parseInt(e.target.value) || 1)))}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label className="font-body text-sm font-medium text-foreground mb-2 block">Travelers</label>
            <input
              type="number"
              min={1}
              max={10}
              value={travelers}
              onChange={(e) => setTravelers(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      </div>

      {/* Budget Breakdown */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {[
          { label: "Daily Budget", value: `₹${dailyBudget.toLocaleString()}`, icon: "📅" },
          { label: "Per Person", value: `₹${perPersonBudget.toLocaleString()}`, icon: "👤" },
          { label: "Daily/Person", value: `₹${dailyPerPerson.toLocaleString()}`, icon: "💸" },
          { label: "Travel Style", value: budgetLevel.label, icon: budgetLevel.emoji },
        ].map((stat, i) => (
          <div key={i} className="bg-card rounded-xl p-5 shadow-card text-center border border-border">
            <span className="text-2xl">{stat.icon}</span>
            <p className="font-body text-xs text-muted-foreground mt-2">{stat.label}</p>
            <p className="font-heading text-lg font-bold text-foreground mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Budget Visual Bar */}
      <div className="bg-card rounded-xl p-6 shadow-card">
        <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Budget Allocation (Estimated Daily)</h4>
        <div className="space-y-3">
          {[
            { label: "🏨 Hotel", pct: 50, amount: Math.floor(dailyBudget * 0.5) },
            { label: "🍽 Food", pct: 20, amount: Math.floor(dailyBudget * 0.2) },
            { label: "🎯 Activities", pct: 20, amount: Math.floor(dailyBudget * 0.2) },
            { label: "🚗 Transport", pct: 10, amount: Math.floor(dailyBudget * 0.1) },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex justify-between font-body text-sm mb-1">
                <span className="text-foreground">{item.label}</span>
                <span className="text-muted-foreground">₹{item.amount.toLocaleString()} ({item.pct}%)</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-hero rounded-full transition-all duration-700"
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hotels Recommendations */}
      <div className="bg-card rounded-xl p-6 shadow-card">
        <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
          🏨 Hotels Within Your Budget
        </h4>
        {affordableHotels.length > 0 ? (
          <div className="space-y-3">
            {affordableHotels.map((hotel, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border hover:border-primary/30 transition-colors">
                <div className={`shrink-0 w-12 h-12 rounded-lg ${budgetLevel.bg} flex items-center justify-center text-lg`}>
                  {"★".repeat(hotel.rating).slice(0, 1)}🏨
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h5 className="font-body font-semibold text-foreground">{hotel.name}</h5>
                    <span className="text-secondary text-xs">{"★".repeat(hotel.rating)}</span>
                  </div>
                  <p className="text-muted-foreground font-body text-xs mt-1">{hotel.description}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-primary font-body text-sm font-semibold">{hotel.priceRange}</span>
                    {hotel.priceMin <= dailyPerPerson && (
                      <span className="bg-green-500/10 text-green-600 text-xs font-body px-2 py-0.5 rounded-full">✓ Great fit</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-muted/50 rounded-lg">
            <p className="text-muted-foreground font-body">😅 No hotels match this budget. Try increasing your budget or reducing days.</p>
          </div>
        )}
      </div>

      {/* Activities Recommendations */}
      <div className="bg-card rounded-xl p-6 shadow-card">
        <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
          🎯 Activities You Can Afford
        </h4>
        {affordableActivities.length > 0 ? (
          <div className="grid gap-3 md:grid-cols-2">
            {affordableActivities.map((activity, i) => {
              const categoryColors: Record<string, string> = {
                adventure: "bg-red-500/10 text-red-600",
                culture: "bg-purple-500/10 text-purple-600",
                nature: "bg-green-500/10 text-green-600",
                food: "bg-orange-500/10 text-orange-600",
                wellness: "bg-blue-500/10 text-blue-600",
              };
              return (
                <div key={i} className="p-4 bg-muted/50 rounded-lg border border-border hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-body font-semibold text-foreground text-sm">{activity.name}</h5>
                    <span className={`text-xs font-body px-2 py-0.5 rounded-full ${categoryColors[activity.category]}`}>
                      {activity.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-body text-xs">{activity.description}</p>
                  <div className="flex items-center gap-3 mt-2 font-body text-xs">
                    <span className="text-primary font-semibold">
                      {activity.cost === 0 ? "Free!" : `₹${activity.cost.toLocaleString()}`}
                    </span>
                    <span className="text-muted-foreground">⏱ {activity.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-8 bg-muted/50 rounded-lg">
            <p className="text-muted-foreground font-body">😅 Budget is tight after accommodation. Try increasing your total budget.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetCalculator;
