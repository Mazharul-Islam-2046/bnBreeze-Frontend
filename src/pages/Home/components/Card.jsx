import { Calendar, Heart, Star, Wifi, Flame, Droplets, UtensilsCrossed } from 'lucide-react';
import PropTypes from 'prop-types';

const Card = ({ propertyData }) => {
  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case 'Wi-Fi':
        return <Wifi size={16} />;
      case 'Fireplace':
        return <Flame size={16} />;
      case 'Hot Tub':
        return <Droplets size={16} />;
      case 'Kitchen':
        return <UtensilsCrossed size={16} />;
      default:
        return null;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Add null checks to prevent the error
  if (!propertyData || !propertyData.images || !propertyData.images[0]) {
    return <div>Loading property data...</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="relative">
        <img 
          className="h-48 w-full object-cover" 
          src={propertyData.images[0].url} 
          alt={propertyData.images[0].description}
        />
        <button className="absolute top-4 right-4 p-1 rounded-full bg-white/70 hover:bg-white">
          <Heart size={20} className="text-gray-700" />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{propertyData.title}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {propertyData.address.city}, {propertyData.address.state}
            </p>
          </div>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span className="ml-1 text-sm font-medium">
              {propertyData.reviews[0].rating.toFixed(1)}
            </span>
          </div>
        </div>
        
        <p className="mt-4 text-gray-600 text-sm">
          {propertyData.description}
        </p>
        
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-900">Amenities</h3>
          <div className="flex flex-wrap gap-3 mt-2">
            {propertyData.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center text-xs text-gray-600">
                <span className="mr-1">{getAmenityIcon(amenity)}</span>
                {amenity}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-900">Availability</h3>
          <div className="flex flex-col gap-2 text-xs text-gray-600 mt-2">
            {propertyData.availability.map((period, index) => (
              <div key={index} className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>
                  {formatDate(period.startDate)} - {formatDate(period.endDate)}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6">
          <div className="text-sm italic text-gray-600 mb-3">
            {propertyData.reviews[0].comment}
          </div>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <div>
            <span className="text-xl font-bold text-gray-900">${propertyData.pricePerNight}</span>
            <span className="text-gray-600 text-sm"> / night</span>
          </div>
          <button className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;


// Prop type validation
Card.propTypes = {
    propertyData: PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      pricePerNight: PropTypes.number.isRequired,
      address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        zipCode: PropTypes.string.isRequired
      }).isRequired,
      amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string,
          url: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired
        })
      ).isRequired,
      host: PropTypes.string.isRequired,
      availability: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string,
          startDate: PropTypes.string.isRequired,
          endDate: PropTypes.string.isRequired
        })
      ).isRequired,
      reviews: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string,
          user: PropTypes.string.isRequired,
          rating: PropTypes.number.isRequired,
          comment: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired
        })
      ).isRequired
    }).isRequired
  };
  
  // Default props
  Card.defaultProps = {
    propertyData: null
  };