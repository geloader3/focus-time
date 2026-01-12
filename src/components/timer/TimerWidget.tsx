import { useState, useEffect, useCallback } from "react";
import { Play, Pause, Square, Clock, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimerWidgetProps {
  className?: string;
}

const TimerWidget = ({ className }: TimerWidgetProps) => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [selectedProject, setSelectedProject] = useState("Website Redesign");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = useCallback((totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return {
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: secs.toString().padStart(2, "0"),
    };
  }, []);

  const time = formatTime(seconds);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleStop = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 transition-all duration-300",
        "bg-card border border-border shadow-lg",
        isRunning && "border-success/50 shadow-[0_0_30px_-5px_hsl(var(--success)/0.3)]",
        className
      )}
    >
      {/* Background glow when active */}
      {isRunning && (
        <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent pointer-events-none" />
      )}

      <div className="relative z-10">
        {/* Status indicator */}
        <div className="flex items-center gap-2 mb-4">
          <div
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              isRunning ? "bg-success timer-active" : "bg-muted-foreground/40"
            )}
          />
          <span className="text-sm font-medium text-muted-foreground">
            {isRunning ? "Tracking time" : "Ready to track"}
          </span>
        </div>

        {/* Timer display */}
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-5xl font-bold tracking-tight text-foreground tabular-nums">
            {time.hours}
          </span>
          <span className="text-5xl font-bold text-muted-foreground/40">:</span>
          <span className="text-5xl font-bold tracking-tight text-foreground tabular-nums">
            {time.minutes}
          </span>
          <span className="text-5xl font-bold text-muted-foreground/40">:</span>
          <span className="text-5xl font-bold tracking-tight text-foreground tabular-nums">
            {time.seconds}
          </span>
        </div>

        {/* Project selector */}
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors mb-6 w-full">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground flex-1 text-left truncate">
            {selectedProject}
          </span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>

        {/* Control buttons */}
        <div className="flex gap-3">
          {!isRunning ? (
            <button
              onClick={handleStart}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl",
                "bg-primary text-primary-foreground font-semibold",
                "hover:opacity-90 transition-all duration-200",
                "shadow-lg hover:shadow-xl hover:shadow-primary/25"
              )}
            >
              <Play className="w-5 h-5" fill="currentColor" />
              <span>Start Timer</span>
            </button>
          ) : (
            <>
              <button
                onClick={handlePause}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl",
                  "bg-warning text-warning-foreground font-semibold",
                  "hover:opacity-90 transition-all duration-200"
                )}
              >
                <Pause className="w-5 h-5" />
                <span>Pause</span>
              </button>
              <button
                onClick={handleStop}
                className={cn(
                  "flex items-center justify-center py-3 px-4 rounded-xl",
                  "bg-destructive/10 text-destructive font-semibold",
                  "hover:bg-destructive/20 transition-all duration-200"
                )}
              >
                <Square className="w-5 h-5" fill="currentColor" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimerWidget;
