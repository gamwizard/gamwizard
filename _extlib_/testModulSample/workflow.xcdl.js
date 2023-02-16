//==============================================================================
//	Define the Component Class of the Compostie Component.
//==============================================================================
//==============================================================================
// Object : nexacro.workflow
// Group : Component
//==============================================================================
if (!nexacro.workflow)
{
	//==============================================================================
	// nexacro.workflow
	//==============================================================================
	nexacro.workflow = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
	{
		nexacro._CompositeComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
	};

	var _pworkflow = nexacro._createPrototype(nexacro._CompositeComponent, nexacro.workflow);
	nexacro.workflow.prototype = _pworkflow;
	_pworkflow._type_name = "workflow";
		
	/* accessibility */
	_pworkflow.accessibilityrole = "form";
	
	_pworkflow.buttonname = null;
	_pworkflow.set_buttonname = function(val)
	{
		this.buttonname = val;
		this.form.Button00.set_text(this.buttonname);
	}
	
	_pworkflow.render = function()
	{
		this.form.Button00.click();
		return true;
	}
	
	_pworkflow.addLine = function()
	{
		this.form.Button00_00.click();
		return true;
	}
	
	_pworkflow.addItem = function()
	{
		this.form.Button00_00_00.click();
		return true;
	}	
	
	/************************************************************************
	FUNCTION : _get_form_module
	DESCRIPTION :
	RETURN :
	************************************************************************/
	_pworkflow._get_form_module = function ()
	{
		return function()
		{
			if (!this._is_form)
			return;
			
			var obj = null;
			
			this.on_create = function()
			{
				this.set_name("workflow");
				this.set_titletext("workflow");
				if (nexacro.Form == this.constructor)
				{
					this._setFormPosition(990,480);
				}
				
				// Object(Dataset, ExcelExportObject) Initialize
				obj = new nexacro.NormalDataset("dsItems", this);
				obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"x\" type=\"STRING\" size=\"256\"/><Column id=\"y\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">01</Col><Col id=\"type\">type01</Col><Col id=\"title\">고객내점</Col><Col id=\"x\">400</Col><Col id=\"y\">0</Col></Row><Row><Col id=\"id\">02</Col><Col id=\"type\">type01</Col><Col id=\"title\">투자성향파악</Col><Col id=\"x\">600</Col><Col id=\"y\">0</Col></Row><Row><Col id=\"id\">03</Col><Col id=\"type\">type02</Col><Col id=\"title\">기존고객유무</Col><Col id=\"x\">600</Col><Col id=\"y\">50</Col></Row><Row><Col id=\"id\">04</Col><Col id=\"type\">type02</Col><Col id=\"title\">당행신규고객</Col><Col id=\"x\">400</Col><Col id=\"y\">50</Col></Row><Row><Col id=\"id\">05</Col><Col id=\"title\">신규고객등록</Col><Col id=\"type\">type01</Col><Col id=\"y\">100</Col><Col id=\"x\">200</Col></Row><Row><Col id=\"id\">06</Col><Col id=\"title\">입출금통장개설</Col><Col id=\"type\">type01</Col><Col id=\"x\">200</Col><Col id=\"y\">150</Col></Row><Row><Col id=\"id\">07</Col><Col id=\"title\">상품상담</Col><Col id=\"type\">type01</Col><Col id=\"x\">400</Col><Col id=\"y\">150</Col></Row><Row><Col id=\"id\">08</Col><Col id=\"title\">상품가입</Col><Col id=\"type\">type01</Col><Col id=\"x\">400</Col><Col id=\"y\">200</Col></Row><Row><Col id=\"id\">09</Col><Col id=\"type\">type02</Col><Col id=\"title\">조건변경여부</Col><Col id=\"x\">600</Col><Col id=\"y\">200</Col></Row><Row><Col id=\"id\">10</Col><Col id=\"title\">전입신규</Col><Col id=\"type\">type01</Col><Col id=\"x\">800</Col><Col id=\"y\">100</Col></Row><Row><Col id=\"id\">11</Col><Col id=\"title\">(연금)펀드전환</Col><Col id=\"type\">type01</Col><Col id=\"y\">150</Col><Col id=\"x\">800</Col></Row><Row><Col id=\"id\">12</Col><Col id=\"title\">명의변경</Col><Col id=\"type\">type01</Col><Col id=\"y\">200</Col><Col id=\"x\">800</Col></Row><Row><Col id=\"id\">13</Col><Col id=\"title\">사모펀드예약</Col><Col id=\"type\">type01</Col><Col id=\"y\">250</Col><Col id=\"x\">800</Col></Row><Row><Col id=\"id\">14</Col><Col id=\"type\">type01</Col><Col id=\"title\">입금</Col><Col id=\"x\">400</Col><Col id=\"y\">350</Col></Row><Row><Col id=\"id\">15</Col><Col id=\"type\">type02</Col><Col id=\"title\">거래취소여부</Col><Col id=\"x\">400</Col><Col id=\"y\">400</Col></Row><Row><Col id=\"id\">16</Col><Col id=\"title\">기준시간전</Col><Col id=\"type\">type02</Col><Col id=\"x\">200</Col><Col id=\"y\">400</Col></Row><Row><Col id=\"id\">17</Col><Col id=\"title\">본부승인신청</Col><Col id=\"type\">type01</Col><Col id=\"x\">0</Col><Col id=\"y\">450</Col></Row><Row><Col id=\"id\">18</Col><Col id=\"title\">거래취소</Col><Col id=\"type\">type01</Col><Col id=\"y\">450</Col><Col id=\"x\">200</Col></Row><Row><Col id=\"id\">19</Col><Col id=\"title\">펀드유형</Col><Col id=\"type\">type02</Col><Col id=\"y\">500</Col><Col id=\"x\">400</Col></Row><Row><Col id=\"id\">20</Col><Col id=\"type\">type01</Col><Col id=\"title\">다계좌입금</Col><Col id=\"x\">200</Col><Col id=\"y\">550</Col></Row><Row><Col id=\"id\">21</Col><Col id=\"type\">type01</Col><Col id=\"title\">MMF 입금</Col><Col id=\"x\">200</Col><Col id=\"y\">600</Col></Row><Row><Col id=\"id\">22</Col><Col id=\"type\">type01</Col><Col id=\"title\">일반펀드 입금</Col><Col id=\"x\">200</Col><Col id=\"y\">650</Col></Row><Row><Col id=\"id\">23</Col><Col id=\"type\">type01</Col><Col id=\"title\">출금/해지</Col><Col id=\"x\">600</Col><Col id=\"y\">350</Col></Row><Row><Col id=\"id\">24</Col><Col id=\"type\">type02</Col><Col id=\"title\">거래취소여부</Col><Col id=\"x\">600</Col><Col id=\"y\">400</Col></Row><Row><Col id=\"id\">25</Col><Col id=\"type\">type02</Col><Col id=\"title\">기준시간전</Col><Col id=\"x\">800</Col><Col id=\"y\">400</Col></Row><Row><Col id=\"id\">26</Col><Col id=\"type\">type01</Col><Col id=\"title\">인출가능금액조회</Col><Col id=\"x\">600</Col><Col id=\"y\">450</Col></Row><Row><Col id=\"id\">27</Col><Col id=\"type\">type01</Col><Col id=\"title\">거래취소</Col><Col id=\"x\">800</Col><Col id=\"y\">450</Col></Row><Row><Col id=\"id\">28</Col><Col id=\"type\">type02</Col><Col id=\"title\">펀드유형</Col><Col id=\"x\">600</Col><Col id=\"y\">500</Col></Row><Row><Col id=\"id\">29</Col><Col id=\"type\">type01</Col><Col id=\"title\">출금해지(당일,별단)</Col><Col id=\"x\">800</Col><Col id=\"y\">500</Col></Row><Row><Col id=\"id\">30</Col><Col id=\"type\">type01</Col><Col id=\"title\">일반출금해지</Col><Col id=\"x\">800</Col><Col id=\"y\">550</Col></Row><Row><Col id=\"id\">31</Col><Col id=\"type\">type03</Col><Col id=\"title\">Y</Col><Col id=\"x\">310</Col><Col id=\"y\">40</Col></Row><Row><Col id=\"id\">32</Col><Col id=\"type\">type03</Col><Col id=\"title\">N</Col><Col id=\"x\">410</Col><Col id=\"y\">80</Col></Row><Row><Col id=\"id\">33</Col><Col id=\"type\">type03</Col><Col id=\"title\">신규</Col><Col id=\"x\">500</Col><Col id=\"y\">40</Col></Row><Row><Col id=\"id\">34</Col><Col id=\"type\">type03</Col><Col id=\"title\">기존</Col><Col id=\"x\">620</Col><Col id=\"y\">80</Col></Row><Row><Col id=\"id\">35</Col><Col id=\"type\">type03</Col><Col id=\"title\">Y</Col><Col id=\"x\">675</Col><Col id=\"y\">190</Col></Row><Row><Col id=\"id\">36</Col><Col id=\"type\">type03</Col><Col id=\"title\">N</Col><Col id=\"x\">610</Col><Col id=\"y\">230</Col></Row><Row><Col id=\"id\">37</Col><Col id=\"type\">type03</Col><Col id=\"title\">기준시간 이후&#10;   &#10;-업무마감전</Col><Col id=\"x\">50</Col><Col id=\"y\">380</Col></Row><Row><Col id=\"id\">38</Col><Col id=\"type\">type03</Col><Col id=\"title\">기준시간 전</Col><Col id=\"x\">250</Col><Col id=\"y\">425</Col></Row><Row><Col id=\"id\">39</Col><Col id=\"type\">type03</Col><Col id=\"title\">Y</Col><Col id=\"x\">310</Col><Col id=\"y\">390</Col></Row><Row><Col id=\"id\">40</Col><Col id=\"type\">type03</Col><Col id=\"title\">N</Col><Col id=\"x\">410</Col><Col id=\"y\">430</Col></Row><Row><Col id=\"id\">41</Col><Col id=\"type\">type03</Col><Col id=\"title\">Y</Col><Col id=\"x\">670</Col><Col id=\"y\">390</Col></Row><Row><Col id=\"id\">42</Col><Col id=\"type\">type03</Col><Col id=\"title\">N</Col><Col id=\"x\">610</Col><Col id=\"y\">425</Col></Row><Row><Col id=\"id\">43</Col><Col id=\"type\">type03</Col><Col id=\"title\">기준시간 이후:&#10; &#10;취소불가</Col><Col id=\"x\">920</Col><Col id=\"y\">400</Col></Row><Row><Col id=\"id\">44</Col><Col id=\"type\">type03</Col><Col id=\"title\">기준시간 전</Col><Col id=\"x\">850</Col><Col id=\"y\">425</Col></Row></Rows>");
				this.addChild(obj.name, obj);
				
				
				obj = new nexacro.NormalDataset("dsLines", this);
				obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"fromPosition\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"toPosition\" type=\"STRING\" size=\"256\"/><Column id=\"startCap\" type=\"STRING\" size=\"256\"/><Column id=\"endCap\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">01</Col><Col id=\"from\">01</Col><Col id=\"to\">02</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col><Col id=\"endCap\">true</Col><Col id=\"startCap\">true</Col></Row><Row><Col id=\"id\">02</Col><Col id=\"from\">02</Col><Col id=\"to\">03</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col><Col id=\"startCap\">true</Col></Row><Row><Col id=\"id\">03</Col><Col id=\"from\">03</Col><Col id=\"to\">04</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">right</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">04</Col><Col id=\"from\">03</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"to\">09</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">05</Col><Col id=\"from\">04</Col><Col id=\"to\">05</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">06</Col><Col id=\"to\">07</Col><Col id=\"from\">04</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">07</Col><Col id=\"from\">05</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"to\">06</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">08</Col><Col id=\"from\">06</Col><Col id=\"fromPosition\">right</Col><Col id=\"to\">07</Col><Col id=\"toPosition\">left</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">09</Col><Col id=\"from\">07</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"to\">08</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">10</Col><Col id=\"from\">08</Col><Col id=\"to\">09</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">11</Col><Col id=\"from\">09</Col><Col id=\"to\">10</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">12</Col><Col id=\"from\">09</Col><Col id=\"to\">11</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">13</Col><Col id=\"from\">09</Col><Col id=\"to\">12</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">14</Col><Col id=\"from\">09</Col><Col id=\"to\">13</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">15</Col><Col id=\"from\">09</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"to\">14</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">16</Col><Col id=\"to\">23</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"from\">09</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">17</Col><Col id=\"from\">14</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"to\">15</Col><Col id=\"toPosition\">top</Col></Row><Row><Col id=\"id\">18</Col><Col id=\"from\">15</Col><Col id=\"to\">16</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">right</Col></Row><Row><Col id=\"id\">19</Col><Col id=\"from\">15</Col><Col id=\"to\">19</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">20</Col><Col id=\"from\">16</Col><Col id=\"to\">17</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">21</Col><Col id=\"from\">16</Col><Col id=\"to\">18</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">22</Col><Col id=\"from\">17</Col><Col id=\"to\">18</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">23</Col><Col id=\"from\">19</Col><Col id=\"to\">20</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">right</Col></Row><Row><Col id=\"id\">24</Col><Col id=\"from\">19</Col><Col id=\"to\">21</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">right</Col></Row><Row><Col id=\"id\">25</Col><Col id=\"from\">19</Col><Col id=\"to\">22</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">right</Col></Row><Row><Col id=\"id\">26</Col><Col id=\"from\">23</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"to\">24</Col><Col id=\"toPosition\">top</Col></Row><Row><Col id=\"id\">27</Col><Col id=\"from\">24</Col><Col id=\"to\">25</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">28</Col><Col id=\"from\">24</Col><Col id=\"to\">26</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">29</Col><Col id=\"from\">25</Col><Col id=\"to\">27</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">30</Col><Col id=\"from\">26</Col><Col id=\"to\">28</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">31</Col><Col id=\"from\">28</Col><Col id=\"to\">29</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">32</Col><Col id=\"from\">28</Col><Col id=\"to\">30</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row></Rows>");
				this.addChild(obj.name, obj);
				
				// UI Components Initialize
				obj = new nexacro.Graphics("Graphics00","10","40",null,null,"10","10",null,null,null,null,this);
				obj.set_taborder("0");
				this.addChild(obj.name, obj);
				
				obj = new nexacro.Button("Button00_00","681","5","90","20",null,null,null,null,null,null,this);
				obj.set_taborder("1");
				obj.set_text("라인추가");
				this.addChild(obj.name, obj);
				
				obj = new nexacro.Button("Button00_00_00","781","5","90","20",null,null,null,null,null,null,this);
				obj.set_taborder("2");
				obj.set_text("박스추가");
				this.addChild(obj.name, obj);
				
				obj = new nexacro.Button("Button00","880","5","90","20",null,null,null,null,null,null,this);
				obj.set_taborder("3");
				obj.set_text("실행");
				this.addChild(obj.name, obj);
				// Layout Functions
				//-- Default Layout : this
				obj = new nexacro.Layout("default","",990,480,this,function(p){});
				this.addLayout(obj.name, obj);
				
				// BindItem Information
				
			};
			
			this.loadPreloadList = function()
			{
				
			};
			
			// User Script
			this.registerScript("workflow.xcdl", function() {
					/**
					*  @MenuPath    techtip > workflow
					*  techtip Graphics Component를 활용한 워크플로우(Editor 기능 추가)
					*  @FileName	workflow_editor.xfdl
					*******************************************************************************
					*  2020.02.18		daewon			최초 생성
					*******************************************************************************
					*/
					
					/**************************************************************************
					* include 영역
					**************************************************************************/
					
					/**************************************************************************
					* FORM 변수 선언 영역
					**************************************************************************/
					//Drag&Drop 정보를 관리할 오브젝트
					this.objDargChecker;
					
					/**************************************************************************
					* FORM EVENT 영역(onload)
					**************************************************************************/
					/**
					* @description 화면 onload시 처리내역
					*/
					this._onload = function(obj,e)
					{
						//Drag 이벤트 발생시 전달할 정보 오브젝트로 만들기
						this.objDargChecker = 	{
							"x" : 0, "y" : 0,
							"dragFlag" : false,
							"targetObj" : null,
							"targetReferenceObj" : null
						};
					};
					
					
					/**
					* @description 화면 onmoucemove시 처리내역
					*/
					this._onmousemove = function(obj,e)
					{
						var objDrag = this.objDargChecker;
						
						//Drag 여부값이 시작 상태일 경우
						if(objDrag.dragFlag==true)
						{
							var nX1, nX2, nY1, nY2;
							var objGraphics;
							var objPath;
							var objSelectPath;
							var arrId;
							
							//Drag가 발생한 오브젝트 가져오기
							objGraphics = objDrag.targetObj;
							objPath = objDrag.targetReferenceObj;
							objSelectPath = objGraphics.selectPath;
							
							//Drag 시작 X/Y좌표
							nX1 = objDrag.x;
							nY1 = objDrag.y;
							
							//현재 X/Y좌표
							nX2 = e.screenx;
							nY2 = e.screeny;
							
							//Path ID Array로 만들기
							//arrId[0] : Path Type(guide : 가이드, node : item Path, line : line Path)
							//arrId[1] : Path Id
							//arrId[2] : 하위 Path일 경우의 구분값
							arrId = objPath.id.split("_");
							
							//가이드 오브젝트 이동시킬 경우
							if(arrId[0]=="guide")
							{
								//가이드 오브젝트 이동 함수 호출
								this.gfnMoveGuide(objGraphics, objPath, objSelectPath, nX1, nX2, nY1, nY2);
							}
							//노드 오브젝트를 이동시킬 경우
							else if(arrId[0]=="node")
							{
								//노드 오브젝트 이동 함수 호출
								this.gfnMoveNode(objGraphics, objSelectPath, nX1, nX2, nY1, nY2);
							}
							//연결선 오브젝트를 이동시킬 경우
							else if(arrId[0]=="line")
							{
								//연결선 오브젝트 이동 함수 호출
								this.gfnMoveLine(objGraphics, objSelectPath, nX1, nX2, nY1, nY2);
							}
							//아무것도 선택되지 않았을 경우
							else
							{
								//워크플로우 위치 변경 함수 호출
								this.gfnMoveWorkFlow(objGraphics, nX1, nX2, nY1, nY2);
							}
						}
					};
					
					/**************************************************************************
					* CALLBACK 콜백 처리부분(Transaction)
					**************************************************************************/
					
					/**************************************************************************
					* CRUD 및 TRANSACTION 서비스 호출 처리
					**************************************************************************/
					
					/**************************************************************************
					* 각 COMPONENT 별 EVENT 영역
					**************************************************************************/
					
					/**
					* @description Graphics Component onlbuttondown 시 처리내역
					*/
					this.Graphics00_onlbuttondown = function(obj,e)
					{
						var objDrag = this.objDargChecker;
						var objPath = obj.hitTest(e.canvasx, e.canvasy);
						var arrId;
						var sTargetId;
						var objTargetPath;
						
						if(!objPath)return true;
						
						//Drag 여부값 설정(드래그 시작)
						objDrag.dragFlag = true;
						
						//클릭된 좌표값 설정
						objDrag.x = e.screenx;
						objDrag.y = e.screeny;
						
						//클릭된 컴포넌트 설정
						objDrag.targetObj = obj;
						objDrag.targetReferenceObj = objPath;
						
						//조직도 오브젝트들을 관리하는 그룹 오브젝트 가져오기
						objBoard = obj.getObjectByID("board");
						
						//그룹오브젝트가 존재할 경우
						if(objBoard)
						{
							//현재 x, y좌표값을 orgX, orgY에 저장
							//DragMove시 기준좌표로 사용하기 위함
							objBoard.orgX = objBoard.x;
							objBoard.orgY = objBoard.y;
						}
						
						//클릭된 오브젝트가 있을 경우
						if(objPath)
						{
							//클릭된 오브젝트 가져오기 함수 호출
							objPath = this.gfnSelectPath(obj, objPath);
							
							//가이드 오브젝트 보여주기 함수 호출
							this.gfnViewGuidePath(obj, objPath);
						}
					};
					
					this.Graphics00_onlbuttonup = function(obj,e)
					{
						//Drag 여부값 설정(드래그 종료)
						this.objDargChecker.dragFlag = false;
					};
					
					/**
					* @description 실행 버튼 onclick 시 처리내역
					*/
					this.Button00_onclick = function(obj,e)
					{
						var objConfig = {
							//노드 데이터셋
							"itemsDs" : this.dsItems,
							//연결선 데이터셋
							"linesDs" : this.dsLines,
							//노드 포멧 정보 01
							"type01" : {
								"x" : 0,
								"y" : 0,
								"width" : 140,
								"height" : 30,
								"fillstyle" : "#8547FE",
								
								title : {
									"font" : 'bold 9px/normal "Arial","Malgun Gothic","Gulim',
									"color" : "#ffffff",
									"textAlign" : "center",
									"verticalAlign" : "middle",
								}
							},
							//노드 포멧 정보 02
							"type02" : {
								"x" : 0,
								"y" : 0,
								"width" : 140,
								"height" : 30,
								"radiusx" : 70,
								"radiusy" : 15,
								"fillstyle" : "#8547FE",
								
								title : {
									"font" : 'bold 9px/normal "Arial","Malgun Gothic","Gulim',
									"color" : "#ffffff",
									"textAlign" : "center",
									"verticalAlign" : "middle",
								}
							},
							//노드 포멧 정보 03
							"type03" : {
								"x" : 0,
								"y" : 0,
								"width" : 140,
								"height" : 30,
								title : {
									"font" : 'bold 9px/normal "Arial","Malgun Gothic","Gulim',
									"color" : "#000000",
									"textAlign" : "center",
									"verticalAlign" : "middle",
								}
							},
							//연결선 정보
							"line" : {
								"fillstyle" : "#8547FE",
								"strokepen" : "1px solid #8547FE",
								"capwidth" : 10,
								"capheight" : 10
							}
						}
						
						//워크플로우 그리기 함수 호출
						this.gfnDrawWorkFlow(this.Graphics00, objConfig, true);
					};
					
					this.Button00_00_onclick = function(obj,e)
					{
						var nRow = this.dsLines.addRow();
						var sId = nRow+1;
						var sFrom = "10,10";
						var sFromPosition = "right";
						var sTo = "100,10";
						var sToPosition = "left";
						var sStartCap = "true";
						var sEndCap = "true";
						
						this.dsLines.setColumn(nRow, "id", sId);
						this.dsLines.setColumn(nRow, "from", sFrom);
						this.dsLines.setColumn(nRow, "fromPosition", sFromPosition);
						this.dsLines.setColumn(nRow, "to", sTo);
						this.dsLines.setColumn(nRow, "toPosition", sToPosition);
						this.dsLines.setColumn(nRow, "startCap", sStartCap);
						this.dsLines.setColumn(nRow, "endCap", sEndCap);
						
						this.gfnDrawWorkFlow(this.Graphics00, null, true);
					};
					
					this.Button00_00_00_onclick = function(obj,e)
					{
						var nRow = this.dsItems.addRow();
						var sId = nRow+1;
						var sType = "type01";
						var sTitle = "추가샘플";
						var sX = "10";
						var sY = "10";
						
						this.dsItems.setColumn(nRow, "id", sId);
						this.dsItems.setColumn(nRow, "type", sType);
						this.dsItems.setColumn(nRow, "title", sTitle);
						this.dsItems.setColumn(nRow, "x", sX);
						this.dsItems.setColumn(nRow, "y", sY);
						
						this.gfnDrawWorkFlow(this.Graphics00, null, true);
					};
					
					
					/**
					* @description 	      : 워크플로우 그리기 함수
					* @param objGraphics  : 워크플로우를 설정할 Graphics Component
					* @param objConfig    : 초기화 설정 값
					* @param bEditable    : 수정기능 활성화 여부
					* @return             : 없음
					*/
					this.gfnDrawWorkFlow = function(objGraphics, objConfig, bEditable)
					{
						var i, nRow;
						var dsItems;
						var dsLines;
						var objNewConfig;
						var objProperties;
						var objType;
						var objLine;
						var objTitle;
						var objPath;
						var objNode;
						var objGuide;
						var sId, sTitle, sType;
						var nWidth, nHeight;
						var sLineId;
						var arrTemp;
						var nX = 0;
						var nY = 0;
						
						if(!bEditable)bEditable = false;
						
						//Graphics 컴포넌트에 config 정보 추가
						if(objConfig)objGraphics.config = objConfig;
						
						//config 정보 가져오기
						objNewConfig = objGraphics.config;
						
						//config정보가 없으면 리턴
						if(!objNewConfig)return;
						
						//노드 데이터셋 가져오기
						dsItems = objNewConfig.itemsDs;
						
						//연결선 데이터셋 가져오기
						dsLines = objNewConfig.linesDs;
						
						objBoard = objGraphics.getObjectByID("board");
						
						if(objBoard)
						{
							nX = objBoard.x;
							nY = objBoard.y;
						}
						
						//Graphics 컴포넌트 초기화
						objGraphics.clear();
						
						//그룹 만들기
						objProperties = { "x" : nX, "y" : nY };
						
						//GraphicsGroup 생성함수 호출
						objBoard = this.gfnSetGraphicProperties("GraphicsGroup", objProperties);
						objGraphics.addChild("board", objBoard);
						
						//노드 그리기
						for(i=0;i<dsItems.rowcount;i++)
						{
							sId = dsItems.getColumn(i, "id");
							sType = dsItems.getColumn(i, "type");
							sTitle = dsItems.getColumn(i, "title");
							objType = objNewConfig[sType];
							nX = nexacro.toNumber(dsItems.getColumn(i, "x"));
							nY = nexacro.toNumber(dsItems.getColumn(i, "y"));
							
							//노드 그룹 오브젝트 만들기
							objProperties = {
								"x" : nX, "y" : nY
							};
							objNode = this.gfnSetGraphicProperties("GraphicsGroup", objProperties);
							
							
							//노드 오브젝트 만들기
							objPath = this.gfnSetGraphicProperties("GraphicsRect", objType);
							objNode.addChild("node_"+sId+"_bg", objPath);
							
							//노드 타이틀 속성 정보 가져오기
							objTitle = objType.title;
							
							//textAlign이 center일 경우 노드의 중심좌표를 x, y좌표로 설정
							if(objTitle.textAlign=="center")
							{
								objTitle.x = objType.x + (objType.width/2);
								objTitle.y = objType.y + (objType.height/2);
							}
							//textAlign이 center가 아닐 경우 노드의 left, top 를 x, y좌표로 설정
							else
							{
								objTitle.x = objType.x;
								objTitle.y = objType.y;
							}
							
							//Wordwarp을 위해 타이틀 오브젝트의 width 설정
							objTitle.width = objType.width;
							
							//텍스트 설정
							objTitle.text = sTitle;
							
							//노드 타이틀 오브젝트 만들기
							objPath = this.gfnSetGraphicProperties("GraphicsText", objTitle);
							objNode.addChild("node_"+sId+"_title", objPath);
							
							objBoard.addChild("node_"+sId, objNode);
						}
						
						//연결선 그리기
						//연결선 속성 정보 가져오기
						objLine = objNewConfig.line;
						for(i=0;i<dsLines.rowcount;i++)
						{
							//연결선 관련 추가 정보 설정
							//Line ID
							objLine.lineId = dsLines.getColumn(i, "id");
							
							//시작 노드 ID
							objLine.from = dsLines.getColumn(i, "from");
							
							//시작 노드 기준 연결선 위치
							objLine.fromPosition = dsLines.getColumn(i, "fromPosition");
							
							//종료 노드 ID
							objLine.to = dsLines.getColumn(i, "to");
							
							//종료 노드 기준 연결선 위치
							objLine.toPosition = dsLines.getColumn(i, "toPosition");
							
							//시작선 모양
							objLine.startCap = dsLines.getColumn(i, "startCap");
							
							//종료선 모양
							objLine.endCap = dsLines.getColumn(i, "endCap");
							
							//연결선 그리기 함수 호출
							objPath = this.gfnDrawGraphicPath(objGraphics, objLine);
						}
						
						//수정기능이 활성화 되었을 경우
						if(bEditable==true)
						{
							//가이드 설정 값 만들기
							objGuide = {
								"fillstyle" : "#ffffff",
								"strokepen" : "1px solid #000000",
								"x" : "0",
								"y" : "0",
								"width" : "10",
								"height" : "10",
								"visible" : false
							};
							
							//가이드 오브젝트 만들기(노드 왼쪽)
							objPath = this.gfnSetGraphicProperties("GraphicsEllipse", objGuide);
							objBoard.addChild("guide_left", objPath);
							
							//가이드 오브젝트 만들기(노드 위쪽)
							objPath = this.gfnSetGraphicProperties("GraphicsEllipse", objGuide);
							objBoard.addChild("guide_top", objPath);
							
							//가이드 오브젝트 만들기(노드 오른쪽)
							objPath = this.gfnSetGraphicProperties("GraphicsEllipse", objGuide);
							objBoard.addChild("guide_right", objPath);
							
							//가이드 오브젝트 만들기(노드 아래쪽)
							objPath = this.gfnSetGraphicProperties("GraphicsEllipse", objGuide);
							objBoard.addChild("guide_bottom", objPath);
							
							//가이드 오브젝트 만들기(연결선 시작좌표)
							objPath = this.gfnSetGraphicProperties("GraphicsEllipse", objGuide);
							objBoard.addChild("guide_start", objPath);
							
							//가이드 오브젝트 만들기(연결선 종료좌표)
							objPath = this.gfnSetGraphicProperties("GraphicsEllipse", objGuide);
							objBoard.addChild("guide_end", objPath);
						}
						
						//Graphics 컴포넌트 다시그리기
						objGraphics.redraw();
					}
					
					
					/**
					* @description 	      : 연결선 그리기 함수
					* @param objGraphics  : 워크플로우를 설정할 Graphics Component
					* @param objConfig    : 연결선 설정 값
					* @return             : 연결선 오브젝트
					*/
					this.gfnDrawGraphicPath = function(objGraphics, objLine)
					{
						var sFrom, sTo;
						var arrFrom, arrTo;
						var sFromPosition, sToPosition;
						var sStartCap, sEndCap;
						var sFillStyle;
						var sStorkepen;
						var objFromPath, objToPath, objPath;
						var objCapPath;
						var objPaths;
						var objXY;
						var nX1, nX2, nY1, nY2;
						var sLineId, sFromId, sToId;
						
						//라인 ID
						sLineId = "line_"+objLine.lineId;
						
						//시작 ID
						sFrom = objLine.from;
						
						//종료 ID
						sTo = objLine.to;
						
						//시작노드 기준 연결선 위치
						sFromPosition = objLine.fromPosition;
						
						//종료노드 기준 연결선 위치
						sToPosition = objLine.toPosition;
						
						//시작선 모양
						sStartCap = objLine.startCap;
						
						//종료선 모양
						sEndCap = objLine.endCap;
						
						//영역 색상값
						sFillStyle = objLine.fillstyle;
						
						//라인 색상값
						sStorkepen = objLine.strokepen;
						
						arrFrom = sFrom.split(",");
						if(arrFrom.length==2)
						{
							nX1 = nexacro.toNumber(arrFrom[0]);
							nY1 = nexacro.toNumber(arrFrom[1]);
						}else
						{
							//시작 노드 ID
							sFromId = "node_"+sFrom;
							
							//시작 노드 가져오기
							objFromPath = objGraphics.getObjectByID(sFromId);
							
							//노드 기준 연결선 위치 좌표값 가져오는 함수 호출(시작노드)
							objXY = this.gfnGetPositionXY(objFromPath, sFromPosition);
							nX1 = objXY.x;
							nY1 = objXY.y;
						}
						
						arrTo = sTo.split(",");
						if(arrTo.length==2)
						{
							nX2 = nexacro.toNumber(arrTo[0]);
							nY2 = nexacro.toNumber(arrTo[1]);
						}else
						{
							//종료 노드 ID
							sToId = "node_"+sTo;
							
							//종료 노드 가져오기
							objToPath = objGraphics.getObjectByID(sToId);
							
							//노드 기준 연결선 위치 좌표값 가져오는 함수 호출(종료노드)
							objXY = this.gfnGetPositionXY(objToPath, sToPosition);
							nX2 = objXY.x;
							nY2 = objXY.y;
						}
						
						
						//선 오브젝트 생성
						objPath = new nexacro.GraphicsPath();
						
						//선그룹 오브젝트 생성
						objPaths = new nexacro.GraphicsPaths();
						
						//라인 색상 설정
						objPath.set_strokepen(sStorkepen);
						
						//선 그룹에 선 오브젝트 추가
						objPaths.addChild(sLineId+"_baseline", objPath);
						
						var nDiffX;
						var nDiffY;
						
						//선 시작 위치 값을 선그룹의 사용자 변수에 설정
						objPaths.startx = nX1;
						objPaths.starty = nY1;
						
						//선 종료 위치 값을 선그룹의 사용자 변수에 설정
						objPaths.endx = nX2;
						objPaths.endy = nY2;
						
						//시작 종료 값이 대각선 위치에 있을 경우
						//꺽인 선으로 표현
						if(nX1!=nX2&&nY1!=nY2)
						{
							nDiffX = nX1 - nX2;
							nDiffY = nY1 - nY2;
							
							objPath.moveTo(nX1, nY1);
							if(sFromPosition=="left"||sFromPosition=="right")
							{
								if(sToPosition=="left"||sToPosition=="right")
								{
									objPath.lineTo(nX1 - (nDiffX/2), nY1);
									objPath.lineTo(nX1 - (nDiffX/2), nY2);
									objPath.lineTo(nX1 - nDiffX, nY2);
								}else
								{
									objPath.lineTo(nX2, nY1);
									objPath.lineTo(nX2, nY2);
								}
							}else if(sFromPosition=="top"||sFromPosition=="bottom")
							{
								if(sToPosition=="top"||sToPosition=="bottom")
								{
									objPath.lineTo(nX1, nY1 - (nDiffY/2));
									objPath.lineTo(nX2, nY1 - (nDiffY/2));
									objPath.lineTo(nX2, nY1 - nDiffY);
								}else
								{
									objPath.lineTo(nX1, nY2);
									objPath.lineTo(nX2, nY2);
								}
							}
						}
						//시작 종료값이 수직/수평일 경우 직선으로 표현
						else
						{
							objPath.moveTo(nX1, nY1);
							objPath.lineTo(nX2, nY2);
						}
						
						//시작 선 모양이 설정되어 있을 경우 화살표 만들기 함수 호출
						if(sStartCap=="true")this.gfnDrawGraphicsCap(sLineId+"_startcap", objPaths, objLine, sFromPosition, nX1, nY1);
						
						//종료 선 모양이 설정되어 있을 경우 화살표 만들기 함수 호출
						if(sEndCap=="true")this.gfnDrawGraphicsCap(sLineId+"_endcap", objPaths, objLine, sToPosition, nX2, nY2);
						
						objBoard.addChild(sLineId, objPaths);
						
						return objPath;
					}
					
					/**
					* @description 	    : 화살표 만들기 함수
					* @param sId  		: 화살표 ID
					* @param objPaths   : 연결선 그룹 오브젝트
					* @param objLine   	: 연결선 속성 오브젝트
					* @param sPosition  : 노드 기준 연결선 위치 값
					* @param nX   		: 화살표 표현할 X좌표
					* @param nY   		: 화살표 표현할 Y좌표
					* @return           : 없음
					*/
					this.gfnDrawGraphicsCap = function(sId, objPaths, objLine, sPosition, nX, nY)
					{
						//영역 색상 값
						var sFillStyle = objLine.fillstyle;
						
						//라인 색상 값
						var sStrokpen = objLine.strokepen;
						
						//화살표 width 값
						var nWidth = objLine.capwidth;
						
						//화살표 height 값
						var nHeight = objLine.capheight;
						
						//선 오브젝트 만들기
						var objCapPath = new nexacro.GraphicsPath();
						objCapPath.set_fillstyle(sFillStyle);
						objCapPath.set_strokepen(sStrokpen);
						objPaths.addChild(sId, objCapPath);
						
						//화살표를 그릴 위치로 move
						objCapPath.moveTo(nX, nY);
						
						//노드 기준 왼쪽일 경우 ▶ 모양으로 그림
						if(sPosition=="left")
						{
							nX = nX - (nWidth/2);
							nY = nY - (nHeight/2);
							
							objCapPath.lineTo(nX, nY);
							
							nY = nY + nHeight;
							
							objCapPath.lineTo(nX, nY);
						}
						//노드 기준 오른쪽일 경우 ◀ 모양으로 그림
						else if(sPosition=="right")
						{
							nX = nX + (nWidth/2);
							nY = nY - (nHeight/2);
							
							objCapPath.lineTo(nX, nY);
							
							nY = nY + nHeight;
							
							objCapPath.lineTo(nX, nY);
						}
						//노드 기준 위쪽일 경우 ▼ 모양으로 그림
						else if(sPosition=="top")
						{
							nX = nX - (nWidth/2);
							nY = nY - (nHeight/2);
							
							objCapPath.lineTo(nX, nY);
							
							nX = nX + nWidth;
							
							objCapPath.lineTo(nX, nY);
						}
						//노드 기준 아래쪽일 경우 ▲ 모양으로 그림
						else if(sPosition=="bottom")
						{
							nX = nX + (nWidth/2);
							nY = nY + (nHeight/2);
							
							objCapPath.lineTo(nX, nY);
							
							nX = nX - nWidth;
							
							objCapPath.lineTo(nX, nY);
						}
						
						//closePath를 호출하여 그려진 선 영역 색칠하기
						objCapPath.closePath();
					}
					
					/**
					* @description 	      	: 워크플로우 위치 변경함수
					* @param objGraphics  	: 워크플로우를 설정할 Graphics Component
					* @param nX1			: Drag 시작 X 좌표
					* @param nX2			: 현재 X 좌표
					* @param nY1			: Drag 시작 Y 좌표
					* @param nY2			: 현재 Y 좌표
					* @return             	: 없음
					*/
					this.gfnMoveWorkFlow = function(objGraphics, nX1, nX2, nY1, nY2)
					{
						var objBoard = objGraphics.getObjectByID("board");
						
						//이동될 위치 좌표값 계산
						var nMoveX = objBoard.orgX + (nX2 - nX1);
						var nMoveY = objBoard.orgY + (nY2 - nY1);
						
						//위치 이동
						objBoard.set_x(nMoveX);
						objBoard.set_y(nMoveY);
						
						//Graphics 컴포넌트 다시그리기
						objGraphics.redraw();
					}
					
					/**
					* @description 	    : 노드 기준 연결선 위치 좌표값 가져오는 함수
					* @param objPath  	: 노드 오브젝트
					* @param sPosition  : 연결선 위치
					* @return           : 좌표값
					*/
					this.gfnGetPositionXY = function(objPath, sPosition)
					{
						var objXY = {"x" : null, "y" : null};
						var objRect = objPath.getOffsetBoundRect();
						if(sPosition=="top")
						{
							objXY.x = objRect.left + (objRect.width/2);
							objXY.y = objRect.top;
						}
						else if(sPosition=="left")
						{
							objXY.x = objRect.left;
							objXY.y = objRect.top + (objRect.height/2);
						}
						else if(sPosition=="right")
						{
							objXY.x = objRect.left + objRect.width;
							objXY.y = objRect.top + (objRect.height/2);
						}
						else if(sPosition=="bottom")
						{
							objXY.x = objRect.left + (objRect.width/2);
							objXY.y = objRect.top + objRect.height;
						}
						
						return objXY;
					}
					
					/**
					* @description 	    : Graphics 하위 오브젝트 생성 및 속성 설정 함수
					* @param sCompId  	: 오브젝트 명
					* @param jsnProps   : 오브젝트 속성 값
					* @return           : Graphics 하위 오브젝트
					*/
					this.gfnSetGraphicProperties = function(sCompId, jsnProps)
					{
						//Graphics 하위 오브젝트 생성
						var objComp = new nexacro[sCompId];
						var objFunc;
						var sProp;
						
						//설정정보를 오브젝트의 속성으로 설정
						for(sProp in jsnProps)
						{
							//속성 설정함수 가져오기
							objFunc = objComp["set_"+sProp];
							
							if(objFunc)
							{
								//속성 설정함수 실행
								objFunc.call(objComp, jsnProps[sProp]);
							}
						}
						
						//생성된 Graphics 하위 오브젝트 리턴
						return objComp;
					}
					
					/****************************** 수정기능 관련 함수 시작 ******************************/
					
					/**
					* @description 	    	: 클릭된 오브젝트 가져오기 함수
					* @param objGraphics  	: 워크플로우를 설정할 Graphics Component
					* @param objPath  		: 클릭된 오브젝트
					* @return           	: 선택할 오브젝트
					*/
					this.gfnSelectPath = function(objGraphics, objPath)
					{
						var sTargetId;
						
						//클릭된 오브젝트 ID Array로 만들기
						//arrId[0] : Path Type(guide : 가이드, node : item Path, line : line Path)
						//arrId[1] : Path Id
						//arrId[2] : 하위 Path일 경우의 구분값
						var arrId = objPath.id.split("_");
						
						//클릭된 오브젝트가 노드, 연결선일 경우
						if(arrId[0]=="node"||arrId[0]=="line")
						{
							//하위 Path가 선택되었을 수 있으므로
							//클릭된 오브젝트의 상위Path ID를 만들기
							sTargetId = arrId[0] + "_" + arrId[1];
							
							//상위 Path 오브젝트 가져오기
							objPath = objGraphics.getObjectByID(sTargetId);
							
							//상위 Path 오브젝트를 selectPath로 설정
							objGraphics.selectPath = objPath;
						}
						//클릭된 오브젝트가 가이드일 경우
						else if(arrId[0]=="guide")
						{
							//selectPath로 설정된 오브젝트를 다시 찾아서 selectPath로 설정
							//selectPath 정보를 업데이트하기 위함
							objGraphics.selectPath = objGraphics.getObjectByID(objGraphics.selectPath.id);
						}
						
						//선택할 오브젝트 리턴
						return objPath;
					}
					
					/**
					* @description 	    	: 가이드 오브젝트 보여주기 함수
					* @param objGraphics  	: 워크플로우를 설정할 Graphics Component
					* @param objPath  		: 선택된 오브젝트
					* @return           	: 없음
					*/
					this.gfnViewGuidePath = function(objGraphics, objPath)
					{
						var objRect;
						var objPathLeft;
						var objPathTop;
						var objPathRight;
						var objPathBottom;
						var objPathStart;
						var objPathEnd;
						var nLeft, nTop, nWidth, nHeight, nRight, nBottom;
						var nX, nY;
						var arrId = objPath.id.split("_");
						
						//가이드 오브젝트 가져오기(노드용)
						objPathLeft = objGraphics.getObjectByID("guide_left");
						objPathTop = objGraphics.getObjectByID("guide_top");
						objPathRight = objGraphics.getObjectByID("guide_right");
						objPathBottom = objGraphics.getObjectByID("guide_bottom");
						
						//가이드 오브젝트 가져오기(연결선용)
						objPathStart = objGraphics.getObjectByID("guide_start");
						objPathEnd = objGraphics.getObjectByID("guide_end");
						
						//가이드 오브젝트 전체 숨기기
						objPathLeft.set_visible(false);
						objPathTop.set_visible(false);
						objPathRight.set_visible(false);
						objPathBottom.set_visible(false);
						objPathStart.set_visible(false);
						objPathEnd.set_visible(false);
						
						//선택된 오브젝트가 노드일 경우
						if(arrId[0]=="node")
						{
							//노드의 좌표정보 가져오기
							objRect = objPath.getOffsetBoundRect();
							nLeft = objRect.left;
							nTop = objRect.top;
							nWidth = objRect.width;
							nHeight = objRect.height;
							nRight = objRect.right;
							nBottom = objRect.bottom;
							
							//가이드 왼쪽 위치 설정
							nX = nLeft;
							nY = nTop + nHeight/2;
							objPathLeft.set_x(-1);
							objPathLeft.set_y(-1);
							objPathLeft.set_x(nX);
							objPathLeft.set_y(nY);
							
							//가이드 위쪽 위치 설정
							nX = nLeft + nWidth/2;
							nY = nTop;
							objPathTop.set_x(-1);
							objPathTop.set_y(-1);
							objPathTop.set_x(nX);
							objPathTop.set_y(nY);
							
							//가이드 오른쪽 위치 설정
							nX = nRight;
							nY = nTop + nHeight/2;
							objPathRight.set_x(-1);
							objPathRight.set_y(-1);
							objPathRight.set_x(nX);
							objPathRight.set_y(nY);
							
							//가이드 아래쪽 위치 설정
							nX = nLeft + nWidth/2;
							nY = nBottom;
							objPathBottom.set_x(-1);
							objPathBottom.set_y(-1);
							objPathBottom.set_x(nX);
							objPathBottom.set_y(nY);
							
							//노드용 가이드 보이기
							objPathLeft.set_visible(true);
							objPathTop.set_visible(true);
							objPathRight.set_visible(true);
							objPathBottom.set_visible(true);
							
						}
						//선택된 오브젝트가 연결선일 경우
						else if(arrId[0]=="line")
						{
							//가이드 시작좌표 위치 설정
							nX = objPath.startx;
							nY = objPath.starty;
							objPathStart.set_x(-1);
							objPathStart.set_y(-1);
							objPathStart.set_x(nX);
							objPathStart.set_y(nY);
							
							//가이드 종료좌표 위치 설정
							nX = objPath.endx;
							nY = objPath.endy;
							objPathEnd.set_x(-1);
							objPathEnd.set_y(-1);
							objPathEnd.set_x(nX);
							objPathEnd.set_y(nY);
							
							//연결선용 가이드 보이기
							objPathStart.set_visible(true);
							objPathEnd.set_visible(true);
						}
						
						//Graphics 컴포넌트 다시그리기
						objGraphics.redraw();
					}
					
					/**
					* @description 	    	: 가이드 오브젝트 이동 함수
					* @param objGraphics  	: 워크플로우를 설정할 Graphics Component
					* @param objGuidePath  	: 가이드 오브젝트
					* @param objSelectPath	: 선택된 오브젝트
					* @param nX1			: Drag 시작 X 좌표
					* @param nX2			: 현재 X 좌표
					* @param nY1			: Drag 시작 Y 좌표
					* @param nY2			: 현재 Y 좌표
					* @return           	: 없음
					*/
					this.gfnMoveGuide = function(objGraphics, objGuidePath, objSelectPath, nX1, nX2, nY1, nY2)
					{
						var nRow;
						var nX, nY;
						var objPath;
						
						//가이드 ID Array로 만들기
						//arrId[0] : Path Type(guide : 가이드, node : item Path, line : line Path)
						//arrId[1] : Path Id(left, top, right, bottom, start, end)
						var arrGuideId = objGuidePath.id.split("_");
						
						//선택된 오브젝트 ID
						var sTargetId = objSelectPath.id;
						
						//선택된 오브젝트 ID Arrapy 만들기
						//arrId[0] : Path Type(guide : 가이드, node : item Path, line : line Path)
						//arrId[1] : Path Id
						//arrId[2] : 하위 Path일 경우의 구분값
						var arrId = sTargetId.split("_");
						
						//Path Id 값
						var sId = arrId[1];
						
						//config 정보 가져오기
						var objConfig = objGraphics.config;
						
						//선택된 오브젝트가 노드일 경우
						if(arrId[0]=="node")
						{
							
						}
						//선택된 오브젝트가 연결선일 경우
						else if(arrId[0]=="line")
						{
							//선택된 가이드가 시작좌표일 겨우
							if(arrGuideId[1]=="start")
							{
								//이동될 위치 좌표값 계산
								nX = nexacro.round(objSelectPath.startx + (nX2 - nX1), -1);
								nY = nexacro.round(objSelectPath.starty + (nY2 - nY1), -1);
								
								//연결선 수정 함수 호출
								this.gfnEditLinePoint(objGraphics, sId, "from", nX, nY);
								
							}
							//선택된 가이드가 종료좌표일 겨우
							else if(arrGuideId[1]=="end")
							{
								//이동될 위치 좌표값 계산0
								nX = nexacro.round(objSelectPath.endx + (nX2 - nX1), -1);
								nY = nexacro.round(objSelectPath.endy + (nY2 - nY1), -1);
								
								//연결선 수정 함수 호출
								this.gfnEditLinePoint(objGraphics, sId, "to", nX, nY);
							}
							
							//워크플로우 그리기 함수 호출
							this.gfnDrawWorkFlow(objGraphics, objConfig, true);
							
							//업데이트된 연결선 오브젝트 가져오기
							objPath = objGraphics.getObjectByID(sTargetId);
							
							//가이드 오브젝트 보여주기 함수 호출
							this.gfnViewGuidePath(objGraphics, objPath);
						}
					}
					
					/**
					* @description			: 연결선 수정 함수
					* @param objGraphics	: 워크플로우를 설정할 Graphics Component
					* @param sId  			: 연결선 Path Id
					* @param sType			: 시작좌표(from)/종료좌표(to)구분
					* @param nX				: 이동될 X 좌표
					* @param nY				: 이동될 Y 좌표
					* @return           	: 없음
					*/
					this.gfnEditLinePoint = function(objGraphics, sId, sType, nX, nY)
					{
						var i, nRow;
						var nBoardX, nBoardY;
						var nLeft, nTop, nRight, nBottom;
						var nXPer, nYPer;
						var sPosition;
						var arrId;
						var arrHitPaths;
						var objPath;
						
						//config 정보 가져오기
						var objConfig = objGraphics.config;
						
						//연결선 데이터셋 가져오기
						var dsLines = objConfig.linesDs;
						
						var objBoard = objGraphics.getObjectByID("board");
						nBoardX = nexacro.toNumber(objBoard.x);
						nBoardY = nexacro.toNumber(objBoard.y);
						
						dsLines.set_enableevent(false);
						
						//선택된 연결선의 데이터 Row 가져오기
						nRow = dsLines.findRow("id", sId);
						
						//데이터 Row가 없을 경우 리턴
						if(nRow==-1)return;
						
						//이동될 좌표에 존재하는 오브젝트 리스트 가져오기
						arrHitPaths = objGraphics.hitTestAll(nX+nBoardX, nY+nBoardY);
						
						//이동될 좌표에 노드 오브젝트가 있는지 여부 확인
						for(i=0;i<arrHitPaths.length;i++)
						{
							objPath = arrHitPaths[i];
							
							arrId = objPath.id.split("_");
							if(arrId[0]=="node")break;
						}
						
						//노드오브젝트가 존재할 경우 연결선을 노드에 붙이기
						if(arrId&&arrId[0]=="node")
						{
							//노드 오브젝트 ID 만들기
							sTargetId = arrId[0] + "_" + arrId[1];
							
							//노드 오브젝트 가져오기
							objPath = objGraphics.getObjectByID(sTargetId);
							
							//노드 오브젝트의 좌표값 가져오기
							objRect =  objPath.getRect();
							nLeft = objRect.left;
							nTop = objRect.top;
							nRight = objRect.right;
							nBottom = objRect.bottom;
							
							//노드 오브젝트를 기준으로 이동될 좌표값의 위치를 백분율로 구하기
							//이동될 좌표값이 노드의 왼쪽, 위쪽, 오른쪽, 아래쪽 가이드 중
							//어느 가이드에 가장 가까운지를 구하여 position의 값을 구하기 위함
							nXPer = (nX + nBoardX - nLeft)/(nRight - nLeft)*100;
							nYPer = (nY + nBoardY - nTop)/(nBottom - nTop)*100;
							
							//노드 오브젝트의 중심에서 좌측상단일 경우
							if(nXPer<=50&&nYPer<=50)
							{
								//위쪽에 더 가까울 경우
								if(nXPer>nYPer)sPosition = "top";
								
								//왼쪽에 더 가까울 경우
								else sPosition = "left";
							}
							//노드 오브젝트의 중심에서 우측상단일 경우
							else if(nXPer>50&&nYPer<=50)
							{
								//위쪽에 더 가까울 경우
								if(nXPer>nYPer+50)sPosition = "top";
								
								//오른쪽에 더 가까울 경우
								else sPosition = "right";
							}
							//노드 오브젝트의 중심에서 우측하단일 경우
							else if(nXPer>50&&nYPer>50)
							{
								//오른쪽에 더 가까울 경우
								if(nXPer>nYPer)sPosition = "right";
								
								//아래쪽에 더 가까울 경우
								else sPosition = "bottom";
							}
							//노드 오브젝트의 중심에서 좌측하단일 경우
							else if(nXPer<=50&&nYPer>50)
							{
								//아래쪽에 더 가까울 경우
								if(nXPer>nYPer-50)sPosition = "bottom";
								
								//왼쪽에 더 가까울 경우
								else sPosition = "left";
							}
							//범위를 벗어날 경우
							else
							{
								sPosition = "left";
							}
							
							//position 값 변경
							dsLines.setColumn(nRow, sType+"Position", sPosition);
							
							//연결될 노드 Path Id 변경
							dsLines.setColumn(nRow, sType, arrId[1]);
						}else
						{
							//연결선의 시작/종료 좌표 값 변경
							dsLines.setColumn(nRow, sType, nX+","+nY);
						}
					}
					
					/**
					* @description 	    	: 노드 오브젝트 이동 함수
					* @param objGraphics  	: 워크플로우를 설정할 Graphics Component
					* @param objPath		: 선택된 노드 오브젝트
					* @param nX1			: Drag 시작 X 좌표
					* @param nX2			: 현재 X 좌표
					* @param nY1			: Drag 시작 Y 좌표
					* @param nY2			: 현재 Y 좌표
					* @return           	: 없음
					*/
					this.gfnMoveNode = function(objGraphics, objPath, nX1, nX2, nY1, nY2)
					{
						var nRow;
						var nX, nY;
						
						//노드 오브젝트 아이디 가져오기
						var sTargetId = objPath.id;
						
						//선택된 오브젝트 ID Arrapy 만들기
						//arrId[0] : Path Type(guide : 가이드, node : item Path, line : line Path)
						//arrId[1] : Path Id
						//arrId[2] : 하위 Path일 경우의 구분값
						var arrTargetId = sTargetId.split("_")
						
						//config 정보 가져오기
						var objConfig = objGraphics.config;
						
						//노드 데이터셋 가져오기
						var dsItems = objConfig.itemsDs;
						
						//노드 Path Id 가져오기
						var sId = arrTargetId[1];
						
						dsItems.set_enableevent(false);
						
						//선택된 노드 오브젝트의 데이터 Row 가져오기
						nRow = dsItems.findRow("id", sId);
						
						//데이터 Row가 없을 경우 리턴
						if(nRow==-1)return;
						
						//이동될 위치 좌표값 계산
						nX = nexacro.round(objPath.x + (nX2 - nX1), -1);
						nY = nexacro.round(objPath.y + (nY2 - nY1), -1);
						
						//노드 좌표값 변경
						dsItems.setColumn(nRow, "x", nX);
						dsItems.setColumn(nRow, "y", nY);
						
						dsItems.set_enableevent(true);
						
						//워크플로우 그리기 함수 호출
						this.gfnDrawWorkFlow(objGraphics, objConfig, true);
						
						//업데이트된 노드 오브젝트 가져오기
						objPath = objGraphics.getObjectByID(sTargetId);
						
						//가이드 오브젝트 보여주기 함수 호출
						this.gfnViewGuidePath(objGraphics, objPath);
					}
					
					/**
					* @description 	    	: 연결선 오브젝트 이동 함수
					* @param objGraphics  	: 워크플로우를 설정할 Graphics Component
					* @param objPath		: 선택된 연결선 오브젝트
					* @param nX1			: Drag 시작 X 좌표
					* @param nX2			: 현재 X 좌표
					* @param nY1			: Drag 시작 Y 좌표
					* @param nY2			: 현재 Y 좌표
					* @return           	: 없음
					*/
					this.gfnMoveLine = function(objGraphics, objPath, nX1, nX2, nY1, nY2)
					{
						var nRow;
						var nX, nY;
						
						//연결선 오브젝트 아이디 가져오기
						var sTargetId = objPath.id;
						
						//선택된 오브젝트 ID Arrapy 만들기
						//arrId[0] : Path Type(guide : 가이드, node : item Path, line : line Path)
						//arrId[1] : Path Id
						//arrId[2] : 하위 Path일 경우의 구분값
						var arrTargetId = sTargetId.split("_")
						
						//config 정보 가져오기
						var objConfig = objGraphics.config;
						
						//연결선 데이터셋 가져오기
						var dsLines = objConfig.linesDs;
						
						//연결선 Path Id 가져오기
						var sId = arrTargetId[1];
						
						dsLines.set_enableevent(false);
						
						nRow = dsLines.findRow("id", sId);
						
						//데이터 Row가 없을 경우 리턴
						if(nRow==-1)return;
						
						//이동될 위치 좌표값 계산(시작좌표)
						nX = nexacro.round(objPath.startx + (nX2 - nX1), -1);
						nY = nexacro.round(objPath.starty + (nY2 - nY1), -1);
						
						//연결선 시작 좌표값 변경
						dsLines.setColumn(nRow, "from", nX+","+nY);
						
						
						//이동될 위치 좌표값 계산(종료좌표)
						nX = nexacro.round(objPath.endx + (nX2 - nX1), -1);
						nY = nexacro.round(objPath.endy + (nY2 - nY1), -1);
						
						//연결선 종료 좌표값 변경
						dsLines.setColumn(nRow, "to", nX+","+nY);
						
						
						dsLines.set_enableevent(true);
						
						//워크플로우 그리기 함수 호출
						this.gfnDrawWorkFlow(objGraphics, objConfig, true);
						
						//업데이트된 노드 오브젝트 가져오기
						objPath = objGraphics.getObjectByID(sTargetId);
						
						//가이드 오브젝트 보여주기 함수 호출
						this.gfnViewGuidePath(objGraphics, objPath);
					}
					
					/****************************** 수정기능 관련 함수 종료 ******************************/
					
				});
			
			// Regist UI Components Event
			this.on_initEvent = function()
			{
				this.addEventHandler("onload",this._onload,this);
				this.addEventHandler("onmousemove",this._onmousemove,this);
				this.Graphics00.addEventHandler("onlbuttondown",this.Graphics00_onlbuttondown,this);
				this.Graphics00.addEventHandler("onlbuttonup",this.Graphics00_onlbuttonup,this);
				this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
				this.Button00_00_00.addEventHandler("onclick",this.Button00_00_00_onclick,this);
				this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
			};
			this.loadIncludeScript("workflow.xcdl");
			this.loadPreloadList();
			
			// Remove Reference
			obj = null;
		};
	};
	
	delete _pworkflow;
}


