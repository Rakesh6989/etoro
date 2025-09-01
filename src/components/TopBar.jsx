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

    case "/about":
      text = "eToro is a multi-asset investment platform. Crypto investments are risky and highly volatile.";
      url = "/contact";
      BtnText = "Contact";
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
    <div className="w-full bg-[#66667a] text-white text-[1rem] text-center px-3 py-2">
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
