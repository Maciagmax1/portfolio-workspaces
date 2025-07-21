import {defineType} from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'carousel',
      title: 'Carousel',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'card',
          fields: [
            {name: 'label', title: 'Label', type: 'string'},
            {name: 'description', title: 'Description', type: 'string'},
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.uri({allowRelative: true}),
            },
          ],
        },
      ],
    },
  ],
})
