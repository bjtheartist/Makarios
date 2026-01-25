import {defineField, defineType} from 'sanity'

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
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'instructor',
      title: 'Instructor',
      type: 'string',
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
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      instructor: 'instructor',
    },
    prepare({title, media, instructor}) {
      return {
        title: title,
        subtitle: instructor ? `by ${instructor}` : '',
        media: media,
      }
    },
  },
})
