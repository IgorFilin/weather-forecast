import {ChangeEvent, useState,KeyboardEvent} from "react";

export function useInput(onEnterHandler:()=>void) {
    const [value, setValue] = useState('')

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onBlur = () => {
        if(value){
            onEnterHandler()
            setValue('')
        }
    }
    const onKeyDown = (e:KeyboardEvent<HTMLDivElement>) => {
        if(e.code === 'Enter'){
            onEnterHandler()
            setValue('')
        }
    }
    return {value,onChange,onKeyDown,onBlur}
}