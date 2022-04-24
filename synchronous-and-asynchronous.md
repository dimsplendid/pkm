---
date updated: '2021-08-16T15:49:16+08:00'

---

# Synchronous and Asynchronous

## Synchronous

The code would process sequensily, so when one line is block, the follow lines would not be executed til it finished.

> 一般沒特別設計都是如此

## Asynchronous

Cause the block issue of synchronize, many Web APIs are implemented to asynchornous methods.
But because this feature, if we want to use some resource that is response from asynchronous, we shuld use [[Callback Funciton]] to make it "partially synchronize". And JS has other syntex thaot can do this like [[js-promise]].
