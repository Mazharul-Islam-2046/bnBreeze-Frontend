import { api } from "./axiosInstance";


const propertiesApi = {
    getProperties: () => {
        return api.get("/properties?page=1&limit=10");
    },
    getProperty: (id) => {
        return api.get(`/properties/${id}`);
    },
    addProperty: (propertyData) => {
        return api.post("/properties", propertyData);
    },
    updateProperty: (id, propertyData) => {
        return api.put(`/properties/${id}`, propertyData);
    },
    deleteProperty: (id) => {
        return api.delete(`/properties/${id}`);
    },
};

export default propertiesApi;