import PropTypes from "prop-types";
import { TrendingUp, User } from "lucide-react"; // Assuming you want to use these icons

const DashboardCard = ({
  title,
  value,
  icon,
  subtitle,
  trend,
  trendUp,
  large,
  clickable,
  className
}) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md border border-gray-200 bg-white
        ${large ? "h-64" : "h-52"} 
        ${clickable ? "hover:shadow-lg hover:border-gray-300 cursor-pointer" : "cursor-default"} 
        transition-all duration-200 flex flex-col justify-between ${className}`}
    >
      <div className="flex items-center gap-4 text-gray-700">
        <div className="text-gray-500">{icon}</div>
        <h2 className="text-lg font-medium">{title}</h2>
      </div>

      <div>
        <p className={`${large ? "text-4xl" : "text-3xl"} font-bold text-gray-800 mb-2`}>{value}</p>
        {subtitle && <p className="text-gray-500 text-lg">{subtitle}</p>}
      </div>

      {trend && (
        <div
          className={`flex items-center ${
            trendUp ? "text-green-500" : "text-gray-500"
          } text-lg font-medium`}
        >
          {trendUp ? (
            <TrendingUp size={20} className="mr-2" />
          ) : (
            <User size={20} className="mr-2" />
          )}
          {trend}
        </div>
      )}

      {clickable && (
        <div className="text-lg text-blue-600 font-medium flex items-center">
          View details
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

// PropTypes for Type Safety
DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
  trend: PropTypes.string,
  trendUp: PropTypes.bool,
  large: PropTypes.bool,
  clickable: PropTypes.bool,
  className: PropTypes.string
};

// Default Props
DashboardCard.defaultProps = {
  large: false,
  clickable: false,
  subtitle: null,
  trend: null,
  trendUp: false,
  className: ""
};

export default DashboardCard;
