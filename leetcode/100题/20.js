// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true

/**
 * @param {string} s
 * @return {boolean}
 */

// 方法一：

var isValid = function (s) {
    let sta = [];   // 存放元素的栈
    for (let ch of s) {
        if (ch === ')' && sta[sta.length - 1] === '(') {
            sta.pop();
            continue;
        }
        if (ch === '}' && sta[sta.length - 1] === '{') {
            sta.pop();
            continue;
        }
        if (ch === ']' && sta[sta.length - 1] === '[') {
            sta.pop();
            continue;
        }
        sta.push(ch);
    }
    return sta.length === 0;
};


// 方法二：利用ASCII码值

var isValid = function (s) {
    let sta = [];   // 存放元素的栈
    for (let ch of s) {
        
        if(sta.length===0)  {
            sta.push(ch);
            continue;
        }
        // console.log(ch.charCodeAt() - sta[sta.length - 1].charCodeAt());
        if (ch.charCodeAt() - sta[sta.length - 1].charCodeAt() === 1 || ch.charCodeAt() - sta[sta.length - 1].charCodeAt() === 2) {
            sta.pop();
            continue;
        }
        sta.push(ch);
    }
    return !sta.length;
};
