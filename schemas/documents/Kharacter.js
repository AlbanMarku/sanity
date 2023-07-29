export default {
  name: 'kharacter',
  type: 'document',
  title: 'Kharacter',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'archetype',
      type: 'array',
      title: 'Archetype',
      of: [
        {
          type: 'reference',
          to: [{type: 'archetype'}],
        },
      ],
    },
    {
      name: 'avatar',
      type: 'image',
      title: 'Avatar',
    },
    {
      name: 'basicAttacks',
      type: 'array',
      title: 'Basic Attacks',
      of: [
        {
          type: 'object',
          name: 'move',
          fields: [
            {type: 'number', name: 'button'},
            {type: 'string', name: 'attackName'},
            {type: 'string', name: 'direction'},
          ],
        },
      ],
    },
  ],
}
