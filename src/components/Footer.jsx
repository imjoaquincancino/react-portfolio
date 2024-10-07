export function Footer() {
  return (
    <footer className="border-t bg-gray-900 border-gray-800 flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 sm:relative z-20">
    <p className="text-xs text-gray-400">© Diseñado y Desarrollado por Joaquín Cancino 🧑🏻‍💻 {new Date().getFullYear()}</p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a target="_blank" className="hover:underline underline-offset-4 text-gray-400 hover:text-white text-3xl" href="https://github.com/imjoaquincancino"><i className="fa-brands fa-github"></i></a>
        <a target="_blank" className="hover:underline underline-offset-4 text-gray-400 hover:text-white text-3xl" href="https://www.instagram.com/joaquincancino.dev/"><i className="fa-brands fa-instagram"></i></a>
    </nav>
</footer>
  );
}

export default Footer;
