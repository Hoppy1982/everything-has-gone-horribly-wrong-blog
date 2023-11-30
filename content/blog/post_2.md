---
nPost: 2
title: Git Commits
description: Blog post about conventional commits.
date: 2023-11-30
tags:
  - dev
  - git
---

```git
git commit -m "feat: initial"
git commit -m "feat: initialer"
git commit -m "feat: initialerer"
git commit -m "Please work"
git commit -m "Why doesn't it s&*^ing work!?"
git commit -m "Unbork attempt 30/9999"
```

## Intro

Although I've gotten better, I still write rushed, sloppy or inaccurate commit messages so I'm writing this to build some muscle memory. Something I've remained doggedly awful at is not making regular commits, it's easy to forget when working locally & end up making incoherent covering a bunch of unrelated code. There are ways to go back and change commit messages but this should only be done locally before you push code. It's better to be disciplined and make regular small commits from the start.

## Commit messages

Good commit messages have lots of benefits

- Finding where you might need to rollback to after breaking something.
- Multiple people working on the same code base.
- Tying into [CI/CD](https://resources.github.com/ci-cd/) pipelines.
- Not embarrassing yourself when potential employers are reading them.

There are libraries you can use to help enforce & prompt for commits such as [commitizen](https://www.npmjs.com/package/commitizen). That might be paired with something like [semantic-release](https://www.npmjs.com/package/semantic-release) as part of a production pipeline.

I did consider about going down that route for this blog but decided against it. I'm using netlify for hosting and the deployment setup is so good I don't see the benefit of complicating it. For larger applications you might want to do things such as trigger unit tests to pass before you can commit.

In my experience, for personal projects I might not touch the code for months. When coming back to it I'd forget to use the commitizen CLI for example. If in doubt simpler is better. Only add complexity as the need arises.

## Examples of better commit messages

```git
git commit -m "fix: Nav items overlapping on mobile"
git commit -m "feat: Add social share icons to homepage"
```

## Commit message structure

From [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

```markdown
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## How to decide on a convention

A particular company might have their own preferred commit conventions. Consistancy is more important than arguing over specifics. For little old me making personal projects I'm generally a fan of following the herd/ path of least resistance. If the convential commits site links to Angulars convention for allowed _types_ that's good enough for me.
