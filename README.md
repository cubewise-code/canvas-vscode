# Canvas for TM1 extension for Visual Studio Code

## About Canvas for TM1

[Canvas for TM1](https://www.canvasfortm1.com/overview/) built by [Cubewise](http://www.cubewise.com/) is a web development framework built upon the [TM1 REST API](https://www.canvasfortm1.com/blogs/2016/6/1/what-is-the-tm1-rest-api) and delivers a modern `READ/WRITE` presentation layer to your TM1 applications. 
This new presentation layer for TM1, has been built by TM1 developers for TM1 developers and enables you to build upon your existing `TM1 knowledge`, a web based `TM1 planning and reporting application`. 

## About Cubewise
Since 2004, [Cubewise](http://www.cubewise.com/) has specialised in building highly effective `TM1` systems across Australia, Europe and the Asia Pacific. We have delivered well in excess of 500 successful projects to over 200 active customers, both large enterprise and mid-market.
We aren't just about creating great systems but also improving the TM1 ecosystem through add-on `softwares` such as [Pulse for TM1](https://www.pulsefortm1.com/overview/) which greatly improves the `management and governance of TM1` and [Canvas for TM1](https://www.canvasfortm1.com/overview/) which help TM1 developers to build modern web based `TM1 planning and reporting application`.

## Features

This extension adds rich language support for the [Canvas for TM1](https://www.canvasfortm1.com/overview/)  language to VS Code, including:

- Snippets
- Update multiple atributes a the same time
- Dropdown list for attribute values
- Generate templates


### **A. Snippets**

The key advantage of this extension is that it will write automatically the `Canvas` directive you choose with all its attributes. All Canvas directives starts with `tm1-ui`. 

1. Start typing `tm1-ui`, you'll see the following dropdown list with all `Canvas` directives:

![directives-dropdowlist](http://downloads.cubewise.com/web_assets/vscode/directives-dropdowlist-filtered.png)

2. You can filter the list by typing more information, e.g. if you type `tm1-ui-dbr`, you'll see only the directives which contains `tm1-ui-dbr`.

![directives-dropdowlist-filtered](http://downloads.cubewise.com/web_assets/vscode/directives-dropdowlist-filtered.png)

3. Select a directive (in this example `tm1-ui-dbra`) and press `enter`, the extension will write the directive with all attributes.

![tm1-ui-dbra](http://downloads.cubewise.com/web_assets/vscode/tm1-ui-dbra.png)

3. Now you just need to fill out the attributes values. It is recommended to use the key `TAB` for navigation between attributes:

![use-tab](http://downloads.cubewise.com/web_assets/vscode/use-tab.png)

### **B. Update multiple attributes at the same time**

1. If you have the same attribute multiple times, by navigating using the key `TAB` to `Instance Name`, you'll see all `Instance Name` will be highlighted:

![tm1-ui-chart](http://downloads.cubewise.com/web_assets/vscode/tm1-ui-chart.png)

2. Start replacing the first `Instance Name`, and you'll see that all `Instance Name` will be updated at the same time:

![tm1-ui-chart-dev](http://downloads.cubewise.com/web_assets/vscode/tm1-ui-chart-dev.png)

### **C. Dropdown list for attribute values**

1. If an attribute has a multi-value choice such as `True or false`, after typing `="`:

![upd-attribute](http://downloads.cubewise.com/web_assets/vscode/upd-attribute.png)

2. Just press `Ctrl + Space` to see a dropdown list with all possible values:

![upd-attribute-list](http://downloads.cubewise.com/web_assets/vscode/upd-attribute-list.png)

### **D. Generate templates**

1. in order to see the list of templates, you need to start typing `tm1-templates`:

![upd-attribute](http://downloads.cubewise.com/web_assets/vscode/templates-list.png)

2. Press enter on one of the templates and the code will be automatically generated:

![upd-attribute](http://downloads.cubewise.com/web_assets/vscode/templates-AF.png)

## More information about Canvas

In the [Help](https://www.canvasfortm1.com/help/) section, you can find more examples about how to use Canvas directives.

The latest information about [Canvas for TM1](https://www.canvasfortm1.com/overview/) and the [TM1 REST API](https://www.canvasfortm1.com/blogs/2016/6/1/what-is-the-tm1-rest-api) can be found on our [blog](https://www.canvasfortm1.com/blog/). 



