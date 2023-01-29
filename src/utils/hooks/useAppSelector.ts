import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../../bll/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;