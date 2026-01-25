import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'dailyVerse',
  title: 'Daily Verse',
  type: 'document',
  fields: [
    defineField({
      name: 'reference',
      title: 'Reference',
      type: 'string',
      description: 'e.g., "John 3:16"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Verse Text',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'reference',
      subtitle: 'text',
    },
  },
})
