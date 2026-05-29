import { Book, books, selections } from '@/data/books';
import BookCard from '@/components/BookCard';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/11796bb3-4e71-41ce-ba7c-1d0a277b1066/files/b191f07d-0955-46e6-a306-27adae55fdb2.jpg';
const READING_IMG = 'https://cdn.poehali.dev/projects/11796bb3-4e71-41ce-ba7c-1d0a277b1066/files/26a94f6c-8287-40dd-9d5e-6170c00beaa4.jpg';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onAddToCart: (book: Book) => void;
}

export default function HomePage({ onNavigate, onAddToCart }: HomePageProps) {
  const bestsellers = books.filter(b => b.isBestseller).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary to-lime-light min-h-[90vh] flex items-center">
        {/* Decorative blobs */}
        <div className="lemon-blob absolute -top-20 -right-20 w-96 h-96 pointer-events-none" />
        <div className="lemon-blob absolute bottom-10 -left-10 w-64 h-64 pointer-events-none" style={{ background: 'radial-gradient(ellipse, hsl(68 85% 75%) 0%, transparent 70%)', opacity: 0.3 }} />

        <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-foreground px-4 py-2 rounded-full text-sm font-medium border border-accent/30">
              <span>🍋</span>
              <span>Книжный магазин с характером</span>
            </div>
            <h1 className="font-display text-6xl lg:text-8xl font-bold text-foreground leading-none tracking-tight">
              Читай
              <br />
              <em className="text-primary not-italic">свежо</em>
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-md leading-relaxed">
              Более 5000 книг — тщательно отобранных, честно описанных. Найдите свою следующую любимую книгу.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('catalog')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-2"
              >
                <Icon name="BookOpen" size={20} />
                Перейти в каталог
              </button>
              <button
                onClick={() => onNavigate('selections')}
                className="bg-card hover:bg-secondary border border-border text-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-md flex items-center gap-2"
              >
                <Icon name="Sparkles" size={20} />
                Подборки
              </button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              {[
                { value: '5 000+', label: 'книг в каталоге' },
                { value: '12 000+', label: 'довольных читателей' },
                { value: '4.9', label: 'средняя оценка' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-3xl text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="animate-float relative z-10">
              <img
                src={HERO_IMG}
                alt="Книжный магазин Лимон"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-xl flex items-center gap-3 z-20">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-xl">📦</div>
              <div>
                <div className="font-semibold text-sm text-foreground">Доставка 1-2 дня</div>
                <div className="text-xs text-muted-foreground">По всей России</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl p-4 shadow-xl z-20">
              <div className="font-display font-bold text-2xl">−20%</div>
              <div className="text-xs font-body">на первый заказ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'Truck', title: 'Быстрая доставка', desc: '1-2 дня по России' },
              { icon: 'Shield', title: 'Гарантия качества', desc: 'Оригинальные издания' },
              { icon: 'RotateCcw', title: 'Возврат 14 дней', desc: 'Без лишних вопросов' },
              { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Всегда на связи' },
            ].map((item) => (
              <div key={item.icon} className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon name={item.icon} fallback="Circle" size={22} />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-medium text-primary mb-2 uppercase tracking-widest">Топ продаж</p>
              <h2 className="font-display text-5xl font-bold text-foreground">Бестселлеры</h2>
            </div>
            <button
              onClick={() => onNavigate('catalog')}
              className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
            >
              Все книги <Icon name="ArrowRight" size={18} />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bestsellers.map((book, i) => (
              <div key={book.id} className="animate-fade-up" style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                <BookCard book={book} onAddToCart={onAddToCart} />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <button
              onClick={() => onNavigate('catalog')}
              className="bg-secondary text-foreground font-semibold px-6 py-3 rounded-xl border border-border hover:bg-muted transition-colors"
            >
              Смотреть все книги
            </button>
          </div>
        </div>
      </section>

      {/* Selections promo */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-widest">Для вас</p>
            <h2 className="font-display text-5xl font-bold text-foreground">Подборки редакции</h2>
            <p className="mt-4 text-muted-foreground font-body max-w-lg mx-auto">
              Наши редакторы лично читают и рекомендуют каждую книгу
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {selections.map((sel, i) => (
              <button
                key={sel.id}
                onClick={() => onNavigate('selections')}
                className={`bg-gradient-to-br ${sel.color} rounded-2xl p-8 text-left hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50 animate-fade-up`}
                style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
              >
                <div className="text-5xl mb-4">{sel.emoji}</div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">{sel.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{sel.subtitle}</p>
                <div className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold">
                  Смотреть подборку <Icon name="ArrowRight" size={14} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About promo */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={READING_IMG}
                alt="Читатель с книгой"
                className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="space-y-6">
              <p className="text-sm font-medium text-primary uppercase tracking-widest">О нас</p>
              <h2 className="font-display text-5xl font-bold text-foreground leading-tight">
                Магазин, который<br />
                <em className="not-italic text-primary">любит книги</em>
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Лимон — это не просто магазин. Это сообщество людей, которые верят, что правильная книга в нужный момент меняет жизнь.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Мы отбираем книги вручную, пишем честные рецензии и создаём подборки с настоящей заботой о читателе.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
              >
                Узнать больше <Icon name="ArrowRight" size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="text-5xl mb-4">📬</div>
          <h2 className="font-display text-4xl font-bold mb-4">Получайте лучшее первыми</h2>
          <p className="font-body mb-8 opacity-80 max-w-md mx-auto">
            Подпишитесь на рассылку и узнавайте о новинках, акциях и редакционных подборках раньше всех
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="ваша@почта.ru"
              className="flex-1 px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 font-body"
            />
            <button className="bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap">
              Подписаться
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}