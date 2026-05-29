import { useState, useMemo } from 'react';
import { Book, books, GENRES } from '@/data/books';
import BookCard from '@/components/BookCard';
import Icon from '@/components/ui/icon';

interface CatalogPageProps {
  onAddToCart: (book: Book) => void;
}

export default function CatalogPage({ onAddToCart }: CatalogPageProps) {
  const [search, setSearch] = useState('');
  const [activeGenre, setActiveGenre] = useState('Все');
  const [sortBy, setSortBy] = useState('popular');

  const filtered = useMemo(() => {
    let result = [...books];
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(b =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.genre.toLowerCase().includes(q) ||
        b.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    if (activeGenre !== 'Все') {
      result = result.filter(b => b.genre === activeGenre);
    }
    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    else result.sort((a, b) => b.reviews - a.reviews);
    return result;
  }, [search, activeGenre, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-secondary to-lime-light border-b border-border py-14">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-6xl font-bold text-foreground mb-3">Каталог</h1>
          <p className="text-muted-foreground font-body text-lg">Более 5 000 книг для любого настроения</p>

          {/* Search bar */}
          <div className="mt-8 relative max-w-2xl">
            <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Поиск по названию, автору, жанру, ключевым словам..."
              className="search-input w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-card font-body text-foreground placeholder:text-muted-foreground transition-shadow"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name="X" size={18} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Filters row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {GENRES.map(genre => (
              <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeGenre === genre
                    ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                    : 'bg-card border-border text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Icon name="SlidersHorizontal" size={16} className="text-muted-foreground" />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="text-sm border border-border rounded-lg px-3 py-2 bg-card text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="popular">По популярности</option>
              <option value="rating">По рейтингу</option>
              <option value="price-asc">Цена: сначала дешевле</option>
              <option value="price-desc">Цена: сначала дороже</option>
            </select>
          </div>
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <>
            <p className="text-sm text-muted-foreground mb-6">
              Найдено: <strong className="text-foreground">{filtered.length}</strong> книг
              {search && <> по запросу «<em>{search}</em>»</>}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((book, i) => (
                <div key={book.id} className="animate-fade-up" style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}>
                  <BookCard book={book} onAddToCart={onAddToCart} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🍋</div>
            <h3 className="font-display text-3xl font-bold text-foreground mb-3">Ничего не найдено</h3>
            <p className="text-muted-foreground font-body">
              Попробуйте изменить запрос или выбрать другой жанр
            </p>
            <button
              onClick={() => { setSearch(''); setActiveGenre('Все'); }}
              className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
