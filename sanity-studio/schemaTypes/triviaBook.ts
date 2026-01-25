import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'triviaBook',
  title: 'Trivia Book',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Book Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Genesis", "Psalms", "Matthew"',
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
      name: 'testament',
      title: 'Testament',
      type: 'string',
      options: {
        list: [
          {title: 'Old Testament', value: 'old'},
          {title: 'New Testament', value: 'new'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Emoji or icon name (e.g., "📖", "✝️")',
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
      testament: 'testament',
      icon: 'icon',
    },
    prepare({title, testament, icon}) {
      return {
        title: `${icon || '📖'} ${title}`,
        subtitle: testament === 'old' ? 'Old Testament' : 'New Testament',
      }
    },
  },
})
