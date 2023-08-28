export default {
  name: 'overview',
  type: 'object',
  title: 'Overview',
  fields: [
    {
      name: 'intro',
      title: 'Intro',
      type: 'text',
    },
    {
      name: 'archetype',
      title: 'Archetype',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'archetype'}],
          options: {
            disableNew: true,
          },
        },
      ],
    },
    {
      name: 'strengths',
      title: 'Strengths',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'weaknesses',
      title: 'Weaknesses',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
