import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";

const NewsDetailPage = ({ data, slugParamName = "slug" }) => {
    const params = useParams();
    const slug = params[slugParamName];

    if (!Array.isArray(data)) {
        return (
            <div className="text-center py-10">Loading or invalid news data.</div>
        );
    }

    const item = data.find((entry) => entry.slug === slug);

    if (!item) {
        return <div className="text-center py-10">News article not found.</div>;
    }

    const {
        title,
        date,
        description,
        imageUrl,
        services = [],
        markets = [],
        types = [],
    } = item;

    const dateChanged = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div >
            <div className=" flex items-start  News  w-full ">
                <div className=" w-full py-10 px-4  xl:px-32  flex flex-col items-start ">
                    <h1 className=" News-date text-white text-[1.3rem]">Press Release</h1>
                    <div className="flex items-center News-date text-white">
                        <FaRegCalendarAlt size={20} className="mr-2 font-bold" />
                        <div className="mt-0.5 uppercase">{dateChanged}</div>
                    </div>
                    <h1 className="News-detail-title">{title}</h1>
                    {/* 🔹 Types */}
                    {types.length > 0 && (
                        <div className="mb-6 mt-2 flex flex-wrap gap-2">
                            {types.map((t) => (
                                <span
                                    key={t._id}
                                    className="News-Details-type"
                                >
                                    {t.title ?? t.type ?? "Untitled"}
                                </span>
                            ))}
                        </div>
                    )}

                </div>
            </div>
            <section className="section-layout">

                <div className="max-w-7xl mx-auto">



                    {/* 🔹 Image */}

                    {/* 🔹 Main Layout: Left Description + Right Sidebar */}
                    <div className="flex flex-col lg:flex-row gap-10">

                        {/* Left: Description */}
                        <div className="lg:w-2/3 ">
                           

                           <div>
                            {description && (
                                <div className="Project-description">
                                    {description}
                                </div>
                            )}

                           </div>
                            
                        </div>

                        {/* Right: Services + Markets */}
                        <div className="lg:w-1/3 space-y-8">
                            {/* Markets */}
                            {markets.length > 0 && (
                                <div>
                                    <h3 className="Project-service">Markets</h3>
                                    <ul className="mt-2 list-disc list-inside Project-service-description">
                                        {markets.map((m) => (
                                            <li key={m._id}>
                                                <Link to={`/markets/${m.slug}`}>
                                                    {m.title ?? "Unnamed Market"}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Services */}
                            {services.length > 0 && (
                                <div>
                                    <h3 className="Project-service">Services</h3>
                                    <ul className="mt-2 list-disc list-inside Project-service-description">
                                        {services.map((s) => (
                                            <li key={s._id }>
                                                <Link to={`/services/${s.slug}`}>
                                                    {s.title ?? "Unnamed Service"}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsDetailPage;
