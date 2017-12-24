// Initialize the plugin with no custom options
		$(document).ready(function () 
		{
			var position = 1;
			updateArrows();

			$("#makeMeScrollable").smoothDivScroll(
			{
				easingAfterHotSpotScrollingDistance: 100,
				easingAfterHotSpotScrollingDuration: 750,
				//scrollToAnimationDuration: 500,
				hotSpotScrolling: false,
			});
						
			$("#leftArrow").click(function()
			{
				position = position-1;
				if (position<=1) 
					position = 1;
      			$("#makeMeScrollable").smoothDivScroll("scrollToElement", "number", position);
      			updateArrows();
   			});
   			
			$("#rightArrow").click(function()
			{
				position = position+1;
				if (position>=4) 
					position = 4;
      			$("#makeMeScrollable").smoothDivScroll("scrollToElement", "number", position);
      			updateArrows();
   			});
   			
   			function updateArrows()
			{
      			var la = document.getElementById('leftArrow');
				var ra = document.getElementById('rightArrow');
				 
				switch (position)
				{
					case 1:
						la.className = '';
						ra.className = 'scrollContentHotSpotRight scrollContentHotSpotRightVisible';
					break;
					case 4:
						la.className = 'scrollContentHotSpotLeft scrollContentHotSpotLeftVisible';
						ra.className = '';
					break;
					default:
						la.className = 'scrollContentHotSpotLeft scrollContentHotSpotLeftVisible';
						ra.className = 'scrollContentHotSpotRight scrollContentHotSpotRightVisible';
					break;
				}
			}
		});
