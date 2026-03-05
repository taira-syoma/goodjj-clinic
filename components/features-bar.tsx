 "use client"

import { HeartPulse, Microscope, UserCheck, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: UserCheck,
    title: "丁寧な問診",
    description: "じっくりお話を伺います",
  },
  {
    icon: Microscope,
    title: "最新の検査設備",
    description: "精度の高い診断を実現",
  },
  {
    icon: HeartPulse,
    title: "生活習慣病に対応",
    description: "糖尿病・高血圧など",
  },
  {
    icon: ShieldCheck,
    title: "安心の衛生管理",
    description: "徹底した感染症対策",
  },
]

export function FeaturesBar() {
  return (
    <section className="border-t border-border bg-card" aria-label="特徴">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center gap-2 bg-card px-4 py-8 text-center md:py-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-sm font-bold text-foreground">{feature.title}</h3>
            <p className="text-xs text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
