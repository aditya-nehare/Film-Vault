import { useEffect, useState } from "react";
import "./Advertise.css";

function Poster() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetch("./posters_section.json")
      .then((res) => res.json())
      .then((data) => {
        const activeAds = data.filter((ad) => ad.active);
        setAds(activeAds);
      })
      .catch((err) => {
        console.error("Failed to load ads", err);
      });
  }, []);

  if (ads.length === 0) return null;

  return (
    <section className="px-8 py-1 bg-[#ffffff]">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Posters
      </h3>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
        {ads.map((ad) => (
          <a
            key={ad.id}
            href={ad.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-shrink-0
              w-[260px]
              bg-white
              rounded-2xl
              shadow-md
              hover:shadow-xl
              transition
              overflow-hidden
            "
          >
            <div className="h-[320px] bg-gray-100">
              <img
                src={ad.image}
                alt={ad.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                {ad.title}
              </h4>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Poster;
