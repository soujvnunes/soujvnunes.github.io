import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import useSnackbar from "hooks/useSnackbar";
import FooterCopyright from "./FooterCopyright";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  useSnackbar({
    title: "📊 Web Analytics",
    children:
      "This website uses a privacy-friendly third-party web analytics services to track visitors by country, device and browser; so it can be enhanced overtime.",
  });

  return (
    <footer className={twMerge(classNames.container.root, "text-center")}>
      <FooterSocials />
      <FooterCopyright />
    </footer>
  );
}
