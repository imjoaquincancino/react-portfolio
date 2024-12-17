export default function CTAhome() {
  return (
    <span className="relative inline-flex overflow-hidden rounded-full p-[1px] mb-6">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#7610F8_0%,#500da5_50%,#5031af_100%)]"></span>
      <a
        href="#planes"
        className="font-mono font-bold inline-flex items-center justify-center text-xs sm:text-sm w-fit bg-gradient-to-br from-brand/20 to-brand/10 mx-auto py-2 px-3 md:px-6  rounded-full cursor-pointer bg-gray-800 text-white/80 backdrop-blur-3xl whitespace-nowrap"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12ZM14.24 9.40745L16.918 9.40755C18.3564 9.4076 18.9545 11.2483 17.7908 12.0939L15.6244 13.668L16.4518 16.2149C16.8963 17.583 15.3305 18.7206 14.1667 17.8752L12.0001 16.3012L9.83355 17.8752C8.66976 18.7206 7.10396 17.583 7.54842 16.2149L8.37585 13.668L6.20942 12.0939C5.04569 11.2483 5.64378 9.4076 7.08226 9.40755L9.76019 9.40745L10.5878 6.86061C11.0324 5.49255 12.9678 5.49255 13.4124 6.86061L14.24 9.40745Z"
          ></path>
        </svg>
        Ofertas de Pre-temporada 2025
      </a>
    </span>
  );
}
