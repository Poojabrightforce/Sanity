// schemas/blockContent.js
export default {
    name: 'blockContent',
    title: 'Block Content',
    type: 'array',
    of: [
      {
        type: 'block',
        styles: [{ title: 'Normal', value: 'normal' }],
        lists: [{ title: 'Bullet', value: 'bullet' }],
        // Marks let you add formatting like bold/italic/underline
        marks: {
          decorators: [
            { title: 'Strong', value: 'strong' },
            { title: 'Emphasis', value: 'em' },
          ],
        },
      },
      {
        type: 'image',
        options: { hotspot: true },
      },
    ],
  };
  