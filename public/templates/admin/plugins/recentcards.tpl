<div class="row">
	<div class="col-lg-9">
		<div class="panel panel-default">
			<div class="panel-heading">Recent Cards</div>
			<div class="panel-body">
				<form role="form" id="recentcards">
					<div class="form-group">
						<div class="checkbox">
							<label for="enableCarousel">
								<input type="checkbox" data-key="enableCarousel" id="enableCarousel" name="enableCarousel" />
								Enable Carousel Mode
							</label>
						</div>

						<div class="checkbox">
							<label for="enableCarouselPagination">
								<input type="checkbox" data-key="enableCarouselPagination" id="enableCarouselPagination" name="enableCarouselPagination" />
								Turn on paginator for carousel
							</label>
						</div>

						<div class="form-group">
							<label for="minSlides">Minimum slides to show for carousel</label>
							<input id="minSlides" type="text" class="form-control" placeholder="1" name="minSlides" data-key="minSlides">
						</div>

						<div class="form-group">
							<label for="maxSlides">Max slides to show for carousel</label>
							<input id="maxSlides" type="text" class="form-control" placeholder="4" name="maxSlides" data-key="maxSlides">
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="col-lg-3">
		<div class="panel panel-default">
			<div class="panel-heading">Control Panel</div>
			<div class="panel-body">
				<button class="btn btn-primary" id="save">Save Settings</button>
			</div>
		</div>
	</div>
</div>

<script>
require(['settings'], function(settings) {

	settings.sync('recentcards', $('#recentcards'));

	$('#save').click( function (event) {
		settings.persist('recentcards', $('#recentcards'));
	});
});
</script>