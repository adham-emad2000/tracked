export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true, // بيسمحلك تظبط أبعاد الصورة (Crop) من الداشبورد
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}], // ده السطر اللي بيربط المنتج بقسم معين
      description: 'اختر القسم الخاص بهذا المنتج', // ملاحظة صغيرة تظهر للأدمن
    },
  ],
}
