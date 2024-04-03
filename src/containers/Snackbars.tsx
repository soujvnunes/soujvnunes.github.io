import { useAppSelector } from "hooks/useAppSelector";
import useSnackbar from "hooks/useSnackbar";
import Button from "components/Button";
import Icon from "components/Icon";
import Snackbar from "components/Snackbar";

export default function Snackbars() {
  const { hide } = useSnackbar();
  const snackbars = useAppSelector((state) => state.snackbars);

  if (!snackbars.length) return;

  return (
    <ul className="fixed bottom-0 z-10 space-y-2 p-4 md:space-y-4 lg:p-8">
      {snackbars.map(({ id, ...snackbar }) => (
        <li key={id}>
          <Snackbar
            endItem={
              <Button item size="sm" variant="text" value={id} onClick={hide}>
                <Icon name="Cross" />
              </Button>
            }
            {...snackbar}
          />
        </li>
      ))}
    </ul>
  );
}
