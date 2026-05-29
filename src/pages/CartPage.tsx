import { Book } from '@/data/books';
import Icon from '@/components/ui/icon';

interface CartItem {
  book: Book;
  qty: number;
}

interface CartPageProps {
  items: CartItem[];
  onRemove: (bookId: number) => void;
  onUpdateQty: (bookId: number, qty: number) => void;
  onNavigate: (page: string) => void;
}

export default function CartPage({ items, onRemove, onUpdateQty, onNavigate }: CartPageProps) {
  const total = items.reduce((s, i) => s + i.book.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="text-7xl mb-6">🛍️</div>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">Корзина пуста</h2>
          <p className="text-muted-foreground font-body mb-8">
            Добавьте понравившиеся книги из каталога или подборок редакции
          </p>
          <button
            onClick={() => onNavigate('catalog')}
            className="bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Перейти в каталог
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-secondary to-background border-b border-border py-14">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-6xl font-bold text-foreground mb-2">Корзина</h1>
          <p className="text-muted-foreground font-body">{count} {count === 1 ? 'книга' : count < 5 ? 'книги' : 'книг'}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.book.id} className="bg-card border border-border rounded-2xl p-5 flex gap-5 items-start">
                <img
                  src={item.book.cover}
                  alt={item.book.title}
                  className="w-20 h-28 object-cover rounded-xl flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted-foreground mb-1">{item.book.genre}</div>
                  <h3 className="font-display font-semibold text-xl text-foreground line-clamp-2">{item.book.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{item.book.author}</p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
                      <button
                        onClick={() => item.qty > 1 ? onUpdateQty(item.book.id, item.qty - 1) : onRemove(item.book.id)}
                        className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-card transition-colors"
                      >
                        <Icon name="Minus" size={14} />
                      </button>
                      <span className="font-semibold text-sm w-5 text-center">{item.qty}</span>
                      <button
                        onClick={() => onUpdateQty(item.book.id, item.qty + 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-card transition-colors"
                      >
                        <Icon name="Plus" size={14} />
                      </button>
                    </div>
                    <span className="font-bold text-xl text-foreground">{item.book.price * item.qty} ₽</span>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.book.id)}
                  className="text-muted-foreground hover:text-destructive transition-colors p-1"
                >
                  <Icon name="X" size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-2xl p-6 sticky top-20">
              <h3 className="font-display text-2xl font-bold text-foreground mb-5">Итого</h3>
              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Книги ({count} шт.)</span>
                  <span className="text-foreground">{total} ₽</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Доставка</span>
                  <span className="text-primary font-medium">Бесплатно</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between font-bold text-xl">
                  <span className="text-foreground">Итого</span>
                  <span className="text-foreground">{total} ₽</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <input
                  type="text"
                  placeholder="Промокод"
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-lg">
                  Оформить заказ
                </button>
              </div>

              <div className="text-xs text-muted-foreground text-center space-y-1">
                <div className="flex items-center justify-center gap-1">
                  <Icon name="Shield" size={12} />
                  Безопасная оплата
                </div>
                <div>Доставка 1–2 рабочих дня</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
