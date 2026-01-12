import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Dashboard from "@/pages/Dashboard";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Main content area with sidebar offset */}
      <main className="flex-1 ml-64 transition-all duration-300">
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "timesheet" && (
          <div className="p-8">
            <h1 className="text-2xl font-bold text-foreground">Timesheet</h1>
            <p className="text-muted-foreground mt-2">Your timesheet entries will appear here.</p>
          </div>
        )}
        {activeTab === "projects" && (
          <div className="p-8">
            <h1 className="text-2xl font-bold text-foreground">Projects</h1>
            <p className="text-muted-foreground mt-2">Manage your projects and teams.</p>
          </div>
        )}
        {activeTab === "team" && (
          <div className="p-8">
            <h1 className="text-2xl font-bold text-foreground">Team</h1>
            <p className="text-muted-foreground mt-2">View and manage team members.</p>
          </div>
        )}
        {activeTab === "reports" && (
          <div className="p-8">
            <h1 className="text-2xl font-bold text-foreground">Reports</h1>
            <p className="text-muted-foreground mt-2">Generate and export reports.</p>
          </div>
        )}
        {activeTab === "approvals" && (
          <div className="p-8">
            <h1 className="text-2xl font-bold text-foreground">Approvals</h1>
            <p className="text-muted-foreground mt-2">Review and approve time entries.</p>
          </div>
        )}
        {activeTab === "settings" && (
          <div className="p-8">
            <h1 className="text-2xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground mt-2">Configure your workspace settings.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
