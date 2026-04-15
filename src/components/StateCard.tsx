import { StateData } from "@/data/travelData";

interface StateCardProps {
  state: StateData;
  index: number;
  onClick: () => void;
}

const StateCard = ({ state, index, onClick }: StateCardProps) => {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer bg-card text-left w-full"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={state.image}
          alt={state.name}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-heading text-2xl text-primary-foreground font-bold">{state.name}</h3>
          <p className="text-primary-foreground/80 font-body text-sm mt-1">{state.tagline}</p>
        </div>
      </div>
      <div className="p-5">
        <p className="text-muted-foreground font-body text-sm line-clamp-2">{state.description}</p>
        <div className="flex items-center gap-3 mt-3 text-xs font-body">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
            🗓 {state.bestTime}
          </span>
          <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-medium">
            📍 {state.places.length} Places
          </span>
        </div>
      </div>
    </button>
  );
};

export default StateCard;
