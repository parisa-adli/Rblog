import { Suspense } from "react";
import Fallback from "@/ui/FallBack";
import CardsWrapper from "./_components/CardsWrapper";
import LatestPosts from "./_components/LatestPosts";
import EditProfileBtn from "./_components/EditProfileBtn";

async function Profile() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl mb-8 text-secondary-700">داشبورد</h1>
        {/* <EditProfileBtn /> */}
      </div>
      <Suspense fallback={<Fallback />}>
        <CardsWrapper />
      </Suspense>
      <h2 className="text-xl mb-4 text-secondary-600">آخرین پست ها</h2>
      <Suspense fallback={<Fallback />}>
        <LatestPosts />
      </Suspense>
    </div>
  );
}
export default Profile;
