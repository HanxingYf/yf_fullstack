# ls

1. ls 是如何运作的， 哪些常用的的参数？
  linux 里， 一切皆文件
  ls 文件列表？ ls / path
  - 理解根目录 一些意义
  /bin   binary  二进制     PATH(全局)
  /dev   device
  /etc   配置文件   mysql  nginx
  /usr   很多应用程序放在这个目录下
  /tmp   临时文件
    host 文件用来配置什么的？ 在哪个引用场景下

    1. 在淘宝做开发的时候
      git clone www.taobao.com  branch /search
      host 本地调试淘宝页面

  drwxr-xr-x
  第一位文件类型  d 目录 dictionary   - 普通文件
  rwx  第二位到第四位 权限  read，write，执行
  r-x   5-7位表示用户所具有的权限
  r-x   8-10  表示其他用户的权限