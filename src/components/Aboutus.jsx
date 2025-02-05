import React, { useState } from 'react';

const Aboutus = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-8 text-center">
        हमारे बारे में
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Image Section */}
        <div className="w-72 h-72 border-4 border-blue-500 rounded-lg shadow-lg overflow-hidden">
          <img 
            src="/image/sakil_ahmad.jpg" // Replace with actual image URL
            alt="Ghosi Community" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Text Section */}
        <div className="border-2 border-blue-500 p-8 rounded-lg shadow-md bg-white max-w-3xl">
          <p className="text-gray-700 leading-8 text-lg">
            मेरा नाम <b>शकील अहमद</b> है। मैं उत्तर प्रदेश के बाराबंकी जिले का रहने वाला हूँ। मेरा जन्म <b>घोसी समुदाय</b> में हुआ, 
            जो इस्लाम के उसूलों और कायदे-कानूनों को मानता है। यह समुदाय भारत और पाकिस्तान के कई हिस्सों में बिखरा हुआ है।
          </p>

          <p className="text-gray-700 leading-8 text-lg mt-4">
            <b>1979 में</b>, "ऑल इंडिया मुस्लिम घोसी एसोसिएशन" का गठन हुआ, लेकिन <b>1998 में</b>, आपसी मतभेदों के चलते 
            <b> "ऑल इंडिया मुस्लिम घोसी वेलफेयर एसोसिएशन"</b> बनाया गया। लेकिन संसाधनों की कमी के कारण यह संगठन उम्मीदों 
            पर खरा नहीं उतर पाया।
          </p>

          {/* Collapsible Content */}
          {isExpanded && (
            <>
              <p className="text-gray-700 leading-8 text-lg mt-4">
                <b>2010 में</b>, मैंने <b>रईस अहमद (फैज़ाबाद)</b> और <b>इदरीस अहमद (बाराबंकी)</b> के साथ मिलकर  
                <a href="https://www.ghosi.org" className="text-blue-600 font-medium"> www.ghosi.org</a> वेबसाइट बनाई, जिससे 
                समुदाय को जोड़ने में मदद मिली। लेकिन <b>2012 में</b>, व्यक्तिगत कठिनाइयों के कारण वेबसाइट का डोमेन समाप्त हो गया।
              </p>

              <p className="text-gray-700 leading-8 text-lg mt-4">
                बाद में, <b>शहबाज़ अहमद (सुल्तानपुर)</b> और <b>इमरान अहमद (रायबरेली)</b> की मदद से वेबसाइट फिर से बनाई गई, 
                लेकिन यह भी लंबा नहीं चल पाई। इसके बाद, हमने <b>"घोसी थिंक टैंक"</b> नामक फेसबुक पेज बनाया, 
                जो काफ़ी लोकप्रिय हुआ और समुदाय को एक मंच मिला।
              </p>

              <p className="text-gray-700 leading-8 text-lg mt-4">
                फिर भी, समुदाय के <b>वैवाहिक संबंधों में सही मेल-जोल</b> और <b>जनगणना (सेंसस)</b> जैसी समस्याएँ बनी रहीं। 
                इन चुनौतियों को देखते हुए, एक <b>नई और उन्नत वेबसाइट</b> बनाने की आवश्यकता महसूस हुई, 
                जो घोसी बिरादरी को सही लाभ पहुँचा सके।
              </p>

              <p className="text-lg font-semibold text-gray-800 mt-6">
                <span className="text-blue-600 font-bold text-xl">आपका,</span> <br />
                <span className="text-gray-900 text-xl">शकील अहमद</span>
              </p>
            </>
          )}

          {/* "View More" / "View Less" Button */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 text-white bg-blue-600 px-4 py-2 rounded-md font-medium transition hover:bg-blue-700"
          >
            {isExpanded ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
