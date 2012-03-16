var meta=document.createElement('meta');

	var uagent = navigator.userAgent.toLowerCase();

	meta.name = "viewport";

	if (uagent.search("ipad") > - 1)

	{
		console.log("1");
		alert("1");
		meta.content = "width=320, initial-scale=2.4, maximum-scale=2.4";

	}

	else

	{

		meta.content = "width=device-width, initial-scale=1, maximum-scale=1";

	}

	document.getElementsByTagName('head').item(0).appendChild(meta);
