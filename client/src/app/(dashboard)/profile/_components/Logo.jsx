import Image from "next/image";
import Link from "next/link";
import { focusRing } from "@/app/(blogs)/_components/home/PostMeta";

export default function Logo({ className = "" }) {
  return (
    <Link href="/profile" className={`inline-block ${focusRing} ${className}`} aria-label="Rblog – داشبورد">
      {/* one logo per theme; .dark-mode swaps which is visible (same as the blog footer) */}
      <Image src="/logo/rblog-logo.svg" alt="Rblog" width={118} height={32} className="[.dark-mode_&]:hidden" priority />
      <Image src="/logo/rblog-logo-dark.svg" alt="Rblog" width={118} height={32} className="hidden [.dark-mode_&]:block" priority />
    </Link>
  );
}
