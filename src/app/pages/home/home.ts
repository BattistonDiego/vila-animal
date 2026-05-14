import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  enviado = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      pet: ['', Validators.required],
      especie: ['', Validators.required],
      raca: [''],
      servico: ['', Validators.required],
    });
  }

  enviarWhatsApp() {
    if (this.form.invalid) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const { nome, telefone, pet, especie, raca, servico } = this.form.value;

    const msg = `Olá! Gostaria de agendar um atendimento na Vila Animal. 🐾

*Nome:* ${nome}
*Telefone:* ${telefone}
*Nome do pet:* ${pet}
*Espécie:* ${especie}
*Raça:* ${raca || 'Não informado'}
*Serviço desejado:* ${servico}

Aguardo confirmação. Obrigado!`;

    this.enviado = true;
    setTimeout(() => {
      window.open(`https://wa.me/5511982895828?text=${encodeURIComponent(msg)}`, '_blank');
    }, 800);
  }
}
