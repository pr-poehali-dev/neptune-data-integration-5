export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">Gold Arena</div>
        <nav className="flex gap-8">
          <a
            href="#tournaments"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Турниры
          </a>
          <a
            href="#packages"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Пакеты
          </a>
          <a
            href="https://t.me/Paveldduroov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Билеты
          </a>
        </nav>
      </div>
    </header>
  )
}