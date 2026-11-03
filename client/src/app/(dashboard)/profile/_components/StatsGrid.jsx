import { fetchCardData } from "@/services/data";
import StatCard from "./StatCard";

// `mock` = { posts, views, users, comments } trends/series (+ views.value) until the API has them
export default async function StatsGrid({ mock }) {
  const { numberOfUsers, numberOfComments, numberOfPosts } = await fetchCardData();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
      <StatCard type="posts" label="کل پست‌ها" value={numberOfPosts} {...mock.posts} />
      <StatCard type="views" label="کل بازدیدها" {...mock.views} />
      <StatCard type="users" label="کاربران" value={numberOfUsers} {...mock.users} />
      <StatCard type="comments" label="نظرات" value={numberOfComments} {...mock.comments} />
    </div>
  );
}
