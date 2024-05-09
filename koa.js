const Koa = require('koa');
const app = new Koa();

// response
app.use(async ctx => {
    if (ctx.path === '/hakkimda') {
      ctx.body = 'Hakkımda Sayfasıdır';
    } else if(ctx.path === '/iletisim') {
      ctx.body = 'İletişim Sayfasıdır';
    }
    else{
        ctx.body = 'Index Sayfasıdır';

    }
  });
  

app.listen(5050);