import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6 mb-12 text-center">
          {/* Brand Logo */}
          <Link href="/" className="relative h-20 w-80 block">
             <Image
                src="/images/logo/Jaya-Travel-Tours-Logo-200x64.webp"
                alt="Jaya Travels"
                fill
                className="object-contain"
             />
          </Link>

          {/* Tagline */}
          <p className="text-white text-lg font-medium">
            Proudly serving the community since 1976.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Jaya Travels Group. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-xs">
            <Link href="https://jayatravel.com/jaya-travel-tours-terms-conditions/" target="_blank" className="hover:text-white">Terms and Conditions</Link>
            <Link href="https://jayatravel.com/cookie-policy/" target="_blank" className="hover:text-white">Cookie Policy</Link>
            <Link href="/privacy-policy/" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
