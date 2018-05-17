<template>
    <div>
        {{msg}}
          <ul>
            <li v-for="(item,index) in todos" v-on:click="selectTag(index,item.id)" :class="[item.isSelected?'clicked unclicked':'unclicked']"><span :id="item.id">{{item.text}}</span></li>
        </ul>
        
    </div>
</template>


<script type="text/ecmascript-6">
       

    export default {
        data(){
            return {
                clickResult:[],
               todos:
                    [
                        {id:1,text:'nihao ',isSelected:false},
                        {id:2,text:'woaini ',isSelected:false},
                        {id:3,text:'qinaide ',isSelected:false},
                        {id:4,text:'guniang ',isSelected:false},
                        {id:5,text:'qinaide ',isSelected:false},
                        {id:6,text:'guniang ',isSelected:false},
                    ]
            }
        },
        methods:{
            
            arrRemove: function (arr, item){
                    var result=[];  
                    for(var i=0; i<arr.length; i++){  
                    if(arr[i]!=item){  
                        result.push(arr[i]);  
                        // console.log(result);
                        // console.log("itemid"+item);
                        }  
                    }
                    return result;   
            },
            selectTag:function (index,itemId) {
                // 选中状态,长度<3
                //     添加点击背景效果,
                //     存储点击数据
                    if( this.todos[index].isSelected == false  &&  this.clickResult.length <3 ) {
                        this.todos[index].isSelected = true;
                        this.clickResult.push(itemId);
                        console.log(this.clickResult);
                    }else if ( this.todos[index].isSelected == true) {
                        this.todos[index].isSelected = false;
                        this.clickResult = this.arrRemove( this.clickResult,itemId);
                        console.log(this.clickResult);
                    }else {
                        toastr.success('我是阿奇');
                    }
                // 非选中状态
                //     如果是之前选中的,需要取消背景效果,
                //     删除存储的数据
                //     如果不是之前选中的,也就是>=3,弹出提示

            }

        }
    }
</script>


<style scoped>

.clicked{
    border-color: #17c8bf;
    background: #17c8bf;
    color: #fff;
}
.unclicked {
    display: inline-block;
    padding: .3em .5em;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3em;
    text-align: center;
}
</style>