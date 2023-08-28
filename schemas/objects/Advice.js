export default {
  name: 'advice',
  type: 'object',
  Title: 'Advice',
  fields: [
    {
      name: 'adviceTitle',
      type: 'string',
      title: 'Advice Title',
    },
    {
      name: 'adviceThumbnail',
      type: 'image',
      title: 'Advice Thumbnail',
    },
    {
      name: 'adviceContent',
      type: 'array',
      title: 'Advice Content',
      of: [
        {
          name: 'adviceInfo',
          type: 'adviceInfo',
          title: 'Advice Info',
        },
      ],
    },
  ],
}
