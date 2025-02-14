import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    
      <footer className="footer bg-slate-100 text-black ">
        <div className="flex flex-col items-center gap-10 p-6 w-full max-w-[1300px] mx-auto text-center">
          <Link href="/">
            <Image
              className="logo"
              src="/images/icons/logo2.png"
              alt="Logo ATX Tech"
              width={150}
              height={50}
              sizes="50px"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          <p className="text-sm mt-4">
            &copy; 2025 BarraCloset. Todos os direitos reservados | Site desenvolvido por{" "}
            <a href="https://www.instagram.com/marciodinizdev" target="_blank" className="text-blue-500 hover:underline">
              marciodinizdev™
            </a>
          </p>
        </div>
      </footer>

  );
}
