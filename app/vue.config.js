module.exports = {
  
    //取消语法检测（false）
    lintOnSave: false,
    devServer:{
        proxy:{
            '/api':{
                target:'http://39.98.123.211',
                //pathRewrite:{'/api':',
            }
        }
    },
}