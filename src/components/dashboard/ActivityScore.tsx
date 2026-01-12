import { cn } from "@/lib/utils";

interface ActivityScoreProps {
  score: number;
  className?: string;
}

const ActivityScore = ({ score, className }: ActivityScoreProps) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-primary";
    if (score >= 40) return "text-warning";
    return "text-destructive";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    if (score >= 40) return "Fair";
    return "Needs improvement";
  };

  return (
    <div className={cn("rounded-xl p-6 bg-card border border-border", className)}>
      <h3 className="text-lg font-semibold text-foreground mb-6">Activity Score</h3>
      
      <div className="flex items-center justify-center">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="64"
              cy="64"
              r="45"
              fill="none"
              stroke="hsl(var(--secondary))"
              strokeWidth="10"
            />
            {/* Progress circle */}
            <circle
              cx="64"
              cy="64"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className={cn("transition-all duration-1000 ease-out", getScoreColor(score))}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={cn("text-3xl font-bold", getScoreColor(score))}>
              {score}%
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className={cn("font-semibold", getScoreColor(score))}>
          {getScoreLabel(score)}
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          Based on keyboard & mouse activity
        </p>
      </div>

      {/* Breakdown */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Productive apps</span>
          <span className="text-sm font-medium text-success">78%</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Neutral apps</span>
          <span className="text-sm font-medium text-muted-foreground">15%</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Unproductive apps</span>
          <span className="text-sm font-medium text-destructive">7%</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityScore;
