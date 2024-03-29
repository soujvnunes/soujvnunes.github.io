import HeaderNavLanguage from "./HeaderNavLanguage";
import HeaderNavTabs from "./HeaderNavTabs";

export default function HeaderNav() {
  return (
    <nav className="flex items-center px-2">
      <HeaderNavTabs />
      <HeaderNavLanguage />
    </nav>
  );
}
