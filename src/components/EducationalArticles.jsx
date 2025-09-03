import Head from 'next/head';
import Image from 'next/image';

const EducationalArticles = () => {
  const videoData = [
    {
      title: "CFD Trading Explained: A Beginner's Guide",
      description: "Are you curious about Contracts for Difference (CFDs)? This video breaks down the basics of CFD trading in a simple and easy-to-understand way. Learn what CFDs are, how they work, and the advantages and disadvantages of using them. Discover how to speculate on price movements without owning the underlying asset and explore the concept of leverage.",
      duration: '3 min',
      url: 'https://www.youtube.com/watch?v=5JDrK7sP3gA',
      viewCount: '559 views',
      channelName: 'AtoZMarkets',
      thumbnailSrc: 'https://i.ytimg.com/vi/_nofcwoCLXw/maxresdefault.jpg',
      profilePicSrc: '/images/profile1.jpg',
    },
    {
      title: 'How to Trade CFDs: Learn How to CFD Trade Online',
      description: "CFDs allow to trade the price movements of global markets and hedge physical portfolios against potential loss of value. A CFD price replicates the price of the underlying instrument. When you expect that market prices will rise, you can buy CFDs or go long and make a profit after you close the contract later at a higher price. In case you expect the markets will fall, you sell the CFDs or go short and make a profit later as you close your short position later at lower price.",
      duration: '2 min',
      url: 'https://www.youtube.com/watch?v=LGHsNaIv5os',
      viewCount: '975 views',
      channelName: 'IFC Markets | Online Forex Broker',
      thumbnailSrc: 'https://i.ytimg.com/vi/_7U1KbUBcLk/maxresdefault.jpg',
      profilePicSrc: '/images/profile2.jpg',
    },
    {
      title: 'What is Leverage in Trading? 💹 Leverage Trading for Beginners',
      description: 'Leverage can turn small trades into big wins—or devastating losses. In this video, you\'ll learn exactly how to use leverage intelligently to boost your potential returns, while protecting yourself from catastrophic mistakes. Whether you\'re trading stocks, forex, or futures, mastering leverage is a must.',
      duration: '10 min',
      url: 'https://www.youtube.com/watch?v=SXqfFTmYmT0',
      viewCount: '3,487 views',
      channelName: 'Mind Math Money',
      thumbnailSrc: 'https://i.ytimg.com/vi/3Q7LJdmhlMo/maxresdefault.jpg',
      profilePicSrc: '/images/profile3.jpg',
    },
  ];

  return (
    <div>
      <Head>
        <title>The knowledge to trade</title>
      </Head>

      <main className="max-w-6xl  mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800">The knowledge to trade</h2>
          <p className="mt-2 text-lg text-gray-600">
            Not sure where to start? Take less than 10 minutes to learn the basics
          </p>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">EDUCATIONAL ARTICLES</h3>
          
          {/* Card Grid - Responsive Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoData.map((video, index) => (
              <div key={index} className="flex flex-col rounded-lg overflow-hidden w-full max-w-sm mx-auto">
                {/* Thumbnail and Play Icon */}
                <div className="relative w-full h-40 md:h-48 overflow-hidden bg-gray-200">
                  <Image
                    src={video.thumbnailSrc}
                    alt={video.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-white cursor-pointer"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {/* Profile picture at the bottom right */}
                  <div className="absolute bottom-2 right-2 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src={video.profilePicSrc}
                      alt="Profile"
                      width={40}
                      height={40}
                      objectFit="cover"
                    />
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold text-gray-800">{video.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {video.channelName} • {video.duration} • {video.viewCount}
                  </p>
                  <p className="mt-3 text-gray-600 line-clamp-3">{video.description}</p>
                  <a href={video.url} className="mt-4 inline-block text-blue-600 font-medium hover:underline">
                    WATCH NOW
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default EducationalArticles;