## 递归

递归本质其实是通过函数体的循环，对于n(可变)重循环只能用递归无法使用普通循环

### 递归模板

包括四部分：

1. **terminator** 停止递归的条件并**返回**
2. **process current logic** 当前处理逻辑
3. **drill down** 下钻
4. **restore current status** 置位当前状态(重置数据)

```javascript
const recursion = (level, param) {
 // 1. terminator
  if (level < MAX_LEVEL) {
    return
  }
 // 2. process current logic
  process(level, param)
 // 3. drill down
  recur(level + 1, newParam)
 // 4. restore current status
}
```

### 思维要点

1. 不要人肉进行递归
2. 找到最近最简单方法，将其拆解成可重复解决的问题(重复子问题)
3. 数学归纳法思维

### 案例

1. 爬楼梯

   Fibonacci: f(n) = f(n-1) + f(n-2)

2. 括号生成

   1. 左扩号在不超出n的情况下随意加
   2. 只要左大于右就可以加
   3. 当左和右都等于n时退出递归

3. 树递归

   1. 验证二叉搜索树
      1. 递归
      2. BST => 中序遍历是递增的

## 分治 (Divide & Conquer)

分而治之，将一个复杂的问题分成2个或者多个相似的子问题，把子问题分成更小的子问题，直到更小的子问题可以简单求解，最终合并

比递归多了一步合并结果 conquer subproblems

### 案例

1. Pow(x, n)
   1. 暴力 循环n次累乘
   2. 分治, 子问题是Pow(x, n/2)
2. 子集
   1. 方法一：每一层选或不选
   2. 方法二：每一层都在下一层基础上添加当前值
3. 求字符串前缀

## 回溯

一层层试错

### 案例s

1. 全排列