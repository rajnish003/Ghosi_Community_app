import React from 'react'

const Latest_post = () => {
    const post_item = [
        {
          text: "Welcome to Ghosi Community Website",
          link: "",
          imgSrc: "/images/new-gif-image.gif",
        },
        {
          text: "lore lorem jbhdhd hujhf huiehf",
          link: "",
          imgSrc: "/images/new-gif-image.gif",
        },
        {
          text: "hvbdshvh uhf gdh h h nuh unsjfn bjsb ",
          link: "",
          imgSrc: "/images/new-gif-image.gif",
        },
        {
          text: "njdh hfh hf  huiehfu  u h fu",
          link: "",
          imgSrc: "/images/new-gif-image.gif",
        },
      ];
    
      return (
        <div className='flex'>
        <div className='w-[160px] text-xl bg-yellow-300 pt-1 px-2 '>       
                <h5 className='font-bold text-red-500'>
                    Latest Post
                </h5>
        </div>
        <div className="relative bg-gray-800 text-white py-2 overflow-hidden w-full">
          <div
            className="whitespace-nowrap animate-scroll text-sm"
            onMouseOver={(e) => e.currentTarget.classList.remove("animate-scroll")}
            onMouseOut={(e) => e.currentTarget.classList.add("animate-scroll")}
          >
            {post_item.map((item, index) => (
              <span key={index} className="inline-flex items-center space-x-2 px-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {item.text}
                </a>
                <img
                  src={item.imgSrc}
                  alt="new"
                  className="inline-block w-6 h-6"
                />
                {index !== post_item.length - 1 && <span>|</span>}
              </span>
            ))}
          </div>
    
          <style>
            {`
              .animate-scroll {
                animation: marquee 20s linear infinite;
              }
    
              @keyframes marquee {
                0% {
                  transform: translateX(100%);
                }
                100% {
                  transform: translateX(-100%);
                }
              }
            `}
          </style>
        </div>
        </div>
      );
    };
export default Latest_post
