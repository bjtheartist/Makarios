import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'testimony',
  title: 'Testimony',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., "Chicago, IL"',
    }),
    defineField({
      name: 'story',
      title: 'Story',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'location',
    },
  },
})
