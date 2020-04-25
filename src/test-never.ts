interface Foo {
    type: "foo";
    foo1();
  }
  
  interface Bar {
    type: "bar";
    bar1();
    bar2();
  }
  
  type All = Foo | Bar;
  
  // 使用联合类型的时候， 在类型未确定的情况下，默认值会仓重获取公有的部分
  function getType():All {
      return
  }
  
  let type = getType();
  type.type;
  (type as Bar).bar1()
  
  function handValue(val: All) {
    switch (val.type) {
      case "foo":
        // 这里 val 被收窄为 Foo
        break;
      case "bar":
        // val 在这里是 Bar
        break;
      default:
        // val 在这里是 never
        const exhaustiveCheck: never = val;
        return ((e: never) => {
            return new Error(e);
        })
        break;
    }
  }