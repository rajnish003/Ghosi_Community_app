import React from 'react'

const Aboutghosi = () => {
  return (
    <div>
          <div className="bg-gray-200 min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-900 text-white text-center py-3 shadow-lg">
        <h1 className="text-3xl font-bold">About Ghosi Community</h1>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto bg-white p-8 mt-6 rounded-lg shadow-lg">
        {/* Origin of the Ghosi Community */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Origin of the Ghosi Community</h2>
          <p className="text-gray-700 leading-relaxed">
            The name "Ghosi" is said to be derived from the word "Ghush," meaning to shout. The Ghosi community is 
            well known in Uttar Pradesh and is present in almost every district. This community is scattered across 
            India and can be found in states like Delhi, Rajasthan, and many others. Some members of the Ghosi 
            community also reside in Pakistan.
          </p>
        </section>

        {/* Occupation and Livelihood */}
        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Occupation and Livelihood</h2>
          <p className="text-gray-700 leading-relaxed">
            The Ghosi people have traditionally been involved in cattle rearing and dairy farming. They extract milk 
            and sell it in markets or households. Additionally, they produce dairy products such as ghee, khoya, and 
            paneer. Apart from dairy farming, agriculture plays a significant role in their lives, providing fodder 
            for their cattle and supporting self-sustenance.
          </p>
        </section>

        {/* Cultural and Religious Beliefs */}
        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Cultural and Religious Beliefs</h2>
          <p className="text-gray-700 leading-relaxed">
            The Ghosi community follows the Islamic faith and primarily belongs to the Sunni faction. They strongly 
            adhere to the five pillars of Islam: Iman (faith), Namaz (prayers), fasting during Ramadan, Zakat 
            (charity), and Hajj (pilgrimage). In earlier times, they used to celebrate important occasions by 
            singing traditional folk songs called "Behra."
          </p>
        </section>

        {/* Marriage System */}
        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Marriage System</h2>
          <p className="text-gray-700 leading-relaxed">
            The Ghosi community follows an arranged marriage system within their community. They practice the 
            Gotra (Sijra) system, and marriages between closely related family members are common. Both monogamy 
            and polygamy are accepted, though polygamy is rare. Divorce is allowed, and remarriage is permitted 
            for both men and women.
          </p>
        </section>

        {/* Women in the Ghosi Community */}
        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Women in the Ghosi Community</h2>
          <p className="text-gray-700 leading-relaxed">
            Women in the Ghosi community actively contribute to household income by producing and selling dairy 
            products. They generally perform prayers at home instead of in mosques. While they have almost equal 
            status to men in many aspects, patriarchal traditions still exist.
          </p>
        </section>

        {/* Panchayat System */}
        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">The Panchayat System</h2>
          <p className="text-gray-700 leading-relaxed">
            The Ghosi community historically had a strong Panchayat system to resolve internal disputes. The 
            council typically consisted of three to five respected elders. The leader, known as "Chaudhry," played 
            a crucial role in decision-making. The Panchayat addressed issues like land disputes, marriage 
            conflicts, and social matters. In some regions, this system has become less active in modern times.
          </p>
        </section>

        {/* Interesting Fact Box */}
        <div className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
          <h3 className="font-semibold">Interesting Fact:</h3>
          <p>
            The Ghosi community has 36 different Gotras, including Chauhan, Deshrutra, Bhati, Solanki, Tanwar, and 
            many others.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Aboutghosi
