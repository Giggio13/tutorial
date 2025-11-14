import { Input } from "@/components/ui/input"

export function InputDisabled() {
  return (
  <div className="gap-3 p-16">
    <Input disabled type="email" placeholder="Email" />
  </div>
  )
}
