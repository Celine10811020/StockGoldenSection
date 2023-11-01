function calculate()
{
  input = document.getElementById("input").value;

  document.getElementById("Middle").innerHTML = input;

  limitUp = input * 1.1;
  limitDown = input * 0.9;

  if(limitUp<10 && limitDown<10)
  {
    limitUp = ((Math.floor((Math.floor(limitUp*100)*100)))/100)/100;
    limitDown = ((Math.floor((Math.ceil(limitDown*100)*100)))/100)/100;
    document.getElementById("LimitUp").innerHTML = "▲ " + limitUp;
    document.getElementById("LimitDown").innerHTML = "▼ " + limitDown;
  }
  else if(limitUp>10 && limitDown<10)
  {
    limitUp = ((Math.floor(((Math.floor(limitUp/0.05)*0.05)*100)*100))/100)/100;
    limitDown = ((Math.floor((Math.ceil(limitDown*100)*100)))/100)/100;
    document.getElementById("LimitUp").innerHTML = "▲ " + limitUp;
    document.getElementById("LimitDown").innerHTML = "▼ " + limitDown;
  }
  else if(limitUp>=10 && limitDown>=10 && limitUp<=50 && limitDown<50)
  {
    limitUp = ((Math.floor(((Math.floor(limitUp/0.05)*0.05)*100)*100))/100)/100;
    limitDown = ((Math.floor(((Math.ceil(limitDown/0.05)*0.05)*100)*100))/100)/100;
    document.getElementById("LimitUp").innerHTML = "▲ " + limitUp;
    document.getElementById("LimitDown").innerHTML = "▼ " + limitDown;
  }
  else if(limitUp>=50 && limitDown>=50 && limitUp<100 && limitDown<100)
  {
    limitUp = ((Math.floor(((Math.floor(limitUp/0.1)*0.1)*100)*100))/100)/100;
    limitDown = ((Math.floor(((Math.ceil(limitDown/0.1)*0.1)*100)*100))/100)/100;
    document.getElementById("LimitUp").innerHTML = "▲ " + limitUp;
    document.getElementById("LimitDown").innerHTML = "▼ " + limitDown;
  }
  else if(limitUp>=50 && limitDown<50 )
  {
    limitUp = ((Math.floor(((Math.floor(limitUp/0.1)*0.1)*100)*100))/100)/100;
    limitDown =(Math.floor((Math.ceil(limitDown/0.05)*0.05)*100))/100;
    document.getElementById("LimitUp").innerHTML = "▲ " + limitUp;
    document.getElementById("LimitDown").innerHTML = "▼ " + limitDown;
  }
  else if(limitUp>=100 && limitDown>=100 && limitUp<1000 && limitDown<1000)
  {
    limitUp = ((Math.floor(((Math.floor(limitUp/0.5)*0.5)*100)*100))/100)/100;
    limitDown = ((Math.floor(((Math.ceil(limitDown/0.5)*0.5)*100)*100))/100)/100;
    document.getElementById("LimitUp").innerHTML = "▲ " + limitUp;
    document.getElementById("LimitDown").innerHTML = "▼ " + limitDown;
  }
  else if(limitUp>=100 && limitDown<100)
  {
    limitUp = ((Math.floor(((Math.floor(limitUp/0.5)*0.5)*100)*100))/100)/100;
    limitDown = ((Math.floor(((Math.ceil(limitDown/0.1)*0.1)*100)*100))/100)/100;
    document.getElementById("LimitUp").innerHTML = "▲ " + limitUp;
    document.getElementById("LimitDown").innerHTML = "▼ " + limitDown;
  }
  else if(limitUp>=1000 && limitDown<=1000)
  {
    limitUp = ((Math.floor(((Math.floor(limitUp/5)*5)*100)*100))/100)/100;
    limitDown = ((Math.floor(((Math.ceil(limitDown/5)*5)*100)*100))/100)/100;
    document.getElementById("LimitUp").innerHTML = "▲ " + limitUp;
    document.getElementById("LimitDown").innerHTML = "▼ " + limitDown;
  }
  else if(limitUp>=1000 && limitDown>=1000)
  {
    limitUp = ((Math.floor(((Math.floor(limitUp/5)*5)*100)*100))/100)/100;
    limitDown = ((Math.floor(((Math.ceil(limitDown/5)*5)*100)*100))/100)/100;
    document.getElementById("LimitUp").innerHTML = "▲ " + limitUp;
    document.getElementById("LimitDown").innerHTML = "▼ " + limitDown;
  }

  goldenSection();
}

