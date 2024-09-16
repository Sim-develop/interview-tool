import { HTMLInputTypeAttribute } from "react";

export interface InputTypeProps {
    id?: string
    type?: HTMLInputTypeAttribute | undefined;
    placeholder?: string;
    subElement?: {
        inputLeftElement?: React.ReactNode,
        inputRightElement?: React.ReactNode,
    } 
    addOn?: {
        addOnLeft?: React.ReactNode,
        addOnRight?: React.ReactNode
    }
}