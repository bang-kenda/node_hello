const path    = require('path')
const express = require('express')
const hbs     = require('express-handlebars')
const morgan  = require('morgan')  // morgan lấy các thông tin request để lập trình viên dễ quan sát trong quá trình thực hiện
const app     = express()
const port    = 3000

app.use(express.static(path.join(__dirname,'public')));

app.use(morgan('combined'));

//template engine
app.engine('hbs', hbs.engine({ // ở đây thì đặt lại tên đuôi của views
  extname : 'hbsl'              // đặt lại tên đuôi cho file layout là hbsl (đặt là hbs cũng được)
                                // đặt đuôi khác tý để hiểu hơn về các file
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

//routing
app.get('/', (req, res) => {
  // res.send('Hello World nha ban nhung!')
  res.render('home'); // đi tìm cái view tên là home để hiển thị
})
//routing
app.get('/news', (req, res) => {
  console.log(req.query.q); // xem giá trị của req 
  res.render('news'); // đi tìm cái view tên là news để hiển thị
})
//routing
app.get('/search', (req, res) => {
  res.render('search'); // đi tìm cái view tên là search để hiển thị
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})