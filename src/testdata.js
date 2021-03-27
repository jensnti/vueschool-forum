const data = {
  categories: [
    {
      id: 1,
      name: 'Chats',
      forumId: 1,
    },
  ],
  forums: [
    {
      id: 1,
      name: 'fishing',
      description: 'lets talk fishing',
      categoryId: 1,
      threads: [1],
    },
  ],
  users: [{ id: 1, name: 'Jens' }],
  threads: [
    {
      id: 1,
      title: 'What is your favourite food?',
      publishedAt: 1681681861,
      posts: [],
      userId: 1,
    },
  ],
  posts: [
    {
      id: 1,
      publishedAt: 1681681861,
      userId: 1,
      text: 'I like burgers, and you?',
      threadId: 1,
    },
  ],
};

// thread = data.threads.find((t) => t.id === 1); // returns only first
// threadPosts = data.posts.filter((p) => p.threadId === thread.id); // returns all results
// data.posts.filter(post => post.userId === 1)
