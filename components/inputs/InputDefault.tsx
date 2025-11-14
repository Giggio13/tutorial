import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputDefault() {
  return (
    <div className="flex flex-col gap-2 p-16">
      <Label htmlFor="email">Email:</Label>
      <Input type="email" placeholder="Email" />
    </div>
  )
}
