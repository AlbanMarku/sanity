export default {
  name: 'guide',
  type: 'object',
  title: 'Guide',
  fields: [
    {
      name: 'overview',
      title: 'Overview',
      type: 'text',
    },
    {
      name: 'strategy',
      title: 'Strategy',
      type: 'array',
      of: [{type: 'strategy'}],
    },
  ],
}
