import Image from "next/image";
import Link from "next/link";
import { toPersianDigits } from "@/utils/numberformatter";
import { focusRing } from "./PostMeta";

const links = [
  { href: "/", label: "خانه" },
  { href: "/blogs", label: "بلاگ‌ها" },
  { href: "/about", label: "درباره ما" },
];

function Footer() {
  return (
    <footer className="border-t border-secondary-200 pt-10 pb-8">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div className="max-w-sm">
          <Link href="/" className={`inline-block ${focusRing}`} aria-label="Rblog - خانه">
            {/* one logo per theme; .dark-mode swaps which is visible */}
            <Image src="/logo/rblog-logo.svg" alt="Rblog" width={148} height={40} className="[.dark-mode_&]:hidden" />
            <Image src="/logo/rblog-logo-dark.svg" alt="Rblog" width={148} height={40} className="hidden [.dark-mode_&]:block" />
          </Link>
          <p className="mt-4 text-secondary-500 leading-loose">
            جایی برای نوشتن، خواندن و گفت‌وگو درباره ایده‌هایی که ارزش به اشتراک گذاشتن دارند.
          </p>
        </div>
        <nav aria-label="پیوندهای پانویس">
          <ul className="flex gap-x-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-secondary-700 hover:text-primary-900 transition-colors ${focusRing}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mt-10 text-sm text-secondary-500">
        © {toPersianDigits(new Date().getFullYear())} Rblog. همه حقوق محفوظ است.
      </p>
    </footer>
  );
}
export default Footer;
