# remove duplicate legend
#python 
[[python]]
ref: https://stackoverflow.com/questions/13588920/stop-matplotlib-repeating-labels-in-legend

`plt.legend` takes as parameters
1. A list of axis handles wich are `Artist` objecs
2. A list of labels which are string
These parameters are both optional defaulting to `plt.gca().get_legend_handles_labels()`. You can remove duplicate labels by putting them in a dictionary before calling `legend`. This is because dicts can't have duplicate keys.
```python
import matplotlib.pyplot as plt

handles, labels = plt.gca().get_legend_handles_labels()
by_label = dict(zip(labels, handles))
plt.legend(by_label.values(), by_label.keys())
```