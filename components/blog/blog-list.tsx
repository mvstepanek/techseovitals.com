import Link from 'next/link';
import Image from 'next/image';
import { BlogPostMetadata } from '@/lib/blog';

interface BlogListProps {
  posts: BlogPostMetadata[];
}

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
        >
          <div className="relative">
            {post.image && (
              <div className="aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={337}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
          </div>
          
          <div className="p-8">
            {/* Meta Information */}
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </time>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">
              <Link href={`/blog/${post.slug}/`} className="hover:underline">
                {post.title}
              </Link>
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
              {post.description}
            </p>

            {/* Read More Link */}
            <Link
              href={`/blog/${post.slug}/`}
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
            >
              Read Full Article
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}