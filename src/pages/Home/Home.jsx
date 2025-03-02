import { useEffect, useState } from "react";
import propertiesApi from "../../api/propertiesApi";
import Card from "./components/Card";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
    
    const [propeties, setProperties] = useState([]) 


    // use tanstack query

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['properties'],
        queryFn: () => propertiesApi.getProperties(),
    });


    useEffect(() => {
        if (data) {
            setProperties(data.data.data.properties);
        }
    }, [data]);

    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }


    // setProperties(data.data.data.properties)
    console.log(data.data.data.properties);



    // useEffect(() => {
    //     propertiesApi.getProperties()
    //         .then(data => {
    //             setProperties(data.data.data.properties); // Directly set the state
    //             console.log(data.data.data.properties); // Log the fetched data
    //         })
    //         .catch(error => console.error("Error fetching properties:", error));
    // }, []);


    return (
        <div>
            <h1>Home Page</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {propeties.map(property => (
                    <Card key={property._id} propertyData={property} />
                ))}

            </div>
        </div>
    );
};

export default Home;