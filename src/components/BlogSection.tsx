import { ArrowRight, Calendar } from 'lucide-react';

interface BlogSectionProps {
  blogImages: string[];
}

const BlogSection = ({ blogImages }: BlogSectionProps) => {
  const posts = [
    {
      date: 'January 15, 2026',
      title: 'The Future of Sustainable Logistics in Global Trade',
      excerpt: 'Exploring eco-friendly shipping solutions and green supply chain practices.',
    },
    {
      date: 'January 10, 2026',
      title: 'How AI is Revolutionizing Supply Chain Management',
      excerpt: 'Discover how artificial intelligence optimizes routes and reduces costs.',
    },
    {
      date: 'January 5, 2026',
      title: 'Top 5 Trends Shaping the Logistics Industry in 2026',
      excerpt: 'From automation to last-mile innovation, here\'s what to watch.',
    },
  ];

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">Latest News</span>
          <h2 className="section-title text-foreground">
            Latest News & Articles
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="blog-card">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blogImages[index] || '/placeholder.svg'}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
