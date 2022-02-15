import { Component, OnInit } from '@angular/core';
import { PersonagemService } from '../../components/body/shared/personagem.service';

@Component({
  selector: 'app-player-two',
  templateUrl: './player-two.component.html',
  styleUrls: ['./player-two.component.scss'],
})
export class PlayerTwoComponent implements OnInit {
  pathFotoB: string;
  nomePesquisar: string;
  personagens: Array<any>;
  personagemJogadorB: Array<any>;
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

  escolhePersonagemB(id: number): void {
    this.personagensSvc
      .pegaPersonagem(id)
      .subscribe((dados) => (this.personagemJogadorB = dados.data.results));

    this.personagensSvc.jogadorBEscolhe();
  }

  iniciarJogoB(): void {
    this.personagensSvc.jogadorBcomeca();
  }

  escolherNovamenteB(): void {
    this.personagensSvc.escolherNovamenteB();
  }

  get showProcurarB(): boolean {
    return this.personagensSvc.ShowProcurarB;
  }

  get showEscolhaB(): boolean {
    return this.personagensSvc.ShowEscolhaB;
  }

  get showErro(): boolean {
    return this.personagensSvc.ShowErro;
  }

  get showJogadorB(): boolean {
    return this.personagensSvc.ShowJogadorB;
  }

  get jogadorB(): number {
    return this.personagensSvc.numJogadorB;
  }
}
