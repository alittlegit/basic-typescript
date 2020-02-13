# hello typescript

## 环境初始化
* 新建仓库，添加readme.md: https://github.com/alittlegit/basic-typescript.git
* 新建文件夹 tranning, cd tranning
* npm init 初始化package.json文件, （package.json中的git配置到底怎么用，仅仅是说明仓库的地址吧。。）
* git init初始化本地git仓库
  - 配置远程仓库
  - git remote add origin https://github.com/alittlegit/basic-typescript.git；； ssh:git@github.com:alittlegit/basic-typescript.git
  - git push -u origin master
  
* 修改文件后本地git status; git add ; git commit; 远程git push; 远程提交时如果用的git的http地址，需要输入用户密码，不如在git客户端方便点，可以考虑在本地都提交后统一在客户端提交到远程，，改用ssh地址，不用每次远程提交都输密码
* 远程git地址换成ssh地址： git remote remove origin; git remote add origin git@github.com:alittlegit/basic-typescript.git   git push -u origin master
* 关于分支和合并的实际场景：将每一节的内容作在当前master的基础上开辟新的分支，如git branch hello,然后切换git checkout hello ,然后在此分支上修改内容，提交git add ; git commit ; git push ; 最终hello分支合并到主分支，git checkout master ; git merge hello 

## ts安装和编译
* ts安装： npm install typescript -g 
* 检查安装： tsc --version
* ts编译： 
  - 执行tsc index.ts，会生成index.js  
  - 在package.json中添加启动命令： "start": "tsc index.ts && node index.js ", 然后执行npm start 便可以先编译index.ts为index.js，然后node执行index.js
  - tsconfig中扩展配置编译选项： tsc -init,生成tsconfig.json, 配置输出文件路径，"outDir": "./out",输入文件路径： "rootDir":"./"    ; tsconfig.json中的编译文件可以去掉了，命令改为  "start": "tsc  && node index.js "

## ts类型定义
* var a: string;
* tsc -w 监视ts文件,保存时自动编译，
* 体会类型检查的作用，ts在编译时便会报错，ts成功编译为js代码再运行js代码，而js代码不会有检查过程，只有在执行时才会报错。