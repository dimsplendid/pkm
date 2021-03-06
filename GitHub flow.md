---
aliases: 
tags: git
date created: Wednesday, May 11th 2022, 2:40:03 pm
date modified: Wednesday, May 11th 2022, 2:51:52 pm
title: GitHub flow
---

# GitHub Flow

> [!Info]
> Refer to [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)[^1] GitHub Flow is a simpler flow control for modern web app development. And if we should build a more concrete version control, then it still can follow the blog.
> I like the sentence **"Panaceas don't exist. Consider your own context."**

1. Create a branch
2. Make changes
3. Create a pull request
4. Address review comments
5. Merge your pull request

> [!Question]
> Only Merge on branch, pull request on topic?

> [!Check] Answer
> Yes, and it works better than I think.

6. Delete your branch
7. [Optional] Update other branch from master(or main)
```shell
$ git checkout [branch_name]
$ git merge master
```

> [!Note]
> Although I thought this method is fit my need, I read some comments that some people disagree this approach, see more information at [Merging vs. Rebasing | Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) later

## Ref

[^1]: [A successful Git branching model » nvie.com](https://nvie.com/posts/a-successful-git-branching-model/)
[^2]: [GitHub flow - GitHub Docs](https://docs.github.com/en/get-started/quickstart/github-flow)