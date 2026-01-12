import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
  variant?: "default" | "success" | "warning" | "primary";
  className?: string;
}

const StatsCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  variant = "default",
  className,
}: StatsCardProps) => {
  const iconBgClass = {
    default: "bg-secondary text-muted-foreground",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    primary: "bg-primary/10 text-primary",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl p-5 bg-card border border-border",
        "hover:border-primary/20 transition-all duration-300 group",
        "hover:shadow-lg",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-foreground tracking-tight animate-count-up">
              {value}
            </span>
            {subtitle && (
              <span className="text-sm text-muted-foreground">{subtitle}</span>
            )}
          </div>
          {trend && (
            <div className="flex items-center gap-1.5">
              <span
                className={cn(
                  "text-xs font-medium px-2 py-0.5 rounded-full",
                  trend.positive
                    ? "bg-success/10 text-success"
                    : "bg-destructive/10 text-destructive"
                )}
              >
                {trend.positive ? "+" : ""}
                {trend.value}
              </span>
              <span className="text-xs text-muted-foreground">vs last week</span>
            </div>
          )}
        </div>
        <div
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300",
            "group-hover:scale-110",
            iconBgClass[variant]
          )}
        >
          <Icon className="w-6 h-6" />
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/[0.02] pointer-events-none" />
    </div>
  );
};

export default StatsCard;
