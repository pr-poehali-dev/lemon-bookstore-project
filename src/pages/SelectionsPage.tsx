import { Book, books, selections } from '@/data/books';
import BookCard from '@/components/BookCard';

interface SelectionsPageProps {
  onAddToCart: (book: Book) => void;
}

const BOOKS_IMG = 'https://cdn.poehali.dev/projects/11796bb3-4e71-41ce-ba7c-1d0a277b1066/files/473c5fea-78d9-491b-bdfb-ff84f06a1df5.jpg';

export default function SelectionsPage({ onAddToCart }: SelectionsPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-lime-light via-secondary to-background border-b border-border py-14">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-widest">Редакция советует</p>
            <h1 className="font-display text-6xl font-bold text-foreground mb-4">Подборки</h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-md">
              Наши редакторы читают каждую книгу прежде чем включить её в подборку. Здесь только то, что действительно стоит прочитать.
            </p>
          </div>
          <div className="hidden lg:block">
            <img src={BOOKS_IMG} alt="Стопка книг" className="rounded-2xl shadow-xl w-full object-cover aspect-video" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-20">
        {selections.map((sel, idx) => {
          const selBooks = sel.books.map(id => books.find(b => b.id === id)!).filter(Boolean);
          return (
            <div key={sel.id}>
              <div className={`bg-gradient-to-r ${sel.color} rounded-2xl p-8 mb-8 border border-border/40`}>
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{sel.emoji}</span>
                  <div>
                    <h2 className="font-display text-4xl font-bold text-foreground">{sel.title}</h2>
                    <p className="text-muted-foreground font-body mt-1">{sel.subtitle}</p>
                  </div>
                  <div className="ml-auto bg-card/70 backdrop-blur rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground">
                    {selBooks.length} книги
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {selBooks.map((book, i) => (
                  <div
                    key={book.id}
                    className="animate-fade-up"
                    style={{ animationDelay: `${idx * 0.1 + i * 0.1}s`, opacity: 0 }}
                  >
                    <BookCard book={book} onAddToCart={onAddToCart} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
