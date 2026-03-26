import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Users, Zap, Shield, Star, Headphones } from "lucide-react"

const services = [
  {
    icon: Trophy,
    title: "Организация турниров",
    description:
      "Проводим соревнования любого масштаба — от камерных онлайн-кубков до крупных LAN-мероприятий. Полная организация: сетка, судейство, стриминг и призовой фонд.",
  },
  {
    icon: Users,
    title: "Командные лиги",
    description:
      "Регулярные сезонные лиги для команд разных уровней. Система рейтинга, стабильное расписание и возможность расти от любительского до профессионального уровня.",
  },
  {
    icon: Zap,
    title: "Онлайн-турниры",
    description:
      "Удобный формат для игроков по всей России. Быстрая регистрация, честные матчи и мгновенные результаты — играй из любой точки.",
  },
  {
    icon: Shield,
    title: "Анти-чит и судейство",
    description:
      "Строгий контроль честности: профессиональное судейство, система проверки игроков и оперативное разрешение споров. Чистые матчи гарантированы.",
  },
  {
    icon: Star,
    title: "Призовые и награды",
    description:
      "Привлекательные призовые фонды, кастомные медали и трофеи победителям. Признание для лучших команд и индивидуальных игроков сезона.",
  },
  {
    icon: Headphones,
    title: "Стриминг и медиа",
    description:
      "Профессиональная трансляция ключевых матчей с комментаторами. Участники получают клипы и хайлайты своих лучших моментов.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Что мы делаем
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          В чем мы <span className="text-primary">сильны</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          От регистрации до награждения — WTG берёт на себя всё, чтобы каждый турнир прошёл на высшем уровне.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
