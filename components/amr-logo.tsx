"use client"

export function AmrLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        {/* Main logo container with gradient background */}
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
          {/* Letter A with modern styling */}
          <span className="text-white font-bold text-xl">A</span>
        </div>
        {/* Subtle glow effect */}
        <div className="absolute inset-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent opacity-20 blur-sm -z-10" />
      </div>
      <span className="ml-3 text-2xl font-bold gradient-text">Amr</span>
    </div>
  )
}
