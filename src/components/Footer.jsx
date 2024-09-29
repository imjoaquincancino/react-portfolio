export function Footer() {
  return (
    <footer className="bg-[#7610F8] text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          © {new Date().getFullYear()} Joaquín Cancino. Todos los derechos reservados.
        </div>
      </footer>
  );
}

export default Footer;
