import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { Bell, User, Menu, Settings, LogOut, HelpCircle } from "lucide-react";

const DashboardHeader = ({ toggleSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const notificationsRef = useRef(null);
  const userMenuRef = useRef(null);
  
  // Handle clicks outside the dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close notifications dropdown if clicked outside
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      
      // Close user menu dropdown if clicked outside
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <header className="bg-white h-16 px-6 flex items-center justify-between border-b border-gray-200 sticky top-0 z-10">
      {/* Left side - Mobile menu toggle */}
      <div className="lg:hidden">
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
        >
          <Menu size={20} />
        </button>
      </div>
      
      {/* Page title - Only visible on mobile/tablet */}
      <div className="md:hidden font-bold text-gray-800">
        Dashboard
      </div>
      
      {/* Right side - Actions */}
      <div className="flex items-center space-x-4 ml-auto">
        {/* Notifications */}
        <div className="relative" ref={notificationsRef}>
          <button 
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600 relative"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-rose-500 rounded-full flex items-center justify-center text-white text-xs">3</span>
          </button>
          
          {/* Notifications dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 border border-gray-200 z-20">
              <div className="px-4 py-2 border-b border-gray-100">
                <h3 className="font-medium">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {/* Sample notifications */}
                <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100">
                  <p className="text-sm font-medium">New booking received</p>
                  <p className="text-xs text-gray-500">Chicago property - Mar 15-20</p>
                </div>
                <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100">
                  <p className="text-sm font-medium">Payment confirmed</p>
                  <p className="text-xs text-gray-500">$350 received for New York booking</p>
                </div>
                <div className="px-4 py-3 hover:bg-gray-50">
                  <p className="text-sm font-medium">Review received</p>
                  <p className="text-xs text-gray-500">5 stars from John D. for Miami property</p>
                </div>
              </div>
              <div className="px-4 py-2 border-t border-gray-100">
                <button className="text-rose-500 text-sm hover:underline">Mark all as read</button>
              </div>
            </div>
          )}
        </div>
        
        {/* User menu */}
        <div className="relative" ref={userMenuRef}>
          <button 
            className="flex items-center space-x-3 hover:bg-gray-50 rounded-full py-1 px-2"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">
              <User size={20} />
            </div>
            <div className="hidden md:block pr-1">
              <p className="text-sm font-medium text-gray-800 text-left">Alex Johnson</p>
              <p className="text-xs text-gray-500 text-left">Host</p>
            </div>
          </button>
          
          {/* User dropdown menu */}
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200 z-20">
              <div className="border-b border-gray-100 pb-2 mb-1">
                <div className="px-4 py-2">
                  <p className="text-sm font-medium">Alex Johnson</p>
                  <p className="text-xs text-gray-500">alex.johnson@example.com</p>
                </div>
              </div>
              
              <a href="/dashboard/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <User size={16} className="mr-2 text-gray-500" />
                Profile
              </a>
              
              <a href="/dashboard/settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <Settings size={16} className="mr-2 text-gray-500" />
                Account Settings
              </a>
              
              <a href="/help" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <HelpCircle size={16} className="mr-2 text-gray-500" />
                Help Center
              </a>
              
              <div className="border-t border-gray-100 mt-1 pt-1">
                <button className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-50">
                  <LogOut size={16} className="mr-2" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;

DashboardHeader.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
};

