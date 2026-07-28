export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Name', // زي مثلاً Cat1, Cat2
      type: 'string',
      validation: (Rule: any) => Rule.required(), // التعديل تم هنا
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
