//==============================================================================
//	개발중인 Compostie Component의 Component Class에 대한 정의를 작성합니다.
//==============================================================================
//==============================================================================
// Object : nexacro.checkcombo
// Group : Component
//==============================================================================
if (!nexacro.checkcombo)
{
	//==============================================================================
	// nexacro.checkcombo
	//==============================================================================
	nexacro.checkcombo = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
	{
		nexacro._CompositeComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
		this.addEvent("canchange");
		this.addEvent("onchanged");
	};
	
	var _pcheckcombo = nexacro._createPrototype(nexacro._CompositeComponent, nexacro.checkcombo);
	nexacro.checkcombo.prototype = _pcheckcombo;
	_pcheckcombo._type_name = "checkcombo";
	
	/* accessibility */
	_pcheckcombo.accessibilityrole = "form";
	
	/************************************************************************
	FUNCTION : on_init_bindSource
	DESCRIPTION : 컴포넌트의 simple bind로 설정된 property에 binding되어 있는 경우에 dataset, column 정보가 없을 때 호출되는 함수로 초기화 기능을 정의함.
	PARAMETER : columnid : string(binding되어 있는 dataset columnid), propid : string(bind property), ds : dataset object(bind되어 있는 dataset object)
	RETURN : void
	************************************************************************/
	_pcheckcombo.on_init_bindSource = function (columnid, propid, ds)
	{
		//nexacro._CompositeComponent.prototype.on_init_bindSource.call(this, columnid, propid, ds);
		// TODO : enter your code here.
		
		//value property 초기화 설정
		if (propid == "value")
		{
			this.value = undefined;
		}
		
	};
	
	/************************************************************************
	FUNCTION : on_change_bindSource
	DESCRIPTION : 컴포넌트의 simple bind로 설정된 property에 binding되어 있는 경우에 dataset, column 정보가 변경되었을 때 호출되는 함수.
	PARAMETER : propid : string(bind property), ds : dataset object(bind되어 있는 dataset object), row : int(binding되어 있는 dataset의 rowposition), col : int(binding 되어 있는 dataset columnindex)
	RETURN : void
	************************************************************************/
	_pcheckcombo.on_change_bindSource = function (propid, ds, row, col)
	{
		//nexacro._CompositeComponent.prototype.on_change_bindSource.call(this, propid, ds, row, col);
		// TODO : enter your code here.
		
		//value property에 binding 값이 변경되었을 경우
		//set_value 함수 호출
		if (propid == "value")
		{
			this.set_value(ds.getColumn(row, col));
		}
	};
	
	/************************************************************************
	FUNCTION : on_getBindableProperties
	DESCRIPTION : 컴포넌트의 simple bind를 지원하기 위한 함수로 simple bind를 지원하는 property 명을 리턴함.
	PARAMETER : void
	RETURN : bindproperty : array(simplebind를 지원하는 property명)
	************************************************************************/
	_pcheckcombo.on_getBindableProperties = function ()
	{
		//return ["value"];
		// TODO : enter your code here.
		
		//simple bind에 value property 추가
		return ["value"];
	};
	
	/************************************************************************
	FUNCTION : on_create_contents
	DESCRIPTION : createComponent 실행시 nexacro.ControlElement 를 생성 후 호출됨
	PARAMETER : void
	RETURN : void
	************************************************************************/
	_pcheckcombo.on_create_contents = function ()
	{
		nexacro._CompositeComponent.prototype.on_create_contents.call(this);
		// TODO : enter your code here.
		
		//컴포넌트에 설정된 property 값을 반영
		this.on_apply_checkdataset(this.checkdataset);
		this.on_apply_checkcolumn(this.checkcolumn);
		this.on_apply_codecolumn(this.codecolumn);
		this.on_apply_valuecolumn(this.valuecolumn);
		this.on_apply_value(this.value);
		this.on_apply_buttonsize(this.buttonsize);
		this.on_apply_itemheight(this.itemheight);
	};
	
	_pcheckcombo.value = "";
	_pcheckcombo.set_value = function (v)
	{
		//value 값이 변경되었을 경우
		if (this.value !== v) {
			
			
			//value 변경 처리 함수 호출
			this.on_apply_value("value", v);
		}
	};
	
	_pcheckcombo.text = "";
	_pcheckcombo.set_text = function (v)
	{
		//text 값이 변경되었을 경우
		if (this.text !== v) {
			
			//text 변경 처리 함수 호출
			this.on_apply_value("text", v);
		}
	};
	
	_pcheckcombo.on_apply_value = function(propId, v)
	{
		var i;
		var idx;
		var ds = this._checkdataset;
		var codecolumn = this.codecolumn;
		var valuecolumn = this.valuecolumn == "" ? codecolumn : this.valuecolumn;
		var checkcolumn = this.checkcolumn;
		var arr_value = [];
		var arr_text = [];
		var value;
		var rtn;
		var pre_text, pre_value, cur_text, cur_value;
		
		//값이 없으면
		if(!v)
		{
			//checkdataset, codecolumn, checkcolumn이 설정되어있을 경우
			if (ds && codecolumn && checkcolumn) {
				
				//checkcolumn 전체 체크 해제
				for(i=0;i<ds.rowcount;i++)
				{
					ds.setColumn(i, checkcolumn, 0);
				}
				
				//속성 값 초기화
				this.value = null;
				this.text = null;
			}
		}else
		{
			//checkdataset, codecolumn, checkcolumn이 설정되어있을 경우
			if (ds && codecolumn && checkcolumn) {
				
				//checkcolumn 전체 체크 해제
				for(i=0;i<ds.rowcount;i++)
				{
					ds.setColumn(i, checkcolumn, 0);
				}
				
				//value 속성이 변경되었을 경우
				if(propId=="value")
				{
					arr_value = v.split(",");
					
					//value에 해당하는 text 값 설정
					for(i=0;i<arr_value.length;i++){
						val = arr_value[i];
						idx = ds.findRow(codecolumn, val);
						if(idx>-1)
						{
							arr_text[arr_text.length] = ds.getColumn(idx, valuecolumn);
						}
					}
				}
				//text 속성이 변경되었을 경우
				else if(propId=="text")
				{
					arr_text = v.split(",");
					
					//text에 해당하는 value 값 설정
					for(i=0;i<arr_text.length;i++){
						text = arr_text[i];
						idx = ds.findRow(valuecolumn, text);
						
						if(idx>-1)
						{
							arr_value[arr_value.length] = ds.getColumn(idx, codecolumn);
						}
					}
				}
				pre_text = this.text;
				pre_value = this.value;
				cur_text =  arr_text.toString();
				cur_value = arr_value.toString();
				
				rtn = this.on_fire_canchange(pre_text, pre_value, cur_text, cur_value);
				
				if(rtn==true)
				{
					//value에 해당하는 check 값 설정
					for(i=0;i<arr_value.length;i++){
						val = arr_value[i];
						idx = ds.findRow(codecolumn, val);
						if(idx>-1)
						{
							ds.setColumn(idx, checkcolumn, 1);
						}
					}
					
					//속성에 값 설정
					this.value = cur_value;
					this.text = cur_text;
					
					this.on_fire_onchanged(pre_text, pre_value, cur_text, cur_value);
				}else
				{
					arr_value = pre_value.split(",");
					
					//value에 해당하는 check 값 설정
					for(i=0;i<arr_value.length;i++){
						val = arr_value[i];
						idx = ds.findRow(codecolumn, val);
						if(idx>-1)
						{
							ds.setColumn(idx, checkcolumn, 1);
						}
					}
				}
			}
		}
		
		//comboedit가 존재할 경우 value 값 변경
		if(this.form.comboedit)this.form.comboedit.set_value(this.text);
		
		//bind된 데이터셋에 적용 함수 호출
		this.applyto_bindSource("value", this.value);
	};
	
	_pcheckcombo.checkdataset = "";
	_pcheckcombo.set_checkdataset = function (v)
	{
		//값이 없을 경우 초기화
		if(!v)
		{
			this._checkdataset = null;
			this.checkdataset = "";
		}
		//값이 Object 형일 경우
		else if (typeof v != "string") {
			if (v instanceof nexacro.Dataset || (typeof v == "object" && v._type_name == "Dataset")) {
				
				//Object 담기
				this._checkdataset = v;
				
				//String 담기
				this.checkdataset = v.id;
			}
		}
		//값이 String 형일 경우
		else if (this.checkdataset != v) {
			//해당 Dataset 찾기
			var _v = this._findDataset(v);
			
			//Object 담기
			this._checkdataset = _v ? _v : "";
			
			//String 담기
			this.checkdataset = v;
		}
		
		//checkdataset 변경에 따른 후처리 함수 호출
		this.on_apply_checkdataset(v);
	};
	
	//checkdataset 변경에 따른 후처리 함수
	_pcheckcombo.on_apply_checkdataset = function (v)
	{
		//combolist 존재할 경우
		if(this.form.combolist)
		{
			//combogrid에 데이터셋 bind
			this.form.combolist.form.combogrid.set_binddataset(this._checkdataset);
		}
	};
	
	_pcheckcombo.codecolumn = "";
	_pcheckcombo.set_codecolumn = function (v)
	{
		//codecolum 값이 변경되었을 경우
		if (this.codecolumn != v) {
			
			//codecolumn 값 변경
			this.codecolumn = v;
			
			//codecolumn 변경에 따른 후처리 함수 호출
			this.on_apply_codecolumn(v);
		}
		
	};
	
	//codecolumn 변경에 따른 후처리 함수
	_pcheckcombo.on_apply_codecolumn = function (v)
	{
		
	};
	
	_pcheckcombo.valuecolumn = "";
	_pcheckcombo.set_valuecolumn = function (v)
	{
		//valuecolumn 값이 변경되었을 경우
		if (this.valuecolumn != v) {
			
			//valuecolumn 값 변경
			this.valuecolumn = v;
			
			//valuecolumn 변경에 따른 후처리 함수 호출
			this.on_apply_valuecolumn(v);
		}
		
	};
	
	//valuecolumn 변경에 따른 후처리 함수
	_pcheckcombo.on_apply_valuecolumn = function (v)
	{
		//combolist 존재할 경우
		if(this.form.combolist)
		{
			//combogrid에 value cell에 valuecolumn bind
			if(!v)this.form.combolist.form.combogrid.setCellProperty("body", 1, "text", null);
			else this.form.combolist.form.combogrid.setCellProperty("body", 1, "text", "bind:"+v);
		}
	};
	
	_pcheckcombo.checkcolumn = "";
	_pcheckcombo.set_checkcolumn = function (v)
	{
		//checkcolumn 값이 변경되었을 경우
		if (this.checkcolumn != v) {
			
			//checkcolumn 값 변경
			this.checkcolumn = v;
			
			//checkcolumn 변경에 따른 후처리 함수 호출
			this.on_apply_checkcolumn(v);
		}
	};
	
	//checkcolumn 변경에 따른 후처리 함수
	_pcheckcombo.on_apply_checkcolumn = function (v)
	{
		//combolist 존재할 경우
		if(this.form.combolist)
		{
			//combogrid에 check cell에 checkcolumn bind
			if(!v)this.form.combolist.form.combogrid.setCellProperty("body", 0, "text", null);
			else this.form.combolist.form.combogrid.setCellProperty("body", 0, "text", "bind:"+v);
		}
	};
	
	_pcheckcombo.buttonsize = "";
	_pcheckcombo.set_buttonsize = function (v)
	{
		//buttonsize 값이 변경되었을 경우
		if (this.buttonsize != v) {
			
			//buttonsize 값 변경
			this.buttonsize = v;
			
			//buttonsize 변경에 따른 후처리 함수 호출
			this.on_apply_buttonsize(v);
		}
	};
	
	//buttonsize 변경에 따른 후처리 함수
	_pcheckcombo.on_apply_buttonsize = function (v)
	{
		//dropbutton 존재할 경우
		if(this.form.dropbutton)
		{
			//dropbutton의 width 값 변경
			if(v){
				this.form.dropbutton.setOffsetWidth(v);
			}else
			{
				this.form.dropbutton.setOffsetWidth(20);
			}
			
			this.form.resetScroll();
		}
	};
	
	_pcheckcombo.itemheight = "";
	_pcheckcombo.set_itemheight = function (v)
	{
		//itemheight 값이 잘못된 값이면 리턴
		if (v !== undefined) {
			if (isNaN(v = +v)) {
				return;
			}
		}
		
		//itemheight 값이 변경되었을 경우
		if (this.itemheight != v) {
			
			//itemheight 값 변경
			this.itemheight = v;
			
			//itemheight 변경에 따른 후처리 함수 호출
			this.on_apply_itemheight(v);
		}
	};
	
	//itemheight 변경에 따른 후처리 함수
	_pcheckcombo.on_apply_itemheight = function (v)
	{
		//combolist 존재할 경우
		if(this.form.combolist)
		{
			//combogrid 가져오기
			var grid = this.form.combolist.form.combogrid;
			
			//combogrid Row size 변경
			if(!v)
			{
				grid.setFormatRowProperty(0, "size", 24);
			}else
			{
				grid.setFormatRowProperty(0, "size", v);
			}
		}
	};
	
	_pcheckcombo.displayrowcount = "";
	_pcheckcombo.set_displayrowcount = function (v)
	{
		//displayrowcount 값이 잘못된 값이면 리턴
		if (v !== undefined) {
			if (isNaN(v = +v) || v < 0) {
				return;
			}
		}
		
		//itemheight 값이 변경되었을 경우
		if (this.displayrowcount != v) {
			
			//itemheight 값 변경
			this.displayrowcount = v;
		}
	};
	
	//ComboEdit 가져오는 Method
	_pcheckcombo.getComboEditor = function ()
	{
		// TODO : enter your code here.
		var rtn;
		
		if (this.form.comboedit) {
			rtn = this.form.comboedit;
		}
		return rtn;
	};
	
	//dropbutton 가져오는 Method
	_pcheckcombo.getComboDropButton = function ()
	{
		// TODO : enter your code here.
		var rtn;
		
		if (this.form.dropbutton) {
			rtn = this.form.dropbutton;
		}
		return rtn;
	};
	
	//combolist 가져오는 Method
	_pcheckcombo.getComboList = function ()
	{
		// TODO : enter your code here.
		var rtn;
		
		if (this.form.combolist) {
			rtn = this.form.combolist;
		}
		return rtn;
	};
	
	//combogrid 가져오는 Method
	_pcheckcombo.getComgoListGrid = function ()
	{
		// TODO : enter your code here.
		var rtn;
		
		if (this.form.combolist) {
			rtn = this.form.combolist.form.combogrid;
		}
		return rtn;
	};
	
	_pcheckcombo.on_fire_canchange = function (pretext, prevalue, posttext, postvalue)
	{
		//cancahge 이벤트가 존재하고 canchange 이벤트 핸들러에 등록된 이벤트가 있을 경우
		if (this.canchange && this.canchange._has_handlers)
		{
			//이벤트 오브젝트 생성
			var evt = new nexacro.ChangeEventInfo(this, "canchange", pretext, prevalue, posttext, postvalue);
			
			//핸들러에 등록된 이벤트 실행
			return this.canchange.fireEvent(this, evt);
		}
		return true;
	};
	
	_pcheckcombo.on_fire_onchanged = function (pretext, prevalue, posttext, postvalue)
	{
		//cancahge 이벤트가 존재하고 canchange 이벤트 핸들러에 등록된 이벤트가 있을 경우
		if (this.onchanged && this.onchanged._has_handlers)
		{
			//이벤트 오브젝트 생성
			var evt = new nexacro.ChangeEventInfo(this, "onchanged", pretext, prevalue, posttext, postvalue);
			
			//핸들러에 등록된 이벤트 실행
			return this.onchanged.fireEvent(this, evt);
		}
		return false;
		
	};	
	
	/************************************************************************
	FUNCTION : _get_form_module
	DESCRIPTION :
	RETURN :
	************************************************************************/
	_pcheckcombo._get_form_module = function ()
	{
		return function()
		{
			if (!this._is_form)
			return;
			
			var obj = null;
			
			this.on_create = function()
			{
				this.set_name("checkcombo");
				this.set_titletext("checkcombo");
				if (nexacro.Form == this.constructor)
				{
					this._setFormPosition(150,20);
				}
				
				// Object(Dataset, ExcelExportObject) Initialize
				
				
				// UI Components Initialize
				obj = new nexacro.Button("dropbutton",null,"0","20",null,"0","0",null,null,null,null,this);
				obj.set_taborder("1");
				this.addChild(obj.name, obj);
				
				obj = new nexacro.Edit("comboedit","0","0",null,null,"dropbutton:0","0",null,null,null,null,this);
				obj.set_taborder("0");
				this.addChild(obj.name, obj);
				
				obj = new nexacro.PopupDiv("combolist","0","20","150","200",null,null,null,null,null,null,this);
				obj.set_visible("false");
				this.addChild(obj.name, obj);
				
				obj = new nexacro.Grid("combogrid","0","0",null,null,"0","0",null,null,null,null,this.combolist.form);
				obj.set_taborder("0");
				obj.set_autofittype("col");
				obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"24\" band=\"left\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\"/></Band></Format></Formats>");
				this.combolist.addChild(obj.name, obj);
				
				// Layout Functions
				//-- Default Layout : this
				obj = new nexacro.Layout("default","",150,20,this,function(p){});
				this.addLayout(obj.name, obj);
				
				// BindItem Information
				
			};
			
			this.loadPreloadList = function()
			{
				
			};
			
			// User Script
			this.registerScript("checkcombo.xcdl", function() {
					
					this._onload = function(obj,e)
					{
						
					};
					
					this.comboedit_onchanged = function(obj,e)
					{
						//ComboEdit의 값이 변경될 경우
						//checkcombo의 value 값 변경 함수 호출
						this.parent.set_value(e.postvalue);
					};
					
					this.dropbutton_onclick = function(obj,e)
					{
						var nLeft;
						var nTop;
						var nWidth;
						var nHeight;
						var displayrowcount = this.parent.displayrowcount;
						var itemheight = this.parent.itemheight;
						var ds = this.parent._checkdataset;
						
						if(!ds)return;
						
						var nCount = ds.rowcount;
						
						//itemheight 값이 없을 경우 24px로 초기화
						if(!itemheight)itemheight = 24;
						
						//displayrowcount 값이 없을 경우 5로 초기화
						if(!displayrowcount)displayrowcount = 5;
						
						//displayrowcount 값 보다 bind된 Dataset의 rowcount가 적을 경우
						// Dataset의 rowcount로 설정
						if(displayrowcount>nCount)displayrowcount = nCount;
						
						nLeft = 0;
						nTop = this.getOffsetHeight();
						nWidth = this.getOffsetWidth();
						
						//combolist의 높이 구하기
						nHeight = displayrowcount*itemheight+3;
						
						//combolist popup 호출
						this.combolist.trackPopupByComponent(this, nLeft, nTop, nWidth, nHeight);
					};
					
					this.combolist_combogrid_oncellclick = function(obj,e)
					{
						var i;
						var ds = this.parent._checkdataset;
						var nCount = ds.rowcount;
						var codecolumn = this.parent.codecolumn;
						var valuecolumn = this.parent.valuecolumn;
						var checkcolumn = this.parent.checkcolumn;
						
						var bCheck;
						var arrCode = [];
						
						//check된 정보 구하기
						for(i=0;i<nCount;i++)
						{
							bCheck = ds.getColumn(i, checkcolumn);
							
							if(bCheck==1)
							{
								arrCode[arrCode.length] = ds.getColumn(i, codecolumn);
							}
						}
						
						//checkcombo의 value 값 변경 함수 호출
						this.parent.set_value(arrCode.toString());
					};
					
				});
			
			// Regist UI Components Event
			this.on_initEvent = function()
			{
				this.addEventHandler("onload",this._onload,this);
				this.dropbutton.addEventHandler("onclick",this.dropbutton_onclick,this);
				this.comboedit.addEventHandler("onchanged",this.comboedit_onchanged,this);
				this.combolist.form.combogrid.addEventHandler("oncellclick",this.combolist_combogrid_oncellclick,this);
			};
			
			this.loadIncludeScript("checkcombo.xcdl");
			this.loadPreloadList();
			
			// Remove Reference
			obj = null;
		};
	};	
	
	delete _pcheckcombo;
}
