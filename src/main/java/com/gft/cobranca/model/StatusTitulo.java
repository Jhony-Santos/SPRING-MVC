package com.gft.cobranca.model;

public enum StatusTitulo {	
	PENDENTE("Pendente"),
	RECEBIDO("Recebido"),
	CANCELADO("Cancelado"),
	REMARCAR("Remarcar");
	
	
	
	private String descricao;
	
	StatusTitulo(String descricao){
		this.descricao=descricao;
	}
	
	public String getDescricao() {
		return descricao;
	}
	
	
	
	
}
