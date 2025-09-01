"use client";
import { usePathname, useRouter } from "next/navigation";

export default function TopBar() {
  const pathname = usePathname();
  const router = useRouter();
  let text = "";
  let url = "";
  let BtnText = "";

  switch (pathname) {
    case "/":
      text = "eToro is a multi-asset investment platform. Crypto investments are risky and highly volatile. Tax may apply. Understand the ";
      url = "/about";
      BtnText = "risks here.";
      break;

    case "/trading/platform":
      text = "CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 61% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work, and whether you can afford to take the high risk of losing your money.";
      url = null;
      BtnText = null;
      break;

    case "/contact":
      text = "Get in touch with us for more details.";
      url = "/";
      BtnText = "Go Home";
      break;

    default:
      text = "Default text for other routes.";
      url = "/";
      BtnText = "Back Home";
      break;
  }

  return (
    <div className="w-full bg-[#66667a] text-white text-[1rem] text-center  px-2 md:px-[8rem] py-2">
      <p>
        {text}
        <button
          onClick={() => router.push(url)}
          className="underline hover:text-blue-300 transition-colors"
        >
          {BtnText}
        </button>
      </p>
    </div>
  );
}
