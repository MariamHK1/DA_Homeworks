// Write script by clicking buttons “Show alert”, “Show confirm”, “Show prompt” will show native popups

function alert_box()
{
    alert("This is an alert box!");
}

function confirm_box()
{

    var r = confirm("Press a button");

    if(r == true)
    {

        alert("That was OK");
    }
    else
    {

        alert("That was cancel");

    }
}

function prompt_box()
{

    var name = prompt("Please enter your name","Name");

    if(name!=null && name!= " ")
    {

        document.write("Hello" + " " + name 
        + " " + "Thank You!");

    }
}