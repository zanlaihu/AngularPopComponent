# csv 转对象

csv 读取考验基本算法。

根据理解，难点在于给出的 interface 中存在 parent 和 children 这两个互相嵌套的结构。

最终结果没能完全满足要求。[查看结果](题目1/csv转js对象.ts)

# find 函数

难点在于通过函数的形式返回一个含有函数属性的对象。

```
var find = funciton(obj){
    return {
        a:a
        b:b
        c:function(d){
            ...
        }
    }
}
```

从而让可以直接调用 find.c
如果将 find 制作成一个对象构造器，就不符合题意。

最终结果符合要求
[查看结果](题目2/find函数.js)

# AngularPopComponent

本弹窗采用了 ng zorro mobile 框架
http://ng.mobile.ant.design/#/docs/introduce/zh

使用了里面提供的 modal 组件
http://ng.mobile.ant.design/#/components/modal/zh

最终效果
[查看结果](my-app)

1.按钮按下前
![avator](pic/按下前.png) 2.按钮按下后
![avator](pic/按下后.png)

# XHR 缓存

目前接触项目采用 angular 的 akita 来实现后端 API 的发送 request 与接收 response 的异步操作。

通过
component.ts

```typescript
  public async functionName(): Promise<void> {
    try {
      const request: Request = this.generateRequestParams();
      const checkResult: Response = this.service.apiName(
        request
      );
      if (checkResult) {
        ...;
      }
    } catch (error) {
      if (error.code === HttpStatusCode.badRequest) {
        ...;
      }
    }
  }
```

service.ts

```typescript
@Injectable({ providedIn: 'root' })
export class KofuriInfoService extends BaseService {
  constructor(
    private http: HttpApiService,
  ) {
    super();
  }


    public apiName(request: Request): Promise<Response> {
        return this.http.post(
            ApiUrl,
            request: Request
        )
        .pipe(
            map((res: any) => {
                ...;
                return res;
                })
            )
            .toPromise();
    }

}
```

未接触 ajax 开发，并且相关内容无法在工作日期间短时间掌握。故而放弃该题。
