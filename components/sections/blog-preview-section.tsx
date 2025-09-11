import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  href: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  title: string;
  excerpt: string;
}

interface BlogPreviewSectionProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  posts: BlogPost[];
  viewAllText?: string;
  viewAllHref?: string;
  viewAllIcon?: React.ReactNode;
}

export default function BlogPreviewSection({
  badge,
  badgeIcon,
  title,
  description,
  posts,
  viewAllText,
  viewAllHref,
  viewAllIcon
}: BlogPreviewSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
              {badgeIcon}
              {badge}
            </div>
          )}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <Link href={post.href}>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.thumbnail.src}
                    alt={post.thumbnail.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
        
        {viewAllText && viewAllHref && (
          <div className="text-center mt-12">
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200"
            >
              <span>{viewAllText}</span>
              {viewAllIcon}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}