import HeaderNavLanguage from "./HeaderNavLanguage";
import HeaderNavTabs from "./HeaderNavTabs";

export default function HeaderNav() {
  return (
    <nav className="flex items-center px-2 max-lg:fixed max-lg:inset-x-0 max-lg:bottom-0 max-lg:m-2 max-lg:h-[var(--header-nav)] max-lg:rounded-2xl max-lg:border-t max-lg:border-t-[#1E1F48] max-lg:bg-[#0A0A18]/60 max-lg:backdrop-blur-3xl lg:px-2">
      <HeaderNavTabs />
      <HeaderNavLanguage />
    </nav>
  );
}
