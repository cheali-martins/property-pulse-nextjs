import connectDB from "@/config/database";
import PropertyCard from "@/components/PropertyCard";
import Property from "@/models/Property";

const PropertiesPage = async () => {
  await connectDB();
  const properties = await Property.find({}).lean();

  // Sort Properties by date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div>
                <PropertyCard
                  key={property._id}
                  property={property}
                  hover={true}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
