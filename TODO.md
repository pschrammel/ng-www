# UI
 * drag into container
 * drag out of container
 * wysiwyg editor 
   * no html! just json? https://github.com/AlisProject/alis-editor/tree/master/src 
   * only inline stuff: text (bold, italic, underline), footnote, lists, links
     (internal, external), images (inline! only!), super/subscript, left/
     right/center orientation, left to right
   * allowed elements should be configurable
   * image selector should be configurable
   * meta: language (guessing?), abstract (yes,no?), author, ....
   * inline markers like @@dates/time, *location, @people, #channels with autocompletion
   * microformats (hcalendar, hcard, hAtom), markers should be pluggable
   * colors and styles should be preset and not be ad hoc defined (CI!)
 * responsive (media queries, ordering of griditems)
 * row containers
 * column containers
 * dynamic griditems (get me the lates three blog teaser content into three
 blog teaser components)
 * grid item: table
 * grid items edit popup (to manage meta info like color, url, margin, ....)
 * image configurator for blobber

# Model 
 * vuex 
 * add meta info to pages
 * (parameterized) snippets
 * multiple urls for pages, language alternatives
 * graphql as storage
 

# Assets
 * abstraction layer for urls (url builder)
 * base css editor

# Other
 * 404 statistics
 * metrics
 * GA or other analytics services (piwik)
 * i18n
 * multisite

  