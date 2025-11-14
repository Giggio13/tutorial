import { Textarea } from "@/components/ui/textarea"

export function TextareaDisabled() {
  return (
    <div className="flex flex-col gap-2 p-6">
      <Textarea placeholder="Type your message here." disabled />
    </div>
  )
}
