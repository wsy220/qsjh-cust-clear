
	<ul class=" mui-content-padded mui-col-sm-10 mui-col-xs-10">
	{{each sub value index}} 
		<li class="notice_active_ch">
			<span class="mui-ellipsis"><a>{{value.user.tel|tihuanPhone}}</a>预约了<a>{{value.item.name}}</a>服务</span>
			<em>刚刚</em>
		</li>
		
	{{/each}}
	</ul>
	<ul class="mui-col-sm-1 mui-col-xs-1 guanbi_ul"  style="margin-top: 0.25rem; float: right;margin-right: 10px;">
		<li class="guanbi notice_active_ch" id="guanbi">
			<div class="mui-icon mui-icon-closeempty"></div>
		</li>
	</ul>
