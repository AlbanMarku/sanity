export default {
  name: 'lesson',
  type: 'document',
  title: 'Lesson',
  fields: [
    {
      name: 'content',
      Title: 'content',
      type: 'string',
    },
    {
      name: 'beginner',
      type: 'array',
      title: 'Beginner',
      of: [
        {
          name: 'advice',
          type: 'object',
          title: 'Advice',
          fields: [
            {
              name: 'adviceTitle',
              type: 'string',
              title: 'Advice Title',
            },
            {
              name: 'adviceInfo',
              type: 'text',
              title: 'Advice Info',
            },
            {
              name: 'videoUrl',
              type: 'url',
              title: 'Video Url',
            },
          ],
        },
      ],
    },
    {
      name: 'intermediate',
      type: 'array',
      title: 'Intermediate',
      of: [
        {
          name: 'advice',
          type: 'object',
          title: 'Advice',
          fields: [
            {
              name: 'adviceTitle',
              type: 'string',
              title: 'Advice Title',
            },
            {
              name: 'adviceInfo',
              type: 'text',
              title: 'Advice Info',
            },
            {
              name: 'videoUrl',
              type: 'url',
              title: 'Video Url',
            },
          ],
        },
      ],
    },
    {
      name: 'advance',
      type: 'array',
      title: 'Advance',
      of: [
        {
          name: 'advice',
          type: 'object',
          title: 'Advice',
          fields: [
            {
              name: 'adviceTitle',
              type: 'string',
              title: 'Advice Title',
            },
            {
              name: 'adviceInfo',
              type: 'text',
              title: 'Advice Info',
            },
            {
              name: 'videoUrl',
              type: 'url',
              title: 'Video Url',
            },
          ],
        },
      ],
    },
  ],
}
