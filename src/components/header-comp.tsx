import Link from 'next/link'
import { Button } from './ui/button'

export default function HeaderComp() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-red-600" />
          <span className="text-xl font-bold">Redskins</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#mission"
            className="text-sm font-medium hover:text-primary"
          >
            Mission
          </Link>
          <Link
            href="#rewards"
            className="text-sm font-medium hover:text-primary"
          >
            Rewards
          </Link>
          <Link
            href="#risks"
            className="text-sm font-medium hover:text-primary"
          >
            Risks
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary">
            FAQ
          </Link>
        </nav>
        <Button
          variant="outline"
          className="border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700"
        >
          Go Screw Yourself
        </Button>
      </div>
    </header>
  )
}
