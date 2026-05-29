import { reviews } from '@/data/books';

export default function ReviewsPage() {
  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-secondary to-background border-b border-border py-14">
        <div className="container mx-auto px-4">
          <p className="text-sm font-medium text-primary mb-2 uppercase tracking-widest">Что говорят читатели</p>
          <h1 className="font-display text-6xl font-bold text-foreground mb-4">Отзывы</h1>
          <div className="flex items-center gap-6">
            <div>
              <div className="font-display text-7xl font-bold text-foreground">{avg}</div>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-accent">★</span>
                ))}
              </div>
            </div>
            <div className="text-muted-foreground font-body">
              <div className="text-lg font-medium text-foreground">Отлично</div>
              <div>{reviews.length} отзывов</div>
              <div className="text-sm mt-1">12 000+ довольных покупателей</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {reviews.map((review, i) => (
            <div
              key={review.id}
              className="bg-card border border-border rounded-2xl p-6 animate-fade-up hover:shadow-md transition-shadow"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.date}</div>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < review.rating ? 'text-accent' : 'text-muted'}`}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-foreground font-body leading-relaxed">{review.text}</p>
              <div className="mt-4 text-xs text-muted-foreground border-t border-border pt-3">
                📖 Купил: <span className="font-medium text-foreground">{review.book}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Leave review CTA */}
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-secondary to-lime-light rounded-2xl p-10 text-center border border-border">
          <div className="text-5xl mb-4">💬</div>
          <h3 className="font-display text-4xl font-bold text-foreground mb-3">Поделитесь впечатлением</h3>
          <p className="text-muted-foreground font-body mb-6 max-w-md mx-auto">
            Ваш отзыв поможет другим читателям найти хорошую книгу. Это ценно!
          </p>
          <div className="space-y-3 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Расскажите о своём опыте..."
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-xl hover:bg-primary/90 transition-colors">
              Отправить отзыв
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
