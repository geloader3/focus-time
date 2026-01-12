import { Clock, Play, Pause, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActivityItem {
  id: string;
  type: "start" | "pause" | "complete";
  project: string;
  time: string;
  duration?: string;
}

const activities: ActivityItem[] = [
  {
    id: "1",
    type: "start",
    project: "Website Redesign",
    time: "2 min ago",
  },
  {
    id: "2",
    type: "complete",
    project: "API Integration",
    time: "1 hour ago",
    duration: "2h 15m",
  },
  {
    id: "3",
    type: "pause",
    project: "Mobile App",
    time: "3 hours ago",
    duration: "45m",
  },
  {
    id: "4",
    type: "complete",
    project: "Dashboard Design",
    time: "Yesterday",
    duration: "4h 30m",
  },
];

const getActivityIcon = (type: ActivityItem["type"]) => {
  switch (type) {
    case "start":
      return Play;
    case "pause":
      return Pause;
    case "complete":
      return CheckCircle2;
    default:
      return Clock;
  }
};

const getActivityColor = (type: ActivityItem["type"]) => {
  switch (type) {
    case "start":
      return "bg-success/10 text-success";
    case "pause":
      return "bg-warning/10 text-warning";
    case "complete":
      return "bg-primary/10 text-primary";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const RecentActivity = () => {
  return (
    <div className="rounded-xl p-6 bg-card border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
        <button className="text-sm text-primary hover:text-primary/80 font-medium">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = getActivityIcon(activity.type);
          return (
            <div
              key={activity.id}
              className="flex items-center gap-4 group"
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center transition-transform",
                  "group-hover:scale-110",
                  getActivityColor(activity.type)
                )}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {activity.type === "start" && "Started tracking"}
                  {activity.type === "pause" && "Paused tracking"}
                  {activity.type === "complete" && "Completed session"}
                </p>
                <p className="text-sm text-muted-foreground truncate">
                  {activity.project}
                  {activity.duration && ` • ${activity.duration}`}
                </p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
