import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Akul Sareen. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="#">
          <div className="text-xs hover:underline underline-offset-4">Terms of Service</div>
        </Link>
        <Link href="#">
          <div className="text-xs hover:underline underline-offset-4">Privacy</div>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
