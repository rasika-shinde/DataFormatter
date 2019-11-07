sap.ui.define([],
function(){
	return{
		dateformat: function(date){
			var formattedDate = date.substring(0,2)+"-"+date.substring(2,4)+"-"+date.substring(4);
			return formattedDate;
		},
		fullName : function(status){
			if(status === 'P'){
				return "Paid";
			}
			else if(status === 'N'){
				return "Not Paid";
			}
			else{
				return "In Process";
			}
		}
	};
});