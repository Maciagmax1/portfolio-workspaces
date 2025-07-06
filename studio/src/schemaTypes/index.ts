import blockContent from './objects/blockContent'
import project from './documents/project'
import {author} from './documents/types'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [blockContent, project, author]
