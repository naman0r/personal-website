"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar, { MobileHeader } from "../components/Sidebar";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Check if we're on the homepage
  const isHomePage = pathname === "/";
  //const isHomePage = false;

  if (isHomePage) {
    return (
      <div className="relative">
        {/* Floating sidebar for homepage */}
        <div className="fixed top-0 left-0 z-50">
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={closeSidebar}
            initialExpanded={false}
            user={{
              name: "Naman Rusia",
              title: "Software Engineer",
              avatarUrl: "/profile_pic.jpeg",
            }}
          />
        </div>

        {/* Mobile Header for homepage */}
        <div className="lg:hidden">
          <MobileHeader onMenuClick={toggleSidebar} title="Naman's Portfolio" />
        </div>

        {/* Full-screen content */}
        {children}
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-950">
      {/* Single Responsive Sidebar - handles both mobile and desktop */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        initialExpanded={true}
        user={{
          name: "Naman Rusia",
          title: "Software Engineer",
          avatarUrl: "/profile_pic.jpeg",
        }}
      />

      {/* Main Content */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Mobile Header */}
        <MobileHeader onMenuClick={toggleSidebar} title="Naman's Portfolio" />

        {/* Content Area */}
        <div
          className="flex-1 overflow-auto"
          style={{
            background:
              "linear-gradient(135deg, rgb(15 23 42) 0%, rgb(2 6 23) 100%)",
            backgroundImage: `
              radial-gradient(1200px 400px at -10% -10%, rgba(99,102,241,0.08), transparent 40%),
              radial-gradient(1200px 400px at 110% 110%, rgba(162, 227, 255, 0.08), transparent 40%)
            `,
          }}
        >
          <div className="p-8 lg:p-12">
            <div className="mx-auto max-w-6xl">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
