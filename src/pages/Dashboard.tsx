import { Clock, TrendingUp, FolderKanban, Users } from "lucide-react";
import TimerWidget from "@/components/timer/TimerWidget";
import StatsCard from "@/components/dashboard/StatsCard";
import ActivityChart from "@/components/dashboard/ActivityChart";
import ProjectCard from "@/components/dashboard/ProjectCard";
import ActivityScore from "@/components/dashboard/ActivityScore";
import RecentActivity from "@/components/dashboard/RecentActivity";
import TeamMember from "@/components/dashboard/TeamMember";

const projects = [
  {
    name: "Website Redesign",
    client: "Acme Corp",
    hoursTracked: 45,
    hoursLimit: 60,
    members: 4,
    color: "#14b8a6",
    isActive: true,
  },
  {
    name: "Mobile App Development",
    client: "TechStart",
    hoursTracked: 120,
    hoursLimit: 150,
    members: 6,
    color: "#8b5cf6",
  },
  {
    name: "API Integration",
    client: "DataFlow Inc",
    hoursTracked: 28,
    hoursLimit: 40,
    members: 2,
    color: "#f59e0b",
  },
];

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Frontend Developer",
    initials: "SC",
    isOnline: true,
    currentProject: "Website Redesign",
    hoursToday: 5.5,
    activityScore: 92,
  },
  {
    name: "Mike Johnson",
    role: "Backend Developer",
    initials: "MJ",
    isOnline: true,
    currentProject: "API Integration",
    hoursToday: 4.2,
    activityScore: 85,
  },
  {
    name: "Emily Davis",
    role: "UI Designer",
    initials: "ED",
    isOnline: false,
    hoursToday: 3.0,
    activityScore: 78,
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Good morning, John 👋</h1>
        <p className="text-muted-foreground mt-1">
          Here's what's happening with your team today.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              title="Hours Today"
              value="5.5"
              subtitle="hrs"
              icon={Clock}
              trend={{ value: "12%", positive: true }}
              variant="primary"
            />
            <StatsCard
              title="This Week"
              value="32.5"
              subtitle="hrs"
              icon={TrendingUp}
              trend={{ value: "8%", positive: true }}
              variant="success"
            />
            <StatsCard
              title="Active Projects"
              value="8"
              icon={FolderKanban}
              variant="default"
            />
            <StatsCard
              title="Team Online"
              value="12"
              subtitle="/ 15"
              icon={Users}
              variant="default"
            />
          </div>

          {/* Activity Chart */}
          <ActivityChart />

          {/* Projects */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Your Projects</h2>
              <button className="text-sm text-primary hover:text-primary/80 font-medium">
                View all
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Team Activity</h2>
              <button className="text-sm text-primary hover:text-primary/80 font-medium">
                View all
              </button>
            </div>
            <div className="space-y-3">
              {teamMembers.map((member) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Timer & Activity */}
        <div className="space-y-6">
          {/* Timer Widget */}
          <TimerWidget />

          {/* Activity Score */}
          <ActivityScore score={85} />

          {/* Recent Activity */}
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
