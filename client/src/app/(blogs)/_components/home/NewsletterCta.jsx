import Link from "next/link";
import { focusRing } from "./PostMeta";

const bandRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-900";

// UI only: there is no newsletter backend yet, so the form does not submit anywhere.
function NewsletterCta() {
  return (
    <section className="rounded-2xl bg-secondary-900 text-secondary-0 px-6 py-12 md:px-14 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-sm font-bold text-primary-500 mb-3">خبرنامه Rblog</p>
        <h2 className="text-3xl md:text-5xl font-black leading-relaxed md:leading-[1.5]">
          بهترین نوشته‌های هفته، مستقیم در ایمیل شما
        </h2>
      </div>
      <div>
        <form action="#" className="flex flex-col sm:flex-row gap-3">
          <label htmlFor="newsletter-email" className="sr-only">
            ایمیل
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            dir="ltr"
            placeholder="email@example.com"
            className={`flex-1 rounded-xl bg-secondary-0 text-secondary-900 placeholder:text-secondary-500 px-4 py-3 ${bandRing}`}
          />
          <button
            type="submit"
            className={`rounded-xl bg-primary-900 text-secondary-0 text-xl font-bold px-6 py-2 hover:bg-primary-800 transition-colors ${bandRing}`}
          >
            عضویت
          </button>
        </form>
        <p className="mt-6 text-secondary-300 leading-relaxed">
          خودتان می‌نویسید؟{" "}
          <Link
            href="/profile"
            className={`font-bold text-secondary-0 underline underline-offset-4 ${focusRing} focus-visible:ring-offset-secondary-900`}
          >
            نوشتن را شروع کنید
          </Link>
        </p>
      </div>
    </section>
  );
}
export default NewsletterCta;
