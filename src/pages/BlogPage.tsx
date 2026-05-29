import { blogPosts } from '@/data/books';
import Icon from '@/components/ui/icon';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-background to-secondary border-b border-border py-14">
        <div className="container mx-auto px-4">
          <p className="text-sm font-medium text-primary mb-2 uppercase tracking-widest">Читать интересно</p>
          <h1 className="font-display text-6xl font-bold text-foreground mb-3">Блог</h1>
          <p className="text-muted-foreground font-body text-lg">Об авторах, книгах и магии чтения</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden h-[480px] group cursor-pointer">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10 text-white">
              <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                {blogPosts[0].category}
              </span>
              <h2 className="font-display text-5xl font-bold mb-3 max-w-2xl">{blogPosts[0].title}</h2>
              <p className="text-white/80 font-body text-lg mb-4 max-w-xl">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-white/70">
                <span className="font-medium text-white">{blogPosts[0].author}</span>
                <span>•</span>
                <span>{blogPosts[0].date}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={14} />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.slice(1).map((post, i) => (
            <article
              key={post.id}
              className="group cursor-pointer bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
            >
              <div className="overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="font-display font-bold text-3xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{post.author}</span>
                  <div className="flex items-center gap-3">
                    <span>{post.date}</span>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={13} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More posts placeholder */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-12 bg-secondary/50 rounded-2xl border border-border max-w-md mx-auto">
            <span className="text-4xl">✍️</span>
            <h3 className="font-display text-2xl font-bold text-foreground">Новые статьи скоро</h3>
            <p className="text-muted-foreground font-body text-sm text-center">
              Наши редакторы уже работают над новыми материалами об авторах и книгах
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
