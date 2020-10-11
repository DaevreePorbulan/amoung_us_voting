var votes = {
	p1 : 0,
	p2 : 0,
	p3 : 0,
	p4 : 0,
	p5 : 0,
	p6 : 0,
	p7 : 0,
	p8 : 0,
	p9 : 0,
	p10: 0
}

$(document).ready(
	function(){

		$("#p1").click(
			function(){
				votes.p1++;
				$("#p1vote").html(votes.p1);
			}
		);
		$("#p2").click(
			function(){
				votes.p2++;
				$("#p2vote").html(votes.p2);
			}
		);
		$("#p3").click(
			function(){
				votes.p3++;
				$("#p3vote").html(votes.p3);
			}
		);
		$("#p4").click(
			function(){
				votes.p4++;
				$("#p4vote").html(votes.p4);
			}
		);
		$("#p5").click(
			function(){
				votes.p5++;
				$("#p5vote").html(votes.p5);
			}
		);
		$("#p6").click(
			function(){
				votes.p6++;
				$("#p6vote").html(votes.p6);
			}
		);
		$("#p7").click(
			function(){
				votes.p7++;
				$("#p7vote").html(votes.p7);
			}
		);
		$("#p8").click(
			function(){
				votes.p8++;
				$("#p8vote").html(votes.p8);
			}
		);
		$("#p9").click(
			function(){
				votes.p9++;
				$("#p9vote").html(votes.p9);
			}
		);
		$("#p10").click(
			function(){
				votes.p10++;
				$("#p10vote").html(votes.p10);
			}
		);

	}
);