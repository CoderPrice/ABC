function OpenTwitchChannel(tw_LSName)
{
	//Show Twitch embed and show chat
	document.getElementById("TW_SiteShow").style.visibility = "visible";
	SetEmbedElement("TW_SiteShow","streamChat").style.visibility = "visible";
	
	//Load Twitch link
	SetEmbedElement("TW_SiteShow","streamLive").src = "https://player.twitch.tv/?channel="+ tw_LSName;
	SetEmbedElement("TW_SiteShow","streamChat").src = "https://www.twitch.tv/embed/" + tw_LSName + "/chat";
	
	//Hide menu bar
	document.getElementById("MenuScroll").style.visibility = "hidden";
	document.getElementById("TW_SiteShow").style.zIndex = 5;
}

function OpenTwitchVod()
{
	//Show Twitch embed and hide chat
	document.getElementById("TW_SiteShow").style.visibility = "visible";
	SetEmbedElement("TW_SiteShow","streamChat").style.visibility = "hidden";
	
	//Load Twitch link
	var vodID = document.getElementById("SearchTwitchVod");
	SetEmbedElement("TW_SiteShow","streamLive").src = "https://player.twitch.tv/?video=v"+vodID.value;
	
	
	//Hide menu bar
	document.getElementById("MenuScroll").style.visibility = "hidden";
	document.getElementById("TW_SiteShow").style.zIndex = 5;
}

function isOnline(channelName)
{
	
	//Get Channel Tabble
	$.getJSON('https://wind-bow.glitch.me/twitch-api/streams/'+channelName, function(channel)
	{
		//Verify if channel is  null
		if (channel["stream"] == null)
		{
			for(var i = 0; i < channelName.length; i++)
			{
				var channelName_UPCase = SetUpperCase(channelName,i);
				//if is null, verify with Uppercase
				$.getJSON('https://wind-bow.glitch.me/twitch-api/streams/'+channelName_UPCase, function(channel)
				{
					//veify if Uppercase is null
					if (channel["stream"] == null)
					{
						//verify the color is set 
						if(document.getElementById(channelName).style.color != "rgb(90, 88, 94)")
						{
							document.getElementById(channelName).style.color = "#5a585e";
						}
					
						//verify the name is set
						if(channelName != document.getElementById(channelName).textContent)
						{
							document.getElementById(channelName).textContent = channelName;
						}
											
					}
					//if not null, set online status
					else
					{
						//if is null, set online status
						if(document.getElementById(channelName).style.color != "rgb(0, 255, 0)")
						{
							var notification = new Notification(channelName+" "+ "is online Now!");
							document.getElementById(channelName).textContent = channelName + " - "+ channel["stream"].game;
							document.getElementById(channelName).style.wordWrap = "break-word";
							document.getElementById(channelName).style.color = "#00ff00";
							
						}	
					}
				});
				//alert(channelName_UPCase);
			}
		}
		
		//if not null, set online status
		else
		{
			//verify the color is set
			if(document.getElementById(channelName).style.color != "rgb(0, 255, 0)")
			{
				var notification = new Notification(channelName+" "+ "is online Now!");
				document.getElementById(channelName).textContent = channelName + " - "+ channel["stream"].game;
				document.getElementById(channelName).style.wordWrap = "break-word";
				document.getElementById(channelName).style.color = "#00ff00";
				//var myImage = new Image(100, 200);
				//myImage.src =  channel["stream"].preview.large;
				//document.body.appendChild(myImage);
			}
		}
	});	
}

function SetTwitchStatus()
{
	isOnline("alanzoka");
	isOnline("lowco");
}