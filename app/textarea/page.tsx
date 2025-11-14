import { TextareaDemo } from "@/components/textareas/Textareas"
import { TextareaDisabled } from "@/components/textareas/TextareaDisabled"
import { TextareaWithLabel } from "@/components/textareas/TextareaWithlabel"
import { TextareaWithText } from "@/components/textareas/TextareaWithText"
import { TextareaWithButton } from "@/components/textareas/TextareaWithButton"

export default function TextareaPage() {
    return (
        <>
        <TextareaDemo />
        <TextareaDisabled />
        <TextareaWithLabel/>
        <TextareaWithText/>
        <TextareaWithButton/>   
        </>
    )
} 