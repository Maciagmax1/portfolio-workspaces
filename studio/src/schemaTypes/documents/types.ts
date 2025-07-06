export const author = {
  name: 'author',
  type: 'document',
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
}
