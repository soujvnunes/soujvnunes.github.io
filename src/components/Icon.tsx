import { memo, useEffect, useRef, useState } from "react";
import type { IconsValue, Icons } from "consts/icons";
import cn from "helpers/cn";

interface IconProps
  extends Pick<React.ComponentPropsWithoutRef<"svg">, "className" | "viewBox"> {
  name: keyof Icons;
}

export default memo(function Icon({ name, className, ...props }: IconProps) {
  const [path, setPath] = useState<IconsValue>([]);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      void (async function handlePath() {
        setPath((await import("consts/icons")).default[name]);
      })();
    }

    return () => {
      isMounted.current = false;
    };
  }, [name]);

  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6 fill-current", className)}
      {...props}
    >
      {path.map((path) => (
        <path key={path.d} {...path} />
      ))}
    </svg>
  );
});
