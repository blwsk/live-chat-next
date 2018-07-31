# live-chat-next

`yarn dev` runs the app locally, against [localhost:3000](http://localhost:3000)

[zeit/now-cli](https://github.com/zeit/now-cli) allows for deployment with one command:

```bash
now
> Deploying ~/personal/js/live-chat-next under blwsk
> Synced 1 file (934B) [1s]
> Using Node.js 8.11.3 (default)
> https://live-chat-next-XXXXXXXXXX.now.sh [in clipboard] (sfo1) [2s]
> ...
```

The deployment can be "deployed" via an alias to a custom domain:

```bash
now alias set https://live-chat-next-XXXXXXXXXX.now.sh live-chat-krb.com
```
