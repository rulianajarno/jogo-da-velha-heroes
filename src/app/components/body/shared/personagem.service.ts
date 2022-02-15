import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonagemService implements OnInit {
  publicKey = 'ed5accb8c7697714ac1dbf1c7584c3c0';
  private numeroJogador: number;
  private jogadorA: number;
  private jogadorB: number;
  private showProcurarA: boolean;
  private showEscolhaA: boolean;
  private showJogadorA: boolean;
  private showProcurarB: boolean;
  private showEscolhaB: boolean;
  private showJogadorB: boolean;
  private showErro: boolean;

  initialize(): void {
    this.jogadorA = Math.floor(Math.random() * 2) + 1;
    this.showProcurarA = true;
    this.showProcurarB = true;
    this.showErro = false;
    this.showEscolhaA = false;
    this.showEscolhaB = false;
    this.showJogadorA = false;
    this.showJogadorB = false;
    this.jogadorB = this.jogadorA === 1 ? 2 : 1;
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  listarPersonagens(nome: string): Observable<any> {
    return this.http.get<any[]>(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${nome}&orderBy=name&limit=100&apikey=${this.publicKey}`
    );
  }

  pegaPersonagem(id: number): Observable<any> {
    return this.http.get<any[]>(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${this.publicKey}`
    );
  }

  escolherNovamenteA(): void {
    this.showEscolhaA = false;
    this.showProcurarA = true;
  }

  escolherNovamenteB(): void {
    this.showEscolhaB = false;
    this.showProcurarB = true;
  }

  jogadorAcomeca(): void {
    this.showJogadorA = true;
    this.showEscolhaA = false;
  }

  jogadorBcomeca(): void {
    this.showJogadorB = true;
    this.showEscolhaB = false;
  }

  get ShowProcurarA(): boolean {
    return this.showProcurarA;
  }

  get ShowProcurarB(): boolean {
    return this.showProcurarB;
  }

  get ShowEscolhaA(): boolean {
    return this.showEscolhaA;
  }

  get ShowJogadorA(): boolean {
    return this.showJogadorA;
  }

  get ShowEscolhaB(): boolean {
    return this.showEscolhaB;
  }

  get ShowJogadorB(): boolean {
    return this.showJogadorB;
  }

  get numJogadorA(): number {
    return this.jogadorA;
  }

  get numJogadorB(): number {
    return this.jogadorB;
  }

  jogadorAEscolhe(): void {
    this.showEscolhaA = true;
    this.showProcurarA = false;
  }

  jogadorBEscolhe(): void {
    this.showEscolhaB = true;
    this.showProcurarB = false;
  }

  get ShowErro(): boolean {
    return this.showErro;
  }

  abreErro(): void {
    this.showErro = true;
  }

  closeNotFound(): void {
    this.showErro = false;
  }
}
