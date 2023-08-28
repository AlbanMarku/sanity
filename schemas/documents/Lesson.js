export default {
  name: 'lesson',
  type: 'document',
  title: 'Lesson',
  fields: [
    {
      name: 'name',
      Title: 'Name',
      type: 'string',
    },
    {
      name: 'beginner',
      type: 'array',
      title: 'Beginner',
      of: [
        {
          name: 'advice',
          type: 'advice',
          title: 'Advice',
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
          type: 'advice',
          title: 'Advice',
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
          type: 'advice',
          title: 'Advice',
        },
      ],
    },
  ],
}
