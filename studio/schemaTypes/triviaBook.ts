import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'triviaBook',
  title: 'Trivia Book',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Book Name',
      type: 'string',
      description: 'e.g., "Matthew", "Genesis", "Psalms"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Lucide icon name',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
