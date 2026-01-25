import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'prayerCategory',
  title: 'Prayer Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'e.g., "Love", "Healing", "Family"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Lucide icon name (e.g., "Heart", "Sparkles", "Users")',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'icon',
    },
  },
})
