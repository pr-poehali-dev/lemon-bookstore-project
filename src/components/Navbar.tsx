import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartCount: number;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Главная' },
  { id: 'catalog', label: 'Каталог' },
  { id: 'selections', label: 'Подборки' },
  { id: 'blog', label: 'Блог' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'about', label: 'О магазине' },
  { id: 'contacts', label: 'Контакты' },
];

export default function Navbar({ currentPage, onNavigate, cartCount }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🍋</span>
            <span className="font-display font-bold text-2xl text-foreground tracking-tight">Лимон</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`nav-link font-body text-sm font-medium transition-colors pb-0.5 ${
                  currentPage === item.id
                    ? 'text-primary active'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('catalog')}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Поиск"
            >
              <Icon name="Search" size={20} className="text-muted-foreground" />
            </button>
            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Корзина"
            >
              <Icon name="ShoppingBag" size={20} className="text-muted-foreground" />
              {cartCount > 0 && (
                <span className="cart-badge absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="lg:hidden p-2 rounded-full hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Icon name={mobileOpen ? 'X' : 'Menu'} size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMobileOpen(false); }}
                className={`text-left px-3 py-2.5 rounded-lg font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-secondary text-primary'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
