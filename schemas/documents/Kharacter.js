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
      name: 'stringAttacks',
      type: 'array',
      title: 'String Attacks',
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
      name: 'specialAttacks',
      type: 'array',
      title: 'Special Attacks',
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
      type: 'guide',
      title: 'Guide',
    },
  ],
}
