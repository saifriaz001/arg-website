import React, { useEffect, useState } from 'react';
import { getLocations } from '../../Endpoints/LocationAPI'; // Adjust path accordingly

const LocationList = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await getLocations();
        setLocations(data?.data || []); // data should contain array inside `data`
      } catch (error) {
        console.error('Error fetching locations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">Locations</h2>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : locations.length === 0 ? (
        <p className="text-gray-500">No locations found.</p>
      ) : (
        <table className="min-w-full text-sm text-left border border-gray-300">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-2 border-r">#</th>
              <th className="px-4 py-2 border-r">Country</th>
              <th className="px-4 py-2 border-r">State</th>
              <th className="px-4 py-2">Town</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((loc, index) => (
              <tr key={loc._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 border-r">{index + 1}</td>
                <td className="px-4 py-2 border-r">{loc.country}</td>
                <td className="px-4 py-2 border-r">{loc.state}</td>
                <td className="px-4 py-2">{loc.town}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LocationList;