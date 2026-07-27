import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product', // ده الاسم اللي هيظهرلك في اللوحة
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name', // خانة اسم المنتج
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Product Image', // خانة الصورة
      type: 'image',
      options: {
        hotspot: true, // عشان تقدر تقص وتظبط الصورة من الداشبورد
      },
    }),
    defineField({
      name: 'description',
      title: 'Description', // خانة الوصف
      type: 'text', // استخدمنا text بدل string عشان يفتحلك مربع كبير تكتب فيه براحتك
    }),
  ],
})
