"use client";
import React from "react";

const DisclaimerFooter = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-6 text-sm md:text-base leading-relaxed">
        <p>
          eToro (Europe) Ltd., a Financial Services Company authorised and
          regulated by the Cyprus Securities Exchange Commission (CySEC) under
          the license # 109/10. Registered in Cyprus under Company No. HE 200585.
          Registered Office: 4 Profiti Ilia Str., Kanika Business Centre, 7th
          floor, Germasogeia, 4046, Limassol, Cyprus.
        </p>
        <p>
          eToro (UK) Ltd, a Financial Services Company authorised and regulated
          by the Financial Conduct Authority (FCA) under the license FRN 583263.
          Registered Office: 24th floor, One Canada Square, Canary Wharf, London E14 5AB.
        </p>
        <p>
          eToro AUS Capital Limited is authorised by the Australian Securities
          and Investments Commission (ASIC) to provide financial services under
          Australian Financial Services License 491139. Registered Office: Level 3,
          60 Castlereagh Street, Sydney NSW 2000, Australia.
        </p>
        <p>
          eToro (Seychelles) Ltd. is licenced by the Financial Services Authority
          Seychelles ("FSAS") to provide broker-dealer services under the Securities
          Act 2007 License #SD076. Registered Office: Suite 18, 3rd Floor, Vairam
          Building, Providence, Mahe, Seychelles.
        </p>
        <p>
          eToro (ME) Limited, is licensed and regulated by the Abu Dhabi Global
          Market (“ADGM”)’s Financial Services Regulatory Authority ("FSRA") as an
          Authorised Person to conduct the Regulated Activities...
        </p>
        <p className="mt-4">
          Past performance is not an indication of future results.{" "}
          <a href="#" className="underline text-blue-600 hover:text-blue-800">
            General Risk Disclosure
          </a>{" "}
          |{" "}
          <a href="#" className="underline text-blue-600 hover:text-blue-800">
            Terms & Conditions
          </a>
        </p>
        <p className="mt-6 text-xs text-gray-500">
          Copyright © 2006-2025 eToro - Your Social Investment Network, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default DisclaimerFooter;
