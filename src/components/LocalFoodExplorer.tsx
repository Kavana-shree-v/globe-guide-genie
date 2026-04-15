import { useState } from "react";
import { StateData } from "@/data/travelData";

interface LocalFoodExplorerProps {
  state: StateData;
}

const LocalFoodExplorer = ({ state }: LocalFoodExplorerProps) => {
  const [filter, setFilter] = useState<"all" | "veg" | "nonveg">("all");

  const filteredFoods = state.foods.filter((f) => {
    if (filter === "veg") return f.isVeg;
    if (filter === "nonveg") return !f.isVeg;
    return true;
  });

  const SpiceBar = ({ level }: { level: number }) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`text-xs ${i <= level ? "opacity-100" : "opacity-20"}`}
        >
          🌶
        </span>
      ))}
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <h4 className="font-heading text-lg font-semibold text-foreground">🍽 Local Food Guide</h4>
        <div className="flex gap-1 ml-auto">
          {[
            { key: "all" as const, label: "All" },
            { key: "veg" as const, label: "🥬 Veg" },
            { key: "nonveg" as const, label: "🍖 Non-Veg" },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-3 py-1.5 rounded-full text-xs font-body font-medium transition-all ${
                filter === f.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {filteredFoods.map((food, i) => (
          <div
            key={i}
            className="bg-card rounded-xl p-5 shadow-card border border-transparent hover:border-primary/20 hover:shadow-card-hover transition-all group"
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl group-hover:scale-110 transition-transform">{food.emoji}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h5 className="font-body font-semibold text-foreground">{food.name}</h5>
                  {food.isVeg ? (
                    <span className="w-4 h-4 border border-green-500 rounded-sm flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                    </span>
                  ) : (
                    <span className="w-4 h-4 border border-red-500 rounded-sm flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground font-body text-xs mt-1">{food.description}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-primary font-body text-xs font-semibold">{food.price}</span>
                  <SpiceBar level={food.spiceLevel} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalFoodExplorer;
