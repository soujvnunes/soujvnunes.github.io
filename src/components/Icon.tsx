import icons, { type Icons } from "consts/icons";
import cn from "helpers/cn";

interface IconProps
  extends Pick<React.ComponentPropsWithoutRef<"svg">, "className" | "viewBox"> {
  name: keyof Icons;
}

export default function Icon({ name, className, ...props }: IconProps) {
  const paths = icons[name];

  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6 fill-current", className)}
      {...props}
    >
      {paths.map((path) => (
        <path key={path.d} {...path} />
      ))}
    </svg>
  );
}
