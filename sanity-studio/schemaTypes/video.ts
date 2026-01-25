import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube, Vimeo, or direct video URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., "12:30"',
    }),
    defineField({
      name: 'course',
      title: 'Course',
      type: 'reference',
      to: [{type: 'videoCourse'}],
    }),
    defineField({
      name: 'isPremium',
      title: 'Premium Content',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Order in Course',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      course: 'course.title',
    },
    prepare({title, media, course}) {
      return {
        title: title,
        subtitle: course || 'No course',
        media: media,
      }
    },
  },
})
