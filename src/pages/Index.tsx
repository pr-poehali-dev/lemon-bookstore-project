import { useState } from 'react';
import { Book } from '@/data/books';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from './HomePage';
import CatalogPage from './CatalogPage';
import SelectionsPage from './SelectionsPage';
import BlogPage from './BlogPage';
import ReviewsPage from './ReviewsPage';
import AboutPage from './AboutPage';
import ContactsPage from './ContactsPage';
import CartPage from './CartPage';

interface CartItem {
  book: Book;
  qty: number;
}

export default function Index() {
  const [page, setPage] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  const navigate = (p: string) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (book: Book) => {
    setCart(prev => {
      const existing = prev.find(i => i.book.id === book.id);
      if (existing) {
        return prev.map(i => i.book.id === book.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { book, qty: 1 }];
    });
    setToast(`«${book.title}» добавлена в корзину`);
    setTimeout(() => setToast(null), 2500);
  };

  const removeFromCart = (bookId: number) => {
    setCart(prev => prev.filter(i => i.book.id !== bookId));
  };

  const updateQty = (bookId: number, qty: number) => {
    setCart(prev => prev.map(i => i.book.id === bookId ? { ...i, qty } : i));
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={page} onNavigate={navigate} cartCount={cartCount} />

      <main className="flex-1">
        {page === 'home' && <HomePage onNavigate={navigate} onAddToCart={addToCart} />}
        {page === 'catalog' && <CatalogPage onAddToCart={addToCart} />}
        {page === 'selections' && <SelectionsPage onAddToCart={addToCart} />}
        {page === 'blog' && <BlogPage />}
        {page === 'reviews' && <ReviewsPage />}
        {page === 'about' && <AboutPage />}
        {page === 'contacts' && <ContactsPage />}
        {page === 'cart' && (
          <CartPage
            items={cart}
            onRemove={removeFromCart}
            onUpdateQty={updateQty}
            onNavigate={navigate}
          />
        )}
      </main>

      <Footer onNavigate={navigate} />

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-foreground text-background px-6 py-3 rounded-xl shadow-2xl text-sm font-body font-medium animate-fade-up z-50 flex items-center gap-2">
          <span>✅</span>
          {toast}
        </div>
      )}
    </div>
  );
}
