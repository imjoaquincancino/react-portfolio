// eslint-disable-next-line react/prop-types
export default function CTAcampaign({ text, url, yellow }) {
  return (
    <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#7610F8_0%,#500da5_50%,#5031af_100%)]"></span>
      <a
        href={url}
        className={`font-mono font-bold inline-flex gap-1 items-center justify-center text-xs sm:text-sm md:text-base w-fit bg-gradient-to-tr from-brand/20 to-brand/20 mx-auto py-2 px-3 md:px-6  rounded-full cursor-pointer bg-gray-800 ${yellow ? "text-green-400/90" : "text-white/80"}  backdrop-blur-3xl whitespace-nowrap`}
      >
        <svg width="1.25em" height="1.25em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.5 4C8.67157 4 8 4.67157 8 5.5C8 6.32843 8.67157 7 9.5 7H11V5.5C11 4.67157 10.3284 4 9.5 4ZM12.3627 3.48579C11.7292 2.58706 10.6831 2 9.5 2C7.567 2 6 3.567 6 5.5C6 6.0368 6.12085 6.54537 6.33682 7H5C3.34315 7 2 8.34315 2 10C2 11.3062 2.83481 12.4175 4 12.8293L4 19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V12.8293C21.1652 12.4175 22 11.3062 22 10C22 8.34315 20.6569 7 19 7H16.8293C16.9398 6.68722 17 6.35064 17 6C17 4.34315 15.6569 3 14 3C13.3959 3 12.8335 3.17856 12.3627 3.48579ZM13 6V6.99997L14 7C14.5523 7 15 6.55228 15 6C15 5.44772 14.5523 5 14 5C13.4477 5 13 5.44772 13 6ZM11 9H5C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11H11V9ZM11 13H6V19C6 19.5523 6.44772 20 7 20H11V13ZM13 20V13H18V19C18 19.5523 17.5523 20 17 20H13ZM13 11V9H19C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H13Z"></path></svg>
        {text}
      </a>
    </span>
  );
}
