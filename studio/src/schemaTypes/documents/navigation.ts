import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'navigationItems',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navigationItem',
          fields: [
            {name: 'label', title: 'Label', type: 'string'},
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.uri({allowRelative: true}),
            },
            {
              name: 'children',
              title: 'Sub Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'subItem',
                  fields: [
                    {name: 'label', title: 'Label', type: 'string'},
                    {name: 'description', title: 'Description', type: 'string'},
                    {name: 'icon', title: 'Icon', type: 'image'},
                    {
                      name: 'url',
                      title: 'URL',
                      type: 'url',
                      validation: (Rule) => Rule.uri({allowRelative: true}),
                    },
                  ],
                },
              ],
              options: {collapsed: true},
            },
          ],
        },
      ],
    }),
  ],
})
