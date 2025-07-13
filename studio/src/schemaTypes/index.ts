import blockContent from './objects/blockContent'
import project from './documents/project'
import author from './objects/author'
import navigation from './documents/navigation'
import page from './documents/page'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [blockContent, author, navigation, project, page]
