"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([[907],{3907:(v,P,l)=>{l.r(P),l.d(P,{AdminModule:()=>S});var f=l(177),g=l(3824),t=l(6276),b=l(1823),h=l(2924),x=l(4613);function c(o,s){if(1&o){const r=t.RV6();t.j41(0,"div",10),t.nrm(1,"img",11),t.j41(2,"div",12)(3,"button",4),t.bIt("click",function(){const a=t.eBV(r).$implicit,d=t.XpG();return t.Njj(d.onEdit(a.id))}),t.EFF(4,"Edit"),t.k0s(),t.j41(5,"button",4),t.bIt("click",function(){const a=t.eBV(r).$implicit,d=t.XpG();return t.Njj(d.onDelete(a.id))}),t.EFF(6,"Delete"),t.k0s()()()}if(2&o){const r=s.$implicit;t.R7$(1),t.Y8G("src",r.product_image,t.B4B)}}function p(o,s){if(1&o){const r=t.RV6();t.j41(0,"div",13)(1,"p"),t.EFF(2,"Are you sure you want to logout?"),t.k0s(),t.j41(3,"button",14),t.bIt("click",function(){t.eBV(r);const e=t.XpG();return t.Njj(e.confirmLogout())}),t.EFF(4,"Yes"),t.k0s(),t.j41(5,"button",14),t.bIt("click",function(){t.eBV(r);const e=t.XpG();return t.Njj(e.cancelLogout())}),t.EFF(6,"No"),t.k0s()()}}let _=(()=>{class o{constructor(r,n,e,a){this.getSearvice=r,this.router=n,this.admin=e,this.alert=a,this.userName=localStorage.getItem("email"),this.profileImage="assets/dow.png",this.showLogoutDialog=!1,this.images=[]}ngOnInit(){this.slideImageCall()}slideImageCall(){this.getSearvice.commonData({dataCode:"GET_ALL_PRODUCT_DETAILS_PD"}).subscribe(n=>{0===n.statusCode?this.images=n.responseContent:console.log("No data found")})}get displayName(){return this.userName.split("@")[0]}onAdd(){this.router.navigate(["/admin/addpage"])}onEdit(r){r?this.router.navigate(["/admin/editpage"],{queryParams:{id:r}}):console.log("Invalid image data")}onDelete(r){this.admin.adminDeleteDeleteProductImage(r).subscribe(n=>{0==n.statusCode?(this.alert.showCustomPopup("success","Image deleted successfully"),this.router.navigate(["/admin/"]),this.slideImageCall()):this.alert.showCustomPopup("error","Image not deleted")})}onClear(){console.log("Clear button clicked")}onLogout(){this.showLogoutDialog=!0}confirmLogout(){this.showLogoutDialog=!1,console.log("User logged out")}cancelLogout(){this.showLogoutDialog=!1}static{this.\u0275fac=function(n){return new(n||o)(t.rXU(b.E),t.rXU(g.Ix),t.rXU(h.z),t.rXU(x.u))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-admindashborad"]],decls:23,vars:5,consts:[[1,"navbar"],[1,"navbar-left"],[3,"routerLink"],[1,"navbar-right"],[1,"btn",3,"click"],[1,"profile"],["alt","Profile",1,"profile-icon",3,"src","click"],[1,"image-gallery"],["class","card",4,"ngFor","ngForOf"],["class","logout-dialog",4,"ngIf"],[1,"card"],["alt","Image",1,"card-image",3,"src"],[1,"card-footer"],[1,"logout-dialog"],[3,"click"]],template:function(n,e){1&n&&(t.j41(0,"nav",0)(1,"div",1)(2,"h3"),t.EFF(3,"Admin Page"),t.k0s()(),t.j41(4,"div",1)(5,"h3"),t.EFF(6,"Product"),t.k0s()(),t.j41(7,"div",1)(8,"h3",2),t.EFF(9,"Carosel"),t.k0s()(),t.nrm(10,"div",1),t.j41(11,"div",3)(12,"button",4),t.bIt("click",function(){return e.onAdd()}),t.EFF(13,"Add"),t.k0s(),t.j41(14,"button",4),t.bIt("click",function(){return e.onClear()}),t.EFF(15,"Clear"),t.k0s(),t.j41(16,"div",5)(17,"span"),t.EFF(18),t.k0s(),t.j41(19,"img",6),t.bIt("click",function(){return e.onLogout()}),t.k0s()()()(),t.j41(20,"div",7),t.DNE(21,c,7,1,"div",8),t.k0s(),t.DNE(22,p,7,0,"div",9)),2&n&&(t.R7$(8),t.Y8G("routerLink","/admin/carosel/caroseldashboard"),t.R7$(10),t.JRh(e.displayName),t.R7$(1),t.Y8G("src",e.profileImage,t.B4B),t.R7$(2),t.Y8G("ngForOf",e.images),t.R7$(1),t.Y8G("ngIf",e.showLogoutDialog))},dependencies:[f.Sq,f.bT,g.Wk],styles:[".navbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:10px 20px;background:linear-gradient(90deg,#d6d9de,#a6b2c2);color:#fff;box-shadow:0 4px 6px #0000001a;position:sticky;top:0;z-index:1000}.navbar-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:Arial,sans-serif;font-size:1.5rem}.navbar-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.btn[_ngcontent-%COMP%]{background-color:#fff;color:#007bff;border:none;padding:8px 12px;border-radius:20px;cursor:pointer;font-size:14px;transition:all .3s ease}.btn[_ngcontent-%COMP%]:hover{background-color:#f0f0f0;transform:scale(1.1);color:#0056b3}.profile[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.profile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;font-weight:700;color:#fff}.profile-icon[_ngcontent-%COMP%]{width:35px;height:35px;border-radius:50%;cursor:pointer;border:2px solid white;transition:transform .3s ease,box-shadow .3s ease}.profile-icon[_ngcontent-%COMP%]:hover{transform:scale(1.1);box-shadow:0 0 10px #ffffffb3}.image-gallery[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;padding:20px}.card[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;box-shadow:0 4px 6px #0000001a;overflow:hidden;text-align:center;max-width:220px;margin:0 auto}.card-image[_ngcontent-%COMP%]{width:100%;height:150px;object-fit:cover;border-bottom:2px solid #ddd}.card-footer[_ngcontent-%COMP%]{padding:10px}.card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:6px 12px;font-size:12px;border-radius:6px}.logout-dialog[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;color:#000;padding:20px;box-shadow:0 8px 12px #0003;border-radius:10px;text-align:center;z-index:1100}.logout-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:15px;font-size:16px;font-weight:500}.logout-dialog[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:5px;padding:8px 16px;border:none;border-radius:8px;cursor:pointer;font-size:14px;transition:background-color .3s ease}.logout-dialog[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .logout-dialog[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{background-color:#007bff;color:#fff}.logout-dialog[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{background-color:#f0f0f0;color:#000}@media (max-width: 768px){.navbar[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;padding:15px}.navbar-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.2rem}.navbar-right[_ngcontent-%COMP%]{flex-wrap:wrap;gap:15px;margin-top:10px}.btn[_ngcontent-%COMP%]{flex:1;text-align:center;font-size:12px;padding:8px}.profile[_ngcontent-%COMP%]{width:100%;justify-content:space-between}.profile-icon[_ngcontent-%COMP%]{width:30px;height:30px}.image-gallery[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 480px){.navbar-right[_ngcontent-%COMP%], .profile[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.profile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}.navbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:10px 20px;background:linear-gradient(90deg,#d6d9de,#a6b2c2);color:#fff;box-shadow:0 4px 6px #0000001a;position:sticky;top:0;z-index:1000}.navbar-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:Arial,sans-serif;font-size:1.5rem}.navbar-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.btn[_ngcontent-%COMP%]{background-color:#fff;color:#007bff;border:none;padding:8px 12px;border-radius:20px;cursor:pointer;font-size:14px;transition:all .3s ease}.btn[_ngcontent-%COMP%]:hover{background-color:#f0f0f0;transform:scale(1.1);color:#0056b3}.profile[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.profile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;font-weight:700;color:#fff}.profile-icon[_ngcontent-%COMP%]{width:35px;height:35px;border-radius:50%;cursor:pointer;border:2px solid white;transition:transform .3s ease,box-shadow .3s ease}.profile-icon[_ngcontent-%COMP%]:hover{transform:scale(1.1);box-shadow:0 0 10px #ffffffb3}@media (max-width: 768px){.navbar[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;padding:15px}.navbar-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.2rem}.navbar-right[_ngcontent-%COMP%]{flex-wrap:wrap;gap:15px;margin-top:10px}.btn[_ngcontent-%COMP%]{flex:1;text-align:center;font-size:12px;padding:8px}.profile[_ngcontent-%COMP%]{width:100%;justify-content:space-between}.profile-icon[_ngcontent-%COMP%]{width:30px;height:30px}}@media (max-width: 480px){.navbar-right[_ngcontent-%COMP%], .profile[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.profile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}}.image-gallery[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})}}return o})();var i=l(4341);function F(o,s){1&o&&(t.j41(0,"div")(1,"small",20),t.EFF(2,"Product Name is required."),t.k0s()())}function O(o,s){1&o&&(t.j41(0,"div")(1,"small",20),t.EFF(2,"Product Price is required and must be greater than 0."),t.k0s()())}function y(o,s){if(1&o&&(t.j41(0,"option",21),t.EFF(1),t.k0s()),2&o){const r=s.$implicit;t.Y8G("value",r.id),t.R7$(1),t.SpI(" ",r.category_name," ")}}function k(o,s){1&o&&(t.j41(0,"div")(1,"small",20),t.EFF(2,"Category is required."),t.k0s()())}function I(o,s){1&o&&(t.j41(0,"div")(1,"small",20),t.EFF(2,"Product Code is required."),t.k0s()())}function E(o,s){1&o&&(t.j41(0,"div")(1,"small",20),t.EFF(2,"Product Image is required."),t.k0s()())}function M(o,s){if(1&o&&(t.j41(0,"div",2)(1,"label"),t.EFF(2,"Image Preview:"),t.k0s(),t.j41(3,"div",22),t.nrm(4,"img",23),t.k0s()()),2&o){const r=t.XpG();t.R7$(4),t.Y8G("src",r.imagePreview,t.B4B)}}function j(o,s){1&o&&(t.j41(0,"div")(1,"small",25),t.EFF(2,"Product Name is required."),t.k0s()())}function A(o,s){1&o&&(t.j41(0,"div")(1,"small",25),t.EFF(2,"Product Price is required and must be greater than 0."),t.k0s()())}function D(o,s){if(1&o&&(t.j41(0,"option",26),t.EFF(1),t.k0s()),2&o){const r=s.$implicit;t.Y8G("value",r.id),t.R7$(1),t.SpI(" ",r.category_name," ")}}function N(o,s){1&o&&(t.j41(0,"div")(1,"small",25),t.EFF(2,"Category is required."),t.k0s()())}function T(o,s){1&o&&(t.j41(0,"div")(1,"small",25),t.EFF(2,"ProductStatus is required."),t.k0s()())}function G(o,s){1&o&&(t.j41(0,"div")(1,"small",25),t.EFF(2,"Product Code is required."),t.k0s()())}function R(o,s){if(1&o&&t.nrm(0,"img",27),2&o){const r=t.XpG();t.Y8G("src",r.imagePreview||r.currentProductImage,t.B4B)}}const $=[{path:"",component:_},{path:"addpage",component:(()=>{class o{constructor(r,n,e,a,d){this.fb=r,this.commondata=n,this.admin=e,this.alert=a,this.router=d,this.categoriesList=[],this.subCategoriesList=[],this.imagePreview=null,this.selectedFile=null,this.productForm=this.fb.group({productName:["",i.k0.required],productPrice:[null,[i.k0.required,i.k0.min(1)]],productCategoryId:["",i.k0.required],productSubCategoryId:["",i.k0.required],productCode:["",i.k0.required]})}ngOnInit(){this.loadCategories()}loadCategories(){this.commondata.commonData({dataCode:"GET_ALL_CATEGORY"}).subscribe(n=>{0===n.statusCode?(this.categoriesList=n.responseContent,this.onCategoryChange()):console.error("Failed to fetch categories.")})}onCategoryChange(){this.commondata.commonData({dataCode:"GET_ALL_SUB_CATEGORY"}).subscribe(n=>{0===n.statusCode?this.subCategoriesList=n.responseContent:console.error("Failed to fetch subcategories.")})}onFileChange(r){const n=r.target;if(n.files&&n.files.length>0){this.selectedFile=n.files[0];const e=new FileReader;e.onload=a=>{this.imagePreview=a.target?.result},e.readAsDataURL(this.selectedFile)}}onSubmit(){if(!this.selectedFile)return void alert("Please select an image.");const u=`/product/addproduct?productName=${encodeURIComponent(this.productForm.get("productName")?.value)}&productPrice=${encodeURIComponent(this.productForm.get("productPrice")?.value)}&productCategoryId=${encodeURIComponent(this.productForm.get("productCategoryId")?.value)}&productSubCategoryId=${encodeURIComponent(this.productForm.get("productSubCategoryId")?.value)}&productCode=${encodeURIComponent(this.productForm.get("productCode")?.value)}`,m=new FormData;m.append("image",this.selectedFile),this.admin.adminAddProduct(u,m).subscribe(C=>{0===C.statusCode?(this.alert.showCustomPopup("success","Product added successfully."),this.router.navigate(["/admin/"])):this.alert.showCustomPopup("error","Failed to add product.")})}onCancel(){this.productForm.reset(),this.imagePreview="",this.selectedFile=null}static{this.\u0275fac=function(n){return new(n||o)(t.rXU(i.ok),t.rXU(b.E),t.rXU(h.z),t.rXU(x.u),t.rXU(g.Ix))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-adminaddpage"]],decls:38,vars:9,consts:[[1,"product-form-wrapper"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","productName"],["type","text","id","productName","formControlName","productName","placeholder","Enter product name",1,"form-control"],[4,"ngIf"],["for","productPrice"],["type","number","id","productPrice","formControlName","productPrice","placeholder","Enter product price",1,"form-control"],["for","productCategoryId"],["id","productCategoryId","formControlName","productCategoryId",1,"form-control"],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["for","productCode"],["type","text","id","productCode","formControlName","productCode","placeholder","Enter product code",1,"form-control"],["for","imageInput"],["type","file","id","imageInput",1,"form-control-file",3,"change"],["class","form-group",4,"ngIf"],[1,"button-group"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"text-danger"],[3,"value"],[1,"image-container"],["alt","Image Preview",1,"img-preview",3,"src"]],template:function(n,e){if(1&n&&(t.j41(0,"div",0)(1,"h3"),t.EFF(2,"Product Details"),t.k0s(),t.j41(3,"form",1),t.bIt("ngSubmit",function(){return e.onSubmit()}),t.j41(4,"div",2)(5,"label",3),t.EFF(6,"Product Name *"),t.k0s(),t.nrm(7,"input",4),t.DNE(8,F,3,0,"div",5),t.k0s(),t.j41(9,"div",2)(10,"label",6),t.EFF(11,"Product Price *"),t.k0s(),t.nrm(12,"input",7),t.DNE(13,O,3,0,"div",5),t.k0s(),t.j41(14,"div",2)(15,"label",8),t.EFF(16,"Product Category *"),t.k0s(),t.j41(17,"select",9)(18,"option",10),t.EFF(19,"Select a category"),t.k0s(),t.DNE(20,y,2,2,"option",11),t.k0s(),t.DNE(21,k,3,0,"div",5),t.k0s(),t.j41(22,"div",2)(23,"label",12),t.EFF(24,"Product Code *"),t.k0s(),t.nrm(25,"input",13),t.DNE(26,I,3,0,"div",5),t.k0s(),t.j41(27,"div",2)(28,"label",14),t.EFF(29,"Upload Product Image *"),t.k0s(),t.j41(30,"input",15),t.bIt("change",function(d){return e.onFileChange(d)}),t.k0s(),t.DNE(31,E,3,0,"div",5),t.k0s(),t.DNE(32,M,5,1,"div",16),t.j41(33,"div",17)(34,"button",18),t.EFF(35,"Submit"),t.k0s(),t.j41(36,"button",19),t.bIt("click",function(){return e.onCancel()}),t.EFF(37,"Cancel"),t.k0s()()()()),2&n){let a,d,u,m;t.R7$(3),t.Y8G("formGroup",e.productForm),t.R7$(5),t.Y8G("ngIf",(null==(a=e.productForm.get("productName"))?null:a.touched)&&(null==(a=e.productForm.get("productName"))?null:a.invalid)),t.R7$(5),t.Y8G("ngIf",(null==(d=e.productForm.get("productPrice"))?null:d.touched)&&(null==(d=e.productForm.get("productPrice"))?null:d.invalid)),t.R7$(7),t.Y8G("ngForOf",e.categoriesList),t.R7$(1),t.Y8G("ngIf",(null==(u=e.productForm.get("productCategoryId"))?null:u.touched)&&(null==(u=e.productForm.get("productCategoryId"))?null:u.invalid)),t.R7$(5),t.Y8G("ngIf",(null==(m=e.productForm.get("productCode"))?null:m.touched)&&(null==(m=e.productForm.get("productCode"))?null:m.invalid)),t.R7$(5),t.Y8G("ngIf",!e.selectedFile&&e.productForm.touched),t.R7$(1),t.Y8G("ngIf",e.imagePreview),t.R7$(2),t.Y8G("disabled",e.productForm.invalid)}},dependencies:[f.Sq,f.bT,i.qT,i.xH,i.y7,i.me,i.Q0,i.wz,i.BC,i.cb,i.j4,i.JD],styles:[".product-form-wrapper[_ngcontent-%COMP%]{max-width:800px;margin:30px auto;padding:40px;background-color:#fff;border-radius:12px;box-shadow:0 4px 10px #0000001a;transition:all .3s ease}h3[_ngcontent-%COMP%]{text-align:center;font-size:26px;font-weight:700;color:#333;margin-bottom:40px}.form-group[_ngcontent-%COMP%]{margin-bottom:30px}label[_ngcontent-%COMP%]{font-weight:600;margin-bottom:8px;color:#444}input.form-control[_ngcontent-%COMP%], select.form-control[_ngcontent-%COMP%]{width:100%;padding:12px;margin-top:8px;border:1px solid #ddd;border-radius:8px;font-size:16px;transition:border-color .3s ease}input.form-control[_ngcontent-%COMP%]:focus, select.form-control[_ngcontent-%COMP%]:focus{border-color:#4c9df0;outline:none}input[type=file].form-control-file[_ngcontent-%COMP%]{margin-top:10px}.image-container[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.img-preview[_ngcontent-%COMP%]{width:100%;max-height:200px;object-fit:cover;border-radius:10px;border:1px solid #ddd}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:20px}button[_ngcontent-%COMP%]{width:48%;padding:12px;border:none;border-radius:8px;font-size:16px;cursor:pointer;transition:background-color .3s ease,transform .3s ease}button.btn-primary[_ngcontent-%COMP%]{background-color:#4c9df0;color:#fff}button.btn-primary[_ngcontent-%COMP%]:hover{background-color:#357ab7;transform:translateY(-2px)}button.btn-secondary[_ngcontent-%COMP%]{background-color:#f1f1f1;color:#444}button.btn-secondary[_ngcontent-%COMP%]:hover{background-color:#e4e4e4;transform:translateY(-2px)}small.text-danger[_ngcontent-%COMP%]{font-size:14px;color:#e74c3c;margin-top:5px;display:block}.product-form-wrapper[_ngcontent-%COMP%]:hover{box-shadow:0 8px 15px #00000026;transform:scale(1.02)}"]})}}return o})()},{path:"editpage",component:(()=>{class o{constructor(r,n,e,a,d,u){this.fb=r,this.commondata=n,this.admin=e,this.alert=a,this.router=d,this.route=u,this.categoriesList=[],this.subCategoriesList=[],this.imagePreview=null,this.selectedFile=null,this.productEditForm=this.fb.group({productName:["",i.k0.required],productPrice:[null,[i.k0.required,i.k0.min(1)]],productCategoryId:["",i.k0.required],productSubCategoryId:["",i.k0.required],productCode:["",i.k0.required],ProductStatus:["",i.k0.required]})}ngOnInit(){this.loadCategories(),this.route.queryParams.subscribe(r=>{this.image=r.id}),this.editPage()}editPage(){this.commondata.commonData({dataCode:"GET_PRODUCT_DETAILS_BY_PRODUCTID",placeholderKeyValueMap:{id:this.image}}).subscribe(n=>{if(0===n.statusCode&&n.responseContent.length>0){const e=n.responseContent[0];this.currentProductImage=e.product_image,this.productEditForm.patchValue({productName:e.product_name,productPrice:e.product_price,productCategoryId:e.product_category_id,productSubCategoryId:e.product_sub_category_id,productCode:e.product_code})}else console.log("Product details not found or invalid response")})}loadCategories(){this.commondata.commonData({dataCode:"GET_ALL_CATEGORY"}).subscribe(n=>{0===n.statusCode?(this.categoriesList=n.responseContent,this.onCategoryChange()):console.error("Failed to fetch categories.")})}onCategoryChange(){this.commondata.commonData({dataCode:"GET_ALL_SUB_CATEGORY"}).subscribe(n=>{0===n.statusCode?this.subCategoriesList=n.responseContent:console.error("Failed to fetch subcategories.")})}onFileChange(r){const n=r.target;if(n.files&&n.files.length>0){this.selectedFile=n.files[0];const e=new FileReader;e.onload=a=>{this.imagePreview=a.target?.result},e.readAsDataURL(this.selectedFile)}}onSubmit(){const r={id:this.image,productName:this.productEditForm.get("productName")?.value,productPrice:this.productEditForm.get("productPrice")?.value,productCategoryId:this.productEditForm.get("productCategoryId")?.value,productSubCategoryId:this.productEditForm.get("productSubCategoryId")?.value,productImage:this.selectedFile?this.selectedFile.name:this.currentProductImage||null,productCode:this.productEditForm.get("productCode")?.value,productStatus:this.productEditForm.get("ProductStatus")?.value},n=JSON.stringify(r),e=new FormData;e.append("productDTO",n),this.selectedFile&&e.append("image",this.selectedFile),this.admin.adminUpdateProduct(e).subscribe(a=>{0===a.statusCode?(this.alert.showCustomPopup("success","Product updated successfully."),this.router.navigate(["/admin/"])):this.alert.showCustomPopup("error","Failed to update product.")})}onCancel(){this.router.navigate(["/admin/"])}static{this.\u0275fac=function(n){return new(n||o)(t.rXU(i.ok),t.rXU(b.E),t.rXU(h.z),t.rXU(x.u),t.rXU(g.Ix),t.rXU(g.nX))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-admineditpage"]],decls:50,vars:9,consts:[[1,"product-form-wrapper"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","productName"],["type","text","id","productName","formControlName","productName","placeholder","Enter product name",1,"form-control"],[4,"ngIf"],["for","productPrice"],["type","number","id","productPrice","formControlName","productPrice","placeholder","Enter product price",1,"form-control"],["for","productCategoryId"],["id","productCategoryId","formControlName","productCategoryId",1,"form-control"],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["for","productSubCategoryId"],["id","Product Status","formControlName","ProductStatus",1,"form-control"],["value","true"],["value","false"],["for","productCode"],["type","text","id","productCode","formControlName","productCode","placeholder","Enter product code",1,"form-control"],["for","imageInput"],["type","file","id","imageInput",1,"form-control-file",3,"change"],[1,"image-container"],["alt","Image Preview","class","img-preview",3,"src",4,"ngIf"],[1,"button-group"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"text-danger"],[3,"value"],["alt","Image Preview",1,"img-preview",3,"src"]],template:function(n,e){if(1&n&&(t.j41(0,"div",0)(1,"h3"),t.EFF(2,"Product Details"),t.k0s(),t.j41(3,"form",1),t.bIt("ngSubmit",function(){return e.onSubmit()}),t.j41(4,"div",2)(5,"label",3),t.EFF(6,"Product Name *"),t.k0s(),t.nrm(7,"input",4),t.DNE(8,j,3,0,"div",5),t.k0s(),t.j41(9,"div",2)(10,"label",6),t.EFF(11,"Product Price *"),t.k0s(),t.nrm(12,"input",7),t.DNE(13,A,3,0,"div",5),t.k0s(),t.j41(14,"div",2)(15,"label",8),t.EFF(16,"Product Category *"),t.k0s(),t.j41(17,"select",9)(18,"option",10),t.EFF(19,"Select a category"),t.k0s(),t.DNE(20,D,2,2,"option",11),t.k0s(),t.DNE(21,N,3,0,"div",5),t.k0s(),t.j41(22,"div",2)(23,"label",12),t.EFF(24,"Product Status *"),t.k0s(),t.j41(25,"select",13)(26,"option",10),t.EFF(27,"Select Product Status"),t.k0s(),t.j41(28,"option",14),t.EFF(29,"True"),t.k0s(),t.j41(30,"option",15),t.EFF(31,"False"),t.k0s()(),t.DNE(32,T,3,0,"div",5),t.k0s(),t.j41(33,"div",2)(34,"label",16),t.EFF(35,"Product Code *"),t.k0s(),t.nrm(36,"input",17),t.DNE(37,G,3,0,"div",5),t.k0s(),t.j41(38,"div",2)(39,"label",18),t.EFF(40,"Upload Product Image *"),t.k0s(),t.j41(41,"input",19),t.bIt("change",function(d){return e.onFileChange(d)}),t.k0s()(),t.j41(42,"div",2)(43,"div",20),t.DNE(44,R,1,1,"img",21),t.k0s()(),t.j41(45,"div",22)(46,"button",23),t.EFF(47,"Submit"),t.k0s(),t.j41(48,"button",24),t.bIt("click",function(){return e.onCancel()}),t.EFF(49,"Cancel"),t.k0s()()()()),2&n){let a,d,u,m,C;t.R7$(3),t.Y8G("formGroup",e.productEditForm),t.R7$(5),t.Y8G("ngIf",(null==(a=e.productEditForm.get("productName"))?null:a.touched)&&(null==(a=e.productEditForm.get("productName"))?null:a.invalid)),t.R7$(5),t.Y8G("ngIf",(null==(d=e.productEditForm.get("productPrice"))?null:d.touched)&&(null==(d=e.productEditForm.get("productPrice"))?null:d.invalid)),t.R7$(7),t.Y8G("ngForOf",e.categoriesList),t.R7$(1),t.Y8G("ngIf",(null==(u=e.productEditForm.get("productCategoryId"))?null:u.touched)&&(null==(u=e.productEditForm.get("productCategoryId"))?null:u.invalid)),t.R7$(11),t.Y8G("ngIf",(null==(m=e.productEditForm.get("ProductStatus"))?null:m.touched)&&(null==(m=e.productEditForm.get("ProductStatus"))?null:m.invalid)),t.R7$(5),t.Y8G("ngIf",(null==(C=e.productEditForm.get("productCode"))?null:C.touched)&&(null==(C=e.productEditForm.get("productCode"))?null:C.invalid)),t.R7$(7),t.Y8G("ngIf",e.imagePreview||e.currentProductImage),t.R7$(2),t.Y8G("disabled",e.productEditForm.invalid)}},dependencies:[f.Sq,f.bT,i.qT,i.xH,i.y7,i.me,i.Q0,i.wz,i.BC,i.cb,i.j4,i.JD],styles:[".product-form-wrapper[_ngcontent-%COMP%]{max-width:800px;margin:30px auto;padding:40px;background-color:#fff;border-radius:12px;box-shadow:0 4px 10px #0000001a;transition:all .3s ease}h3[_ngcontent-%COMP%]{text-align:center;font-size:26px;font-weight:700;color:#333;margin-bottom:40px}.form-group[_ngcontent-%COMP%]{margin-bottom:30px}label[_ngcontent-%COMP%]{font-weight:600;margin-bottom:8px;color:#444}input.form-control[_ngcontent-%COMP%], select.form-control[_ngcontent-%COMP%]{width:100%;padding:12px;margin-top:8px;border:1px solid #ddd;border-radius:8px;font-size:16px;transition:border-color .3s ease}input.form-control[_ngcontent-%COMP%]:focus, select.form-control[_ngcontent-%COMP%]:focus{border-color:#4c9df0;outline:none}input[type=file].form-control-file[_ngcontent-%COMP%]{margin-top:10px}.image-container[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.img-preview[_ngcontent-%COMP%]{width:100%;max-height:200px;object-fit:cover;border-radius:10px;border:1px solid #ddd}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:20px}button[_ngcontent-%COMP%]{width:48%;padding:12px;border:none;border-radius:8px;font-size:16px;cursor:pointer;transition:background-color .3s ease,transform .3s ease}button.btn-primary[_ngcontent-%COMP%]{background-color:#4c9df0;color:#fff}button.btn-primary[_ngcontent-%COMP%]:hover{background-color:#357ab7;transform:translateY(-2px)}button.btn-secondary[_ngcontent-%COMP%]{background-color:#f1f1f1;color:#444}button.btn-secondary[_ngcontent-%COMP%]:hover{background-color:#e4e4e4;transform:translateY(-2px)}small.text-danger[_ngcontent-%COMP%]{font-size:14px;color:#e74c3c;margin-top:5px;display:block}.product-form-wrapper[_ngcontent-%COMP%]:hover{box-shadow:0 8px 15px #00000026;transform:scale(1.02)}"]})}}return o})()},{path:"carosel",loadChildren:()=>l.e(253).then(l.bind(l,2253)).then(o=>o.CaroselModule)}];let U=(()=>{class o{static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({imports:[g.iI.forChild($),g.iI]})}}return o})(),S=(()=>{class o{static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({imports:[f.MD,U,i.YN,i.X1]})}}return o})()},2924:(v,P,l)=>{l.d(P,{z:()=>b});var f=l(5312),g=l(6276),t=l(1626);let b=(()=>{class h{constructor(c){this.http=c,this.baseUrls=f.c.baseUrl}adminAddCaroselImage(c){return this.http.post(this.baseUrls+"/image/addImage",c)}adminEditCaroselImage(c,p){return this.http.put(`${this.baseUrls}/image/updateImageById?id=${c}`,p)}adminGetImageById(c){return this.http.get(`${this.baseUrls}/image/getImageById?id=${c}`)}adminDeleteImageById(c){return this.http.delete(`${this.baseUrls}/image/deleteImageById?id=${c}`)}adminAddProduct(c,p){return this.http.post(`${this.baseUrls}${c}`,p)}adminUpdateProduct(c){return this.http.put(`${this.baseUrls}/product/updateproduct`,c)}adminDeleteDeleteProductImage(c){return this.http.delete(`${this.baseUrls}/product/deleteproduct?id=${c}`)}static{this.\u0275fac=function(p){return new(p||h)(g.KVO(t.Qq))}}static{this.\u0275prov=g.jDH({token:h,factory:h.\u0275fac,providedIn:"root"})}}return h})()}}]);