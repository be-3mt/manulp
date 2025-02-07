import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";
import type { BlogPost } from "@shared/schema";

function BlogPostSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-96" />
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: [`/api/blog/${slug}`],
  });

  if (isLoading) {
    return (
      <div className="container max-w-3xl py-12">
        <BlogPostSkeleton />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <p className="text-muted-foreground">
          The blog post you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <article className="container max-w-3xl py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      </header>

      <div className="aspect-video relative mb-8">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      <div className="prose prose-lg max-w-none">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
