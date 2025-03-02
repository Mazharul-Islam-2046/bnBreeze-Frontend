import { Calendar, Home } from "lucide-react";
import { useState } from "react";

function MyBookings() {
  const [bookings] = useState([
    {
      id: 1,
      propertyName: "Cozy Apartment",
      location: "New York",
      checkIn: "2025-03-10",
      checkOut: "2025-03-15",
      status: "Confirmed",
      image: "https://picsum.photos/seed/67bbe0210ae636aafc0fa92f/600/400",
    },
    {
      id: 2,
      propertyName: "Beachside Villa",
      location: "Miami",
      checkIn: "2025-04-01",
      checkOut: "2025-04-07",
      status: "Pending",
      image: "https://picsum.photos/seed/67bbe0220ae636aafc0fa930/600/400",
    },
    {
      id: 3,
      propertyName: "Mountain Retreat",
      location: "Denver",
      checkIn: "2025-05-10",
      checkOut: "2025-05-15",
      status: "Confirmed",
      image: "https://picsum.photos/seed/67bbe0230ae636aafc0fa931/600/400",
    },
    {
      id: 4,
      propertyName: "Urban Loft",
      location: "Chicago",
      checkIn: "2025-06-01",
      checkOut: "2025-06-07",
      status: "Confirmed",
      image: "https://picsum.photos/seed/67bbe0240ae636aafc0fa932/600/400",
    },
    {
      id: 5,
      propertyName: "Lake House",
      location: "Seattle",
      checkIn: "2025-07-10",
      checkOut: "2025-07-15",
      status: "Cancelled",
      image: "https://picsum.photos/seed/67bbe0230ae636aafc0fa931/600/400",
    },
    {
      id: 6,
      propertyName: "Country Cottage",
      location: "Austin",
      checkIn: "2025-08-01",
      checkOut: "2025-08-07",
      status: "Confirmed",
      image: "https://picsum.photos/seed/67bbe0220ae636aafc0fa930/600/400",
    },
    {
      id: 7,
      propertyName: "City Condo",
      location: "San Francisco",
      checkIn: "2025-09-10",
      checkOut: "2025-09-15",
      status: "Pending",
      image: "https://picsum.photos/seed/67bbe0240ae636aafc0fa932/600/400",
    },
    {
      id: 8,
      propertyName: "Rural Farmhouse",
      location: "Nashville",
      checkIn: "2025-10-01",
      checkOut: "2025-10-07",
      status: "Confirmed",
      image: "https://picsum.photos/seed/67bbe0210ae636aafc0fa92f/600/400",
    },
    {
      id: 9,
      propertyName: "Modern Apartment",
      location: "Los Angeles",
      checkIn: "2025-11-10",
      checkOut: "2025-11-15",
      status: "Confirmed",
      image: "https://picsum.photos/seed/67bbe0230ae636aafc0fa931/600/400",
    },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col"
          >
            {/* Image Section */}
            <img
              src={booking.image}
              alt={booking.propertyName}
              className="w-full h-40 object-cover"
            />
            {/* Details Section */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-1">{booking.propertyName}</h2>
              <p className="text-gray-600 flex items-center gap-1 mb-2">
                <Home size={16} /> {booking.location}
              </p>
              <div className="text-gray-500 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>Check-in: {booking.checkIn}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>Check-out: {booking.checkOut}</span>
                </div>
              </div>
              {/* Status Badge & CTA */}
              <div className="mt-auto flex justify-between items-center">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    booking.status === "Confirmed"
                      ? "bg-green-100 text-green-800"
                      : booking.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {booking.status}
                </span>
                <button className="text-blue-600 font-medium hover:underline">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;
