var express = require('express');
var router = express.Router();
var axios = require('axios')
var arr = [
  {
    "query": "中国女排横扫韩国女排",
    "display_query": "中国女排横扫韩国女排",
    "uuid": "69396b8a-95d7-4be5-ae75-4c4e154eedf1"
  },
  {
    "query": "日本首相岸田文雄新冠检测呈阳性",
    "display_query": "日本首相岸田文雄新冠检测呈阳性",
    "uuid": "119b2302-9e41-4863-93bd-ea08f3dbf846"
  },
  {
    "query": "俄方称杜金之女身亡案系刺杀事件",
    "display_query": "俄方称杜金之女身亡案系刺杀事件",
    "uuid": "8b7e924f-c64b-4b61-8f0a-dd7ceed70d39"
  },
  {
    "query": "全球棉花价格因高温上涨 30%",
    "display_query": "全球棉花价格因高温上涨 30%",
    "uuid": "511c99e2-1610-40a1-aa0e-703a0b9c28ef"
  },
  {
    "query": "国家向重庆紧急调运抗旱物资",
    "display_query": "国家向重庆紧急调运抗旱物资",
    "uuid": "dc201162-1379-4485-9a6a-9688801c1720"
  },
  {
    "query": "日本东京发生随机砍人事件",
    "display_query": "日本东京发生随机砍人事件",
    "uuid": "c062433a-b5ae-4c1b-9c83-e4b1ffb06d7d"
  },
  {
    "query": "四川最高用电需求负荷已至 6500 万千瓦",
    "display_query": "四川最高用电需求负荷已至 6500 万千瓦",
    "uuid": "a8d1dc08-afe5-47f8-b0c9-35646dd5ff3c"
  },
  {
    "query": "中国首次出口的高铁列车正式启运",
    "display_query": "中国首次出口的高铁列车正式启运",
    "uuid": "7535ef97-1772-467c-b842-59b4d99d22b3"
  },
  {
    "query": "iPhone14 系列或仍有 mini",
    "display_query": "iPhone14 系列或仍有 mini",
    "uuid": "7cb682d7-dd6e-4074-af90-30a1968abb14"
  },
  {
    "query": "重庆巴南区发生山火",
    "display_query": "重庆巴南区发生山火",
    "uuid": "6d63870c-2880-4223-ba7a-c4ee90c5e31c"
  }
]

let nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/data', function (req, res, next) {
  // res.render('index', { title:JSON.stringify(arr) });
  res.send(JSON.stringify(arr))
});
router.get('/api/zhihu', function (req, res, next) {
  // res.render('index', { title:JSON.stringify(arr) });
  axios.get("https://www.zhihu.com/api/v4/search/preset_words").then((res2) => {
    console.log(res2.data.preset_words.words);
    res.send(JSON.stringify(res2.data.preset_words.words))
  })
});
router.get('/api/gitselect', function (req, res, next) {
  const {name} = req.query
  const str =encodeURI(name);
  // https://api.github.com/search/users?q
  axios.get(`https://api.github.com/search/users?q=${str}`).then((res2) => {
    console.log(res2.data.items);
    res.send(JSON.stringify(res2.data.items))
  })

});

let transporter = nodemailer.createTransport({
  // host: 'smtp.163.com',
  service: "qq", //邮箱类型 例如service:'163'
  secure: true, //是否使用安全连接，对https协议的
  // port: 465, //qq邮件服务所占用的端口
  auth: {
      user: "807976684@qq.com",//开启SMTP的邮箱，发件人
      pass: "ortaoesuajyybfgf"// qq授权码
  }
})
router.get("/api/mail",(req,res,next)=>{
  const params = req.query||req.params
  const {user,theme,content} = params
  if(!user||!theme||!content){
    let obj = {
      msg:'参数缺失'
    }
    res.send(JSON.stringify(obj))
    return
  }
    
  let options = {
    from: '807976684@qq.com', //发送方
    to: params.user,//接收方
    subject: params.theme||"默认主题",//邮件主题
    text: params.content,//邮件正文
    //html:'',//html模板
    //附件信息
    /*attachments:[
    {filename:'',path:'',}
    ]*/
  }
  transporter.sendMail(options, (err, info) => {
    if (err) {
        res.send(err)
    } else {
        res.send(info)
    }
  })
})


module.exports = router;
