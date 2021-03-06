//二级联动
var text_question = [{
	value: '110000',
	text: '患者端',
	children: [{
		_id:"110101",
		value: "请介绍一下柒拾佳护app软件。",
		text: "柒拾佳护APP软件是吉林省柒拾佳护健康管理有限公司研发的移动医疗信息服务平台。您通过手机下载柒拾佳护app软件，即可得到医护人员登门提供的打针、康复、母婴护理等30余项医疗护理服务及享受家庭医生预约签约、健康档案管理、健康知识智能推介、检验结果线上查询等信息服务。"
	}, {
		_id:"110102",
		value: "请问软件如何下载。",
		text: "您使用的是安卓手机还是苹果手机？您如果是安卓手机，可以在应用宝中下载，或者登陆我们的网站www.70jiahu.com下载。您如果是苹果手机，可以在苹果软件市场中下载，或者登陆我们的网站www.70jiahu.com下载。如果您有我们的宣传单，也可以扫宣传单上的二维码进行下载。"
	}, {
		_id:"110103",
		value: "如何登陆/注册？",
		text: "打开柒拾佳护，点击底部“我的”，再点“注册人信息”或“被服务人信息”，便会出现登录注册界面；"
	}, {
		_id:"110104",
		value: "身份证照片可以不上传吗？",
		text: "为了核实用户的真实身份，建议您上传身份证。"
	}, {
		_id:"110105",
		value: "身份审核一般多长时间？",
		text: "1-2个工作日，节假日除外。"
	}, {
		_id:"110106",
		value: "一个手机号可以同时注册医护端和患者端吗？",
		text: "可以，一个手机号可以同时注册医护端和患者端。"
	}, {
		_id:"110107",
		value: "如何预约服务？",
		text: "打开柒拾佳护，在首页选择您所需要的服务项目，会自然进入到服务项目选择界面，选择您需要的项目进行预约即可。"
	}, {
		_id:"110108",
		value: "知情同意书每次都签吗",
		text: "是的，目的是为了保护医患双方的自身利益，减少不必要的纠纷和损伤。"
	}, {
		_id:"110109",
		value: "使用软件下单，必须出示医嘱《影像资料》吗",
		text: "根据您所选的服务不同，需要您提供医嘱或者《影像资料》，以便医护人员了解您的病情，并评估您是否适合接受上门服务。"
	}, {
		_id:"110110",
		value: "为什么我无法为家里的老人/小孩下单",
		text: "为确保您及家人就医安全，柒拾佳护预设上门服务对象需满7-70岁，除新生儿护理项目及小儿推拿项目以外，7岁及以下儿童及70岁以上老人无法下单，建议到医院就诊。"
	}, {
		_id:"110111",
		value: "下单时，提示我上传处方，为什么还有处方时效性的说法。",
		text: "为了您便捷就医，避免造成不必要的纠纷或者耽搁您的病情。在您预约《打针》《输液》《雾化》《留置针》这四项服务时，必须上传处方。一般处方的时效性是3天，超过3天的处方，平台是限制下单的。"
	}, {
		_id:"110112",
		value: "为什么需要自备药品？",
		text: "本平台作为居间平台，仅提供医疗信息发布服务，而接单的医护人员仅提供医疗操作服务。医护人员接单后，会根据您的处方，为您确定需购买的药品备品明细后，需要您自行准备，准备齐全后，即可通知医护上门服务了。"
	}, {
		_id:"110113",
		value: "为什么我选择的药品，提示无法下单",
		text: "本平台设计了《禁忌药品》制度，对容易引起人体过敏反应的药物进行禁止服务。"
	}, {
		_id:"110114",
		value: "提供上门服务的护士都是哪来的？",
		text: "柒拾佳护与正规高水平医院展开合作，由其派遣本院在职护士为您提供上门服务。所以说，能够利用本平台提供服务的，都是正规高水平医院的护士。"
	}, {
		_id:"110115",
		value: "我想知道为我服务的护士到底来自哪个医院。",
		text: "根据柒拾佳护派单原则，优先以您下载app，或者最近就诊的医院护士接单优先。如果他们没接单，就由所有合作医院接单。"
	}, {
		_id:"110116",
		value: "接单后的服务流程",
		text: "接单后，10分钟之内，护士会主动联系用户是否有药物、处方、医院开的诊断证明和病情后，根据用户需求提供服务。"
	}, {
		_id:"110117",
		value: "我必须把钱充到平台吗",
		text: "建议您充到平台。我们与微信、支付宝展开合作，也可由第三方平台直接支付。"
	}, {
		_id:"110118",
		value: "为什么服务价格高低不同？",
		text: "根据操作所需工时和操作复杂度，各项服务价格略有不同。"
	}, {
		_id:"110119",
		value: "服务收费为什么比医院高。",
		text: "由于上门服务是医院指派性质的，护士利用个人碎片化时间为您服务，所以医院要收取等额的处置费、医护要收取相应的工时费及交通费用，同时为了本次服务的安全，我们还为本次服务购买了保险。各种费用加在一起，所以服务费较高。"
	},{
		_id:"110120",
		value: "可以线下付款吗？为什么？",
		text: "不可以的，为了避免产生医疗纠纷及后续服务无法跟踪，造成您身体上的损失，我们不提倡线下付款，且一经发现，会严厉处罚医护人员。"
	},
	{
		_id:"110121",
		value: "无人接单问题。",
		text: "1.你所选的时间段，处于医护人员工作时段，您可以换个时段继续发单。2.您所处的位置附近没有医护人员，我们会尽快联系。"
	},
	{
		_id:"110122",
		value: "接受服务后出现不适。",
		text: "联系操作护士，查看护理记录。"
	},
	{
		_id:"110123",
		value: "退款几天到账?",
		text: "3-5个工作日内到账。"
	},{
		_id:"110124",
		value: "为什么会扣款，什么原因造成的？",
		text: "1.发单后，护士点击已出发，您取消或者更改订单。2.护士已经到达，您取消或者更改订单。3.护士到达后，发现药品备品与服务项目不符合。"
	},{
		_id:"110125",
		value: "什么是家庭医生，在你们平台我能得到什么服务。",
		text: "1.与社区合作，帮助社区做好家庭医生服务。2.您可以根据户口所在地，查看服务团队，并预约签约。3.签约完成后，根据服务包内容，医生会提醒您按时接受家庭医生服务。4.还有一些血糖监测等服务内容，方便医生对您的个人健康进行管理。"
	},{
		_id:"110126",
		value: "签约家庭医生收费吗",
		text: "1.目前国家政策是不收费的。"
	},{
		_id:"110127",
		value: "预约了，但不付款，不发单。",
		text: "提起预约，30分钟，还没付款。咨询下单后没法的原因，帮助解答。"
	},{
		_id:"110128",
		value: "挂号问题",
		text: ""
	},{
		_id:"110129",
		value: "你怎么知道我个人信息的",
		text: "你所就诊过的医院是我们的合作单位，您的主治医生推荐您使用我们的软件，是他发给我们的。您的信息只应用这一次，替您保密。"
	},{
		_id:"110130",
		value: "订单付款时突然取消",
		text: "查看是否安装了支付软件，如支付宝、微信等。"
	}]
}]