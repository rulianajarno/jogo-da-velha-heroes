import { Component, OnInit } from '@angular/core';
import { PersonagemService } from '../body/shared/personagem.service';

@Component({
  selector: 'app-player-one',
  templateUrl: './player-one.component.html',
  styleUrls: ['./player-one.component.scss'],
})
export class PlayerOneComponent implements OnInit {
  pathFotoA: string;
  nomePesquisar: any;
  personagens: any;
  personagemJogadorA: any;
  constructor(private personagensSvc: PersonagemService) {}

  ngOnInit(): void {
    this.personagensSvc.initialize();
  }

  buscaPersonagem() {
    let nome = this.nomePesquisar;
    this.listar(nome);
  }

  listar(nome: string): void {
    this.personagensSvc
      .listarPersonagens(nome)
      .subscribe((dados) => (this.personagens = dados.data.results));

    if (this.personagens.length === 0) {
      this.personagensSvc.abreErro();
    }
  }

  escolhePersonagemA(id: number): void {
    this.personagensSvc
      .pegaPersonagem(id)
      .subscribe((dados) => (this.personagemJogadorA = dados.data.results));

    this.personagensSvc.jogadorAEscolhe();
  }

  iniciarJogoA(): void {
    this.personagensSvc.jogadorAcomeca();
  }

  escolherNovamenteA(): void {
    this.personagensSvc.escolherNovamenteA();
  }

  get showProcurarA(): boolean {
    return this.personagensSvc.ShowProcurarA;
  }

  get showEscolhaA(): boolean {
    return this.personagensSvc.ShowEscolhaA;
  }

  get showErro(): boolean {
    return this.personagensSvc.ShowErro;
  }

  get showJogadorA(): boolean {
    return this.personagensSvc.ShowJogadorA;
  }

  get jogadorA(): number {
    return this.personagensSvc.numJogadorA;
  }
}
