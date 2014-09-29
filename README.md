cuke2html
=========

A very primitive, straight forward tool to create human readable html from cucumbers json output.

Right now it is just a few lines of wrapper code around a jade template. 


Installation
------------

```
npm install -g cuke2html
```

Usage
-----


```
cuke2html [ -t custom_template.jade ] report.json
```

HTML Output is written to stdout.
