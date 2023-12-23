function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5wbGkNVaLhj":
        Script1();
        break;
      case "6IThp2tNF4B":
        Script2();
        break;
      case "5cEc5XH0koA":
        Script3();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('myAudio');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume = 0.5;
}

function Script2()
{
  var audio = document.getElementById('myAudio');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume = 0.5;
}

function Script3()
{
  javascript:self.close();
}

