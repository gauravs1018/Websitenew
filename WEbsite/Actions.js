const SearchResult = () =>{

    var InputText = document.getElementById('myInput').value.toLowerCase() ;
    var DivContainer = document.getElementById('ResultArea') ;
    var DivRow = DivContainer.getElementsByTagName('img') ;
    for(var i = 0 ; i < DivRow.length ; i++)
    {
        var Current = DivRow[i].getAttribute('alt') ;
        if( Current.toLowerCase().indexOf(InputText) > -1 )
        {
            DivRow[i].style.display = '' ;
        }
        else
        {
            DivRow[i].style.display = 'none' ;
        }
    }
}

const DisplayCurrent = (CurrentId) =>{

var InputText = document.getElementById(CurrentId).innerText.toLowerCase() ;
    var DivContainer = document.getElementById('ResultArea') ;
    var DivRow = DivContainer.getElementsByTagName('img') ;
    for(var i = 0 ; i < DivRow.length ; i++)
    {
        var Current = DivRow[i].getAttribute('alt') ;
        if( Current.toLowerCase().indexOf(InputText) > -1 )
        {
            DivRow[i].style.display = '' ;
        }
        else
        {
            DivRow[i].style.display = 'none' ;
        }
    }

}