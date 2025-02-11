import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer flex flex-col items-center gap-10 p-6 bg-gray-100 text-black">
            <Link href="/">
                <Image
                    className="logo"
                    src="/logo2.png"
                    alt="Logo ATX Tech"
                    width={0}
                    height={0}
                    sizes="50px"
                    style={{ width: "auto", height: "auto" }}
                />
            </Link>

            <p>&copy; 2025 BarraCloset. Todos os direitos reservados | Site desenvolvido por <a href="https://www.instagram.com/marciodinizdev" target="_blank">marciodinizdev™</a></p>

        </footer>
    );
}