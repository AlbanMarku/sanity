export default {
  name: 'kameo',
  title: 'Kameo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
    },
    {
      name: 'profile',
      title: 'Profile',
      type: 'image',
    },
    {
      name: 'moves',
      title: 'Moves',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'move',
          fields: [
            {type: 'string', name: 'attackName'},
            {type: 'number', name: 'startup'},
            {type: 'number', name: 'active'},
            {type: 'number', name: 'hitAdv'},
            {type: 'number', name: 'blockAdv'},
            {type: 'number', name: 'flawlessBlockAdv'},
            {type: 'number', name: 'damageHit'},
            {type: 'number', name: 'damageBlock'},
            {type: 'number', name: 'recovery'},
            {type: 'number', name: 'cancelAdv'},
            {type: 'boolean', name: 'airOk'},
            {
              name: 'attackType',
              type: 'reference',
              title: 'Attack Type',
              to: [{type: 'attackType'}],
            },
            {
              type: 'array',
              name: 'attackInputs',
              title: 'Attack Inputs',
              of: [{type: 'attackInput'}],
            },
          ],
        },
      ],
    },
    {
      name: 'guide',
      title: 'Guide',
      type: 'guide',
    },
  ],
}
