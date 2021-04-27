const COMMENTS_DATA = [
  {
    id: 1,
    author: 'Alex',
    message: 'Message 1',
    likes: 20,
    children: [
      {
        id: 3,
        author: 'Sasha',
        message: 'Message 3',
        likes: -1,
        children: [
          { id: 18, author: 'Sasha', likes: 11, message: 'Message 3', children: [] },
          {
            id: 19,
            author: 'Ted',
            message: 'Message 4',
            likes: 3,
            children: [
              {
                id: 20,
                author: 'Alex',
                message: 'Message 5',
                likes: -23,
                children: [
                  { id: 21, author: 'Sasha', message: 'Message 3', children: [] },
                  {
                    id: 22,
                    author: 'Ted',
                    message: 'Message 4',
                    children: [{ id: 23, author: 'Alex', message: 'Message 5', children: [] }],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        author: 'Ted',
        message: 'Message 4',
        likes: 20,
        children: [{ id: 5, author: 'Alex', message: 'Message 5', children: [] }],
      },
    ],
  },
  {
    id: 2,
    author: 'John',
    message: 'Message 2!!!',
    likes: 22,
    children: [],
  },
  {
    id: 6,
    author: 'John',
    message: 'Message 2!!!',
    likes: 1111,
    children: [
      { id: 8, author: 'Sasha', message: 'Message 3', children: [] },
      {
        id: 9,
        author: 'Ted',
        message: 'Message 4',
        children: [{ id: 10, author: 'Alex', message: 'Message 5', children: [] }],
      },
    ],
  },
  {
    id: 7,
    author: 'John',
    message: 'Message 2!!!',
    likes: 3,
    children: [
      { id: 11, author: 'Sasha', message: 'Message 3', children: [] },
      {
        id: 12,
        author: 'Ted',
        message: 'Message 4',
        children: [
          {
            id: 14,
            author: 'Alex',
            message: 'Message 5',
            children: [
              { id: 15, author: 'Sasha', message: 'Message 3', children: [] },
              {
                id: 16,
                author: 'Ted',
                message: 'Message 4',
                children: [{ id: 17, author: 'Alex', message: 'Message 5', children: [] }],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default COMMENTS_DATA;
