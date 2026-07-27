export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'heroImages',
      title: 'Hero Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Hero Images Slider', // ده الاسم النضيف اللي هيظهر في القائمة
      }
    },
  },
}
