var reloj = require("node-schedule");
var a = 0;
var b = 0;

var j = reloj.scheduleJob('*/5 * * * * *', function(){
	var git = require("simple-git")("todo-node").pull("https://github.com/danielsan2099/todo-node.git", "master", function(err, update) {
        if(update && update.summary.changes) {
			console.log("Log: " + a + " --- Obteniendo Pull y reiniciando");
           	require('child_process').exec('npm restart');
        }else{
			console.log("Log: " + a + " --- Sin Cambios");
		}
	});
	a = a + 1;
});

var j = reloj.scheduleJob('*/7 * * * * *', function(){
	console.log("Log: " + b + " --- Tareas 2");
	b = b + 1;
});
