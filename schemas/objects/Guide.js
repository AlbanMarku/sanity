export default {
  name: 'guide',
  type: 'object',
  title: 'Guide',
  fields: [
    {
      name: 'overview',
      title: 'Overview',
      type: 'overview',
    },
    {
      name: 'strategy',
      title: 'Strategy',
      type: 'array',
      of: [{type: 'strategy'}],
    },
  ],
}
