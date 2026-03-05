 "use client"

import Image from "next/image"
import { CalendarCheck, Phone, Shield, Stethoscope, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-background"
      aria-label="メインビジュアル"
    >
      {/* Subtle decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/[0.03]" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-accent/[0.04]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-12 md:py-20 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
        {/* Left: Text Content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 shadow-sm">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium text-muted-foreground">
              {"地域に根ざした、信頼の医療"}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-balance text-3xl font-bold leading-snug tracking-tight text-foreground md:text-4xl lg:text-5xl lg:leading-tight">
            {"あなたの健やかな毎日に、"}
            <br />
            <span className="text-primary">{"確かな安心を。"}</span>
          </h1>

          {/* Lead Text */}
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {"国立大学出身の医師による丁寧な診察と、最新設備を備えた内科クリニックです。"}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <CalendarCheck className="h-5 w-5 transition-transform group-hover:scale-110" />
              {"WEB予約"}
            </a>
            <a
              href="tel:03-1234-5678"
              className="group inline-flex items-center justify-center gap-2.5 rounded-lg border-2 border-primary bg-card px-8 py-4 text-base font-bold text-primary shadow-sm transition-all hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Phone className="h-5 w-5 transition-transform group-hover:scale-110" />
              {"電話でお問い合わせ"}
            </a>
          </div>

          {/* Info chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-accent" />
              <span>{"平日 9:00 - 18:00"}</span>
            </div>
            <span className="hidden text-border sm:inline">{"/"}</span>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Stethoscope className="h-4 w-4 text-accent" />
              <span>{"内科・生活習慣病・健康診断"}</span>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative flex w-full flex-1 items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl lg:max-w-xl">
            {/* Image */}
            <Image
              src="/images/clinic-hero.jpg"
              alt="清潔感のある診察室と笑顔の医師"
              width={640}
              height={480}
              className="h-auto w-full object-cover"
              priority
            />
            {/* Overlay card */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl border border-border/50 bg-card/90 px-4 py-3 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
                <Stethoscope className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  {"院長 青井 太郎"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {"内科専門医 / 国立大学医学部卒"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
