import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            width={200}
            height={80}
            alt="logo"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