function goldenSection()
{
  var temp = limitUp - limitDown;

  upTwo = temp*0.809 + limitDown;
  upOne = temp*0.618 + limitDown;
  downOne = temp*0.382 + limitDown;
  downTwo = temp*0.191 + limitDown;

  if(upTwo<10 && downTwo<10)
  {
    upTwo = ((Math.floor((Math.floor(upTwo*100)*100)))/100)/100;
    downTwo = ((Math.floor((Math.ceil(downTwo*100)*100)))/100)/100;
    document.getElementById("UpTwo").innerHTML = upTwo;
    document.getElementById("DownTwo").innerHTML = downTwo;
  }
  else if(upTwo>10 && downTwo<10)
  {
    upTwo = ((Math.floor(((Math.floor(upTwo/0.05)*0.05)*100)*100))/100)/100;
    downTwo = ((Math.floor((Math.ceil(downTwo*100)*100)))/100)/100;
    document.getElementById("UpTwo").innerHTML = upTwo;
    document.getElementById("DownTwo").innerHTML = downTwo;
  }
  else if(upTwo>=10 && downTwo>=10 && upTwo<=50 && downTwo<50)
  {
    upTwo = ((Math.floor(((Math.floor(upTwo/0.05)*0.05)*100)*100))/100)/100;
    downTwo = ((Math.floor(((Math.ceil(downTwo/0.05)*0.05)*100)*100))/100)/100;
    document.getElementById("UpTwo").innerHTML = upTwo;
    document.getElementById("DownTwo").innerHTML = downTwo;
  }
  else if(upTwo>=50 && downTwo>=50 && upTwo<100 && downTwo<100)
  {
    upTwo = ((Math.floor(((Math.floor(upTwo/0.1)*0.1)*100)*100))/100)/100;
    downTwo = ((Math.floor(((Math.ceil(downTwo/0.1)*0.1)*100)*100))/100)/100;
    document.getElementById("UpTwo").innerHTML = upTwo;
    document.getElementById("DownTwo").innerHTML = downTwo;
  }
  else if(upTwo>=50 && downTwo<50 )
  {
    upTwo = ((Math.floor(((Math.floor(upTwo/0.1)*0.1)*100)*100))/100)/100;
    downTwo =(Math.floor((Math.ceil(downTwo/0.05)*0.05)*100))/100;
    document.getElementById("UpTwo").innerHTML = upTwo;
    document.getElementById("DownTwo").innerHTML = downTwo;
  }
  else if(upTwo>=100 && downTwo>=100 && upTwo<1000 && downTwo<1000)
  {
    upTwo = ((Math.floor(((Math.floor(upTwo/0.5)*0.5)*100)*100))/100)/100;
    downTwo = ((Math.floor(((Math.ceil(downTwo/0.5)*0.5)*100)*100))/100)/100;
    document.getElementById("UpTwo").innerHTML = upTwo;
    document.getElementById("DownTwo").innerHTML = downTwo;
  }
  else if(upTwo>=100 && downTwo<100)
  {
    upTwo = ((Math.floor(((Math.floor(upTwo/0.5)*0.5)*100)*100))/100)/100;
    downTwo = ((Math.floor(((Math.ceil(downTwo/0.1)*0.1)*100)*100))/100)/100;
    document.getElementById("UpTwo").innerHTML = upTwo;
    document.getElementById("DownTwo").innerHTML = downTwo;
  }
  else if(upTwo>=1000 && downTwo<=1000)
  {
    upTwo = ((Math.floor(((Math.floor(upTwo/5)*5)*100)*100))/100)/100;
    downTwo = ((Math.floor(((Math.ceil(downTwo/5)*5)*100)*100))/100)/100;
    document.getElementById("UpTwo").innerHTML = upTwo;
    document.getElementById("DownTwo").innerHTML = downTwo;
  }
  else if(upTwo>=1000 && downTwo>=1000)
  {
    upTwo = ((Math.floor(((Math.floor(upTwo/5)*5)*100)*100))/100)/100;
    downTwo = ((Math.floor(((Math.ceil(downTwo/5)*5)*100)*100))/100)/100;
    document.getElementById("UpTwo").innerHTML = upTwo;
    document.getElementById("DownTwo").innerHTML = downTwo;
  }

  if(upOne<10 && downOne<10)
  {
    upOne = ((Math.floor((Math.floor(upOne*100)*100)))/100)/100;
    downOne = ((Math.floor((Math.ceil(downOne*100)*100)))/100)/100;
    document.getElementById("UpOne").innerHTML = upOne;
    document.getElementById("DownOne").innerHTML = downOne;
  }
  else if(upOne>10 && downOne<10)
  {
    upOne = ((Math.floor(((Math.floor(upOne/0.05)*0.05)*100)*100))/100)/100;
    downOne = ((Math.floor((Math.ceil(downOne*100)*100)))/100)/100;
    document.getElementById("UpOne").innerHTML = upOne;
    document.getElementById("DownOne").innerHTML = downOne;
  }
  else if(upOne>=10 && downOne>=10 && upOne<=50 && downOne<50)
  {
    upOne = ((Math.floor(((Math.floor(upOne/0.05)*0.05)*100)*100))/100)/100;
    downOne = ((Math.floor(((Math.ceil(downOne/0.05)*0.05)*100)*100))/100)/100;
    document.getElementById("UpOne").innerHTML = upOne;
    document.getElementById("DownOne").innerHTML = downOne;
  }
  else if(upOne>=50 && downOne>=50 && upOne<100 && downOne<100)
  {
    upOne = ((Math.floor(((Math.floor(upOne/0.1)*0.1)*100)*100))/100)/100;
    downOne = ((Math.floor(((Math.ceil(downOne/0.1)*0.1)*100)*100))/100)/100;
    document.getElementById("UpOne").innerHTML = upOne;
    document.getElementById("DownOne").innerHTML = downOne;
  }
  else if(upOne>=50 && downOne<50 )
  {
    upOne = ((Math.floor(((Math.floor(upOne/0.1)*0.1)*100)*100))/100)/100;
    downOne =(Math.floor((Math.ceil(downOne/0.05)*0.05)*100))/100;
    document.getElementById("UpOne").innerHTML = upOne;
    document.getElementById("DownOne").innerHTML = downOne;
  }
  else if(upOne>=100 && downOne>=100 && upOne<1000 && downOne<1000)
  {
    upOne = ((Math.floor(((Math.floor(upOne/0.5)*0.5)*100)*100))/100)/100;
    downOne = ((Math.floor(((Math.ceil(downOne/0.5)*0.5)*100)*100))/100)/100;
    document.getElementById("UpOne").innerHTML = upOne;
    document.getElementById("DownOne").innerHTML = downOne;
  }
  else if(upOne>=100 && downOne<100)
  {
    upOne = ((Math.floor(((Math.floor(upOne/0.5)*0.5)*100)*100))/100)/100;
    downOne = ((Math.floor(((Math.ceil(downOne/0.1)*0.1)*100)*100))/100)/100;
    document.getElementById("UpOne").innerHTML = upOne;
    document.getElementById("DownOne").innerHTML = downOne;
  }
  else if(upOne>=1000 && downOne<=1000)
  {
    upOne = ((Math.floor(((Math.floor(upOne/5)*5)*100)*100))/100)/100;
    downOne = ((Math.floor(((Math.ceil(downOne/5)*5)*100)*100))/100)/100;
    document.getElementById("UpOne").innerHTML = upOne;
    document.getElementById("DownOne").innerHTML = downOne;
  }
  else if(upOne>=1000 && downOne>=1000)
  {
    upOne = ((Math.floor(((Math.floor(upOne/5)*5)*100)*100))/100)/100;
    downOne = ((Math.floor(((Math.ceil(downOne/5)*5)*100)*100))/100)/100;
    document.getElementById("UpOne").innerHTML = upOne;
    document.getElementById("DownOne").innerHTML = downOne;
  }
}

function clear()
{
   document.getElementById('input').value = "";
}
