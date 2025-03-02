import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarSign } from 'lucide-react';

const RevenueChart = () => {
  // Sample data - replace with your actual data
  const data = [
    { name: 'Jan', revenue: 4000, bookings: 8 },
    { name: 'Feb', revenue: 3000, bookings: 6 },
    { name: 'Mar', revenue: 5000, bookings: 10 },
    { name: 'Apr', revenue: 4500, bookings: 9 },
    { name: 'May', revenue: 6000, bookings: 12 },
    { name: 'Jun', revenue: 7000, bookings: 14 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-8">
      <div className="flex items-center mb-6">
        <DollarSign className="mr-2 text-rose-500" size={24} />
        <h2 className="text-xl font-bold text-gray-800">Revenue Analytics</h2>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="revenue" 
              stroke="#f43f5e" 
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="bookings" 
              stroke="#3b82f6" 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;