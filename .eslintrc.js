module.exports = {
    root: true,
    rules: {
        "linebreak-style": ["error", "windows"],
        'vue/no-v-html': 'off',
        'max-len': [2, {
        'code': 200,
        'ignoreComments': true, // 忽略所有拖尾注释和行内注释
        'ignoreTrailingComments': true, // 忽略拖尾注释
        'ignoreUrls': true, // 忽略含有链接的行
        'ignoreStrings': true, // 忽略含有双引号或单引号字符串的行
        'ignoreTemplateLiterals': true, // 忽略包含模板字面量的行
        'ignoreRegExpLiterals': true, // 忽略包含正则表达式的行
        "linebreak-style": [
          "error",
          "windows"
          // "unix"
      ],
        }],
    },
    // parserOptions: {
    //   parser: 'babel-eslint',
    // }
};
