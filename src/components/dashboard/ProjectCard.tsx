import { Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  name: string;
  client?: string;
  hoursTracked: number;
  hoursLimit?: number;
  members: number;
  color: string;
  isActive?: boolean;
}

const ProjectCard = ({
  name,
  client,
  hoursTracked,
  hoursLimit,
  members,
  color,
  isActive = false,
}: ProjectCardProps) => {
  const progress = hoursLimit ? (hoursTracked / hoursLimit) * 100 : 0;

  return (
    <div
      className={cn(
        "relative rounded-xl p-5 bg-card border border-border",
        "hover:border-primary/20 transition-all duration-300 group cursor-pointer",
        "hover:shadow-md",
        isActive && "ring-2 ring-primary/50"
      )}
    >
      {/* Color indicator */}
      <div
        className="absolute top-0 left-0 w-1 h-full rounded-l-xl"
        style={{ backgroundColor: color }}
      />

      <div className="pl-3">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h4>
            {client && (
              <p className="text-sm text-muted-foreground">{client}</p>
            )}
          </div>
          {isActive && (
            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-success/10 text-success text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Active
            </span>
          )}
        </div>

        {/* Progress */}
        {hoursLimit && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium text-foreground">
                {hoursTracked}h / {hoursLimit}h
              </span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-500",
                  progress > 90 ? "bg-destructive" : progress > 70 ? "bg-warning" : "bg-primary"
                )}
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          </div>
        )}

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{hoursTracked}h tracked</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span>{members} members</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
