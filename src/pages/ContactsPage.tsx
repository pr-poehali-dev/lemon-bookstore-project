import Icon from '@/components/ui/icon';

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-secondary to-background border-b border-border py-14">
        <div className="container mx-auto px-4">
          <p className="text-sm font-medium text-primary mb-2 uppercase tracking-widest">Мы рядом</p>
          <h1 className="font-display text-6xl font-bold text-foreground mb-3">Контакты</h1>
          <p className="text-muted-foreground font-body text-lg">Напишите нам — ответим в течение часа</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Написать нам</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Имя</label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="почта@mail.ru"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Тема</label>
                <select className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Вопрос по заказу</option>
                  <option>Возврат или обмен</option>
                  <option>Нет нужной книги</option>
                  <option>Сотрудничество</option>
                  <option>Другое</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Сообщение</label>
                <textarea
                  rows={5}
                  placeholder="Расскажите подробнее..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <button className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-xl hover:bg-primary/90 transition-colors">
                Отправить сообщение
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display text-2xl font-bold text-foreground mb-5">Как нас найти</h3>
              <div className="space-y-4">
                {[
                  { icon: 'MapPin', title: 'Адрес', value: 'г. Москва, ул. Арбат, 15', sub: 'Пн–Вс: 10:00 – 21:00' },
                  { icon: 'Phone', title: 'Телефон', value: '+7 (495) 123-45-67', sub: 'Бесплатно по России' },
                  { icon: 'Mail', title: 'Email', value: 'hello@limon-books.ru', sub: 'Ответим за 1 час' },
                ].map((item) => (
                  <div key={item.icon} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} fallback="Circle" size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">{item.title}</div>
                      <div className="font-semibold text-foreground">{item.value}</div>
                      <div className="text-sm text-muted-foreground">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Мы в соцсетях</h3>
              <div className="flex gap-3">
                {[
                  { label: 'ВКонтакте', emoji: '💙' },
                  { label: 'Telegram', emoji: '✈️' },
                  { label: 'Instagram', emoji: '📸' },
                ].map((sn) => (
                  <button
                    key={sn.label}
                    className="flex-1 bg-secondary hover:bg-muted border border-border rounded-xl py-3 text-center transition-colors"
                  >
                    <div className="text-xl mb-1">{sn.emoji}</div>
                    <div className="text-xs font-medium text-foreground">{sn.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-6">
              <div className="text-3xl mb-3">🎁</div>
              <h3 className="font-display text-2xl font-bold mb-2">Первый заказ со скидкой</h3>
              <p className="font-body text-primary-foreground/80 text-sm">
                Напишите нам в чат и получите промокод на скидку 20% на первую покупку
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon name="MapPin" fallback="Circle" size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground">Мы на карте</h3>
              <p className="text-sm text-muted-foreground font-body">г. Москва, ул. Арбат, 15</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-md" style={{ height: 420 }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.590396%2C55.752023&z=16&pt=37.590396,55.752023,pm2rdm~&text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D1%83%D0%BB.%20%D0%90%D1%80%D0%B1%D0%B0%D1%82%2C%2015&l=map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              title="Карта магазина Лимон"
            />
          </div>
        </div>
      </div>
    </div>
  );
}