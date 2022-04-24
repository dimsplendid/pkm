# jupyter notebook 3D show
#python 
using ipyml
```bash
conda nstall -c conda-forge ipympl
```
for jupyter lab version = 2
```bash
conda install -y nodejs
pip install --upgrade jupyterlab
jupyter labextension install @jupyter-widgets/jupyterlab-manager
jupyter labextension install jupyter-matplotlib
jupyter nbextension enable --py widgetsnbextension
```
then restart server, and using
```python
%matplotlib widget
```
then play with it :D