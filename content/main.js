export default {
  '/test' : {
    col_num: 3,
    row_height: 30,
    is_dragable: true,
    is_resizable: true,
    vertical_compact: true,
    margins: [10,10],
    use_css_transforms: true,
    layout: [
      {"x":0,"y":0,"w":1,"h":2,"i":"0",type: "gheader", data: {text: "Yeah baby"}},
      {"x":1,"y":0,"w":1,"h":4,"i":"1",type: "gtext", data: {text: "text"}},
      {"x":2,"y":0,"w":1,"h":5,"i":"2",type: "gheader"},
      {"x":0,"y":1,"w":1,"h":3,"i":"3",type: "gtext"},
      {"x":1,"y":1,"w":1,"h":3,"i":"4",type: "gheader"},
      {"x":2,"y":1,"w":1,"h":3,"i":"5",type: "gheader"},
      {"x":0,"y":21,"w":1,"h":5,"i":"6",type: "gheader"},
      {"x":1,"y":2,"w":1,"h":5,"i":"7",type: "gheader"},
      {"x":2,"y":2,"w":1,"h":5,"i":"8",type: "glayout",
       data: {
         col_num: 1,
         row_height: 40,
         is_dragable: true,
         is_resizable: true,
         vertical_compact: true,
         margins: [20,20],
         use_css_transforms: true,
         layout: [
           {"x":0,"y":0,"w":2,"h":4,"i":"10",type: "gheader", data: {text: "Special1"}},
           {"x":0,"y":1,"w":2,"h":4,"i":"11",type: "gheader", data: {text: "Special2"}}
         ]
       }
      }
    ]
  },

  '404': {
    col_num: 1,
    row_height: 50,
    is_dragable: true,
    is_resizable: true,
    vertical_compact: true,
    margins: [10,10],
    use_css_transforms: true,
    layout: [
      {"x":0,"y":0,"w":1,"h":2,"i":"0",type: "gheader", data: {text: "404"}}
    ]
  }
}
