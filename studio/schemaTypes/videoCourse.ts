import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'videoCourse',
  title: 'Video Course',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail URL',
      type: 'url',
      description: 'YouTube thumbnail or custom image URL',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube video URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., "45:30"',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'duration',
    },
  },
})
