import React from "react";

const VisionMissionObjectives = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-3">
      {/* Header Section */}
      <header className="bg-blue-600 text-white text-center py-3">
        <h1 className="text-4xl font-bold">Our Vision, Mission & Objectives</h1>
      </header>

      {/* Content Wrapper */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
        {/* Vision Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-blue-600">Our Vision</h2>
          <p className="text-gray-700 mt-2 leading-relaxed">
            Our vision is to create a strong, united, and self-reliant Ghosi
            community by leveraging technology, education, and economic
            empowerment. Through our website, we aim to build a digital platform
            where Ghosi members can connect, collaborate, and grow together,
            fostering a future where every individual has access to
            opportunities, resources, and support for a better life.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-blue-600">Our Mission</h2>
          <p className="text-gray-700 mt-2 leading-relaxed">
            Our mission is committed to fostering unity, progress, and
            empowerment within the Ghosi community. We aim to uplift our people
            through education, economic opportunities, and social welfare, while
            preserving our cultural heritage.
          </p>
        </section>

        {/* Objectives Section */}
        <section>
          <h2 className="text-2xl font-bold text-blue-600">Our Objectives</h2>
          <ul className="mt-4 space-y-4 text-gray-700">
            {[
              "Knowledge Sharing Platform – Creating a common space for Ghosi scholars and professionals to exchange ideas, collaborate, and contribute to community growth.",
              "Global Networking – Strengthening connections among Ghosi members across India and abroad to promote cooperation and support.",
              "Stronger Social Bonds – Encouraging social networking and support systems where community members help each other in times of need.",
              "Economic Growth through Dairy Farming – Introducing modern technology and business strategies to boost income and efficiency.",
              "Youth Leadership & Organization – Guiding and empowering young members to take leadership roles in community development and welfare.",
              "Education & Job Support – Providing scholarship information, career counseling, and skill development programs to help youth secure better educational and employment opportunities.",
              "Matrimonial Support & Counseling – Assisting Ghosi families in finding suitable alliances and offering guidance for successful marriages within the community.",
              "Marriage Support for Underprivileged Girls – Helping financially weak families by providing assistance for daughters’ weddings and encouraging community marriages.",
              "Protection & Justice for Community Members – Standing against any injustice or discrimination, ensuring that no Ghosi member faces exploitation alone.",
              "Preserving Culture & Traditions – Promoting awareness, participation, and celebrations of Ghosi heritage, traditions, and knowledge-sharing.",
            ].map((objective, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 text-lg font-bold mr-2">•</span>
                {objective}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default VisionMissionObjectives;
