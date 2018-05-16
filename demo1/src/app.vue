<template>
    <div>
        {{msg}}
          <ul>
            <li v-for="(item,index) in todos" v-on:click="yang(index,item.id,item.clickNo)" :class="[item.isSelected?'clicked unclicked':'unclicked']"><span :id="item.id">{{item.text}}</span></li>
        </ul>
        
    </div>
</template>


<script type="text/ecmascript-6">
       

    export default {
        data(){
            return {
                msg:"老不死的地球,你好!",
                // clickNo:0,
                clickResult:[],
               todos:[
                    // id:记录当前点击的对象,clickNo记录当前对象点击的次数
                     {id:1,text:'nihao ',isSelected:false,clickNo:0},
                    {id:2,text:'woaini ',isSelected:false,clickNo:0},
                    {id:3,text:'qinaide ',isSelected:false,clickNo:0},
                    {id:4,text:'guniang ',isSelected:false,clickNo:0},
                    {id:5,text:'qinaide ',isSelected:false,clickNo:0},
                    {id:6,text:'guniang ',isSelected:false,clickNo:0},
                    ],
            }
        },
        methods:{
            yang:function (index,itemId,itemClickNo) {
                itemClickNo++;
                // 每次点击后存储点击的次数
                this.todos[index].clickNo = itemClickNo;
                // 如果存储结果<3,
                //     如果是奇数点击:
                //          奇数点击添加背景效果;
                //          奇数点击存储该点击对象;
                //     如果是偶数点击:
                //         偶数点击移除背景效果;
                //         偶数点击删除该点击对象;
                // 如果存储结果>=3,
                //     如果是偶数点击:
                //         偶数点击移除背景效果;
                //         偶数点击删除该点击对象;
                //     谈对话框,

                if(this.clickResult.length  < 3){
                    if(this.todos[index].clickNo % 2 ==1 ){
                        // 奇数点击添加背景效果
                        this.todos[index].isSelected = true;
                        // 存储奇数点击
                         this.clickResult.push(itemId);
                        console.log(this.clickResult);
                    }else if (this.todos[index].clickNo % 2 ==0 ) {
                        // 偶数点击移除背景效果
                        this.todos[index].isSelected = false;
                        // 删除偶数点击,并且更新数组
                       this.clickResult = this.remove(this.clickResult,itemId); 
                    }
                }else if (this.clickResult.length ==3 ) {
                    if (this.todos[index].clickNo % 2 ==0 ) {
                        // 偶数点击移除背景效果
                        this.todos[index].isSelected = false;
                        // 删除偶数点击,并且更新存储数组,一定得存储,更新数组
                       this.clickResult = this.remove(this.clickResult,itemId); 
                       console.log(this.clickResult);
                    }else{
                         toastr.success('我是阿奇')
                    }   
                }  
                console.log(this.clickResult);
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