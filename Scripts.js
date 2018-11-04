function ScrollInput()
{
	//Verify if is visible
	if(document.getElementById("MenuScroll").style.visibility == "visible")
	{
		//Hide Menu
		document.getElementById("MenuScroll").style.visibility = "hidden";
		document.getElementById("TW_SiteShow").style.zIndex = 5;
	}
	else
	{
		//Show Menu
		document.getElementById("MenuScroll").style.visibility = "Visible";
		document.getElementById("TW_SiteShow").style.zIndex = -1;
	}
}

function SetEmbedElement(ownElementID,otherElementID)
{
	//Get element of embed;
	var ownElement = document.getElementById(ownElementID);
	var otherElement =  ownElement.getSVGDocument().getElementById(otherElementID);
	
	
	return otherElement;
}


function SetUpperCase(myString,i = 0)
{
		if(myString.charAt(i) != myString.charAt(i).toUpperCase())
		{
			if(i <= 0)
			{
				return String.fromCharCode(myString.charCodeAt(i) & 223)+myString.substr(i+1);
			}
			else if(i > 0)
			{
				return myString.substr(0,i) + String.fromCharCode(myString.charCodeAt(i) & 223)+myString.substr(i+1);
			}
		}
}

