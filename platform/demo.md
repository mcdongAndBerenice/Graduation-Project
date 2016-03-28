漏洞列表页: 
```javascript
{
    length//容量
    curentPage//第几页
}
```
返回
```javascript
{
    status//ok或error
    page//总页数
    message:{//error时返回错误信息
        [ 
          bugNum//bug的编号,id或者是hash值
          disp//可展示的名称
          date//bug提交的日期
        ]
    }
}
```
漏洞详情页:
```
{
  bugNum
}
```
返回
```
{
  bugInfo{
    bugNum      //缺陷编号
    bugTitle    //漏洞标题
    schoolName  //相关高校
    userName    //漏洞作者
    submitDate  //提交时间
    publicDate  //公开时间
    bugType     //漏洞类型
    bugLevel    //危害等级
    bugStatus   //漏洞状态
    description //简要描述
    hash        //漏洞hash
    userName    //提交者用户名
  }
  detailsList{
    date            //披露时间
    statusDetail    //披露状态
  }
  schoolResponse    //高校回应
}
```

提交漏洞页:
拉取高校列表:
```
{
  status        //ok或error
  message:{     //error时返回错误信息
    [ 
      schoolName
      disp      //可展示的名称
    ]
  }
}
```
提交漏洞:
```
{
  submitType    //问题类型
  schoolName    //高校
  bugType       //漏洞大类
  bugTypeSub    //漏洞子类
  bugName       //漏洞标题
  bugLevel      //漏洞等级
  bugDescription//问题描述
  bugDetail     //详细说明
  bugProve      //漏洞证明
  bugFix        //漏洞修复
}
```
返回成功或失败

白帽子列表页:
拉取得到列表
```
{
  userInfo{
    date    //注册日期
    name    //昵称
    level   //等级
    bugNum  //提交漏洞数
  }
}
```
