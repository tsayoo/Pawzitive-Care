function TopCard() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
        <h1 className="text-xl font-bold text-teal-600">🐾 Pawzitive Care</h1>
        <nav>
          <ul className="flex gap-6 text-sm font-medium text-gray-600">
            <li>
              <a href="#home" className="hover:text-teal-600">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-teal-600">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-teal-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default TopCard;
