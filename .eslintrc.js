// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
      'camelcase': 0,
      // allow paren-less arrow functions
      'arrow-parens': 0,
      // allow async-await
      'generator-star-spacing': 0,
      "indent": ["error", 4, {"SwitchCase": 1}],
      'eol-last': 0,  //末尾不加换行符 \n
      'semi': ["error", "always"], //末尾加分号
      // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
      "array-bracket-spacing": [2, "never"],
      // 在块级作用域外访问块内定义的变量是否报错提示
      "block-scoped-var": 0,
      // if while function 后面的{必须与if在同一行，java风格。
      "brace-style": [2, "1tbs", { "allowSingleLine": true }],
      // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
      // always-multiline：多行模式必须带逗号，单行模式不能带逗号
      "comma-dangle": [2, "never"],
      // 控制逗号前后的空格
      "comma-spacing": [2, { "before": false, "after": true }],
      // 控制逗号在行尾出现还是在行首出现
      // http://eslint.org/docs/rules/comma-style
      "comma-style": [2, "last"],
      // if else while for do后面的代码块是否需要{ }包围，参数：
      //    multi  只有块中有多行语句时才需要{ }包围
      //    multi-line  只有块中有多行语句时才需要{ }包围, 但是块中的执行语句只有一行时，
      //                   块中的语句只能跟和if语句在同一行。if (foo) foo++; else doSomething();
      //    multi-or-nest 只有块中有多行语句时才需要{ }包围, 如果块中的执行语句只有一行，执行语句可以零另起一行也可以跟在if语句后面
      //    [2, "multi", "consistent"] 保持前后语句的{ }一致
      //    default: [2, "all"] 全都需要{ }包围
      "curly": [2, "multi-line"],
      // 限制圆括号的使用
      "no-extra-parens": 2,
      // 限制使用多余的分号
      "no-extra-semi": 2,
      // 在通过函数声明书写函数时，函数被重写或者被重新赋值就会抛出错误
      "no-func-assign": 2,
      // 验证传递给RegExp 构造函数的字符串参数是否合法。
      "no-invalid-regexp": 2,
      // 在代码块中，如果语句出现在了return, throw, break, 或者continue 后面，这些代码往往不会被使用到，这条规则就是为了检测代码块、switch语句中不被使用到的代码。
      "no-unreachable": 2,
      // 在创建对象字面量时不允许键重复 {a:1,a:1}
      "no-dupe-keys": 2,
      "no-dupe-args": 2,//函数参数不能重复
      "no-duplicate-case": 2,//switch中的case标签不能重复
      "no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
      "no-empty": 2,//块语句中的内容不能为空
      "no-multi-spaces": 1,//不能用多余的空格
      "no-new": 1,//禁止在使用new构造一个实例后不赋值
      "no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
      "no-sparse-arrays": 2,//禁止稀疏数组， [1,,2]
      // 在函数中有分支时，保证所有的return 语句要么指定一个数值，要么都不指定返回值。这样来避免错误的发生
      "consistent-return": 2,
      // 所有的switch语句都必须要有一个default分支
      "default-case": 2,
      // 在进行比较时, 使用全等=== 和完全不等!== （0：不使用，2：使用）
      "eqeqeq": 0,
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
