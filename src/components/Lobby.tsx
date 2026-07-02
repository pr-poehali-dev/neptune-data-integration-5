import Icon from "@/components/ui/icon"

const tournaments = [
  {
    id: 1,
    title: "Ночной кубок",
    status: "live",
    prize: "5000 голды",
    players: "8/16",
    startsAt: "Идёт сейчас",
  },
  {
    id: 2,
    title: "Гранд Арена",
    status: "soon",
    prize: "12 000 голды",
    players: "3/32",
    startsAt: "Сегодня в 21:00",
  },
  {
    id: 3,
    title: "Еженедельный",
    status: "soon",
    prize: "3 000 голды",
    players: "12/16",
    startsAt: "Завтра в 18:00",
  },
]

const feed = [
  { icon: "Trophy", text: "Алексей выиграл турнир «Ночной кубок»", time: "1 мин назад" },
  { icon: "Coins", text: "Макс поставил 500 голды на @pro_gamer", time: "3 мин назад" },
  { icon: "Ticket", text: "Анна купила билет на «Гранд Арену»", time: "7 мин назад" },
  { icon: "Flame", text: "Дима поставил 1200 голды на «Ночной кубок»", time: "12 мин назад" },
  { icon: "Star", text: "Новый рекорд ставки: 3000 голды", time: "20 мин назад" },
]

export default function Lobby() {
  return (
    <section className="relative z-10 px-6 py-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Tournaments */}
        <div className="lg:col-span-2">
          <h2 className="text-white/50 text-xs uppercase tracking-widest mb-4">Активные турниры</h2>
          <div className="flex flex-col gap-3">
            {tournaments.map((t) => (
              <div
                key={t.id}
                className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-5 flex items-center justify-between hover:bg-white/10 transition-all duration-200"
                style={{ filter: "url(#glass-effect)" }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${t.status === "live" ? "bg-green-400 shadow-[0_0_8px_2px_rgba(74,222,128,0.6)]" : "bg-yellow-400/60"}`} />
                  <div>
                    <div className="text-white font-medium text-sm">{t.title}</div>
                    <div className="text-white/40 text-xs mt-0.5">{t.startsAt}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-right">
                  <div>
                    <div className="text-white/80 text-xs">Призовой</div>
                    <div className="text-white font-semibold text-sm">{t.prize}</div>
                  </div>
                  <div>
                    <div className="text-white/80 text-xs">Игроки</div>
                    <div className="text-white font-semibold text-sm">{t.players}</div>
                  </div>
                  <a
                    href="https://t.me/Paveldduroov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 transition-all"
                  >
                    Участвовать
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div>
          <h2 className="text-white/50 text-xs uppercase tracking-widest mb-4">Лента активности</h2>
          <div
            className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-4 flex flex-col gap-3"
            style={{ filter: "url(#glass-effect)" }}
          >
            {feed.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-0.5 text-white/40">
                  <Icon name={item.icon as "Trophy"} size={14} />
                </div>
                <div>
                  <div className="text-white/80 text-xs leading-relaxed">{item.text}</div>
                  <div className="text-white/30 text-xs mt-0.5">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
