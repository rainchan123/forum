<form role="form" class="quickstart-settings">
	<div class="row">
		<div class="col-sm-2 col-xs-12 settings-header">通用</div>
		<div class="col-sm-10 col-xs-12">

			<div class="checkbox">
				<label for="setting-3" class="mdl-switch mdl-js-switch mdl-js-ripple-effect">
					<input type="checkbox" class="mdl-switch__input" id="setting-3" name="enable">
					<span class="mdl-switch__label"><strong>启用插件</strong></span>
				</label>
			</div>

			<div class="form-group">
				<label for="setting-1">仓库地址</label>
				<input type="text" id="setting-1" name="loc" title="Setting 1" class="form-control" >
			</div>
			<div class="form-group">
				<label for="setting-2">GitHub用户名</label>
				<input type="text" id="setting-2" name="username" title="Setting 2" class="form-control" >
			</div>
			<div class="form-group">
				<label for="setting-3">token</label>
				<input type="password" id="setting-3" name="token" title="Setting 3" class="form-control" >
			</div>


		</div>
	</div>

	<br />

</form>

<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
	<i class="material-icons">save</i>
</button>
