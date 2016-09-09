require("./multiple-select.js");

var widgetName = "mulselect",
    widget = avalon.ui[widgetName] = function (element, data, vmodels) {

        var options = data[widgetName + 'Options'],
            $element = $(element),
            _resolve,
            valueChangeCallback,
            dataChangeCallback,
            done = new Promise(function (resolve) {
                _resolve = resolve;
            }),
            duplexName = (element.msData["ms-duplex"] || "").trim(),
            duplexModel = duplexName && avalon.getModel(duplexName, vmodels),
            remoteData;

        var vmodel = avalon.define(avalon.mix(true, {
            $id: data[widgetName + 'Id'],
            /**
             * @interface multipleSelect实例引用
             */
            $instance: null,
            /**
             * @interface 组件初始化函数
             */
            $init: function () {

                //对element进行扫描，初始化节点中的avalon绑定
                avalon.scan(element, vmodels);

                //合并默认配置项与用户定义配置项
                vmodel.options = avalon.mix( vmodel.options, options );

                //promise
                if (options.data && options.data.then) {

                    options.data.then(function (data) {
                        _resolve(data);
                    });

                } else {

                    _resolve(options.data);

                }

                done.then(function (data) {

                    remoteData = data;

                    //使用option.data初始化组件
                    dataChangeCallback = function (n) {
                        $element.empty();

                        if (n > 0) {

                            for (var d = 0; d < data.length; d++) {

                                var item = data[d];

                                //含有suboption字段表示此item为optgroup
                                if( item.hasOwnProperty( 'suboption' ) ){

                                    var group = document.createElement("optgroup");
                                    group.label = item.text;

                                    for ( var i = 0; i < item.suboption.length; i++ ){

                                        var subItem = item.suboption[i];

                                        var option = new Option(subItem.text, subItem.id, false, false);
                                        if(subItem.disabled !== void 0){
                                            option.disabled = !!subItem.disabled;
                                        }

                                        group.appendChild(option);
                                    }

                                    $element.append(group);
                                }
                                //item为option
                                else{

                                    var option = new Option(item.text, item.id, false, false);
                                    if(item.disabled !== void 0){
                                        option.disabled = !!item.disabled;
                                    }

                                    $element.append(option);
                                }
                            }

                        }

                        //使用multipleSelect初始化组件
                        $element.multipleSelect( vmodel.options );
                    };

                    //监听option.data
                    if (data.$watch) {

                        var localData = data.$model;
                        dataChangeCallback( localData.length );
                        data.$watch("length", dataChangeCallback);

                    } else if (avalon.type(data) === "array") {

                        dataChangeCallback( data.length );

                    } else {

                        $element.multipleSelect(avalon.mix(true, {}, vmodel.options));

                    }

                    if (duplexModel) {

                        var oldValue;

                        //监听ms-duplex值的变化
                        valueChangeCallback = function () {
                            avalon.nextTick(function() {
                                var value = duplexModel[1][duplexModel[0]].$model;
                                $element.multipleSelect('setSelects',value);
                            });
                        };
                        duplexModel[1][duplexModel[0]].$watch("length", valueChangeCallback);

                        //监听$instance的值的变化
                        $element.on("change", function () {

                            var value = $element.multipleSelect("getSelects");

                            if(JSON.stringify(oldValue) != JSON.stringify( value )) {

                                oldValue = value;
                                avalon.assign(duplexModel[1][duplexModel[0]], value || []);

                            }

                            if( typeof vmodel.options.onChange === 'function' ){
                                vmodel.options.onChange();
                            }

                        });

                    }

                    if (typeof vmodel.onInit === "function") {
                        vmodel.onInit.call(element, vmodel, options, vmodels)
                    }
                });

            },

            $remove: function () {
                remoteData.$watch && remoteData.$unwatch("length", dataChangeCallback);
                if(duplexModel) {
                    duplexModel[1][duplexModel[0]].$unwatch("length", valueChangeCallback);
                }
                $element.multipleSelect("close");
            }
        }, options));

        return vmodel
    };

widget.defaults = {
    $skipArray: ["data", "options"],
    options: {
        filter: true,
        multiple: true,
        multipleWidth: 144,
        width: '460px',
        placeholder: "请选择",
        selectAllDelimiter:['',''],
        selectAllText:"<span style='font-weight:bold;'>全选</span>",
        noMatchesFound:'无匹配项',
        styler:function(value) {
            return 'color: #333;';
        },
        countSelected:'#/% 被选中',
        allSelected:'全部选中',
        onChange:false
    },                      //@config multipleSelect参数
    onInit: avalon.noop,    //@config 初始化时执行方法
};
