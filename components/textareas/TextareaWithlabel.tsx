import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function TextareaWithLabel() {
  return (
    <div className="flex flex-col gap-2 p-8">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  )
}
