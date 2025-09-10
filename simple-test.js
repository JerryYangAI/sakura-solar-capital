const { createServer } = require('http');
const { parse } = require('url');

const server = createServer((req, res) => {
  const { pathname } = parse(req.url);
  
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  if (pathname === '/') {
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Sakura Solar Capital - 日本太阳能电站投资</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f0f8ff; }
          .container { max-width: 1200px; margin: 0 auto; }
          .header { background: linear-gradient(135deg, #1E40AF, #059669); color: white; padding: 40px; border-radius: 10px; text-align: center; margin-bottom: 30px; }
          .content { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .btn { background: #059669; color: white; padding: 12px 24px; border: none; border-radius: 6px; cursor: pointer; text-decoration: none; display: inline-block; margin: 10px; }
          .btn:hover { background: #047857; }
          .features { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 30px 0; }
          .feature { background: #f8f9fa; padding: 20px; border-radius: 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🌸 Sakura Solar Capital</h1>
            <h2>日本太阳能电站投资</h2>
            <p>稳健收益15% | 土地+电站产权 | 专业运营维护</p>
          </div>
          
          <div class="content">
            <h2>网站功能测试</h2>
            <p>如果您看到这个页面，说明基本的服务器功能正常。</p>
            
            <div class="features">
              <div class="feature">
                <h3>✅ 项目状态</h3>
                <p>所有页面和组件已创建完成</p>
              </div>
              <div class="feature">
                <h3>✅ 功能完整</h3>
                <p>包含首页、关于我们、项目投资、投资流程、考察服务、常见问答、联系我们</p>
              </div>
              <div class="feature">
                <h3>✅ SEO优化</h3>
                <p>完整的SEO优化和结构化数据</p>
              </div>
              <div class="feature">
                <h3>✅ 响应式设计</h3>
                <p>完美适配PC和移动端</p>
              </div>
            </div>
            
            <h3>已完成的修改：</h3>
            <ul>
              <li>✅ 2025未来展望：从东南亚市场改为北美市场</li>
              <li>✅ 立即咨询按钮：正确链接到在线咨询表单</li>
              <li>✅ 日本总部地址：更新为大阪府大阪市阿倍野区</li>
              <li>✅ 邮件通知功能：API路由已创建（需要安装nodemailer）</li>
            </ul>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="/contact" class="btn">立即咨询</a>
              <a href="/projects" class="btn">查看项目</a>
            </div>
          </div>
        </div>
      </body>
      </html>
    `);
  } else if (pathname === '/contact') {
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>联系我们 - Sakura Solar Capital</title>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f0f8ff; }
          .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; }
          .form-group { margin: 20px 0; }
          label { display: block; margin-bottom: 5px; font-weight: bold; }
          input, textarea, select { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; }
          .btn { background: #059669; color: white; padding: 12px 24px; border: none; border-radius: 6px; cursor: pointer; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>联系我们</h1>
          <p>填写以下表单，我们的投资顾问将在24小时内与您联系。</p>
          
          <form>
            <div class="form-group">
              <label>姓名 *</label>
              <input type="text" name="name" required>
            </div>
            <div class="form-group">
              <label>邮箱 *</label>
              <input type="email" name="email" required>
            </div>
            <div class="form-group">
              <label>电话 *</label>
              <input type="tel" name="phone" required>
            </div>
            <div class="form-group">
              <label>投资预算</label>
              <select name="budget">
                <option value="">请选择投资预算</option>
                <option value="200-300万">200-300万人民币</option>
                <option value="300-400万">300-400万人民币</option>
                <option value="400-500万">400-500万人民币</option>
                <option value="500万以上">500万人民币以上</option>
              </select>
            </div>
            <div class="form-group">
              <label>咨询内容</label>
              <textarea name="message" rows="5"></textarea>
            </div>
            <button type="submit" class="btn">提交咨询</button>
          </form>
          
          <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px;">
            <h3>联系信息</h3>
            <p><strong>地址：</strong>日本大阪府大阪市阿倍野区阿倍野筋1-1-43</p>
            <p><strong>电话：</strong>+81-3-1234-5678</p>
            <p><strong>邮箱：</strong>info@sakurasolarcapital.com</p>
          </div>
        </div>
      </body>
      </html>
    `);
  } else {
    res.statusCode = 404;
    res.end('页面未找到');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Sakura Solar Capital 网站运行在 http://localhost:${PORT}`);
  console.log('这是一个简化版本，用于测试网站功能');
});
