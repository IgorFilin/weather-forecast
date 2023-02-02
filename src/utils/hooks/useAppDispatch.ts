import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../bll/store";


export const useAppDispatch = (): any => useDispatch<AppDispatchType>();


