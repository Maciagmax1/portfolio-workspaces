import {defineType} from 'sanity'

export default defineType({
  name: 'author',
  type: 'object',
  title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'socialMedia',
      type: 'array',
      title: 'Social Media URLs',
      of: [{type: 'url'}],
    },
  ],
})
