export default {
  '/test' : {
    col_num: 3,
    row_height: 30,
    is_draggable: true,
    is_resizable: true,
    responsive: true,
    vertical_compact: true,
    margins: [10,10],
    use_css_transforms: true,
    auto_size: true,
    index: 0,

    i: 'main',
    layout: [
      {"x":0,"y":0,"w":3,"h":5,"i":"0",type: "gheader", data: {text: "Yeah baby"}},
      {"x":3,"y":0,"w":3,"h":5,"i":"1",type: "gtext", data: {text: "text"}},
      {"x":6,"y":0,"w":3,"h":5,"i":"2",type: "gheader"},
      {"x":9,"y":0,"w":3,"h":5,"i":"3",type: "gtext"},
      {"x":0,"y":5,"w":3,"h":5,"i":"4",type: "gheader"},
      {"x":3,"y":10,"w":3,"h":5,"i":"5",type: "gheader"},
      {"x":6,"y":15,"w":3,"h":5,"i":"6",type: "gheader"},
      {"x":9,"y":20,"w":3,"h":5,"i":"7",type: "gheader"},
      {"x":16,"y":25,"w":3,"h":5,"i":"8",type: "glayout",
       data: {
         col_num: 1,
         row_height: 40,
         is_draggable: true,
         is_resizable: true,
         responsive: true,
         vertical_compact: true,
         margins: [20,20],
         use_css_transforms: true,
         auto_size: true,
         
         i: 'sub',
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
    is_draggable: true,
    is_resizable: true,
    vertical_compact: true,
    margins: [10,10],
    use_css_transforms: true,
    layout: [
      {"x":0,"y":0,"w":1,"h":2,"i":"0",type: "gheader", data: {text: "404 - Ups ! please try /test or /edit/test"}}
    ]
  }
}
