okam-plugin-wx2swan
======

weixin to swan for okam(small program framework)


## use

```
npm install okam-plugin-wx2swan --save-dev
```

```
// your.config.js

{

    processors: {
        babel: {
            extnames: ['js']
        },

        wx2swan: {
            processor: 'okam-plugin-wx2swan',
            extnames: ['wxml', 'wxss']
        }
    },
    rules: [
        {
            match(file) {
                return file.isNpmWxCompScript;
            },
            processors: ['wx2swan']
        }
    ]

}
```
