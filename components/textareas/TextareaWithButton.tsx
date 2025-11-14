import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function TextareaWithButton() {
  return (
    <div className="flex flex-col gap-2 p-8">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
