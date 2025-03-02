import { Calendar, MapPin, Users, Star } from "lucide-react";

const BookingSummary = () => {
  // Sample booking data
  const bookings = [
    {
      id: 1,
      property: "Modern Apartment in Downtown",
      location: "New York, NY",
      dates: "Mar 10-15, 2025",
      guests: 2,
      status: "confirmed",
      amount: "$780",
      rating: 4.9
    },
    {
      id: 2,
      property: "Beachfront Villa",
      location: "Miami, FL",
      dates: "Apr 3-10, 2025",
      guests: 4,
      status: "pending",
      amount: "$1,450",
      rating: null
    },
    {
      id: 3,
      property: "Cozy Cabin Retreat",
      location: "Aspen, CO",
      dates: "Mar 23-27, 2025",
      guests: 3,
      status: "confirmed",
      amount: "$920",
      rating: 5.0
    }
  ];
  
  // Status badge styles
  const statusStyles = {
    confirmed: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    cancelled: "bg-red-100 text-red-800"
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden mt-8">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <Calendar className="mr-2 text-rose-500" size={20} />
          Recent Bookings
        </h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guests</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">{booking.property}</span>
                    <span className="text-xs text-gray-500 flex items-center mt-1">
                      <MapPin size={12} className="mr-1" /> {booking.location}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.dates}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <Users size={14} className="mr-1" />
                    {booking.guests}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${statusStyles[booking.status]}`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {booking.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {booking.rating ? (
                    <div className="flex items-center text-sm">
                      <Star size={14} className="text-yellow-400 mr-1" />
                      <span>{booking.rating}</span>
                    </div>
                  ) : (
                    <span className="text-xs text-gray-400">Pending</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
        <button className="text-rose-500 font-medium text-sm hover:text-rose-600 transition-colors">
          View all bookings →
        </button>
      </div>
    </div>
  );
}

export default BookingSummary;