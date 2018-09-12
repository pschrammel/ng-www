import StaticPageRepo from '@/libs/StaticPageRepo';

export default function(context,callback,defaults={}) {
  var slug='/' + context.route.params[0];
  var repo= new StaticPageRepo;
  var ctx= defaults;
  ctx.slug=slug;
  repo.load(slug).then(page => {
    //console.log("repo returned ", page)
    if (page) {
      console.log("rendering", slug);
      ctx.page=page;
      callback(null, {ctx: ctx});
    } else {
      repo.load('404').then(notFoundPage => {
        console.log("rendering 404");
        ctx.page=notFoundPage;
        callback(null, {ctx: ctx})
      })
    }
  }).catch((e) => {
    console.log("Error fetching page data")
    //error({ statusCode: 404, {pageLayout: 'Post not found' })
  })
}
