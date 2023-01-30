
$('#clicker').on('click', function() {
	num = Math.floor(Math.random()*220);
  
  var url = 'https://api.adviceslip.com/advice/' + num;

function httpGet(url) {
        let xmlHttpReq = new XMLHttpRequest();
        xmlHttpReq.open("GET", url, false);
        xmlHttpReq.send(null);
        return xmlHttpReq.responseText;
      }
  
	var advice = (JSON.parse(httpGet(url)));
	$('#text').html(advice.slip.advice);
})

// testing pushing

// more testing stuff

//Hello World

//Hello again

//test
