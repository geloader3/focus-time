import { cn } from "@/lib/utils";

interface TeamMemberProps {
  name: string;
  role: string;
  avatar?: string;
  initials: string;
  isOnline?: boolean;
  currentProject?: string;
  hoursToday: number;
  activityScore: number;
}

const TeamMember = ({
  name,
  role,
  initials,
  isOnline = false,
  currentProject,
  hoursToday,
  activityScore,
}: TeamMemberProps) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-200">
      {/* Avatar */}
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center">
          <span className="text-sm font-semibold text-primary-foreground">{initials}</span>
        </div>
        {isOnline && (
          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-success border-2 border-card" />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="font-medium text-foreground truncate">{name}</p>
          {currentProject && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Working
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground truncate">
          {role}
          {currentProject && ` • ${currentProject}`}
        </p>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-6 text-sm">
        <div className="text-right">
          <p className="font-semibold text-foreground">{hoursToday}h</p>
          <p className="text-xs text-muted-foreground">Today</p>
        </div>
        <div className="text-right">
          <p className={cn(
            "font-semibold",
            activityScore >= 80 ? "text-success" : activityScore >= 60 ? "text-primary" : "text-warning"
          )}>
            {activityScore}%
          </p>
          <p className="text-xs text-muted-foreground">Activity</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
