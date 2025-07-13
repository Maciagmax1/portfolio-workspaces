import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.uri({allowRelative: true}),
    }),
    defineField({
      name: 'mainContent',
      title: 'Main Content',
      type: 'blockContent',
    }),
  ],
})
