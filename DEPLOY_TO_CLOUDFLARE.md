# 部署到 Cloudflare Pages 指南

本文档提供将 SnippetButlerDownloadPage 部署到 Cloudflare Pages 的详细步骤。

## 前提条件

1. 拥有 Cloudflare 账户
2. 项目代码已推送到 GitHub、GitLab 或 Bitbucket 等代码托管平台

## 部署步骤

### 1. 登录 Cloudflare Dashboard

访问 [Cloudflare Dashboard](https://dash.cloudflare.com/) 并登录您的账户。

### 2. 创建新的 Pages 项目

1. 在左侧导航菜单中选择 **Pages**
2. 点击 **创建新项目** 按钮
3. 连接您的 Git 提供商（GitHub、GitLab 或 Bitbucket）
4. 选择包含 SnippetButlerDownloadPage 的代码仓库

### 3. 配置部署设置

在配置页面中填写以下信息：

- **项目名称**：`snippet-butler-download`（或您喜欢的名称）
- **生产分支**：`main`（或您的主分支名称）
- **构建设置**：
  - **构建命令**：`npm run build`
  - **构建输出目录**：`out`
  - **Node.js 版本**：`20.x`（**重要**：必须选择 20.x 或更高版本）

- **环境变量**（必须添加）：
  - 名称: `NODE_VERSION` 值: `20`

### 4. 部署

点击 **保存并部署** 按钮开始部署过程。

### 5. 验证部署

部署完成后，Cloudflare 将提供一个 `*.pages.dev` 域名以访问您的网站。确认网站正常工作，特别是下载功能是否正常。

### 6. 自定义域名（可选）

如果您希望使用自定义域名：

1. 在项目详情页面中，选择 **自定义域** 选项卡
2. 点击 **设置自定义域** 按钮
3. 输入您的域名并按照提示完成 DNS 验证步骤

## 注意事项

1. **Node.js 版本问题**：确保使用 Node.js 20.x 或更高版本，因为 Next.js 15.x 要求使用这个版本
2. **下载文件**：确保在部署前已将 `SnippetButlerSetup.exe` 文件放置在 `public/downloads` 目录中，这样用户才能正常下载
3. **大文件**：默认情况下，Cloudflare Pages 对单个文件大小有 25MB 的限制。如果安装包大于此限制，请考虑使用 Cloudflare R2 存储或其它解决方案
4. **CDN 缓存**：Cloudflare 会自动缓存静态资源，若更新安装包，可能需要清除缓存

## 故障排除

- 如果因 Node.js 版本问题导致部署失败，请确保：
  1. Cloudflare Pages 构建设置中选择了 Node.js 20.x
  2. 添加了 `NODE_VERSION=20` 环境变量
  3. package.json 中包含了 `"engines"` 配置
- 确保已在 `next.config.mjs` 中设置 `output: 'export'`
- 验证 `public/_routes.json` 文件存在且配置正确

## 更新网站

当您需要更新网站内容时：

1. 将更改推送到连接的 Git 仓库
2. Cloudflare Pages 将自动检测更改并重新部署
3. 您也可以在 Cloudflare Dashboard 中手动触发部署 