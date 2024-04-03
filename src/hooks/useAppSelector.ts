import { useSelector } from "react-redux";
import { type RootState } from "config/store";

export const useAppSelector = useSelector.withTypes<RootState>();
