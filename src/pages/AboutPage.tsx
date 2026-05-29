const HERO_IMG = 'https://cdn.poehali.dev/projects/11796bb3-4e71-41ce-ba7c-1d0a277b1066/files/b191f07d-0955-46e6-a306-27adae55fdb2.jpg';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-lime-light via-secondary to-background border-b border-border py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">Наша история</p>
            <h1 className="font-display text-6xl font-bold text-foreground leading-tight">
              О магазине<br />
              <em className="not-italic text-primary">«Лимон»</em>
            </h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Мы начали в 2019 году с простой идеи: сделать поиск хорошей книги лёгким и приятным. Сегодня Лимон — это живое сообщество читателей по всей России.
            </p>
          </div>
          <div>
            <img src={HERO_IMG} alt="Магазин Лимон" className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 space-y-20">
        {/* Values */}
        <div>
          <h2 className="font-display text-5xl font-bold text-foreground mb-10 text-center">Наши принципы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: '🍋', title: 'Свежесть', desc: 'Мы регулярно обновляем каталог и следим за новинками мировой литературы. Нет залежалых книг — только живой выбор.' },
              { emoji: '❤️', title: 'С душой', desc: 'Каждая подборка составлена людьми, которые сами читают. Нет алгоритмов — только настоящая любовь к книгам.' },
              { emoji: '🤝', title: 'Честность', desc: 'Мы пишем правдивые рецензии — и о сильных, и о слабых сторонах книги. Наши читатели доверяют нашему слову.' },
            ].map((val) => (
              <div key={val.title} className="bg-card border border-border rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{val.emoji}</div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">{val.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-primary rounded-3xl p-12 text-primary-foreground">
          <h2 className="font-display text-4xl font-bold mb-10 text-center">Лимон в цифрах</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '5 000+', label: 'книг в каталоге' },
              { value: '12 000+', label: 'довольных покупателей' },
              { value: '4.9 ★', label: 'средняя оценка' },
              { value: '5 лет', label: 'на рынке' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-5xl font-bold">{stat.value}</div>
                <div className="text-primary-foreground/70 font-body mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="font-display text-5xl font-bold text-foreground mb-4 text-center">Команда</h2>
          <p className="text-center text-muted-foreground font-body mb-10">Люди, которые делают Лимон живым</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Анна Лисова', role: 'Главный редактор', emoji: '👩‍💼', desc: 'Читает 4 книги в неделю. Специализация: современная проза и биографии' },
              { name: 'Игорь Самарин', role: 'Куратор фантастики', emoji: '👨‍🚀', desc: 'Влюблён в Дюну. Знает каждый фантастический роман, изданный после 1950 года' },
              { name: 'Ольга Кирова', role: 'Куратор классики', emoji: '👩‍🏫', desc: 'Филолог с 15-летним стажем. Помогает найти идеальное издание любой классики' },
            ].map((member) => (
              <div key={member.name} className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="font-display text-xl font-bold text-foreground">{member.name}</h3>
                <div className="text-primary text-sm font-medium mb-3">{member.role}</div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
