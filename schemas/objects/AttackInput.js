export default {
  name: 'attackInput',
  type: 'object',
  title: 'Attack Input',
  fields: [
    {name: 'direction', type: 'number', title: 'Direction'},
    {name: 'button', type: 'number', title: 'Button'},
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
