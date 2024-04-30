import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
        <Image src="/logo.png" alt="Logo" width={150} height={50} className="mr-2" />

          <p className="text-lg font-semibold">My Store</p>
        </div>
        <div className="flex space-x-4">
          <Link href="/">
            <span className="hover:text-gray-300 cursor-pointer font-semibold">Home</span>
          </Link>
          <Link href="/category">
            <span className="hover:text-gray-300 cursor-pointer font-semibold">Category</span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-gray-300 cursor-pointer font-semibold">Contact Us</span>
          </Link>
          <Link href="/cart">
            <span className="hover:text-gray-300 cursor-pointer font-semibold">Cart</span>
          </Link>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Bogita Brian My Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
