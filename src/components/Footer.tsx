interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-foreground text-background py-12 mt-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍋</span>
              <span className="font-display font-bold text-2xl">Лимон</span>
            </button>
            <p className="text-background/60 font-body text-sm leading-relaxed">
              Книжный магазин с душой. Тщательно отобранные книги для настоящих читателей.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-background/80 text-sm uppercase tracking-wider">Магазин</h4>
            <div className="space-y-2">
              {[
                { id: 'catalog', label: 'Каталог' },
                { id: 'selections', label: 'Подборки' },
                { id: 'blog', label: 'Блог' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="block text-sm text-background/60 hover:text-background transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-background/80 text-sm uppercase tracking-wider">О нас</h4>
            <div className="space-y-2">
              {[
                { id: 'about', label: 'О магазине' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'contacts', label: 'Контакты' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="block text-sm text-background/60 hover:text-background transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-background/80 text-sm uppercase tracking-wider">Контакты</h4>
            <div className="space-y-2 text-sm text-background/60">
              <div>г. Москва, ул. Арбат, 15</div>
              <div>+7 (495) 123-45-67</div>
              <div>hello@limon-books.ru</div>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-background/40 text-xs font-body">
            © 2024 Лимон. Все права защищены.
          </div>
          <div className="text-background/40 text-xs font-body">
            Сделано с 🍋 в Москве
          </div>
        </div>
      </div>
    </footer>
  );
}
