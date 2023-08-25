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
      name: 'adviceInfo',
      type: 'text',
      title: 'Advice Info',
    },
    {
      name: 'videoHeader',
      type: 'string',
      title: 'Video Header',
    },
    {
      name: 'videoUrl',
      type: 'url',
      title: 'Video Url',
    },
  ],
}
