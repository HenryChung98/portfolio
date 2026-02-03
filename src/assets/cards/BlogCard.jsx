import { useEffect, useState } from "react";

export default function Blog() {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    fetch("https://henrychung98.github.io/henry-blog/api/recent-posts.json")
      .then((res) => res.json())
      .then((data) => setRecentPosts(data));
  }, []);

  return (
    <section>
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b-2 pb-2">
        <h3 className="text-xl font-bold">Blog</h3>
        <a
          href="https://henrychung98.github.io/henry-blog/"
          className="font-bold text-blue-800 hover:text-blue-300 duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Blog →
        </a>
      </div>

      {/* Recent label */}
      <p className="text-sm font-semibold mb-3">Recent Posts</p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recentPosts.map((post) => (
          <a
            key={post.id}
            href={`https://henrychung98.github.io${post.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full rounded-xl border border-gray-300 p-6 transition sm:p-4 hover:bg-blue-100"
          >
            <h4 className="mb-2 text-lg font-bold text-gray-800 group-hover:text-blue-500 duration-200">
              {post.title}
            </h4>

            <p className="mb-4 text-sm leading-relaxed text-gray-600">{post.description}</p>
            <div className="flex items-center gap-2">
              <time className="text-xs text-gray-500">
                {new Date(post.pubDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  timeZone: "UTC",
                })}
              </time>
              <div className="flex flex-wrap gap-2">
                {post.categories[0] && (
                  <span className="bg-gray-200 rounded-xl px-2 py-1 text-xs text-gray-500">
                    {post.categories[0]}
                  </span>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
