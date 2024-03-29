import { useCallback, useState } from "react";

export default function useImage() {
  const [isLoading, setLoading] = useState(true);
  const onLoad = useCallback(() => {
    setLoading(false);
  }, []);
  const onError = useCallback(() => {
    setLoading(false);
  }, []);
  const ref = useCallback((image: HTMLImageElement | null) => {
    if (image?.complete) {
      if (!image.naturalWidth || !image.naturalHeight) {
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
  }, []);

  return {
    isLoading,
    handlers: {
      onLoad,
      onError,
      ref,
    },
  };
}
