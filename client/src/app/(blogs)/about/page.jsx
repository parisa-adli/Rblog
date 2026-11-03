import Link from "next/link";
import {
  ArrowLeftIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  MoonIcon,
  PencilSquareIcon,
  Squares2X2Icon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { SectionHeading, focusRing } from "../_components/home/PostMeta";
import Footer from "../_components/home/Footer";
import { toPersianDigits } from "@/utils/numberformatter";

export const metadata = {
  title: { absolute: "Rblog | درباره ما" },
  description: "Rblog جایی برای نوشتن، خواندن و گفت‌وگو درباره ایده‌هایی است که ارزش به اشتراک گذاشتن دارند.",
};

const features = [
  { icon: PencilSquareIcon, title: "نوشتن بی‌دردسر", text: "پست بسازید، تصویر کاور اضافه کنید و هر وقت آماده بودید منتشرش کنید." },
  { icon: Squares2X2Icon, title: "دسته‌بندی منظم", text: "نوشته‌ها در دسته‌بندی‌های روشن مرتب می‌شوند تا خواننده راحت‌تر پیدایشان کند." },
  { icon: ChatBubbleLeftRightIcon, title: "گفت‌وگوی واقعی", text: "خواننده‌ها نظر می‌دهند و نویسنده از داشبورد نظرات را مدیریت می‌کند." },
  { icon: HeartIcon, title: "پسندیدن و ذخیره", text: "نوشته‌های محبوب‌تان را لایک کنید و برای بعد نگه دارید." },
  { icon: ChartBarIcon, title: "داشبورد نویسنده", text: "آمار بازدید، پیش‌نویس‌ها و فعالیت‌های اخیر را یک‌جا ببینید." },
  { icon: MoonIcon, title: "حالت تیره", text: "در هر ساعتی از روز با چشمانی راحت بخوانید و بنویسید." },
];

const values = [
  { title: "کیفیت پیش از کمیت", text: "ما به نوشته‌ای که با دقت نوشته شده بیشتر از ده نوشته‌ی شتاب‌زده اهمیت می‌دهیم." },
  { title: "احترام به خواننده", text: "بدون حواس‌پرتی و شلوغی؛ متن در مرکز توجه است." },
  { title: "صدای همه", text: "هر کسی که حرفی برای گفتن دارد، باید جایی برای نوشتن داشته باشد." },
];

function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-24 pb-4">
      {/* intro */}
      <section className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
        <div className="col-span-12 lg:col-span-8">
          <p className="text-sm font-bold text-primary-900 mb-4">درباره Rblog</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-secondary-900 leading-relaxed md:leading-[1.5]">
            خانه‌ای برای ایده‌هایی که ارزش نوشتن دارند
          </h1>
        </div>
        <p className="col-span-12 lg:col-span-4 text-secondary-600 leading-loose lg:pb-4">
          Rblog یک پلتفرم وبلاگ‌نویسی فارسی است؛ جایی برای نوشتن، خواندن و گفت‌وگو درباره ایده‌هایی که ارزش به اشتراک گذاشتن دارند.
        </p>
      </section>

      {/* purpose */}
      <section className="grid grid-cols-12 gap-6 lg:gap-10 border-t border-secondary-200 pt-10">
        <div className="col-span-12 md:col-span-4">
          <p className="text-sm font-bold text-primary-900 mb-2">چرا Rblog؟</p>
          <h2 className="text-2xl md:text-4xl font-black text-secondary-900 leading-relaxed">هدف ما</h2>
        </div>
        <div className="col-span-12 md:col-span-8 space-y-5 text-secondary-700 leading-loose text-lg">
          <p>
            اینترنت پر از محتواست، اما پیدا کردن نوشته‌ای عمیق و خواندنی به زبان فارسی هنوز سخت است. Rblog ساخته شد تا نویسندگان فارسی‌زبان ابزاری ساده و زیبا برای انتشار نوشته‌هایشان داشته باشند.
          </p>
          <p>
            اینجا تمرکز روی خود متن است: صفحه‌هایی خلوت، تایپوگرافی خوانا و تجربه‌ای که خواننده را به خواندن تا انتها دعوت می‌کند.
          </p>
        </div>
      </section>

      {/* features */}
      <section aria-labelledby="features-title">
        <SectionHeading label="امکانات" title={<span id="features-title">هر آنچه برای نوشتن لازم دارید</span>} />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-2xl border border-secondary-200 bg-secondary-0 p-6 hover:border-primary-900 transition-colors">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary-100 text-primary-900 mb-4">
                <Icon className="w-6 h-6" aria-hidden="true" />
              </span>
              <h3 className="font-bold text-secondary-900 mb-2">{title}</h3>
              <p className="text-secondary-600 leading-loose text-sm">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* mission: dark band, same treatment as the homepage newsletter */}
      <section className="rounded-2xl bg-secondary-900 text-secondary-0 px-6 py-12 md:px-14 md:py-16">
        <p className="text-sm font-bold text-primary-500 mb-3">ماموریت ما</p>
        <h2 className="text-2xl md:text-4xl font-black leading-relaxed md:leading-[1.5] max-w-3xl mb-10">
          ساختن فضایی که در آن نوشتن ساده باشد و خواندن لذت‌بخش.
        </h2>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <li key={value.title} className="border-t border-secondary-700 pt-5">
              <span className="text-xs font-bold text-secondary-400">
                {toPersianDigits(String(i + 1).padStart(2, "0"))}
              </span>
              <h3 className="font-bold text-lg mt-2 mb-2">{value.title}</h3>
              <p className="text-secondary-300 leading-loose">{value.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* call to action */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-2xl border border-secondary-200 p-6 md:p-10">
        <div>
          <h2 className="text-xl md:text-3xl font-black text-secondary-900 leading-relaxed mb-2">آماده‌اید شروع کنید؟</h2>
          <p className="text-secondary-600 leading-loose">نوشته‌ها را بخوانید یا اولین پست خودتان را بنویسید.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/blogs"
            className={`inline-flex items-center gap-x-2 text-sm font-bold text-secondary-0 bg-primary-900 hover:bg-primary-800 px-5 py-3 rounded-full transition-colors ${focusRing}`}
          >
            مشاهده بلاگ‌ها
            <ArrowLeftIcon className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="/profile"
            className={`text-sm font-bold text-secondary-800 border border-secondary-300 hover:border-primary-900 hover:text-primary-900 px-5 py-3 rounded-full transition-colors ${focusRing}`}
          >
            شروع نوشتن
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default AboutPage;
