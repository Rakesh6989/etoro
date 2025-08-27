export default function TopBar() {
  return (
    <div className="w-full bg-[#66667a] text-white text-[1rem] text-center px-3 py-2">
      <p>
        eToro is a multi-asset investment platform. Crypto investments are risky
        and highly volatile. Tax may apply. Understand the risks{" "}
        <a
          href="#"
          className="underline hover:text-blue-300 transition-colors"
        >
          here
        </a>.
      </p>
    </div>
  );
}
