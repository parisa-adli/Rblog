import { Suspense } from "react";
import { cookies } from "next/headers";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import Fallback from "@/ui/FallBack";
import HeroFeatured from "./_components/home/HeroFeatured";
import CategoryStrip from "./_components/home/CategoryStrip";
import LatestGrid from "./_components/home/LatestGrid";
import PopularPosts from "./_components/home/PopularPosts";
import NewsletterCta from "./_components/home/NewsletterCta";
import Footer from "./_components/home/Footer";

export const metadata = {
  title: { absolute: "Rblog | خانه" }, // skip the root "| بلاگ اپ" template
};

export default async function Home() {
  const options = await setCookieOnReq(await cookies());

  return (
    <div className="space-y-16 md:space-y-24 pb-4">
      <Suspense fallback={<Fallback />}>
        <HeroFeatured options={options} />
      </Suspense>
      <Suspense fallback={<Fallback />}>
        <CategoryStrip />
      </Suspense>
      <Suspense fallback={<Fallback />}>
        <LatestGrid options={options} />
      </Suspense>
      <Suspense fallback={<Fallback />}>
        <PopularPosts options={options} />
      </Suspense>
      <NewsletterCta />
      <Footer />
    </div>
  );
}
