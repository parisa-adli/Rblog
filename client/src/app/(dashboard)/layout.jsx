import Header from "./profile/_components/Header";
import SideBar from "./profile/_components/SideBar";

// per-user, cookie-protected pages: never prerender at build (the build failed on /profile/users + /profile/categories)
export const dynamic = "force-dynamic";

export const metadata = {
  title: "پروفایل",
  description: "پروفایل",
};

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-secondary-100 lg:flex">
      {/* aside stretches to the full page height; the inner wrapper keeps the menu pinned while scrolling */}
      <aside className="hidden lg:block w-56 xl:w-64 shrink-0 border-l border-secondary-200/70 bg-secondary-0">
        <div className="sticky top-0">
          <SideBar />
        </div>
      </aside>
      <div className="flex-1 min-w-0">
        <Header />
        {/* extra bottom padding on phones clears the fixed MobileTabBar + iOS home indicator.
            isolate: page z-indexes stay inside main, so the sticky Header (z-[8]) is always on top */}
        <main className="isolate px-4 md:px-6 xl:px-8 pt-2 pb-[calc(6.5rem_+_env(safe-area-inset-bottom))] md:pb-10">
          <div className="mx-auto max-w-screen-2xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
