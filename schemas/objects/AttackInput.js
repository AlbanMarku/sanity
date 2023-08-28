export default {
  name: 'attackInput',
  type: 'object',
  title: 'Attack Input',
  fields: [
    {
      name: 'direction',
      type: 'number',
      title: 'Direction',
      description: 'Numpad notation. 4 = back, 5 = neutral, 6 = forward, 2 = down, 8 = up',
    },
    {
      name: 'button',
      type: 'number',
      title: 'Button',
      description:
        'NRS notation. 1 = fp, 2 = bp, 3 = fk, 4 = bk, 0 = no direction, 5 = enhance, 6 = prev button held, 7 = assist',
    },
  ],
  preview: {
    select: {
      direction: 'direction',
      button: 'button',
    },
    prepare(selection) {
      const {direction, button} = selection
      // Format the display of the attackInput object in the Sanity Studio
      return {
        title: `Direction: ${direction || 'N/A'}, Button: ${button || 'N/A'}`,
      }
    },
  },
}
