import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function TextareaWithText() {
  return (
    <div className="flex flex-col gap-2 p-8">
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <p className="text-muted-foreground text-sm">
        Your message will be copied to the support team.
      </p>
    </div>
  )
}
