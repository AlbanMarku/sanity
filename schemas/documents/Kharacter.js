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
      name: 'profile',
      type: 'image',
      title: 'Profile',
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
            {type: 'string', name: 'attackName'},
            {type: 'number', name: 'startup'},
            {type: 'number', name: 'active'},
            {type: 'number', name: 'hitAdv'},
            {type: 'number', name: 'blockAdv'},
            {type: 'number', name: 'flawlessBlockAdv'},
            {type: 'number', name: 'damageHit'},
            {type: 'number', name: 'damageBlock'},
            {type: 'boolean', name: 'airOk'},
            {
              name: 'attackType',
              type: 'array',
              title: 'Attack Type',
              of: [
                {
                  type: 'reference',
                  to: [{type: 'attackType'}],
                },
              ],
            },
            {
              type: 'object',
              name: 'attackInput',
              title: 'Attack Input',
              fields: [
                {
                  type: 'number',
                  name: 'direction',
                  title: 'Direction',
                  description: 'numpad notation',
                },
                {
                  type: 'number',
                  name: 'button',
                  title: 'Button',
                  description: 'NRS button layout',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
