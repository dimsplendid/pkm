---
aliases: 
date created: Monday, August 8th 2022, 8:39:47 pm
date modified: Monday, August 8th 2022, 8:44:43 pm
tags: ssh
title: Set Up SSH Server
---

# Set Up SSH Server

## Linux (Ubuntu)

```bash
$ sudo apt install openssh-server
```

After installed, it would start ssh server automatically. It's done! Quite simple, right?

See more at VBird's Tutorial[^1]

## Windows 10+[^2]

### Check the Name and State

```powershell
Get-WindowsCapability -Online | ? Name -like 'OpenSSH*'
```

```
Name : OpenSSH.Client~~~~0.0.1.0
State : Installed

Name : OpenSSH.Server~~~~0.0.1.0
State : NotPresent 
```

The OpenSSH Client is pre-installed on Windows 10, but not the server, so we need to add the component.

### Add OpenSSH Server Component

```powershell
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
```

```
Path :
Online : True
RestartNeeded : False
```

### Start Server

```powershell
Set-Service -Name sshd -StartupType 'Automatic'
```

### Check Firewall Setting

```
PS C:Windowssystem32> Get-NetFirewallRule -Name *ssh*


Name                  : OpenSSH-Server-In-TCP
DisplayName           : OpenSSH SSH Server (sshd)
Description           : Inbound rule for OpenSSH SSH Server (sshd)
DisplayGroup          : OpenSSH Server
Group                 : OpenSSH Server
Enabled               : True
Profile               : Any
Platform              : {}
Direction             : Inbound
Action                : Allow
EdgeTraversalPolicy   : Block
LooseSourceMapping    : False
LocalOnlyMapping      : False
Owner                 :
PrimaryStatus         : OK
Status                : The rule was parsed successfully from the store. (65536)
EnforcementStatus     : NotApplicable
PolicyStoreSource     : PersistentStore
PolicyStoreSourceType : Local
```

### Add 

## Reference

[^1]: [遠端連線伺服器 SSH / XDMCP / VNC / RDP](https://linux.vbird.org/linux_server/centos6/0310telnetssh.php)

[^2]: [How To Use SSH Client and Server on Windows 10](https://www.pugetsystems.com/labs/hpc/How-To-Use-SSH-Client-and-Server-on-Windows-10-1470/)