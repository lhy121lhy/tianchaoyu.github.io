---
title: 模型分块
permalink: /tutorials/python/islice/
---

```python
from itertools import islice

def chunk_list(it,limit):
    it = iter(it)
    return iter(lambda:list(islice(it,limit)),[])
```
