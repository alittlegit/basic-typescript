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
* 远程git地址换成ssh地址： git remote remove origin; git remote add origin git@github.com:alittlegit/basic-typescript.git