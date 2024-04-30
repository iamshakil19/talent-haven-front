import { INPUT_TYPES } from "@/constants/InputTypes"


export interface INPUT_SCHEMA {
    name: string
    label: string
    help?: string
    type: INPUT_TYPES
    required: boolean
    className?: string
    style?: string
    placeholder?: string
    pattern?: any
    dependentOn?: string
    dependentvalue?: any
    hasChild?: boolean
    child?: any[]
    options?: any[] | any
    readonly?: boolean
    show?: boolean
}