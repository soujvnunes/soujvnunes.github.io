import { useCallback, useEffect, useId } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { container } from "config/root";
import isLgScreen from "helpers/isLgScreen";
import useAppDispatch from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import Button from "components/Button";
import Icon from "components/Icon";
import Snackbar, { type SnackbarProps } from "components/Snackbar";

interface SnackbarsProps extends Omit<SnackbarProps, "endItem"> {
  show: boolean;
}

export default function Snackbars({ show, ...props }: SnackbarsProps) {
  const dispatch = useAppDispatch();
  const snackbars = useAppSelector((state) => state.snackbars);
  const id = useId();
  const handleHide = useCallback(() => {
    void (async () => {
      const { actions } = (await import("stores/snackbars")).default;

      dispatch(actions.remove(id));
    })();
  }, [dispatch, id]);
  const handleHeight = useCallback(
    (ref: HTMLDivElement | null) => {
      const mutationObserver = new MutationObserver(() => {
        void (async function handleShow() {
          const { actions } = (await import("stores/snackbars")).default;
          const boundingClientRect = ref?.getBoundingClientRect();

          dispatch(
            actions.add({
              id,
              height: boundingClientRect?.height ?? 0,
            }),
          );
        })();
      });

      if (ref !== null) {
        mutationObserver.observe(ref, {
          subtree: true,
          childList: true,
          characterData: true,
        });
      } else {
        mutationObserver.disconnect();
      }
    },
    [dispatch, id],
  );

  const currentIndex = snackbars.findIndex((snackbar) => snackbar.id === id);
  const finalHeight =
    snackbars.find((snackbar) => snackbar.id === id)?.height ?? 0;
  const fullHeight = snackbars.reduce(
    (acc, { height }, index) => (index < currentIndex ? height + acc : acc),
    0,
  );
  const bottom = fullHeight + (margin + currentIndex * padding);

  useEffect(() => {
    async function handleShow() {
      const { actions } = (await import("stores/snackbars")).default;

      dispatch(actions.add({ id, height: 0 }));
    }

    if (show) void handleShow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  if (!container) return;

  return createPortal(
    <AnimatePresence>
      {currentIndex >= 0 && (
        <motion.div
          role="presentation"
          className="fixed bottom-0 left-0 z-10 w-full pl-4 max-md:pr-4 md:max-w-96 md:pl-8"
          initial={{
            y: finalHeight,
          }}
          animate={{
            y: -bottom,
          }}
          exit={{
            y: finalHeight,
          }}
        >
          <Snackbar
            ref={handleHeight}
            endItem={
              <Button
                item
                size="sm"
                variant="text"
                aria-label="Hide"
                value={id}
                onClick={handleHide}
              >
                <Icon name="Cross" />
              </Button>
            }
            {...props}
          />
        </motion.div>
      )}
    </AnimatePresence>,
    container,
  );
}

const margin = isLgScreen ? 32 : 16;
const padding = isLgScreen ? 16 : 8;
