import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'lesson',
  title: 'Bible Lesson',
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
      name: 'content',
      title: 'Lesson Content',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Rich text content for the lesson',
    }),
    defineField({
      name: 'scripture',
      title: 'Scripture Reference',
      type: 'string',
      description: 'e.g., "John 3:16-21"',
    }),
    defineField({
      name: 'duration',
      title: 'Reading Duration',
      type: 'string',
      description: 'e.g., "5 min read"',
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
      isPremium: 'isPremium',
    },
    prepare({title, media, isPremium}) {
      return {
        title: title,
        subtitle: isPremium ? 'Premium' : 'Free',
        media: media,
      }
    },
  },
})
