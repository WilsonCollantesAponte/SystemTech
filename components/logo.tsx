import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 md:w-10 md:h-10"
      >
        <path d="M50 5L93.3 27.5V72.5L50 95L6.7 72.5V27.5L50 5Z" fill="#38b6ff" stroke="#38b6ff" strokeWidth="2" />
        <path
          d="M35 40C35 35 40 30 50 30C60 30 65 35 65 42C65 48 60 52 52 52V58"
          stroke="#062546"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M48 62C48 62 35 62 35 70C35 78 45 80 55 75C65 70 65 62 55 58"
          stroke="#062546"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="text-[#f4f4f4] font-bold text-xl md:text-2xl font-serif">
        System<span className="text-[#38b6ff]">Tech</span>
      </span>
    </Link>
  )
}
