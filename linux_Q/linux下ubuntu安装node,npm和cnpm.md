# ubuntu安装node,npm和cnpm（2020.12）

linux环境中安装npm和cnpm与windouw中安装的方式大同小异（应该吧 /狗头）
## 1.下载node预编译包（编译好的真不错）
建议使用node官网的最新 LTS（稳定版）下载，apt 库的node版本实在是太低了叭

我这以 14.15.1 版本示例，后边的版本号注意别整错了哈

![](/home/ubuntu/图片/2020-11-29_23-15.png)

## 2.安装node，npm

下载好之后，在文件中切换到刚才的下载目录（我的浏览器将node包下载到了  /download  文件夹）

```
// 鼠标右键打开终端
// 解压
$ tar -xvJf node-v14.15.1-linux-x64.tar.xz

// 移动解压的包到usr/local/share
$ sudo mv ./node-v14.15.1-linux-x64 /usr/local/share
```

下载的tar.xz包是已经编译好的，可以直接使用

但是为了方便我们需要给 ./bin 目录内的node,npm,npx 分别创建一个软连接 (ln)，linux下的软连接就有点像window系统下的快捷方式

```
$ sudo ln -s /usr/local/share/node-v14.15.1-linux-x64/bin/node /usr/local/bin/node

$ sudo ln -s /usr/local/share/node-v14.15.1-linux-x64/bin/npm /usr/local/bin/npm

$ sudo ln -s /usr/local/share/node-v14.15.1-linux-x64/bin/npx /usr/local/bin/npx
```

『Ctrl + Alt + T』快捷键打开终端

```
$ node -v
$ npm -v
$ npx -v
```

若以上三个命令都成功，则node 和npm已经安装成功

## 3.安装cnpm

因为某些原因，国外的npm始终不太好用（速度太慢），所以国内就有了npm 淘宝镜像 cnpm

```
$ sudo npm install cnpm -g --registry=https://registry.npm.taobao.org

// 创建软连接
$ sudo ln -s usr/local/share/node-v14.15.1-linux-x64/lib/node_modules/cnpm/bin /usr/local/bin/cnpm
```

至此cnpm也安装配置完成

终端试试

```
$ cnpm
```

