"use client"

import { useEffect, useState } from "react"

export function LetterContent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`transition-all duration-1000 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
    >
      {/* Letter header */}
      <div className="mb-8 text-center">
        <p className="text-sm tracking-widest text-muted-foreground">
          February 14, 2026
        </p>
        <div className="mx-auto my-4 h-px w-24 bg-primary/30" />
      </div>

      {/* Greeting */}
      <h2 className="mb-6 text-center font-serif text-3xl font-bold tracking-wide text-primary sm:text-4xl">
        My Dearest Rainie,
      </h2>

      {/* Letter body - PLACEHOLDER MESSAGE */}
      <div className="mx-auto max-w-lg space-y-4 font-sans text-base leading-relaxed text-foreground/85 sm:text-lg">
        <p>
          {/* ============================================ */}
          {/* REPLACE THIS WITH YOUR PERSONAL MESSAGE BELOW */}
          {/* ============================================ */}
          In every chapter of my life, you are my favorite story. Like the
          pages of the dark fantasy worlds you adore, our love has its own
          magic -- deep, enchanting, and beautifully mysterious.
        </p>
        <p>
          You are the warmth of a perfect cup of coffee on a cold morning,
          the comfort of a beloved book on a quiet night, and the melody
          that plays softly in every moment we share.
        </p>
        <p>
          From the haunting beauty of Black Swan to the gentle ache of
          Letting Go, every song reminds me of a different shade of us.
          You are my entire playlist, Rainie -- every note, every lyric,
          every pause between the beats.
        </p>
        <p className="text-center font-serif text-lg italic text-primary/80 sm:text-xl">
          You are the magic I never knew I was searching for.
        </p>
      </div>

      {/* Signature */}
      <div className="mt-10 text-center">
        <div className="mx-auto mb-4 h-px w-24 bg-primary/30" />
        <p className="text-sm tracking-widest text-muted-foreground">
          Forever yours,
        </p>
        <p className="mt-2 font-serif text-2xl font-bold text-primary">
          Eli
        </p>
      </div>

      {/* Decorative elements */}
      <div className="mt-12 flex items-center justify-center gap-6 text-muted-foreground/40">
        <CoffeeIcon />
        <HeartIcon />
        <BookIcon />
        <HeartIcon />
        <DogIcon />
      </div>
    </div>
  )
}

function CoffeeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" />
      <line x1="10" x2="10" y1="2" y2="4" />
      <line x1="14" x2="14" y1="2" y2="4" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}

function DogIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
      <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
      <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
    </svg>
  )
}
