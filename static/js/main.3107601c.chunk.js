(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{24:function(t,e,a){t.exports=a(52)},29:function(t,e,a){},30:function(t,e,a){},31:function(t,e,a){},32:function(t,e,a){},33:function(t,e,a){},34:function(t,e,a){},35:function(t,e,a){},36:function(t,e,a){},37:function(t,e,a){},52:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return E}));var o=a(0),n=a.n(o),r=a(22),s=a.n(r),i=(a(29),a(30),a(14)),c=a(3),l=a(4),p=a(6),u=a(5),d=(a(31),a(32),a(33),a(34),function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"sortCategories",value:function(){this.props.categorySort(this.props.categoryTitle),this.props.categoryChoose(this.props.categoryTitle)}},{key:"color",value:function(){return this.props.categoryChosen?"#fff":"#bdbdbd"}},{key:"render",value:function(){return n.a.createElement("div",{className:"category__item",style:{backgroundColor:this.color()},onClick:this.sortCategories.bind(this)},this.props.categoryTitle)}}]),a}(o.Component)),h=function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(t){var o;return Object(c.a)(this,a),(o=e.call(this,t)).state={text:""},o}return Object(l.a)(a,[{key:"onTitleChange",value:function(t){this.setState({text:t.target.value})}},{key:"addNewCategory",value:function(){var t=this;if(this.state.text.length>4){var e={categoryTitle:this.state.text,id:4,chosen:!1};this.props.onCategoryStateChange((function(a){var o=a.data,n=[].concat(Object(i.a)(o),[e]);return t.props.storeSet("data",n),{data:t.props.storeGet("data")}})),this.setState({text:""}),alert("\u041d\u043e\u0432\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430!")}else alert("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435! \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 4 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.")}},{key:"render",value:function(){var t=this,e=this.props.categoryState.map((function(e,a){return n.a.createElement(d,{categoryChoose:t.props.categoryChosen,key:a,categoryChosen:e.chosen,categoriesData:t.props.categoryState.categoryTitle,categorySort:t.props.categorySort,categoryTitle:e.categoryTitle})}));return n.a.createElement("div",{className:"categories__wrapper"},n.a.createElement("div",{className:"categories__wrapper-items"},e),n.a.createElement("div",{className:"categories__wrapper-new"},n.a.createElement("input",{placeholder:"\u041d\u043e\u0432\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",value:this.state.text,onChange:this.onTitleChange.bind(this),id:"category__name"}),n.a.createElement("div",{className:"categories__wrapper-btn",onClick:this.addNewCategory.bind(this)},"+")))}}]),a}(o.Component),g=(a(35),a(36),function(t){var e,a=t.PostTitle,o=t.PostDescr,r=t.look,s=t.important,i=t.deletePost;return r=!0===r?"active":"",e="1"===s?"#bed169":"2"===s?"#d47657":"#a8e0b7",n.a.createElement("div",{className:"post__wrapper ".concat(r),style:{backgroundColor:e}},n.a.createElement("div",{className:"post__wrapper-text"},n.a.createElement("span",{className:"post__wrapper-text_title"},a),n.a.createElement("span",{className:"post__wrapper-text_descr"},o)),n.a.createElement("div",{className:"post__wrapper-btn",onClick:function(){i(a)}},n.a.createElement("img",{src:"https://www.flaticon.com/svg/static/icons/svg/1828/1828743.svg",alt:"check"})))}),y=function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this;this.props.importantSort();var e=this.props.posts.map((function(e,a){return n.a.createElement(g,{key:a,important:e.important,look:e.look,PostTitle:e.PostTitle,PostDescr:e.PostDescr,deletePost:t.props.deletePost})}));return n.a.createElement("div",{className:"posts__wrapper"},e)}}]),a}(o.Component),m=function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"postlist__wrapper"},n.a.createElement(h,{categoryChosen:this.props.categoryChosen,onCategoryStateChange:this.props.onCategoryStateChange,categoryState:this.props.categoryState,categorySort:this.props.categorySort,storeSet:this.props.storeSet,storeGet:this.props.storeGet}),n.a.createElement(y,{posts:this.props.posts,importantSort:this.props.importantSort,deletePost:this.props.deletePost}))}}]),a}(o.Component),f=(a(37),function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"category",value:function(){this.props.addCategoryChosen(this.props.categoryTitle),this.props.onCategoryChange(this.props.categoryTitle)}},{key:"color",value:function(){return this.props.addChosen?"#fff":"#bdbdbd"}},{key:"render",value:function(){return n.a.createElement("span",{onClick:this.category.bind(this),style:{backgroundColor:this.color()}},this.props.categoryTitle)}}]),a}(o.Component)),v=function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(t){var o;return Object(c.a)(this,a),(o=e.call(this,t)).state={title:"",descr:"",important:0,category:""},o}return Object(l.a)(a,[{key:"onTitleChange",value:function(t){this.setState({title:t.target.value})}},{key:"onDescrChange",value:function(t){this.setState({descr:t.target.value})}},{key:"onImportantChange",value:function(t){this.setState({important:t.target.value})}},{key:"onCategoryChange",value:function(t){this.setState({category:t})}},{key:"addNewPost",value:function(){this.state.title.length>5&&this.state.descr.length>5?(this.props.addPost(this.state.title,this.state.descr,this.state.important,this.state.category),this.setState({title:"",descr:"",important:0}),alert("\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430!")):alert("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435! \u041f\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.")}},{key:"render",value:function(){var t=this,e=this.props.categoryState.map((function(e){return n.a.createElement(f,{onCategoryChange:t.onCategoryChange.bind(t),addChosen:e.addChosen,categoryTitle:e.categoryTitle,addCategoryChosen:t.props.addCategoryChosen})}));return n.a.createElement("div",{className:"addpost__wrapper"},n.a.createElement("input",{placeholder:"\u0427\u0442\u043e \u043d\u0430\u0434\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c (\u041a\u0440\u0430\u0442\u043a\u043e)?",value:this.state.title,onChange:this.onTitleChange.bind(this)}),n.a.createElement("input",{placeholder:"\u0410 \u043f\u043e\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435?",value:this.state.descr,onChange:this.onDescrChange.bind(this)}),n.a.createElement("div",null,n.a.createElement("span",null,"\u041d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0440\u043e\u0447\u043d\u043e?"),n.a.createElement("input",{type:"range",min:"0",max:"2",step:"1",value:this.state.important,onChange:this.onImportantChange.bind(this)})),n.a.createElement("div",{className:"categoryadd"},n.a.createElement("span",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e:"),n.a.createElement("div",{className:"categoryadd__wrapper"},e)),n.a.createElement("div",{className:"addpost__wrapper-btn",onClick:this.addNewPost.bind(this)},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))}}]),a}(o.Component),C=a(1),b=a(13),k=a(10),S=function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(t){var o;return Object(c.a)(this,a),(o=e.call(this,t)).state={data:k.get("data"),posts:k.get("posts")},o}return Object(l.a)(a,[{key:"onCategoryStateChange",value:function(t){this.setState(t)}},{key:"importantSort",value:function(){this.state.posts=this.state.posts.sort((function(t,e){return e.important-t.important}))}},{key:"addPost",value:function(t,e,a,o){var n={PostTitle:t,PostDescr:e,important:a,id:Math.random(),look:!0,category:o};this.setState((function(t){var e=t.posts,a=[].concat(Object(i.a)(e),[n]);return k.set("posts",a),{posts:a}}))}},{key:"categorySort",value:function(t){this.setState((function(e){return{posts:e.posts.map((function(e){return e.category===t||"\u0412\u0441\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"===t?{important:e.important,PostTitle:e.PostTitle,PostDescr:e.PostDescr,category:e.category,id:e.id,look:!0}:{important:e.important,PostTitle:e.PostTitle,PostDescr:e.PostDescr,category:e.category,id:e.id,look:!1}}))}}))}},{key:"categoryChosen",value:function(t){this.setState((function(e){return{data:e.data.map((function(e){return e.categoryTitle===t?{categoryTitle:e.categoryTitle,id:0,chosen:!0}:{categoryTitle:e.categoryTitle,id:0,chosen:!1}}))}}))}},{key:"addCategoryChosen",value:function(t){this.setState((function(e){return{data:e.data.map((function(e){return e.categoryTitle===t?{categoryTitle:e.categoryTitle,id:0,chosen:!0,addChosen:!0}:{categoryTitle:e.categoryTitle,id:0,chosen:!1,addChosen:!1}}))}}))}},{key:"deletePost",value:function(t){var e=this.state.posts.findIndex((function(e){return e.PostTitle===t})),a=this.state.posts.slice(0,e),o=this.state.posts.slice(e+1),n=[].concat(Object(i.a)(a),Object(i.a)(o));k.set("posts",n),this.setState((function(){return{posts:k.get("posts")}}))}},{key:"storeSet",value:function(t,e){return k.set(t,e)}},{key:"storeGet",value:function(t){return k.get(t)}},{key:"render",value:function(){var t=this;return window.state=this.state,void 0===this.state.posts&&k.set("posts",[]),void 0===this.state.posts&&k.set("data",[{categoryTitle:"\u0412\u0441\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",id:0,chosen:!0,addChosen:!0}]),n.a.createElement(b.a,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"logo"},n.a.createElement("span",null,"To"),n.a.createElement("span",null,"dO")),n.a.createElement(C.a,{render:function(){return n.a.createElement(m,{categoryChosen:t.categoryChosen.bind(t),onCategoryStateChange:t.onCategoryStateChange.bind(t),importantSort:t.importantSort.bind(t),categorySort:t.categorySort.bind(t),posts:t.state.posts,categoryState:t.state.data,deletePost:t.deletePost.bind(t),storeSet:t.storeSet.bind(t),storeGet:t.storeGet.bind(t)})},path:"/",exact:!0}),n.a.createElement(C.a,{render:function(){return n.a.createElement(v,{categoryState:t.state.data,addCategoryChosen:t.addCategoryChosen.bind(t),addPost:t.addPost.bind(t)})},path:"/add",exact:!0}),n.a.createElement(C.a,{render:function(){return n.a.createElement(b.b,{className:"button",to:"/"},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0437\u0430\u0434\u0430\u0447\u0430\u043c")},exact:!0,path:"/add"}),n.a.createElement(C.a,{render:function(){return n.a.createElement(b.b,{className:"button",to:"/add"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443")},exact:!0,path:"/"})))}}]),a}(o.Component);function E(){s.a.render(n.a.createElement(S,null),document.getElementById("root"))}E()}},[[24,1,2]]]);
//# sourceMappingURL=main.3107601c.chunk.js.map