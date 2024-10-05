interface BlogPost {
  title: string;
  date: string;
  content: string;
}

const blogPosts: Record<string, BlogPost> = {
  'getting-started-with-nextjs': {
    title: 'Getting Started with Next.js',
    date: '2023-05-15',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h2>Key Features of Next.js</h2>
      <ul>
        <li>Server-side rendering</li>
        <li>Static site generation</li>
        <li>API routes</li>
        <li>Built-in CSS support</li>
      </ul>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    `,
  },
  'power-of-tailwind-css': {
    title: 'The Power of Tailwind CSS',
    date: '2023-06-02',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <h2>Why Tailwind CSS?</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h3>Advantages of Tailwind CSS</h3>
      <ol>
        <li>Highly customizable</li>
        <li>Rapid prototyping</li>
        <li>Consistent design system</li>
        <li>Small bundle size</li>
      </ol>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    `,
  },
  'building-scalable-apis-nodejs': {
    title: 'Building Scalable APIs with Node.js',
    date: '2023-06-20',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <h2>Best Practices for Scalable APIs</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h3>Key Considerations</h3>
      <ul>
        <li>Proper error handling</li>
        <li>Caching strategies</li>
        <li>Database optimization</li>
        <li>Load balancing</li>
      </ul>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    `,
  },
};

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

export function getAllBlogPosts(): { slug: string; title: string; date: string }[] {
  return Object.entries(blogPosts).map(([slug, post]) => ({
    slug,
    title: post.title,
    date: post.date,
  }));
}