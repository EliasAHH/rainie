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
          February 16, 2026
        </p>
        <div className="mx-auto my-4 h-px w-24 bg-primary/30" />
      </div>

      {/* Greeting */}
      <h2 className="mb-6 text-center font-serif text-3xl font-bold tracking-wide text-primary sm:text-4xl">
        Oh Vanilla Bean,
      </h2>

      {/* Letter body - PLACEHOLDER MESSAGE */}
      <div className="mx-auto max-w-lg space-y-4 font-sans text-base leading-relaxed text-foreground/85 sm:text-lg">
        <p>
          There's not much I can say that hasn't been said a million times already, but I'm going to give this my best attempt. I'm not the best at writing or expressing my feelings, but I will say one thing: having you in my life has given me motivation again. You've brought me happiness, brought me excitement for the next day and the future and that's all because of you.
        </p>
        <p>
       I don't know how you came into my life, but I'm never going to question it or be mad at it, because every day with you is a new excitement. You're so quirky and excitable—you make conversations fun. Every day I'm happy to talk to you. I have a smile on my face. Most importantly, you provide a certain comfort that makes me feel safe. Safe enough to share personal things and vulnerable things. That kind of trust doesn't come easily for me, but with you, it feels natural.
        </p>
        <p>
         You are so special, Rainie. Sometimes to the point that you don't even see it yourself. You make everyone around you feel happy. You are the light. You are that person we want to gravitate towards. You are so, so important, and I never want you to forget that. I know things get hard and we get depressed, but that's why I made this. I want you to know that at any point, you're not alone. There are people in your life that care deeply about you and your happiness the same way you care about ours. When you're struggling, I want to be there. When you need someone to lean on, I want to be that person for you, the way you've been that person for me..
        </p>
        <p>
          You are so special, and I'm so thankful that I get to talk to you every day. Not only that, but I get to call you my girl. I want to be able to live up to your expectations. I want to be able to make you happy and keep that smile on your face. I want to be someone you're proud of, someone who supports your dreams and celebrates every win with you, no matter how small.
        </p>
        <p>
          You even got me reading a book with you. NO ONE HAS EVER DONE THAT. But it's something I wanted to do with you because spending time with you is so important. Whether we're talking about nothing at all or sharing something deep, every moment matters to me. I find myself looking forward to the little things, our inside jokes, the way you get excited about things, even just hearing about your day. These moments have become the best parts of mine.
        </p>
        <p>
         I have made a lot of mistakes in my life, but you will never be one of them. We've joked around so much before that God made you specifically for me, just handmade, but part of me isn't kidding. You're the perfect woman for me. You're the one I've been searching for. From your empathy to your quirkiness and excitableness, to you being loud, to you being hyper, to your love of dogs and family, every single part of you just fits. My only question is, why weren't you here sooner?
        </p>
        <p>
          Words cannot express how comfortable and how happy I am when I'm with you, and I can only hope I can give you the same feeling back. I promise to keep trying every single day to be the person you deserve. To make you laugh when you're down, to listen when you need to talk, and to remind you just how incredible you are, especially on the days when you forget.
        </p>
        <p>
          Thank you for being you. Thank you for choosing me. Thank you for making life feel exciting again.
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
