---
aliases: 
date created: Sunday, July 17th 2022, 3:45:46 pm
date modified: Sunday, July 17th 2022, 3:46:07 pm
tags: INX make-life-fantasy 
title: Citirix Workspace SSL Error
---

# Citirix Workspace SSL Error

![[Pasted image 20220717154911.png]]

To prevent the SSL error 61 when accessing remote sessions:
Make Firefox's certificates accessible to Citrix,

```bash
sudo ln -s /usr/share/ca-certificates/mozilla/* /opt/Citrix/ICAClient/keystore/cacerts
sudo /opt/Citrix/ICAClient/util/ctx_rehash
```

## Reference
 [Certificate error when using Citrix Receiver](https://askubuntu.com/questions/302188/certificate-error-when-using-citrix-receiver)