const path    = require('path')
const express = require('express')
const hbs     = require('express-handlebars')
const morgan  = require('morgan')  // morgan lấy các thông tin request để lập trình viên dễ quan sát trong quá trình thực hiện
const app     = express()
const route   = require('./routes')
const port    = 3000

app.use(express.static(path.join(__dirname,'public')));

app.use(morgan('combined'));

//template engine
app.engine('hbs', hbs.engine({ // ở đây thì đặt lại tên đuôi của views
  extname : 'hbsl'              // đặt lại tên đuôi cho file layout là hbsl (đặt là hbs cũng được)
                                // đặt đuôi khác tý để hiểu hơn về các file
}));
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

//routing
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})