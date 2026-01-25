import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'triviaQuestion',
  title: 'Trivia Question',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(2).max(4),
    }),
    defineField({
      name: 'correctAnswer',
      title: 'Correct Answer',
      type: 'number',
      description: 'Index of the correct option (0-based)',
      validation: (Rule) => Rule.required().min(0).max(3),
    }),
    defineField({
      name: 'book',
      title: 'Book',
      type: 'reference',
      to: [{type: 'triviaBook'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'question',
      bookName: 'book.name',
    },
    prepare({title, bookName}) {
      return {
        title,
        subtitle: bookName,
      }
    },
  },
})
