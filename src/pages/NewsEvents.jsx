import React, { useState } from "react";

const newsData = [
  {
    id: 1,
    title: "Annual Science Conference 2025",
    date: "March 15, 2025",
    image: "https://source.unsplash.com/400x250/?conference",
    description:
      "Join the annual science conference where experts discuss new advancements in technology and research.",
  },
  {
    id: 2,
    title: "Workshop on AI & Machine Learning",
    date: "April 10, 2025",
    image: "https://source.unsplash.com/400x250/?technology",
    description:
      "A hands-on workshop for beginners and professionals to explore AI and ML techniques.",
  },
  {
    id: 3,
    title: "Cultural Fest 2025",
    date: "May 5, 2025",
    image: "https://source.unsplash.com/400x250/?festival",
    description:
      "Experience the vibrance of our annual cultural fest with music, dance, and food!",
  },
];

const NewsEvents = () => {
  const [expandedNews, setExpandedNews] = useState(null);

  const toggleExpand = (id) => {
    setExpandedNews(expandedNews === id ? null : id);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        News & Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <div key={news.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{news.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{news.date}</p>
              <p className="text-gray-700">
                {expandedNews === news.id ? news.description : `${news.description.substring(0, 60)}...`}
              </p>
              <button
                onClick={() => toggleExpand(news.id)}
                className="mt-3 inline-block text-blue-500 hover:underline"
              >
                {expandedNews === news.id ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsEvents;
