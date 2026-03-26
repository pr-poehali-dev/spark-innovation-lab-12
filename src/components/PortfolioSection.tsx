import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"

const tournaments = [
  {
    title: "WTG Open Season 3",
    category: "Онлайн-турнир",
    image: "/placeholder.jpg",
    description:
      "Крупнейший онлайн-кубок сезона с участием 64 команд со всей России. Групповая стадия, плей-офф и прямая трансляция финала.",
    tags: ["64 команды", "Bo3 финал", "Призовой фонд 50 000₽"],
    winner: "Team Phantom",
  },
  {
    title: "WTG LAN Cup 2024",
    category: "LAN-мероприятие",
    image: "/placeholder.jpg",
    description:
      "Первый оффлайн-турнир WTG — 16 лучших команд, профессиональная сцена и живая аудитория. Незабываемая атмосфера настоящего киберспорта.",
    tags: ["16 команд", "LAN-формат", "Призовой фонд 100 000₽"],
    winner: "Shift Gaming",
  },
  {
    title: "WTG Amateur League",
    category: "Лига для новичков",
    image: "/placeholder.jpg",
    description:
      "Сезонная лига для начинающих команд: 8 недель регулярного чемпионата, система рейтинга и возможность выйти в основной дивизион.",
    tags: ["32 команды", "8 недель", "Стабильное расписание"],
    winner: "NoName Crew",
  },
  {
    title: "WTG Pro Series",
    category: "Профессиональная серия",
    image: "/placeholder.jpg",
    description:
      "Элитный турнир для топ-команд с приглашениями и квалификацией. Профессиональный стриминг, кастеры и полное медиа-освещение.",
    tags: ["Invitation only", "Профи-уровень", "Призовой фонд 200 000₽"],
    winner: "Eclipse Esports",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши турниры</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Каждое мероприятие WTG — это продуманная организация, честная борьба и яркие эмоции для участников и зрителей.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tournaments.map((tournament, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:border-primary"
            >
              <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary/20 via-background to-muted flex items-center justify-center">
                <Trophy className="h-20 w-20 text-primary/30 group-hover:text-primary/50 transition-colors duration-300 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary text-primary-foreground font-semibold">
                    🏆 Победитель: {tournament.winner}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{tournament.category}</p>
                <h3 className="text-xl font-bold mb-2">{tournament.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{tournament.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tournament.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
