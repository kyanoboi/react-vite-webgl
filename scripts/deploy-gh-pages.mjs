// 把 dist/ 推送到 gh-pages 分支，绕开 gh-pages@6.x 在 Windows 上
// `git rm --ignore-unmatch -r -f -- <14153 个文件>` 撞命令行长度上限
// (spawn ENAMETOOLONG) 的问题。
//
// 用法：npm run deploy
// 依赖：git 在 PATH 中、已配置好 remote (origin) 与推送权限。

import { execSync, spawnSync } from 'node:child_process';
import { existsSync, rmSync, cpSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root = resolve(__dirname, '..');
const distDir = join(root, 'dist');

if (!existsSync(distDir)) {
  console.error(`[deploy] 找不到 ${distDir}，请先执行 npm run build`);
  process.exit(1);
}

const branch = process.env.DEPLOY_BRANCH || 'gh-pages';
const remote = process.env.DEPLOY_REMOTE || 'origin';
const message = process.env.DEPLOY_MESSAGE || `deploy: ${new Date().toISOString()}`;

// 用一个临时目录作为空的工作区，不污染主仓库。
const work = join(tmpdir(), `gh-pages-${Date.now()}`);
mkdirSync(work, { recursive: true });

const run = (cmd, args, opts = {}) => {
  console.log(`[deploy] > ${cmd} ${args.join(' ')}`);
  const res = spawnSync(cmd, args, { stdio: 'inherit', cwd: work, ...opts });
  if (res.status !== 0) {
    process.exit(res.status ?? 1);
  }
};

try {
  // 1. 在临时目录里建一个全新的 git 仓库
  run('git', ['init', '-q', '-b', branch]);
  run('git', ['config', 'user.name', 'gh-pages-deploy']);
  run('git', ['config', 'user.email', 'gh-pages-deploy@local']);
  run('git', ['config', 'commit.gpgsign', 'false']);

  // 2. 把 dist/ 拷进来（注意：cpSync 在 node 16.7+ 才支持递归选项；这里用 cpSync 的 recursive）
  cpSync(distDir, work, { recursive: true });

  // 3. 提交
  run('git', ['add', '-A']);
  // 没有变更时也能通过：允许空提交
  run('git', ['commit', '--allow-empty', '-m', message]);

  // 4. 推送到远端 gh-pages 分支（强制覆盖）
  // 先把远端地址加进来
  const originUrl = execSync('git config --get remote.origin.url', {
    cwd: root,
    encoding: 'utf8',
  }).trim();
  run('git', ['remote', 'add', 'origin', originUrl]);
  run('git', ['push', '--force', remote, `HEAD:${branch}`]);

  console.log(`[deploy] 成功推送到 ${remote}/${branch}`);
} finally {
  // 清理临时目录
  try {
    rmSync(work, { recursive: true, force: true });
  } catch {
    /* ignore */
  }
}
