function fetchIssues(){

    var issues = JSON.parse(localStorage.getItem('issues'));
    var issuesListe = document.getElementById('issuesList');
    

    issuesListe.innerHTML = '';

    for(var i=0;i<issues.lenth;i++){
        var id = issues[i].id;
        var desc = issues[i].description;
        var serverity = issues[i].serverity;
        var assignedTo = issues[i].assignedTo;
        var status = issues[i].status;

        issuesListe.innerHTML += '<div class = "well">'+
                                 '<h6>Issue ID: '+id+'</h6>'+
                                 '<p><span class ="labal labal-info">'+ status +'</span></p>'+
                                 '<h3>' + desc + '</h3>'+
                                 '<p><span class="glyphicon glyphicon-time"></span>'+ serverity+'</p>'+
                                 '<p><span class="glyphicon glyphicon-time"></span>'
    }

}

