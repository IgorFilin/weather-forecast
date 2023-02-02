import {AxiosError} from "axios";

export const handleAppRequestError = (error: any) => {
    if (error instanceof AxiosError) {
        return error.response?.data.message || error.message || error
    }
    throw new Error(error);
};

