var app = angular.module('pieceApp', []);

app.controller('pieceAutoController', function() {
	this.name = this.nomModel;
	this.listeDesPieces = listepeces;

	this.mySubmitFunc = function() {
		var newElt = {
			nom : this.nomModel,
			four : this.data.singleSelect,
			qte : this.qteModel,
			prix : this.prixModel,
			tel : this.telModel
		}
		this.listeDesPieces.push(newElt);
		this.nomModel = "";
		this.fourModel = "";
		this.qteModel = "";
		this.prixModel = "";
		this.telModel = "";
	}

	this.data = {
		singleSelect : null,
		pieceSelect : null,
		pieceSelectAcheter: null
	}
	
	//submit pour pieces vendu
	this.vendreSubmitFunc = function() {
		for (i = 0; i < this.listeDesPieces.length; i++) {
			if (this.listeDesPieces[i].nom == this.data.pieceSelect) {
				this.listeDesPieces[i].qte -= this.venduModel;
			}
		}
	}
	
	//submit pour pieces achetee
	this.ajouterQteSubmitFunc= function(){
		for (i = 0; i < this.listeDesPieces.length; i++) {
			if (this.listeDesPieces[i].nom == this.data.pieceSelectAcheter) {
				this.listeDesPieces[i].qte = +this.listeDesPieces[i].qte + +this.acheterModel;
			}
		}
	}
});

var listepeces = [ {
	nom : "Frein",
	four : "Atlanta",
	qte : "11",
	prix : "250",
	tel : "06 66 33 11 22"
}, {
	nom : "Huile moteur",
	four : "Pinkie",
	qte : "25",
	prix : "130",
	tel : "06 69 11 22 44"
}, {
	nom : "Lampe All",
	four : "Malabata",
	qte : "50",
	prix : "15",
	tel : "06 61 44 11 22"
}

];