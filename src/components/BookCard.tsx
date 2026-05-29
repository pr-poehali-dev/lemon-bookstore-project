import { Book } from '@/data/books';
import Icon from '@/components/ui/icon';

interface BookCardProps {
  book: Book;
  onAddToCart: (book: Book) => void;
}

export default function BookCard({ book, onAddToCart }: BookCardProps) {
  return (
    <div className="book-card bg-card rounded-2xl overflow-hidden border border-border flex flex-col group cursor-pointer">
      <div className="relative overflow-hidden bg-muted aspect-[3/4]">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {book.isNew && (
            <span className="bg-lime-light text-lime font-bold text-xs px-2.5 py-1 rounded-full border border-lime/30">
              Новинка
            </span>
          )}
          {book.isBestseller && (
            <span className="bg-accent text-accent-foreground font-bold text-xs px-2.5 py-1 rounded-full">
              Бестселлер
            </span>
          )}
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onAddToCart(book); }}
          className="absolute bottom-3 right-3 bg-primary text-primary-foreground p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:scale-110 shadow-lg"
        >
          <Icon name="ShoppingBag" size={16} />
        </button>
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <span className="bg-secondary px-2 py-0.5 rounded-full">{book.genre}</span>
        </div>
        <h3 className="font-display font-semibold text-lg leading-tight text-foreground line-clamp-2">{book.title}</h3>
        <p className="text-sm text-muted-foreground font-body">{book.author}</p>
        <div className="flex items-center gap-1.5 mt-auto">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-xs ${i < Math.floor(book.rating) ? 'text-accent' : 'text-muted'}`}>★</span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({book.reviews})</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-xl text-foreground">{book.price} ₽</span>
            {book.oldPrice && (
              <span className="text-sm text-muted-foreground line-through">{book.oldPrice} ₽</span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(book)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium px-3 py-1.5 rounded-lg transition-colors"
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}
