import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'prayer',
  title: 'Prayer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Prayer Content',
      type: 'text',
      rows: 8,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'prayerCategory'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      categoryName: 'category.name',
    },
    prepare({title, categoryName}) {
      return {
        title,
        subtitle: categoryName,
      }
    },
  },
})
