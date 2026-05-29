export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  cover: string;
  description: string;
  tags: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
}

export const GENRES = ['Все', 'Классика', 'Современная проза', 'Фантастика', 'Детектив', 'Поэзия', 'Психология', 'История', 'Детская'];

export const books: Book[] = [
  {
    id: 1,
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    genre: 'Классика',
    price: 590,
    oldPrice: 750,
    rating: 4.9,
    reviews: 1240,
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=420&fit=crop',
    description: 'Роман о любви, добре и зле, дьяволе и творчестве. Вечная классика русской литературы.',
    tags: ['роман', 'мистика', 'классика'],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 2,
    title: 'Дюна',
    author: 'Фрэнк Герберт',
    genre: 'Фантастика',
    price: 680,
    rating: 4.8,
    reviews: 890,
    cover: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=300&h=420&fit=crop',
    description: 'Эпическая история о выживании, власти и экологии на пустынной планете Арракис.',
    tags: ['фантастика', 'эпос', 'классика жанра'],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 3,
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    genre: 'Классика',
    price: 490,
    rating: 4.7,
    reviews: 2100,
    cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=420&fit=crop',
    description: 'Психологический роман о вине, совести и искуплении.',
    tags: ['роман', 'психология', 'классика'],
    inStock: true,
  },
  {
    id: 4,
    title: 'Сто лет одиночества',
    author: 'Габриэль Гарсиа Маркес',
    genre: 'Современная проза',
    price: 720,
    rating: 4.8,
    reviews: 760,
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=420&fit=crop',
    description: 'Магический реализм в самом лучшем виде — история рода Буэндиа.',
    tags: ['магический реализм', 'роман', 'нобелевская'],
    inStock: true,
    isNew: true,
  },
  {
    id: 5,
    title: 'Шерлок Холмс',
    author: 'Артур Конан Дойл',
    genre: 'Детектив',
    price: 550,
    oldPrice: 650,
    rating: 4.9,
    reviews: 1850,
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=420&fit=crop',
    description: 'Полное собрание историй о знаменитом детективе Бейкер-стрит.',
    tags: ['детектив', 'классика', 'викторианская эпоха'],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 6,
    title: 'Атлант расправил плечи',
    author: 'Айн Рэнд',
    genre: 'Современная проза',
    price: 890,
    rating: 4.5,
    reviews: 430,
    cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=420&fit=crop',
    description: 'Философский роман об индивидуализме, разуме и свободе.',
    tags: ['философия', 'роман', 'американская литература'],
    inStock: true,
    isNew: true,
  },
  {
    id: 7,
    title: 'Психология влияния',
    author: 'Роберт Чалдини',
    genre: 'Психология',
    price: 650,
    rating: 4.7,
    reviews: 980,
    cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=420&fit=crop',
    description: 'Как убеждать людей и защищаться от манипуляций.',
    tags: ['психология', 'нон-фикшн', 'бизнес'],
    inStock: true,
  },
  {
    id: 8,
    title: '1984',
    author: 'Джордж Оруэлл',
    genre: 'Фантастика',
    price: 480,
    rating: 4.8,
    reviews: 1560,
    cover: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=420&fit=crop',
    description: 'Антиутопия о тоталитарном обществе, свободе мысли и любви.',
    tags: ['антиутопия', 'классика', 'политика'],
    inStock: true,
    isBestseller: true,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: 'Почему Достоевский актуален сегодня',
    excerpt: 'Разбираемся, почему классик XIX века говорит с нами на одном языке в 2024 году.',
    author: 'Анна Лисова',
    date: '15 мая 2024',
    readTime: '7 мин',
    category: 'Авторы',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: '10 книг, которые изменят ваше мышление',
    excerpt: 'Наш редактор собрал список книг, после которых мир видится иначе.',
    author: 'Игорь Самарин',
    date: '8 мая 2024',
    readTime: '5 мин',
    category: 'Подборки',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Маркес и магия латинской Америки',
    excerpt: 'История великого писателя и его магического реализма, изменившего мировую литературу.',
    author: 'Ольга Кирова',
    date: '1 мая 2024',
    readTime: '9 мин',
    category: 'Авторы',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=400&fit=crop',
  },
];

export const reviews = [
  {
    id: 1,
    name: 'Мария К.',
    rating: 5,
    text: 'Заказала первый раз и осталась в полном восторге. Книги пришли в идеальной упаковке, быстрая доставка. Буду покупать только здесь!',
    book: 'Мастер и Маргарита',
    avatar: '👩',
    date: 'май 2024',
  },
  {
    id: 2,
    name: 'Дмитрий В.',
    rating: 5,
    text: 'Отличный выбор книг, особенно раздел фантастики. Нашёл редкие издания, которые не мог найти нигде. Рекомендую!',
    book: 'Дюна',
    avatar: '👨',
    date: 'апрель 2024',
  },
  {
    id: 3,
    name: 'Светлана М.',
    rating: 5,
    text: 'Лимон — моё любимое место для книг. Всегда есть что-то новое, подборки составлены с душой. Команда явно любит литературу.',
    book: 'Сто лет одиночества',
    avatar: '👩',
    date: 'апрель 2024',
  },
  {
    id: 4,
    name: 'Алексей Н.',
    rating: 4,
    text: 'Хороший магазин, большой выбор. Единственное — хотелось бы больше книг по истории. Но в целом очень доволен.',
    book: 'Атлант расправил плечи',
    avatar: '👨',
    date: 'март 2024',
  },
];

export const selections = [
  {
    id: 1,
    title: 'Старт читателя',
    subtitle: 'Первые книги, которые затянут навсегда',
    books: [1, 3, 5],
    emoji: '🌱',
    color: 'from-lime-light to-secondary',
  },
  {
    id: 2,
    title: 'Интеллектуальный марафон',
    subtitle: 'Для тех, кто хочет думать глубже',
    books: [3, 6, 7],
    emoji: '🧠',
    color: 'from-amber-50 to-yellow-100',
  },
  {
    id: 3,
    title: 'Фантастические миры',
    subtitle: 'Путешествия за пределы реальности',
    books: [2, 8, 4],
    emoji: '🚀',
    color: 'from-blue-50 to-indigo-100',
  },
];
