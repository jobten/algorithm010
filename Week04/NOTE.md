## 遍历搜索

在树(图/状态集)中寻找特定节点

- 每个节点都要访问一次

- 每个节点仅仅访问一次

- 对于节点的访问顺序不限

  - 深度优先： depth first search

    一般用递归，也可不用，直接使用栈

  - 广度优先：breadth first search

    得自己构造节点类，要使用队列

### DFS

#### 代码模板

**非递归写法:**

```javascript
function deepTraversal(node) {
  var nodes = [];
  if (node != null) {
    var stack = [];
    stack.push(node);
    while (stack.length != 0) {
      var item = stack.pop();
      nodes.push(item);
      var children = item.children;
      for (var i = children.length - 1; i >= 0; i--)
        stack.push(children[i]);
    }
  }
  return nodes;
}
```

**递归写法：**

```javascript
function deepTraversal(node) {
  var nodes = [];
  if (node != null) {
      nodes.push(node);
      var children = node.children;
      for (var i = 0; i < children.length; i++)
          deepTraversal(children[i]);
  }
  return nodes;
}
```



### BFS

#### 代码模板

```javascript
function wideTraversal(selectNode) {
  var nodes = [];
  if (selectNode != null) {
    var queue = [];
    queue.unshift(selectNode);
    while (queue.length != 0) {
      var item = queue.shift();
      nodes.push(item);
      var children = item.children;
      for (var i = 0; i < children.length; i++)
        queue.push(children[i]);
    }
  }
  return nodes;
}
```

## 贪心算法
贪心算法是一种在每一步选择中都采取在当前状态下最好或最优(即最有
利)的选择，从而希望导致结果是全局最好或最优的算法。
贪心算法与动态规划的不同在于它对每个子问题的解决方案都做出选择，**不
能回退**。动态规划则会保存以前的运算结果，并根据以前的结果对当前进行
选择，有回退功能
一旦一个问题可以通过贪心法来解决，那么贪心法一般是解决这个问题的最
好办法。由于贪心法的高效性以及其所求得的答案比较接近最优结果，贪心
法也可以用作**辅助算法**或者直接解决一些**要求结果不特别精确**的问题

## 二分查找

### 二分查找的前提
1. 目标函数单调性(单调递增或者递减) 
2. 存在上下界(bounded)
3. 能够通过索引访问(index accessible)

### 案例

**题目:**使用二分查找，寻找一个半有序数组 [4, 5, 6, 7, 0, 1, 2] 中间无序的地方

**思路:**二分查找到当前值比前后2个数都小的数即为中间无序的地方

