import { useState } from "react";
import { Home, Calendar, List, Settings, LogOut, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation(); // Get current route
  const [isCollapsed, setIsCollapsed] = useState(false); // Toggle for mobile view
  
  // Sidebar Links
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <Home size={22} /> },
    { name: "My Bookings", path: "/dashboard/my-bookings", icon: <Calendar size={22} /> },
    { name: "My Listings", path: "/dashboard/my-listings", icon: <List size={22} /> },
    { name: "Settings", path: "/dashboard/settings", icon: <Settings size={22} /> },
  ];

  return (
    <aside 
      className={`bg-white border-r border-gray-200 h-screen flex flex-col 
      ${isCollapsed ? "w-20" : "w-72"} transition-all duration-300 ease-in-out shadow-sm`}
    >
      {/* Logo Area */}
      <div className={`py-6 border-b border-gray-100 flex ${isCollapsed ? 'justify-center' : 'justify-between px-4'} items-center transition-all duration-300 ease-in-out`}>
        {!isCollapsed ? (
          <>
            <div className="font-bold text-2xl text-rose-500 flex items-center">
              <Home className="mr-2" size={24} />
              <span className="transition-opacity duration-300 ease-in-out">Airbnb</span>
            </div>
            
            <button 
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors" 
              onClick={() => setIsCollapsed(!isCollapsed)}
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <ChevronLeft size={18} />
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-rose-100 rounded-full mb-2">
              <Home className="text-rose-500" size={28} />
            </div>
            
            <button 
              className="p-1 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors" 
              onClick={() => setIsCollapsed(!isCollapsed)}
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-6 px-3 overflow-y-auto">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'} 
                gap-3 px-4 py-3 rounded-lg transition-all duration-300 ease-in-out text-lg font-medium
                ${location.pathname === item.path 
                  ? "bg-rose-50 text-rose-500" 
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`}
            >
              <div className={`transition-colors duration-300 ${location.pathname === item.path ? "text-rose-500" : "text-gray-500"}`}>
                {item.icon}
              </div>
              {!isCollapsed && <span className="transition-opacity duration-300 ease-in-out">{item.name}</span>}
            </Link>
          ))}
        </div>
      </nav>

      {/* User Profile Section */}
      <div className={`px-4 py-4 border-t border-gray-100 transition-all duration-300 ease-in-out ${isCollapsed ? 'opacity-0 max-h-0 py-0 overflow-hidden' : 'opacity-100 max-h-24'}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
            <span className="text-lg font-medium">U</span>
          </div>
          <div>
            <p className="font-medium text-gray-900">User Name</p>
            <p className="text-sm text-gray-500">user@example.com</p>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-100">
        <button 
          className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'} 
            gap-3 px-4 py-3 rounded-lg transition-all duration-300 ease-in-out text-lg
            text-gray-700 hover:bg-red-50 hover:text-red-600`}
        >
          <LogOut size={22} />
          {!isCollapsed && <span className="transition-opacity duration-300 ease-in-out">Logout</span>}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;