
const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 flex justify-center p-6 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto w-full space-y-12">
        {/* eToro Money Terms & Conditions Section */}
        <div className="space-y-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            eToro Money Terms & Conditions
          </h1>
          <div className="text-sm sm:text-base text-blue-800 flex flex-wrap gap-2">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">Acceptable Use Policy</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">Fees and Limits</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">Complaints Policy</a>
          </div>
        </div>

        {/* Developers Section */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Developers
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            View our Open Banking guide and Open Banking API documentation. Only registered Third-Party Providers (TPP) can access production data.
          </p>
          <div className="text-sm sm:text-base text-blue-800 flex flex-wrap gap-2">
            <a href="#" className="hover:underline">Guide</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">API documentation</a>
          </div>
        </div>

        {/* Indemnity Claims Section */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Indemnity claims <span className="text-gray-500 italic font-normal">(contact details for bank partners only)</span>
          </h2>
          <div className="text-sm sm:text-base text-blue-800 flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <a href="tel:+442033184618" className="hover:underline">
              Banking indemnity claims (Toll free): <span className="text-gray-700">+44 20331 84618</span>
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a href="mailto:indemnity.claims.eu@etoro.com" className="hover:underline">
              Indemnity claims: <span className="text-gray-700">indemnity.claims.eu@etoro.com</span>
            </a>
          </div>
        </div>

        {/* Customer Service Queries Section */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Customer service queries
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Visit our <a href="#" className="text-blue-800 underline hover:text-blue-900">Help Centre here</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
