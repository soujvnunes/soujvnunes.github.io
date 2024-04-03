import { useCallback, useEffect, useId } from "react";
import snackbars, { type Snackbar } from "stores/snackbars";
import { getButtonValue } from "helpers/getButtonValue";
import useAppDispatch from "./useAppDispatch";

export default function useSnackbar(props?: Snackbar) {
  const dispatch = useAppDispatch();
  const id = useId();
  const show = useCallback(
    (snackbar: Snackbar) => {
      dispatch(
        snackbars.actions.show({
          id,
          ...snackbar,
        }),
      );
    },
    [dispatch, id],
  );
  const hide = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(snackbars.actions.hide(event.currentTarget.value));
    },
    [dispatch],
  );

  useEffect(() => {
    if (!props) return;

    show(props);

    return () => {
      hide(getButtonValue(id));
    };
  }, [hide, id, props, show]);

  return {
    show,
    hide,
  };
}
