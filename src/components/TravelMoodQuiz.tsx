import { useState } from "react";
import { states, StateData } from "@/data/travelData";

const questions = [
  {
    question: "What's your ideal vacation vibe?",
    emoji: "🎭",
    options: [
      { label: "🏖 Beach & Chill", tags: ["goa", "kerala"] },
      { label: "🏔 Mountains & Adventure", tags: ["himachal"] },
      { label: "🏛 History & Culture", tags: ["rajasthan", "uttarpradesh", "tamilnadu"] },
      { label: "🌆 City & Nightlife", tags: ["maharashtra", "goa", "karnataka"] },
    ],
  },
  {
    question: "How spicy do you like your food?",
    emoji: "🌶",
    options: [
      { label: "Mild please!", tags: ["himachal", "kerala"] },
      { label: "Medium is perfect", tags: ["maharashtra", "karnataka", "goa"] },
      { label: "Bring on the heat! 🔥", tags: ["rajasthan", "tamilnadu", "uttarpradesh"] },
    ],
  },
  {
    question: "What's your budget style?",
    emoji: "💰",
    options: [
      { label: "Backpacker life 🎒", tags: ["goa", "himachal", "karnataka"] },
      { label: "Comfort seeker ✨", tags: ["kerala", "tamilnadu", "maharashtra"] },
      { label: "Luxury all the way 👑", tags: ["rajasthan", "uttarpradesh", "kerala"] },
    ],
  },
  {
    question: "Pick your must-have experience:",
    emoji: "⭐",
    options: [
      { label: "🐘 Wildlife Safari", tags: ["rajasthan", "kerala", "karnataka"] },
      { label: "🛕 Ancient Temples", tags: ["tamilnadu", "uttarpradesh", "karnataka"] },
      { label: "🏄 Water Sports", tags: ["goa", "kerala"] },
      { label: "🧘 Spiritual Retreat", tags: ["uttarpradesh", "himachal", "kerala"] },
    ],
  },
];

interface TravelMoodQuizProps {
  onSelectState: (stateId: string) => void;
}

const TravelMoodQuiz = ({ onSelectState }: TravelMoodQuizProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[][]>([]);
  const [result, setResult] = useState<StateData | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnswer = (tags: string[]) => {
    setIsAnimating(true);
    const newAnswers = [...answers, tags];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
        setIsAnimating(false);
      } else {
        // Calculate result
        const scores: Record<string, number> = {};
        newAnswers.flat().forEach((tag) => {
          scores[tag] = (scores[tag] || 0) + 1;
        });
        const topState = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0];
        const matched = states.find((s) => s.id === topState);
        setResult(matched || states[0]);
        setIsAnimating(false);
      }
    }, 300);
  };

  const restart = () => {
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
  };

  if (result) {
    return (
      <div className="bg-card rounded-xl p-8 shadow-card animate-scale-in text-center">
        <span className="text-6xl block mb-4">🎉</span>
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Your Perfect Match!</h3>
        <p className="text-muted-foreground font-body mb-6">Based on your preferences, we recommend...</p>
        <div className="relative rounded-xl overflow-hidden max-w-sm mx-auto mb-6 shadow-lg">
          <img src={result.image} alt={result.name} className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
          <div className="absolute bottom-4 left-4 text-left">
            <h4 className="font-heading text-2xl text-primary-foreground font-bold">{result.name}</h4>
            <p className="text-primary-foreground/80 font-body text-sm">{result.tagline}</p>
          </div>
        </div>
        <p className="text-muted-foreground font-body text-sm max-w-md mx-auto mb-6">{result.description}</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => onSelectState(result.id)}
            className="bg-gradient-hero text-primary-foreground font-body font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-all"
          >
            Explore {result.name} →
          </button>
          <button
            onClick={restart}
            className="bg-muted text-muted-foreground font-body font-medium px-6 py-3 rounded-full hover:bg-muted/80 transition-all"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="bg-card rounded-xl p-8 shadow-card">
      <div className="text-center mb-6">
        <div className="flex justify-center gap-2 mb-4">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i <= currentQ ? "w-8 bg-gradient-hero" : "w-2 bg-muted"
              }`}
            />
          ))}
        </div>
        <span className="text-4xl block mb-3">{q.emoji}</span>
        <h3 className="font-heading text-xl font-bold text-foreground">{q.question}</h3>
        <p className="text-muted-foreground font-body text-xs mt-1">Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`grid gap-3 ${q.options.length > 3 ? "grid-cols-2" : "grid-cols-1"} max-w-lg mx-auto transition-opacity ${isAnimating ? "opacity-0" : "opacity-100"}`}>
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt.tags)}
            className="p-4 rounded-xl border border-border bg-muted/30 hover:bg-primary/10 hover:border-primary/30 text-foreground font-body font-medium text-sm transition-all hover:scale-[1.02] active:scale-95"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TravelMoodQuiz;
