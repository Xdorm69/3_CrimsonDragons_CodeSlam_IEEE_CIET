import Link from "next/link";


const Logo = () => {
  return (
    <Link href='/'>
      <svg viewBox="0 0 100 100" className="w-10 h-10 scale-400">
        <image
          href="/Textures/hp-logo-italics-white.svg"
          x="0"
          y="0"
          width="100"
          height="100"
        />
      </svg>
    </Link>
  );
}

export default Logo