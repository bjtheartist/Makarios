import {defineField, defineType} from 'sanity'

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
      name: 'book',
      title: 'Bible Book',
      type: 'reference',
      to: [{type: 'triviaBook'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'options',
      title: 'Answer Options',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(2).max(4),
      description: 'Add 2-4 answer options',
    }),
    defineField({
      name: 'correctAnswer',
      title: 'Correct Answer Index',
      type: 'number',
      description: '0 = first option, 1 = second option, etc.',
      validation: (Rule) => Rule.required().min(0).max(3),
    }),
    defineField({
      name: 'explanation',
      title: 'Explanation',
      type: 'text',
      rows: 3,
      description: 'Explain why this is the correct answer',
    }),
    defineField({
      name: 'scripture',
      title: 'Scripture Reference',
      type: 'string',
      description: 'e.g., "Genesis 1:1"',
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      options: {
        list: [
          {title: 'Easy', value: 'easy'},
          {title: 'Medium', value: 'medium'},
          {title: 'Hard', value: 'hard'},
        ],
      },
      initialValue: 'medium',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'question',
      book: 'book.title',
      difficulty: 'difficulty',
    },
    prepare({title, book, difficulty}) {
      return {
        title: title,
        subtitle: `${book || 'No book'} • ${difficulty || 'medium'}`,
      }
    },
  },
})
