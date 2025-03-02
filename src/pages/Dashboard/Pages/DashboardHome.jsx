import { useState, useEffect } from "react";
import { Home, Calendar, List, DollarSign, RefreshCw, Bolt, PlusCircle, MapPin, MessageSquare, Star, Heart, ChevronLeft, ChevronRight, Clock, User, HelpCircle } from "lucide-react";
import DashboardCard from "../components/DashboardCard";
import BookingSummary from "../components/BookingSummary";
import RevenueChart from "../components/RevenueChart";

const DashboardHome = () => {
  // State for user type toggle
  const [userType, setUserType] = useState("host"); // "host" or "guest"
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('upcoming');

  // Dummy Data (Replace with API Data)
  const [hostData] = useState({
    totalBookings: 5,
    upcomingBooking: { location: "New York", date: "March 10, 2025" },
    totalListings: 3,
    earnings: "$4,250",
    recentActivity: "Booked a stay in Los Angeles",
  });

  // Guest Data
  const [guestData] = useState({
    upcomingTrips: [
      {
        id: 1,
        title: "Beachfront Villa",
        location: "Bali, Indonesia",
        dates: "March 15-22, 2025",
        status: "Confirmed",
        image: "/api/placeholder/600/400",
        rating: 4.9,
        checkIn: "3:00 PM",
        checkOut: "11:00 AM",
        host: "Sarah Johnson",
        price: "$1,200"
      },
      {
        id: 2,
        title: "Mountain Cabin",
        location: "Aspen, Colorado",
        dates: "April 5-10, 2025",
        status: "Pending Payment",
        image: "/api/placeholder/600/400",
        rating: 4.7,
        checkIn: "4:00 PM",
        checkOut: "10:00 AM",
        host: "Michael Brown",
        price: "$850"
      }
    ],
    pastTrips: [
      {
        id: 3,
        title: "City Apartment",
        location: "Paris, France",
        dates: "January 10-15, 2025",
        status: "Completed",
        image: "/api/placeholder/600/400",
        rating: 4.5,
        reviewSubmitted: true
      }
    ],
    savedProperties: [
      {
        id: 4,
        title: "Lakeside Cottage",
        location: "Lake Tahoe, California",
        price: "$175/night",
        image: "/api/placeholder/600/400",
        rating: 4.8
      },
      {
        id: 5,
        title: "Luxury Penthouse",
        location: "New York City, NY",
        price: "$350/night",
        image: "/api/placeholder/600/400",
        rating: 4.6
      }
    ],
    propertyImages: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400"
    ]
  });

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % guestData.propertyImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + guestData.propertyImages.length) % guestData.propertyImages.length);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center">
          <Home className="mr-3 text-rose-500" size={28} />
          Dashboard
        </h1>

        <div className="flex items-center gap-4">
          {/* User Type Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              className={`py-2 px-4 rounded-md ${userType === 'host' ? 'bg-white shadow-sm text-rose-500 font-medium' : 'text-gray-500'}`}
              onClick={() => setUserType('host')}
            >
              Host
            </button>
            <button
              className={`py-2 px-4 rounded-md ${userType === 'guest' ? 'bg-white shadow-sm text-rose-500 font-medium' : 'text-gray-500'}`}
              onClick={() => setUserType('guest')}
            >
              Guest
            </button>
          </div>

          {userType === 'host' && (
            <button className="bg-rose-500 hover:bg-rose-600 text-white py-2 px-4 rounded-lg flex items-center transition-colors">
              <PlusCircle size={18} className="mr-2" />
              Add New Listing
            </button>
          )}

          {userType === 'guest' && (
            <button className="bg-rose-500 hover:bg-rose-600 text-white py-2 px-4 rounded-lg flex items-center transition-colors">
              <Search size={18} className="mr-2" />
              Find Places
            </button>
          )}
        </div>
      </div>

      {/* Host Dashboard */}
      {userType === 'host' && (
        <>
          {/* Analytics Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Bookings */}
            <DashboardCard
              title="Total Bookings"
              value={hostData.totalBookings}
              icon={<Calendar size={24} />}
              subtitle="Active reservations"
              trend={"+2 this week"}
              trendUp={true}
            />
           
            {/* Upcoming Booking */}
            <DashboardCard
              title="Upcoming Booking"
              value={`${hostData.upcomingBooking.location}`}
              subtitle={hostData.upcomingBooking.date}
              icon={<Home size={24} />}
            />
           
            {/* Total Listings */}
            <DashboardCard
              title="Total Listings"
              value={hostData.totalListings}
              icon={<List size={24} />}
              subtitle="Active properties"
              trend={"1 pending review"}
            />
           
            {/* Earnings */}
            <DashboardCard
              title="Earnings"
              value={hostData.earnings}
              icon={<DollarSign size={24} />}
              subtitle="This month"
              trend={"+18% from last month"}
              trendUp={true}
            />
          </div>
         
          {/* Revenue Chart */}
          <RevenueChart />
         
          {/* Recent Bookings Table */}
          <BookingSummary />
         
          {/* Quick Actions Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <DashboardCard
              title="Recent Activity"
              value={hostData.recentActivity}
              icon={<RefreshCw size={24} />}
              subtitle="2 hours ago"
            />
           
            {/* Quick Actions */}
            <DashboardCard
              title="Quick Actions"
              value="Manage Listings"
              icon={<Bolt size={24} />}
              clickable
            />
          </div>
        </>
      )}

      {/* Guest Dashboard */}
      {userType === 'guest' && (
        <>
          {/* Trip Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-rose-50 rounded-xl p-6 flex items-center">
              <div className="bg-rose-100 p-3 rounded-full mr-4">
                <Calendar className="text-rose-500" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Upcoming Trips</p>
                <p className="text-2xl font-bold text-gray-900">{guestData.upcomingTrips.length}</p>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <MapPin className="text-blue-500" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Places Visited</p>
                <p className="text-2xl font-bold text-gray-900">{guestData.pastTrips.length}</p>
              </div>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-6 flex items-center">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <Heart className="text-amber-500" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Saved Properties</p>
                <p className="text-2xl font-bold text-gray-900">{guestData.savedProperties.length}</p>
              </div>
            </div>
          </div>
          
          {/* Next Trip Highlight */}
          {guestData.upcomingTrips.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Next Trip</h2>
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="relative h-64">
                  <img 
                    src={guestData.propertyImages[currentImageIndex]} 
                    alt="Property" 
                    className="w-full h-full object-cover"
                  />
                  
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} />
                  </button>
                  
                  <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentImageIndex + 1}/{guestData.propertyImages.length}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{guestData.upcomingTrips[0].title}</h3>
                      <p className="text-gray-600 flex items-center mt-1">
                        <MapPin size={16} className="mr-1" />
                        {guestData.upcomingTrips[0].location}
                      </p>
                    </div>
                    <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-green-700 text-sm font-medium">{guestData.upcomingTrips[0].status}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-100 rounded-lg p-3">
                      <p className="text-gray-500 text-sm mb-1">Check-in</p>
                      <div className="flex items-center">
                        <Clock size={16} className="text-gray-400 mr-2" />
                        <p className="font-medium">{guestData.upcomingTrips[0].checkIn}</p>
                      </div>
                    </div>
                    
                    <div className="border border-gray-100 rounded-lg p-3">
                      <p className="text-gray-500 text-sm mb-1">Check-out</p>
                      <div className="flex items-center">
                        <Clock size={16} className="text-gray-400 mr-2" />
                        <p className="font-medium">{guestData.upcomingTrips[0].checkOut}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-2">
                        <span className="text-sm font-medium">H</span>
                      </div>
                      <p className="text-sm">Host: {guestData.upcomingTrips[0].host}</p>
                    </div>
                    
                    <button className="flex items-center text-rose-500 font-medium">
                      <MessageSquare size={16} className="mr-1" />
                      Message Host
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Tabs Navigation */}
          <div className="border-b border-gray-200 mb-6">
            <div className="flex space-x-8">
              <button 
                className={`pb-4 px-1 ${activeTab === 'upcoming' ? 'border-b-2 border-rose-500 text-rose-500 font-medium' : 'text-gray-500'}`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming Trips
              </button>
              <button 
                className={`pb-4 px-1 ${activeTab === 'past' ? 'border-b-2 border-rose-500 text-rose-500 font-medium' : 'text-gray-500'}`}
                onClick={() => setActiveTab('past')}
              >
                Past Trips
              </button>
              <button 
                className={`pb-4 px-1 ${activeTab === 'saved' ? 'border-b-2 border-rose-500 text-rose-500 font-medium' : 'text-gray-500'}`}
                onClick={() => setActiveTab('saved')}
              >
                Saved Properties
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="mb-8">
            {activeTab === 'upcoming' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guestData.upcomingTrips.map(trip => (
                  <div key={trip.id} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-48 relative">
                      <img src={trip.image} alt={trip.title} className="w-full h-full object-cover" />
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                        trip.status === 'Confirmed' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
                      }`}>
                        {trip.status}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900">{trip.title}</h3>
                      <p className="text-gray-600 text-sm flex items-center mt-1">
                        <MapPin size={14} className="mr-1" />
                        {trip.location}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="text-gray-400 mr-2" />
                          <p className="text-gray-700 text-sm">{trip.dates}</p>
                        </div>
                        <div className="flex items-center">
                          <Star size={16} className="text-amber-400 mr-1" />
                          <span className="text-gray-700 text-sm">{trip.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'past' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guestData.pastTrips.map(trip => (
                  <div key={trip.id} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="h-48">
                      <img src={trip.image} alt={trip.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900">{trip.title}</h3>
                      <p className="text-gray-600 text-sm flex items-center mt-1">
                        <MapPin size={14} className="mr-1" />
                        {trip.location}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="text-gray-400 mr-2" />
                          <p className="text-gray-700 text-sm">{trip.dates}</p>
                        </div>
                        <div className="flex items-center">
                          <Star size={16} className="text-amber-400 mr-1" />
                          <span className="text-gray-700 text-sm">{trip.rating}</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        {trip.reviewSubmitted ? (
                          <div className="text-green-600 text-sm flex items-center">
                            <Star size={16} className="mr-1" />
                            Review submitted
                          </div>
                        ) : (
                          <button className="text-rose-500 text-sm font-medium">
                            Write a review
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'saved' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guestData.savedProperties.map(property => (
                  <div key={property.id} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-48 relative">
                      <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                      <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm">
                        <Heart size={16} className="text-rose-500 fill-rose-500" />
                      </button>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900">{property.title}</h3>
                      <p className="text-gray-600 text-sm flex items-center mt-1">
                        <MapPin size={14} className="mr-1" />
                        {property.location}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <p className="text-gray-900 font-medium">{property.price}</p>
                        <div className="flex items-center">
                          <Star size={16} className="text-amber-400 mr-1" />
                          <span className="text-gray-700 text-sm">{property.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// Missing component import
const Search = ({ size, className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
};

export default DashboardHome;