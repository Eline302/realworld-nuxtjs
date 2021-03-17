#!/bin/bash

path=$(pwd)

#### install node,npm,pm2 ####
# 解压缩:
cd $path"/"
unzip -o -d ./ node-v14.16.0-linux-x64.zip
unzip -o -d ./ pm2.zip

# 建立node软链:
chmod +x $path"/node-v14.16.0-linux-x64/bin/node"
ln -s $path"/node-v14.16.0-linux-x64/bin/node" /usr/local/bin/node

# 建立npm软链:
chmod +x $path"/node-v14.16.0-linux-x64/lib/node_modules/npm/bin/npm-cli.js"
ln -s $path"/node-v14.16.0-linux-x64/lib/node_modules/npm/bin/npm-cli.js" /usr/local/bin/npm

# 建立pm2软链:
chmod +x $path"/pm2/bin/pm2"
ln -s $path"/pm2/bin/pm2" /usr/local/bin/pm2

#检查： 输入 pm2 看是否有输出
pm2
#检查：输入 node -v 看是否有结果
node -v
#检查：输入 npm -v 看是否有结果
npm -v
#### end install ####

#### star run
cd $path/server
pm2 startOrReload pm2.config.js
pm2 start
pm2 save
pm2 startup

