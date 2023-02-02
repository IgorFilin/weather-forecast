import {ChangeEvent, useState} from "react";

export function useInput() {
    const [value, setValue] = useState('')

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return {value,onChange}
}