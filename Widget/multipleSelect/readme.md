# Avalon——多选下拉框组件

####导语：
> &emsp;&emsp;目前大部分框架能找到的多选下拉框组件都是不带复选框的，这在某些使用场景下会带来很大的不便，avalon也是如此。我基于[multipleSelect](http://wenzhixin.net.cn/p/multiple-select/docs/#documentation)第三方库封装了一个avalon的带复选框的多选下拉框组件**mulselect**，方便使用。

##一、简介

###1、第三方库：
引用地址：[http://wenzhixin.net.cn/p/multiple-select/docs/#documentation](http://wenzhixin.net.cn/p/multiple-select/docs/#documentation)
###2、我的修改：
在原来的组件上修改了css文件及js文件细节，不影响正常功能。
###3、效果展示：
![mulselect组件截图](http://i.imgur.com/LDYPyyc.png)

##二、使用方法

###1、引用文件：
1. **css文件：**`<link href="./multiple-select.css" rel="stylesheet"/>;`
2. **js文件：**`require('./mulselect.js'); `  

###2、Html如下：
    `<select ms-widget="mulselect,$,$myOptions"
    	ms-duplex="selectData"
    	multiple="multiple">
    </select>`
  1. **ms-widget：组件绑定**
    - mulselect为组件名（固定）
    - $设置id（可不设置）
    - $myOptions为你的配置项名（根据具体名称改变）
  2. **ms-duplex：数据双工绑定**
    - selectData为绑定数据名（根据具体名称改变）
  3. **multiple：属性**
    - 不设置值为**multiple**会出现一些问题（固定）  

###3、$myOptions配置：
    `$myOptions:{ 
		//Constructor
	    isOpen: false,
	    placeholder: '请选择',
	    selectAll: true,
	    selectAllDelimiter: ['', ''],
	    minimumCountSelected: 3,
	    ellipsis: false,
	    multiple: true,
	    multipleWidth: 144,
	    single: false,
	    filter: true,
	    width: 460,
	    dropWidth: undefined,
	    maxHeight: 250,
	    container: null,
	    position: 'bottom',
	    keepOpen: false,
	    animate: 'none', // 'none', 'fade', 'slide'
	    displayValues: false,
	    delimiter: ', ',
	    addTitle: false,
	    filterAcceptOnEnter: false,
	    hideOptgroupCheckboxes: false,
	    selectAllText: "<span style='font-weight:bold;'>全选</span>",
	    allSelected: '全部选中',
	    countSelected: '#/% 被选中',
	    noMatchesFound: '无匹配项',
	    
	    styler: function () {
	    	return 'color: #333;';
	    },
	    textTemplate: function ($elm) {
	    	return $elm.html();
	    },
	    labelTemplate: function ($elm) {
	    	return $elm.attr('label');
	    },
	    
		//Events
	    onOpen: function () {
	    	return false;
	    },
	    onClose: function () {
	    	return false;
	    },
	    onCheckAll: function () {
	    	return false;
	    },
	    onUncheckAll: function () {
	    	return false;
	    },
	    onFocus: function () {
	    	return false;
	    },
	    onBlur: function () {
	    	return false;
	    },
	    onOptgroupClick: function () {
	    	return false;
	    },
	    onClick: function () {
	    	return false;
	    },
	    onFilter: function () {
	    	return false;
	    }
    
    };`

##三、配置项

###（一）、Constructor：
####1. isOpen:
>1). Type: boolean  
2). Description: Whether or not Multiple Select open the select dropdown. By default this option is set to **false**.

####2. placeholder:
>1). Type: string  
2). Description: A placeholder value can be defined and will be displayed until you select a item. By default this option is set to **''**.  
3). 默认值修改：**'请选择'**

####3. selectAll:
>1). Type: boolean  
2). Description: Whether or not Multiple Select show select all checkbox. By default this option is set to **true**.

####4. selectAllText:
>1). Type: string  
2). Description: Multiple Select select all checkbox text. By default this option is set to **Select all**.  
3). 默认值修改：**"<span style='font-weight:bold;'>全选</span>"**

####5. selectAllDelimiter:
>1). Type: Array  
2). Description: Multiple Select select all checkbox delimiter. By default this option is set to **['[',']']**.  
3). 默认值修改：**['','']**

####6.allSelected:
>1). Type: false or string  
2). Description: The text displays when the select all selected. By default this option is set to **All selected**.  
3). 默认值修改：**'全部选中'**

####7.minimumCountSelected:
>1). Type: int  
2). Description: countSelected will be shown only if more than X items where selected. By default this option is set to **3**.

####8.countSelected:
>1). Type: false or string  
2). Description: ‘#’ is replaced with the count of selected items, ‘%’ is replaces with total items. By default this option is set to **# of % selected**.  
3). 默认值修改：**'#/% 被选中'**

