import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'lesson',
  title: 'Lesson',
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
      title: 'Content',
      type: 'text',
      rows: 10,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quiz',
      title: 'Quiz Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'quizQuestion',
          title: 'Quiz Question',
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
          ],
          preview: {
            select: {
              title: 'question',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      quizCount: 'quiz.length',
    },
    prepare({title, quizCount}) {
      return {
        title,
        subtitle: quizCount ? `${quizCount} quiz questions` : 'No quiz',
      }
    },
  },
})
