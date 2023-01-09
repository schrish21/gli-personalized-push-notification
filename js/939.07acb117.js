"use strict";(self["webpackChunkvuejs_personalized_push_notif"]=self["webpackChunkvuejs_personalized_push_notif"]||[]).push([[939],{5939:function(t,e,a){a.r(e),a.d(e,{default:function(){return P}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{attrs:{flat:"",tile:"",width:"100%"}},[a("div",{staticClass:"d-flex flex-column justify-start mb-6 mx-4 px-8 py-2"},[a("div",{staticClass:"d-flex justify-start"},[a("p",{staticClass:"overline grey--text lighten-3 ma-0 pa-0 text-caption",staticStyle:{"font-size":"10px !important"}},[t._v(" MOENGAGE > ")]),a("p",{staticClass:"overline black--text ma-0 pa-0 text-caption",staticStyle:{"font-size":"10px !important"}},[t._v("   PUSH NOTIFICATIONS ")])]),a("h3",{staticClass:"primary--text lighten-3 font-weight-medium ma-0 pa-0"},[t._v(" All Campaigns ")])])]),a("AllCampaign",{staticClass:"mx-5",staticStyle:{"background-color":"#fff"}})],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:t.loadingDialog,callback:function(e){t.loadingDialog=e},expression:"loadingDialog"}},[a("v-card",{attrs:{color:"primary",dark:""}},[a("v-card-text",{staticClass:"pa-2 pl-4 pr-4 pb-4"},[t._v(" Loading, please wait "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog.confirmDelete,callback:function(e){t.$set(t.dialog,"confirmDelete",e)},expression:"dialog.confirmDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v(" Delete ")]),a("v-card-text",[t._v(" Are you sure you want to delete Campaign? ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.dialog.confirmDelete=!1}}},[t._v(" NO ")]),a("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(){t.dialog.confirmDelete=!1,t.onDelete(t.tempDelete)}}},[t._v(" YES ")])],1)],1)],1),a("v-card",[a("v-row",{staticClass:"mx-4 mt-0 mb-4 px-3 pt-6 pb-3",staticStyle:{display:"flex"}},[a("div",{staticClass:"ml-auto",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[a("h6",{staticClass:"mt-1",staticStyle:{"font-weight":"300","font-size":"12px"}},[t._v(" Last Updated: "+t._s(t.lastUpdate)+" ")]),a("span",{staticClass:"pl-3 bar-icon"},[a("v-btn",{staticStyle:{color:"blue"},attrs:{depressed:"","x-small":"",color:"white"},on:{click:function(e){return t.refreshTable()}}},[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-refresh")]),t._v("Refresh ")],1)],1)])]),a("v-divider"),a("div",{staticClass:"d-flex flex-row",staticStyle:{width:"100% !important"}},[a("div",{staticClass:"ma-0 pa-0",staticStyle:{width:"100% !important"}},[a("v-toolbar",{staticClass:"mt-2 px-3",attrs:{flat:""}},[a("v-text-field",{staticClass:"px-2",staticStyle:{width:"2%"},attrs:{value:t.search,"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-spacer"),a("div",{staticStyle:{display:"flex","justify-content":"center",width:"15% !important"},on:{click:function(e){return t.route("add-campaign")}}},[a("v-btn",{staticClass:"white--text",staticStyle:{"font-size":"12px",width:"100% !important"},attrs:{height:"35px",width:"100%",block:"",color:"#05A5B7"}},[a("v-icon",{staticClass:"mr-2",attrs:{color:"white"}},[t._v("mdi-plus")]),t._v("Add Campaign")],1)],1)],1),a("v-card",{staticClass:"my-4 px-3",attrs:{flat:""}},[a("v-card-text",{staticClass:"py-1"},[a("v-data-table",{attrs:{headers:t.headers,items:t.data,search:t.search},scopedSlots:t._u([{key:"item.amnm_start_date_push",fn:function(e){var i=e.item;return[a("div",{class:t.checkColor(i)},[t._v(" "+t._s(i.amnm_start_date_push)+" ")])]}},{key:"item.amnm_flag_member",fn:function(e){var i=e.item;return[a("v-checkbox",{attrs:{color:"green darken-2",readonly:""},model:{value:i.amnm_flag_member,callback:function(e){t.$set(i,"amnm_flag_member",e)},expression:"item.amnm_flag_member"}})]}},{key:"item.amnm_flag_status",fn:function(e){var i=e.item;return[a("v-checkbox",{attrs:{color:"green darken-2",readonly:""},model:{value:i.amnm_flag_status,callback:function(e){t.$set(i,"amnm_flag_status",e)},expression:"item.amnm_flag_status"}})]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-1",attrs:{small:"",color:"blue"},on:{click:function(e){return t.onView(i)}}},[t._v(" mdi-eye ")]),a("v-icon",{staticClass:"mr-1",attrs:{disabled:!t.checkActions(i),small:"",color:"green"},on:{click:function(e){return t.onEdit(i)}}},[t._v(" mdi-pencil-outline ")]),a("v-icon",{attrs:{disabled:!t.checkActions(i),small:"",color:"error"},on:{click:function(e){return t.onDeleteConfirm(i)}}},[t._v(" mdi-trash-can-outline ")])]}}],null,!0)})],1)],1)],1)])],1)],1)},l=[],r=a(8815),o=a(9669),c=a.n(o),d={name:"AllCampaign",data(){return{loadingDialog:!1,dateNow:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),lastUpdate:(new Date).toLocaleString(),search:"",textInputRules:[t=>!!t||"Kolom harus diisi"],dialog:{input:!1,input2:!1,confirmDelete:!1},headers:[{text:"ID",align:"start",value:"amnm_id",class:"style-header",width:"10px"},{text:"Campaign Name",value:"amnm_campaign_name",class:"style-header",width:"10px"},{text:"Notif Delivery",value:"amnm_campaign_delivery",class:"style-header",width:"10px"},{text:"Start Date Push",value:"amnm_start_date_push",class:"style-header",width:"10px"},{text:"Flag Member",value:"amnm_flag_member",class:"style-header",width:"10px"},{text:"Active Status",value:"amnm_flag_status",class:"style-header",width:"10px"},{text:"Actions",value:"actions",class:"style-header",sortable:!1,width:"10px"}],master_data:[],data:[],tempDelete:null,tempUpdate:null}},mounted(){this.getAllCampaign()},methods:{async getAllCampaign(){this.loadingDialog=!0;try{if(await c().get(r.YZ+"get-all-campaign?token="+r.Fw,r.C_).then((t=>{this.master_data=t.data.data,this.data=t.data.data,this.data!=[]&&(this.data||alert("Cannot get campaign data! Please try again."))})).catch((t=>{console.log("AllCampaign.vue (error) :: ",t),alert("Cannot get campaign data! Server timeout.")})),!this.data)return void(this.loadingDialog=!1)}catch(t){return console.error(t),void alert("Error: connection failed")}this.loadingDialog=!1},checkActions(t){var e=Date.parse(new Date),a=Date.parse(t.amnm_start_date_push);return 1!=t.amnm_flag_member&&(1!=t.amnm_flag_status&&!(e>a))},checkColor(t){var e=Date.parse(new Date),a=Date.parse(t.amnm_start_date_push);return e>a?"red--text":e<a?"green--text":"orange--text"},onView(t){this.$router.push({name:"edit-campaign",params:{campaign_data:t,viewMode:!0}}).catch((t=>{console.log(t)}))},async onEdit(t){return 1==t.amnm_flag_member?(alert("Campaign with generated member cannot be edit."),!1):1==t.amnm_flag_status?(alert("Completed campaign cannot be edit."),!1):(this.$router.push({name:"edit-campaign",params:{campaign_data:t,viewMode:!1}}).catch((t=>{console.log(t)})),!0)},onDeleteConfirm(t){if(1==t.amnm_flag_member)alert("Campaign with generated member cannot be removed.");else{if(1!=t.amnm_flag_status)return this.tempDelete=t,this.dialog.confirmDelete=!0,!0;alert("Completed campaign cannot be removed.")}},async onDelete(t){this.loadingDialog=!0;try{await c().post(r.YZ+"delete-campaign?token="+r.Fw+"&amnm_id="+t.amnm_id,r.C_).then((t=>{"success"==t.data.response_message?(this.refreshTable(),alert("Campaign deleted!")):(console.log(t.data),alert("Cannot delete campaign! Please try again."))})).catch((t=>{console.log("AllCampaign.vue (error) :: ",t),alert("Cannot delete campaign! Server timeout.")}))}catch(e){return console.error(e),void alert("Error: connection failed")}this.tempDelete=null,this.refreshTable(),this.loadingDialog=!1},async refreshTable(){this.loadingDialog=!0,this.lastUpdate=(new Date).toLocaleString(),this.data=[];try{if(await c().get(r.YZ+"get-all-campaign?token="+r.Fw,r.C_).then((t=>{this.master_data=t.data.data,this.data=t.data.data,this.data!=[]&&(this.data||alert("Cannot get campaign data! Please try again."))})).catch((t=>{console.log("AllCampaign.vue (error) :: ",t),alert("Cannot get campaign data! Server timeout.")})),!this.data)return void(this.loadingDialog=!1)}catch(t){return console.error(t),void alert("Error: connection failed")}this.loadingDialog=!1},route(t){this.$router.push({name:t}).catch((t=>{console.log(t)}))}}},m=d,h=a(1001),u=a(3453),p=a.n(u),g=a(680),v=a(2371),f=a(7118),_=a(172),C=a(8230),x=a(6286),b=a(144),y=b.Z.extend({name:"rippleable",directives:{ripple:x.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),k=a(4419),D=a(3325);function w(t){t.preventDefault()}var S=(0,D.Z)(C.Z,y,k.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((e=>this.valueComparator(e,t))):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=C.Z.options.methods.genLabel.call(this);return t?(t.data.on={click:w},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:w},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const a=e.length;e=e.filter((e=>!this.valueComparator(e,t))),e.length===a&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}}),V=S.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...C.Z.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick((()=>this.inputIndeterminate=t))},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(_.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}}),I=a(6957),A=a(5532),Z=a(1418),$=a(6428),E=a(7003),T=a(2877),B=a(9762),F=a(5978),O=a(6656),z=(0,h.Z)(m,n,l,!1,null,null,null),j=z.exports;p()(z,{VBtn:g.Z,VCard:v.Z,VCardActions:f.h7,VCardText:f.ZB,VCardTitle:f.EB,VCheckbox:V,VDataTable:I.Z,VDialog:A.Z,VDivider:Z.Z,VIcon:$.Z,VProgressLinear:E.Z,VRow:T.Z,VSpacer:B.Z,VTextField:F.Z,VToolbar:O.Z});var L={name:"Dashboard",components:{AllCampaign:j},data(){return{tab:null}},mounted(){localStorage.user_fname||(this.$router.push({name:"login"}).catch((t=>{console.log(t)})),localStorage.removeItem("user_fname"),localStorage.removeItem("user_lname"),localStorage.removeItem("token"),localStorage.removeItem("nik"));var t=Date.parse(new Date),e=Date.parse(localStorage.date_end_push_notif);e<t&&(this.$router.push({name:"login"}).catch((t=>{console.log(t)})),localStorage.removeItem("user_fname"),localStorage.removeItem("user_lname"),localStorage.removeItem("token"),localStorage.removeItem("nik"))},created(){this.user=this.$store.state.u},methods:{}},M=L,N=(0,h.Z)(M,i,s,!1,null,null,null),P=N.exports;p()(N,{VCard:v.Z})}}]);