import { Suspense } from "react";
import Fallback from "@/ui/FallBack";
import { analyticsMock, postViewsMock, statsMock } from "./_data/mockDashboard";
import WelcomeHeader from "./_components/WelcomeHeader";
import StatsGrid from "./_components/StatsGrid";
import AnalyticsChart from "./_components/AnalyticsChart";
import DraftsCard from "./_components/DraftsCard";
import LatestPostsCard from "./_components/LatestPostsCard";
import RecentActivity from "./_components/RecentActivity";
import TopCategories from "./_components/TopCategories";
import ProBanner from "./_components/ProBanner";

// Grid order per breakpoint (DOM order = xl, image 1):
//   xl : Analytics(2) Drafts | Latest(2) Activity | Categories ProBanner(2)
//   lg : Analytics(2) Activity | Latest(3) | Categories ProBanner(2)   — no Drafts (image 2)
//   <lg: one column — Analytics, Latest, Drafts, Activity, Categories, ProBanner
export default function Profile() {
  return (
    <div className="space-y-6">
      <WelcomeHeader />

      <Suspense fallback={<Fallback />}>
        <StatsGrid mock={statsMock} />
      </Suspense>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="order-1 lg:col-span-2 xl:order-none">
          <AnalyticsChart series={analyticsMock} />
        </div>
        <div className="order-3 lg:hidden xl:block xl:order-none">
          <Suspense fallback={<Fallback />}>
            <DraftsCard />
          </Suspense>
        </div>
        <div className="order-2 lg:order-3 lg:col-span-3 xl:col-span-2 xl:order-none">
          <Suspense fallback={<Fallback />}>
            <LatestPostsCard views={postViewsMock} />
          </Suspense>
        </div>
        <div className="order-4 lg:order-2 xl:order-none">
          <Suspense fallback={<Fallback />}>
            <RecentActivity />
          </Suspense>
        </div>
        <div className="order-5 xl:order-none">
          <Suspense fallback={<Fallback />}>
            <TopCategories />
          </Suspense>
        </div>
        <div className="order-6 lg:col-span-2 xl:order-none">
          <ProBanner />
        </div>
      </div>
    </div>
  );
}
