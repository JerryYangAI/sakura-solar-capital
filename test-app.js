const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Sakura Solar Capital - 测试页面</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1>Sakura Solar Capital 网站正在运行！</h1>
      <p>这是一个测试页面，用于验证服务器是否正常工作。</p>
      <p>如果您看到这个页面，说明基本的服务器功能正常。</p>
    </body>
    </html>
  `);
});

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`测试服务器运行在 http://localhost:${PORT}`);
});
