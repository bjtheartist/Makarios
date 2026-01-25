import {defineField, defineType} from 'sanity'

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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Morning', value: 'morning'},
          {title: 'Evening', value: 'evening'},
          {title: 'Gratitude', value: 'gratitude'},
          {title: 'Protection', value: 'protection'},
          {title: 'Healing', value: 'healing'},
          {title: 'Guidance', value: 'guidance'},
          {title: 'Family', value: 'family'},
          {title: 'Work', value: 'work'},
          {title: 'Peace', value: 'peace'},
          {title: 'Faith', value: 'faith'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Prayer Content',
      type: 'text',
      rows: 10,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'scripture',
      title: 'Scripture Reference',
      type: 'string',
      description: 'e.g., "Psalm 23:1-3"',
    }),
    defineField({
      name: 'isPremium',
      title: 'Premium Content',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      isPremium: 'isPremium',
    },
    prepare({title, category, isPremium}) {
      return {
        title: title,
        subtitle: `${category}${isPremium ? ' • Premium' : ''}`,
      }
    },
  },
})
