import { Component, OnInit } from '@angular/core';
import { PersonagemService } from '../../components/body/shared/personagem.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  constructor(private personagensSvc: PersonagemService) {}

  ngOnInit(): void {}
  closeNotFound(): void {
    this.personagensSvc.closeNotFound();
  }
}
