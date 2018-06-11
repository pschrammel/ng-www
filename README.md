# Ideas

## Models
Component (mixin):
name: String                   # for referencing
abstract: Boolean              # can't be used directly, inheritence only
content: [Component|Include] || null
data: Data || DataSource     how to push down, loop over data, data of parent?


Page Model:
type: 'page'
route: String
route_aliases: [String]  # will redirect to official route
layout: String #inherit from this component but how deep? which data
+ Component

Snippet: 
type: 'snippet'
+Component

Include: 
type: 'include'
name: String
including: String (only Snippets can be included)

Asset:
type: 'asset'
url: String

## Internal:
Includes:
 component: String 
 components: [String]
 assets: [String]
 # need a recursive select to get all the components
 # needed at all? the components table could do this.
 


example:
{ type: 'page',
  route: '/de/'
  route_aliases: ['/']
  content: [ { type: 'row_container,
               name: 'greeter', 
               template: 'page_greeters'
               content: [
                  { 
                  type: 'header-component',
//not needed page greeters set this!                  params: { importance: 'huge' }
                  data: { text: 'Hello my friend' }
                  }
               ]
             },
             { type: 'column_container',
               name: 'about'
               content: [
                  {
                    type: 'md-text-component',
                    params: {},
                    content: $data.md_text
                    data_source: { GrahqlSubquery }
                  }
               ]
             }
            ]
}



Interpreting texts to check for dangling links/unused/unreachable/non
existing pages/assets:
  * extracting references to other pages
  * extracting references to external pages
  * extracting references to images/assets





Routing
 * https://github.com/nuxt/nuxt.js/issues/112
 * 
 * :lang/(.*), (.*), 
 * admin/...
 
404 tracking
Google Analytics integration
Live Preview/Wysiwyg
Preview only for admins
Multiple versions of page, 
Page history
Assets management (s3, cloudinary, fs, ....?)
Component development by devs
Css can be part of the data sections of components
caching, file caching, data caching, fragment caching
ignore GA when user is known (logged in)
authentication over account
how to query the fragments of a page
how to share/split fragemtns transparently
content/data editor
forms? form generator, api calls only, ....

content include logic? dataquery logic? (depending on url(params,query), time,
requestheaders,....), how much logic to allow? where, when? what does dev
do, what designer, what content editor?

use cases:
 * super individual page
 * a page is designed first and then others are copying it
 * a page template is flexible some parts may be overriden others not


Dev: develops Snippet types (Showers and Editors)
Designer: designs templates for pages, snippets
 creates pages with snippets
Dev: helps with complex data log where needed
Author: creates new content, with content editor