####9.ellipsis:
>1). Type: boolean  
2). Description: Add “…” after selected options if minimumCountSelected is set. Overrides countSelected option. By default this option is set to **false**.

####10.multiple:
>1). Type: boolean  
2). Description: Whether or not Multiple Select show multiple items in a row. By default this option is set to **false**.  
3). 默认值修改：**true**

####11.multipleWidth:
>1).Type: integer  
2).Description: Multiple Select show multiple items width. By default this option is set to **80**.  
3). 默认值修改：**144**

####12.single:
>1).Type: boolean  
2).Description: Whether or not Multiple Select allows you to select only one option. By default this option is set to **false**.

####13.position:
>1).Type: string  
2).Description: Defines the position of select dropdown, can only be bottom or top. By default this option is set to **bottom**.

####14.filter:
>1).Type: boolean  
2).Description: Whether or not Multiple Select show a search field to search through checkbox items. By default this option is set to **false**.  
3). 默认值修改：**true**

####15.width:
>1).Type: integer/string  
2).Description: Define the width property of the dropdown list, support a percentage setting. By default this option is set to **undefined**. Which is the same as the select input field.  
3). 默认值修改：**460px**

####16.maxHeight:
>1).Type: integer  
2).Description: Define the maximum height property of the dropdown list. By default this option is set to **250**.

####17.keepOpen:
>1).Type: boolean  
2).Description: Keep the select dropdown always open. By default this option is set to **false**.

####18.styler:
>1).Type: function  
2).Description: The item styler function, return style string to custom the item style such as background: red. The function take one parameter: value.  
3). 默认值修改：
        function(value) {
       return 'color: #333;';
    }

####19.noMatchesFound:
>1).类型: String  
2).描述: 搜索时若无匹配项，则显示此字符串，默认值**'No matches found'**（官方文档没给出此配置项）  
3). 默认值修改：**'无匹配项'**

####20.data:
>1).类型: Array  
2).描述: 多选框数据（自定义）  
3).举例:  
&emsp;&emsp;A．无组别：
    data = [
    	{id:'1',text:'option1'},
    	{id:'2',text:'option2'}
    ];  
&emsp;&emsp;B．带组别：
    data = [
	    {
		    text:'optGroup1',
		    suboption:[
			    {id:'1',text:'option1_1'},
			    {id:'2',text:'option1_2'}
		    ]
	    },
	    {
		    text:'optGroup2',
		    suboption:[
			    {id:'3',text:'option2_1'},
			    {id:'4',text:'option2_2'}
		    ]
	    }
    ];
  
  

***

###（二）、Events
####1.onOpen:  
>Fires when the dropdown list is open.

####2.onClose:
>Fires when the dropdown list is close.

####3.onCheckAll:
>Fires when all the options are checked by either clicking the “Select all” checkbox, or when the “checkall” method is programatically called.

####4.onUncheckAll:
>

####5.onFocus:
>Bind an event handler to the “focus”.

####6.onBlur:
>Bind an event handler to the “blur”

####7.onOptgroupClick:
>
1. Fires when a an optgroup label is clicked on.
2. eg. `onOptgroupClick: function(view) {}`
  - view.label: the text of the optgroup；
  - view.checked: the checked of the optgroup；
  - view.children: an array of the checkboxes (DOM elements) inside the optgroup

####8.onClick:
>
1. Fires when a checkbox is checked or unchecked.
2. eg. `onClick: function(view) {}`
  - view.label: the text of the checkbox item；
  - view.checked: the checked of the checkbox item

####9.onChange:
>绑定“选择数据”变化事件（自定义）
  

***

###（三）、Methods
####1.getSelects:
>
- Gets the selected values.Parameter: typeType: stringThe type of selected items. value or textThe default is value.
- eg. 
  - `$('select').multipleSelect('getSelects');`
  - `$('select').multipleSelect('getSelects','text')`

####2.setSelects:
>
- Sets the selected values.Parameter: valuesType: arrayThe values of selected items.
- eg. `$('select').multipleSelect('setSelects', [1, 3]);`

####3.enable:
>
- Enables Select.
- eg. `$('select').multipleSelect('enable');`

####4.disable:
>
- Disables Select. During this mode the user is not allowed to manipulate the selection.
- eg. `$('select').multipleSelect('disable');`

####5.checkAll:
>
- Check all checkboxes.
- eg. `$('select').multipleSelect('checkAll');`

####6.uncheckAll:
>
- Uncheck all checkboxes.  
- eg. `$('select').multipleSelect('uncheckAll');`

####7.focus:
>
- Focus the multiple select.  
- eg. `$('select').multipleSelect('focus');`

####8.blur:
>
- Blur the multiple select.  
- eg. `$('select').multipleSelect('blur');`

####9.refresh:
>
- Reloads the Multiple Select. If you’re dynamically adding/removing option tags on the original select via AJAX or DOM manipulation methods, call refresh to reflect the changes.  
- eg. `$('select').multipleSelect('refresh');`
