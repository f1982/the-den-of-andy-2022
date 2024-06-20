import { Loader2 } from 'lucide-react'

export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3 py-36">
      <Loader2 className="h-9 w-9 animate-spin" />

      <span className="tex-sm sr-only text-muted-foreground">loading...</span>
    </div>
  )
}
