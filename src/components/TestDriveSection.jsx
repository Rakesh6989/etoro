import Image from 'next/image';

const TestDriveSection = () => {
  return (
    // Parent container with max-w-6xl and responsive padding
    <section className="bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content Area */}
        <div className="flex-1 text-center md:text-left md:pr-8">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight sm:text-5xl">
            Take it for a <span className="text-gray-800">test drive</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
            Want to try CFD trading on eToro without risking any capital? Try
            it in demo mode. Every account includes a free $100,000 virtual
            portfolio for you to practise with.
          </p>
          <div className="mt-8">
            <a
              href="#" // Replace with actual link
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out"
            >
              Join eToro
            </a>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="flex-1 flex justify-center md:justify-end">
          {/* Using a placeholder for the complex image to demonstrate layout */}
          <div className="relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[550px] lg:h-[550px]">
            <Image
              src="/test-drive.png" // Path to your image in the public folder
              alt="eToro Virtual Portfolio Screenshot"
              layout="fill"
              objectFit="contain" // Use contain to ensure the whole image is visible
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestDriveSection;