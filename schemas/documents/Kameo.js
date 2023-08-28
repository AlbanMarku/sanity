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
          name: 'move',
          title: 'Move',
          type: 'object',
          fields: [
            {
              name: 'moveName',
              title: 'Move Name',
              type: 'string',
            },
            {type: 'number', name: 'startup', title: 'Start Up'},
            {type: 'number', name: 'active', title: 'Active'},
            {type: 'number', name: 'hitAdv', title: 'Hit Advantage'},
            {type: 'number', name: 'blockAdv', title: 'Block Advantage'},
            {type: 'number', name: 'flawlessBlockAdv', title: 'Flawless Block Advantage'},
            {type: 'number', name: 'damageHit', title: 'Damage Hit'},
            {type: 'number', name: 'damageBlock', title: 'Damage Block'},
            {type: 'number', name: 'recovery', title: 'Recovery'},
            {type: 'boolean', name: 'airOk'},
            {
              name: 'attackType',
              title: 'Attack Type',
              type: 'reference',
              to: [{type: 'attackType'}],
            },
            {
              name: 'attackInputs',
              title: 'Attack Inputs',
              type: 'array',
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
