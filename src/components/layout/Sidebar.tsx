import { useState } from "react";
import { 
  LayoutDashboard, 
  Clock, 
  FolderKanban, 
  Users, 
  BarChart3, 
  FileText, 
  Settings, 
  ChevronLeft,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "timesheet", label: "Timesheet", icon: Clock },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "team", label: "Team", icon: Users },
  { id: "reports", label: "Reports", icon: BarChart3 },
  { id: "approvals", label: "Approvals", icon: FileText },
];

const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 h-screen bg-sidebar flex flex-col transition-all duration-300 z-40",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-glow">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="font-bold text-lg text-sidebar-foreground tracking-tight">
              TrackFlow
            </span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                    "hover:bg-sidebar-accent group",
                    isActive 
                      ? "bg-sidebar-accent text-sidebar-primary" 
                      : "text-sidebar-foreground/70"
                  )}
                >
                  <Icon 
                    className={cn(
                      "w-5 h-5 transition-colors",
                      isActive ? "text-sidebar-primary" : "group-hover:text-sidebar-foreground"
                    )} 
                  />
                  {!collapsed && (
                    <span className={cn(
                      "font-medium text-sm",
                      isActive && "text-sidebar-foreground"
                    )}>
                      {item.label}
                    </span>
                  )}
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-sidebar-primary" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Settings & Collapse */}
      <div className="p-3 border-t border-sidebar-border">
        <button
          onClick={() => onTabChange("settings")}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
            "hover:bg-sidebar-accent text-sidebar-foreground/70 hover:text-sidebar-foreground"
          )}
        >
          <Settings className="w-5 h-5" />
          {!collapsed && <span className="font-medium text-sm">Settings</span>}
        </button>
        
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 mt-1",
            "hover:bg-sidebar-accent text-sidebar-foreground/70 hover:text-sidebar-foreground"
          )}
        >
          <ChevronLeft 
            className={cn(
              "w-5 h-5 transition-transform duration-300",
              collapsed && "rotate-180"
            )} 
          />
          {!collapsed && <span className="font-medium text-sm">Collapse</span>}
        </button>
      </div>

      {/* User */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center">
            <span className="text-sm font-semibold text-primary-foreground">JD</span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">John Doe</p>
              <p className="text-xs text-sidebar-foreground/60 truncate">Employee</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
